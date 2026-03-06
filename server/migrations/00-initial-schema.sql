-- Complete Database Schema for Jordan Frozen Foods Hub

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create categories table (if needed)
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create brands table
CREATE TABLE IF NOT EXISTS brands (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);

-- Insert default brands
INSERT INTO brands (name) VALUES
  ('نبيل'),
  ('دجلة'),
  ('الوادي'),
  ('الوطنية'),
  ('تب توب'),
  ('أمريكانا'),
  ('الإكرام'),
  ('لورباك'),
  ('هاربر'),
  ('غير ذلك')
ON CONFLICT (name) DO NOTHING;

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category_id INTEGER REFERENCES categories(id),
  brand_id INTEGER REFERENCES brands(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create product_images table
CREATE TABLE IF NOT EXISTS product_images (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some default categories (optional)
INSERT INTO categories (name) VALUES
  ('أطعمة مجمدة'),
  ('خضروات مجمدة'),
  ('لحوم مجمدة'),
  ('دجاج مجمد'),
  ('أسماك مجمدة'),
  ('معجنات مجمدة'),
  ('وجبات جاهزة')
ON CONFLICT (name) DO NOTHING;
