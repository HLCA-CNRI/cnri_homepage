import {memo, ReactNode} from "react";
import {useRouter} from "next/router";
import Footer from "./LayoutComponents/Footer";
import NavBar from "./LayoutComponents/NavBar";
import PopUp from "./PopUp";

interface LayoutInterface {
  children: ReactNode;
}

function Layout({children}: LayoutInterface) {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/" && <PopUp />}
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default memo(Layout);

// const Wrapper=styled.div`
//   background-image :

// `
