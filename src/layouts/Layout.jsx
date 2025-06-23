import TopContact from "./TopContact";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopContact />
      <Header />
      <main className="flex-grow bg-white">{children}</main>
    </div>
  );
}