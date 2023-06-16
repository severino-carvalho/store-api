import Navbar from "../Navbar/Navbar";

export default function MainLayout({ children }: any) {
  return (
    <main className=" h-[100vh] w-[100vw]">
      <Navbar />
      <div>{children}</div>
    </main>
  );
}
