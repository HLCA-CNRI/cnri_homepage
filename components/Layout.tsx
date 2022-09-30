import {memo, ReactNode, useState, useEffect} from "react";
import {useRouter} from "next/router";
import {hasCookie, deleteCookie, getCookie, getCookies} from "cookies-next";
import Footer from "./LayoutComponents/Footer";
import NavBar from "./LayoutComponents/NavBar";
import PopUp from "./PopUp";
import {CookieKey} from "../constants/enum/cookie_key.enum";

interface LayoutInterface {
  children: ReactNode;
}

function Layout({children}: LayoutInterface) {
  const router = useRouter();
  const [doesHidePopup, setDoesHidePopup] = useState(true);
  useEffect(() => {
    // deleteCookie(CookieKey.NOT_SHOW_TODAY);
    if (router.pathname !== "/") return;
    if (!hasCookie(CookieKey.NOT_SHOW_TODAY)) {
      setDoesHidePopup(false);
      return;
    }
    setDoesHidePopup(true);
  }, [router.pathname]);

  return (
    <>
      {router.pathname === "/" && !doesHidePopup && <PopUp />}
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
