import { useState, useEffect, useRef } from "react";
import { categories, brands } from "@/data/products";

// نموذج المنتج

interface Product {
  id?: number;
  name: string;
  categoryId: string;
  brandId?: number | string;
  brand_name?: string;
  images?: string[];
  thumbnailIndex?: number;
}


const emptyProduct: Product = {
  name: "",
  categoryId: "",
  brandId: "",
  images: [],
  thumbnailIndex: 0,
};

export default function AdminProducts({ onLogout }: { onLogout?: () => void }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState<Product>(emptyProduct);
  const [loading, setLoading] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const formRef = useRef<HTMLFormElement>(null);


  useEffect(() => {
    // Fetch products and their images
    fetch("http://localhost:9090/api/products")
      .then((res) => res.json())
      .then(async (products) => {
        // For each product, fetch its images
        const withImages = await Promise.all(products.map(async (p: Product) => {
          const imgRes = await fetch(`http://localhost:9090/api/products/${p.id}/images`);
          const imgs = await imgRes.json();
          return { ...p, images: imgs.map((img: any) => img.image_url) };
        }));
        setProducts(withImages);
      });
  }, []);

  const handleEdit = (product: Product) => {
    setEditing(product);
    setForm({
      ...product,
      categoryId: product.categoryId || (product as any).category_id || "",
      brandId: product.brandId || product.brand_id || ""
    });
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const handleDelete = async (id?: number) => {
    if (!id) return;
    setLoading(true);
    await fetch(`http://localhost:9090/api/products/${id}`, { method: "DELETE" });
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    let productId = editing?.id;
    let newProduct = null;
    // تجهيز البيانات للإرسال
    const payload = {
      ...form,
      brandId: form.brandId ? Number(form.brandId) : null,
    };
    if (editing) {
      // تعديل منتج
      await fetch(`http://localhost:9090/api/products/${editing.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      productId = editing.id;
    } else {
      // إضافة منتج جديد
      const res = await fetch("http://localhost:9090/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const newProduct = await res.json();
      productId = newProduct.id;
    }
    // Upload images if any
    if (form.images && form.images.length > 0 && productId) {
      await fetch(`http://localhost:9090/api/products/${productId}/images`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ images: form.images }),
      });
    }
    // إعادة جلب المنتجات من السيرفر لضمان ظهور اسم الماركة
    fetch("http://localhost:9090/api/products")
      .then((res) => res.json())
      .then(async (products) => {
        const withImages = await Promise.all(products.map(async (p: Product) => {
          const imgRes = await fetch(`http://localhost:9090/api/products/${p.id}/images`);
          const imgs = await imgRes.json();
          return { ...p, images: imgs.map((img: any) => img.image_url) };
        }));
        setProducts(withImages);
      });
    setForm(emptyProduct);
    setEditing(null);
    setLoading(false);
  };


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const arr: string[] = [];
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          arr.push(ev.target.result as string);
          if (arr.length === files.length) {
            setForm((prev) => ({ ...prev, images: arr, thumbnailIndex: 0 }));
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleThumbnailSelect = (idx: number) => {
    setForm((prev) => ({ ...prev, thumbnailIndex: idx }));
  };

  // فلترة المنتجات حسب الاسم والتصنيف
  const filteredProducts = products.filter((product) => {
    const matchesName = filterName === "" || product.name.toLowerCase().includes(filterName.toLowerCase());
    const matchesCategory = filterCategory === "" || product.categoryId === filterCategory || (product as any).category_id === filterCategory;
    return matchesName && matchesCategory;
  });

  return (
    <div className="container mx-auto py-10">
      {/* فلاتر البحث */}
      {/* تم نقل البحث بالاسم إلى رأس الجدول */}
      <div className="flex justify-between mb-4">
        <div>
          <button
            onClick={async () => {
              if (window.confirm("هل أنت متأكد من حذف جميع المنتجات؟")) {
                setLoading(true);
                await fetch("http://localhost:9090/api/products/all", { method: "DELETE" });
                setProducts([]);
                setLoading(false);
              }
            }}
            className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 mr-2"
            disabled={loading}
          >
            حذف جميع المنتجات
          </button>
        </div>
        {onLogout && (
          <button
            onClick={onLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            تسجيل الخروج
          </button>
        )}
      </div>
      <h1 className="text-2xl font-bold mb-6">إدارة المنتجات</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="اسم المنتج" className="border p-2 rounded w-full" required />
        <select name="categoryId" value={form.categoryId} onChange={handleChange} className="border p-2 rounded w-full" required>
          <option value="">اختر التصنيف</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <select
          name="brandId"
          value={form.brandId}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">اختر الماركة (اختياري)</option>
          {brands.map((b, idx) => (
            <option key={b} value={idx + 1}>{b}</option>
          ))}
        </select>
        <input type="file" multiple accept="image/*" onChange={handleImageChange} className="border p-2 rounded w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
          {editing ? "تعديل المنتج" : "إضافة منتج"}
        </button>
        {editing && (
          <button type="button" className="ml-2 px-4 py-2 rounded bg-gray-300" onClick={() => { setEditing(null); setForm(emptyProduct); }}>
            إلغاء
          </button>
        )}
      </form>
      {form.images && form.images.length > 0 && (
        <div className="flex gap-2 mb-2">
          {form.images.map((img, i) => (
            <div key={i} className="relative group">
              <img
                src={img}
                alt="صورة المنتج"
                className={`w-16 h-16 object-cover rounded border-2 ${form.thumbnailIndex === i ? "border-blue-600" : "border-transparent"}`}
                style={{ cursor: "pointer" }}
                onClick={() => handleThumbnailSelect(i)}
              />
              {form.thumbnailIndex === i && (
                <span className="absolute top-0 left-0 bg-blue-600 text-white text-xs px-1 rounded-br">Thumbnail</span>
              )}
            </div>
          ))}
        </div>
      )}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">#</th>
            <th className="p-2">
              <div className="flex flex-col items-center">
                <span>اسم المنتج</span>
                <input
                  type="text"
                  placeholder="بحث..."
                  value={filterName}
                  onChange={e => setFilterName(e.target.value)}
                  className="border p-1 rounded mt-1 text-xs w-full"
                  style={{ minWidth: 120 }}
                />
              </div>
            </th>
            <th className="p-2">
              <div className="flex flex-col items-center">
                <span>التصنيف</span>
                <select
                  value={filterCategory}
                  onChange={e => setFilterCategory(e.target.value)}
                  className="border p-1 rounded mt-1 text-xs"
                  style={{ minWidth: 120 }}
                >
                  <option value="">كل التصنيفات</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </th>
            <th className="p-2">الماركة</th>
            <th className="p-2">الصور</th>
            <th className="p-2">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="p-2">{product.id}</td>
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.categoryId || product.category_id}</td>
              <td className="p-2">{product.brand_name ? product.brand_name : "بدون ماركة"}</td>
              <td className="p-2">
                {product.images && product.images.length > 0 && (
                  <div className="flex gap-1">
                    {product.images.map((img, i) => (
                      <img key={i} src={img} alt="صورة المنتج" className="w-8 h-8 object-cover rounded" />
                    ))}
                  </div>
                )}
              </td>
              <td className="p-2 space-x-2">
                <button className="bg-yellow-400 px-2 py-1 rounded" onClick={() => handleEdit(product)}> تعديل</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(product.id)} disabled={loading}>حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
