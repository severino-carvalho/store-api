import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-slate-950 w-screen flex justify-between items-center text-slate-50 px-12 py-3">
      <div className="font-extrabold text-3xl">Store</div>
      <ul className="flex gap-10">
        <li className="hover:text-green-500">
          <Link href={"/home"}>Home</Link>
        </li>
        <li>Item 002</li>
        <li>Item 003</li>
      </ul>
    </div>
  );
}
