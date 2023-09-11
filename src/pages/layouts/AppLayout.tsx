import { Outlet } from "react-router";
import "./AppLayout.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

//* PAGE: AppLayout
export default function AppLayout() {
  // output
  return (
    <main className="app-layout">
      <Header />

      <div className="app-layout__outlet">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}
