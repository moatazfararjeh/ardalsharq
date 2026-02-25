-- جلب اسم الماركة مع كل منتج
-- هذا الاستعلام يستخدم في API لجلب المنتجات مع اسم الماركة
SELECT p.*, b.name as brand_name
FROM products p
LEFT JOIN brands b ON p.brand_id = b.id;
