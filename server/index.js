

import express from 'express';
import pool from './db.js';
import cors from 'cors';
import bcrypt from 'bcrypt';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Global error logging
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});


const app = express();

// CORS configuration
const allowedOrigins = [
  'http://localhost:8080',
  'http://localhost:8081',
  'https://supabase.ardalsharq.com',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: "20mb" }));

// Serve static files from dist folder in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

// حذف جميع المنتجات دفعة واحدة
app.delete('/api/products/all', async (req, res) => {
  try {
    await pool.query('DELETE FROM products');
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new product
app.post('/api/products', async (req, res) => {
  const { name, categoryId, brandId } = req.body;
  if (!name || !categoryId) {
    return res.status(400).json({ error: 'الاسم والتصنيف مطلوبان' });
  }
  try {
    const result = await pool.query(
      'INSERT INTO products (name, category_id, brand_id) VALUES ($1, $2, $3) RETURNING *',
      [name, categoryId, brandId || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// تسجيل الدخول
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'يرجى إدخال اسم المستخدم وكلمة المرور' });
  }
  try {
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (user.rows.length === 0) {
      return res.status(401).json({ error: 'اسم المستخدم أو كلمة المرور غير صحيحة' });
    }
    const valid = await bcrypt.compare(password, user.rows[0].password);
    if (!valid) {
      return res.status(401).json({ error: 'اسم المستخدم أو كلمة المرور غير صحيحة' });
    }
    // يمكن هنا إضافة JWT أو session لاحقاً
    res.json({ id: user.rows[0].id, username: user.rows[0].username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// تسجيل مستخدم جديد
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'يرجى إدخال اسم المستخدم وكلمة المرور' });
  }
  try {
    // تحقق إذا كان اسم المستخدم موجود مسبقاً
    const exists = await pool.query('SELECT id FROM users WHERE username = $1', [username]);
    if (exists.rows.length > 0) {
      return res.status(409).json({ error: 'اسم المستخدم مستخدم بالفعل' });
    }
    // تشفير كلمة المرور
    const hashed = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username, created_at',
      [username, hashed]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT p.*, b.name as brand_name
      FROM products p
      LEFT JOIN brands b ON p.brand_id = b.id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update product
app.put('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, categoryId, brandId } = req.body;
  try {
    const result = await pool.query(
      'UPDATE products SET name = $1, category_id = $2, brand_id = $3 WHERE id = $4 RETURNING *',
      [name, categoryId, brandId || null, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Product not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete product
app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Product not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add product image(s) for a product
app.post('/api/products/:id/images', async (req, res) => {
  const { id } = req.params;
  const { images } = req.body; // images: string[] (base64 or URLs)
  if (!Array.isArray(images) || images.length === 0) {
    return res.status(400).json({ error: 'No images provided' });
  }
  try {
    const values = images.map((img) => `('${id}', '${img.replace(/'/g, "''")}')`).join(',');
    const query = `INSERT INTO product_images (product_id, image_url) VALUES ${values} RETURNING *`;
    const result = await pool.query(query);
    res.status(201).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get images for a product
app.get('/api/products/:id/images', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM product_images WHERE product_id = $1', [id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve index.html for all non-API routes (SPA support)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
