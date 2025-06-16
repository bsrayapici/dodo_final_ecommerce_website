import TopContact from "./TopContact";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopContact />
      <Header />
      <main className="flex-grow bg-gray-50">{children}</main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        Footer Content
      </footer>
    </div>
  );
}
