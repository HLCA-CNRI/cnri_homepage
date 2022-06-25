import {memo, ReactNode} from "react";
import NavigationBar from "./LayoutComponents/NavigationBar";
import Footer from "./LayoutComponents/Footer";

interface LayoutInterface {
  children: ReactNode;
}

function Layout({children}: LayoutInterface) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}

export default memo(Layout);
