import { useState, useEffect } from "react";

interface Category {
  id: number;
  name: string;
  icon?: string;
}

export default function AdminCategories({ onLogout }: { onLogout?: () => void }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [newName, setNewName] = useState("");
  const [newIcon, setNewIcon] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editIcon, setEditIcon] = useState("");

  const fetchCategories = () => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    setLoading(true);
    const res = await fetch("/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName.trim(), icon: newIcon.trim() || undefined }),
    });
    if (res.ok) {
      setNewName("");
      setNewIcon("");
      fetchCategories();
    }
    setLoading(false);
  };

  const startEdit = (cat: Category) => {
    setEditingId(cat.id);
    setEditName(cat.name);
    setEditIcon(cat.icon || "");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditName("");
    setEditIcon("");
  };

  const handleSaveEdit = async (id: number) => {
    if (!editName.trim()) return;
    setLoading(true);
    const res = await fetch(`/api/categories/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: editName.trim(), icon: editIcon.trim() || undefined }),
    });
    if (res.ok) {
      fetchCategories();
      cancelEdit();
    }
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا التصنيف؟")) return;
    setLoading(true);
    await fetch(`/api/categories/${id}`, { method: "DELETE" });
    setCategories((prev) => prev.filter((c) => c.id !== id));
    setLoading(false);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">إدارة التصنيفات</h1>
        <div className="flex gap-2">
          <a href="/admin" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            إدارة المنتجات
          </a>
          {onLogout && (
            <button
              onClick={onLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              تسجيل الخروج
            </button>
          )}
        </div>
      </div>

      {/* Add category form */}
      <form onSubmit={handleAdd} className="mb-8 flex gap-2 flex-wrap">
        <input
          type="text"
          placeholder="اسم التصنيف"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="border p-2 rounded flex-1"
          required
        />
        <input
          type="text"
          placeholder="أيقونة (اختياري، مثال: ❄️)"
          value={newIcon}
          onChange={(e) => setNewIcon(e.target.value)}
          className="border p-2 rounded w-48"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={loading}
        >
          إضافة تصنيف
        </button>
      </form>

      {/* Categories table */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">#</th>
            <th className="p-2">الاسم</th>
            <th className="p-2">الأيقونة</th>
            <th className="p-2">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id} className="border-t">
              <td className="p-2 text-center">{cat.id}</td>
              <td className="p-2">
                {editingId === cat.id ? (
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="border p-1 rounded w-full"
                  />
                ) : (
                  cat.name
                )}
              </td>
              <td className="p-2 text-center">
                {editingId === cat.id ? (
                  <input
                    type="text"
                    value={editIcon}
                    onChange={(e) => setEditIcon(e.target.value)}
                    className="border p-1 rounded w-20"
                  />
                ) : (
                  cat.icon || "-"
                )}
              </td>
              <td className="p-2 text-center space-x-2">
                {editingId === cat.id ? (
                  <>
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                      onClick={() => handleSaveEdit(cat.id)}
                      disabled={loading}
                    >
                      حفظ
                    </button>
                    <button
                      className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                      onClick={cancelEdit}
                    >
                      إلغاء
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
                      onClick={() => startEdit(cat)}
                      disabled={loading}
                    >
                      تعديل
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(cat.id)}
                      disabled={loading}
                    >
                      حذف
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
