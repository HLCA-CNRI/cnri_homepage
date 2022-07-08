import {memo, ReactNode} from "react";
import Footer from "./LayoutComponents/Footer";
import NavBar from "./LayoutComponents/NavBar";

interface LayoutInterface {
  children: ReactNode;
}

function Layout({children}: LayoutInterface) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default memo(Layout);
