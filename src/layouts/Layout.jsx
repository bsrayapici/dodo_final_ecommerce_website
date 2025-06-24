import TopContact from "./TopContact";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";


export default function Layout({ children }) {

  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <TopContact />
      <Header />
      {location.pathname !== "/" && <Breadcrumb />}
      <main className="flex-grow bg-white">{children}</main>
      <Footer />
    </div>
  );
}