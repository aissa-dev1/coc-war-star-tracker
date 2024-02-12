import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav className="flex flex-row items-center justify-between p-4 text-white bg-smooth-black">
      <section className="flex flex-col">
        <p className="font-bold font-cairo">متعقب نجوم الحرب</p>

        <p className="text-sm font-semibold">Clash of clans</p>
      </section>

      <section className="flex-row items-center hidden gap-2 sm:flex">
        <Link className="py-0.5 px-2 text-sm font-bold font-cairo text-black bg-white rounded cursor-pointer" to="/">
          الصفحة الرئيسية
        </Link>

        <Link
          className="py-0.5 px-2 text-sm font-bold font-cairo text-black bg-white rounded cursor-pointer"
          to="/war-logs"
        >
          الحروب السابقة
        </Link>
      </section>

      <section className="sm:hidden">
        <p className="font-cairo">قائمة</p>
      </section>
    </nav>
  );
}

export default MainNav;