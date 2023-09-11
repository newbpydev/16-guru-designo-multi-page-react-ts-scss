import { Outlet } from "react-router";
import "./AppLayout.scss";

//* PAGE: AppLayout
export default function AppLayout() {
  // output
  return (
    <>
      <header>header here</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
