import {useRouter} from "next/router";

function Footer() {
  const router = useRouter();

  return (
    <div
      id="footer"
      className={`w-[100%] ${
        router.pathname === "/product/ciet"
          ? "snap-start"
          : router.pathname === "/"
          ? ""
          : "snap-end"
      } ${
        router.pathname === "/" ||
        router.pathname === "/product/ciet" ||
        router.pathname === "/product/greenerp"
          ? "bg-beige_bg_2"
          : ""
      }`}>
      <div className="h-fit w-screen py-12 flex justify-center border-2">
        <div className="w-full px-2 md:w-2/3 grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="relative flex flex-col space-y-2 justify-between">
            <img
              alt="logo"
              className="w-1/2 md:w-5/12 h-auto"
              src="/images/CNRI_logo_black_under.svg"
            />
            <span>
              Copyright © 2022 by carbon neutral research institute.
              <div className="hidden-block">All Rights Reserved</div>
            </span>
          </div>
          <div className="grid md:grid-rows-5 md:grid-cols-1 gap-2">
            <div className="grid grid-cols-4 ">
              <span className="font-semibold">회사명</span>
              <span className="col-span-3">(주)탄소중립연구원</span>
            </div>
            <div className="grid grid-cols-4 ">
              <span className="font-semibold">대표이사</span>
              <span className="col-span-3">이민</span>
            </div>
            <div className="grid grid-cols-4 ">
              <span className="font-semibold">사업자번호</span>
              <span className="col-span-3">102-88-02087</span>
            </div>
            <div className="grid grid-cols-4 ">
              <span className="font-semibold">본사</span>
              <span className="col-span-3">
                서울특별시 관악구 남부순환로 1793(백광빌딩), 9층 CNRIKOREA
              </span>
            </div>
            <div className="grid grid-cols-4 ">
              <span className="font-semibold">TEL</span>
              <span className="col-span-3">010-3652-8419</span>
            </div>
            <div className="grid grid-cols-4 ">
              <span className="font-semibold">E-mail</span>
              <span className="col-span-3">contact@cnrikorea.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
