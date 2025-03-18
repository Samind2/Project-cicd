import React, { useState } from "react"

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!email.trim()) newErrors.email = "กรุณากรอกอีเมล"; //ใช้ .trim() เพื่อลบช่องว่างหน้าและหลังข้อความ
    if (!password.trim()) newErrors.password = "กรุณากรอกรหัสผ่าน";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#EE8A8A] overflow-hidden">
      {/* ลวดลายพื้นหลังแบบสี่เหลี่ยม */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD2D1] opacity-80 rounded-xl rotate-6"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD2D1] opacity-80 rounded-xl -rotate-6"></div>

      {/* ไอคอนตกแต่งพื้นหลัง */}
      <div className="absolute top-10 left-10 opacity-60">
        <img src="/images/BG/BG-L.png" alt="children play" className="w-32 h-32" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-60">
        <img src="/images/BG/BG-R.png" alt="syringe" className="w-32 h-32" />
      </div>

      {/* กล่องฟอร์ม */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center relative z-10">
        <h2 className="text-lg font-bold text-[#32403B] mb-4">
          เข้าสู่ระบบเพื่อเข้าถึงบริการสำหรับบันทึกวัคซีน และ ติดตามพัฒนาการของเด็ก
        </h2>
        <form onSubmit={handleSubmit}>
          {/* กรอกอีเมล */}
          <div className="mb-3 text-left">
            <label className="block text-sm font-medium text-gray-700">
              อีเมล <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          {/* กรอกรหัสผ่าน */}
          <div className="mb-3 text-left">
            <label className="block text-sm font-medium text-gray-700">
              รหัสผ่าน <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>
          {/* ไปหน้ากู้คืนรหัสผ่าน */}
          <p className="mt-3 text-sm text-gray-500 flex justify-end">
            หากคุณลืมรหัสผ่าน? <a href="/Signup" className="text-red-500">คลิ๊กที่นี่</a>
          </p>
          <button className="bg-[#FA5453] text-white px-4 py-2 rounded-lg w-full hover:bg-[#ff8686] transition duration-300 mt-4">
            เข้าสู่ระบบ
          </button>
        </form>

        {/* ไปหน้าลงทะเบียน */}
        <p className="mt-3 text-sm text-gray-500">
          หากคุณยังไม่มีบัญชีผู้ใช้? <a href="/Signup" className="text-red-500">สมัครสมาชิก</a>
        </p>
      </div>
    </div>
  );
}

export default Signin  