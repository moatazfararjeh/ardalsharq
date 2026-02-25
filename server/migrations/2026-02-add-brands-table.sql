-- إنشاء جدول الماركات brands
CREATE TABLE IF NOT EXISTS brands (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);

-- تعبئة جدول الماركات بالقيم الأساسية
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

-- تعديل جدول المنتجات ليحتوي على brand_id بدلاً من brand النصي
ALTER TABLE products ADD COLUMN IF NOT EXISTS brand_id INTEGER REFERENCES brands(id);

-- نقل البيانات القديمة من brand النصي إلى brand_id
UPDATE products SET brand_id = brands.id
FROM brands
WHERE products.brand = brands.name;

-- حذف الحقل النصي القديم إذا لم يعد هناك حاجة له
ALTER TABLE products DROP COLUMN IF EXISTS brand;
