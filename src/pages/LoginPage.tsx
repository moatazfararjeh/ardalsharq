import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:9090/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "بيانات الدخول غير صحيحة");
        return;
      }
      localStorage.setItem("isAdmin", "true");
      onLogin();
      navigate("/admin");
    } catch (err) {
      setError("حدث خطأ أثناء الاتصال بالخادم");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80 space-y-4">
        <h2 className="text-xl font-bold mb-4 text-center">تسجيل دخول المدير</h2>
        <input
          type="text"
          placeholder="اسم المستخدم"
          className="border p-2 rounded w-full"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          className="border p-2 rounded w-full"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">دخول</button>
      </form>
    </div>
  );
}
