import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-[100%] h-[40vh] ">
      <hr className="mx-16" />
      <div className="grid grid-cols-4 content-center h-[100%] ml-16">
        <div>
          <img src={"/images/logo.png"} width={180} height={70} />
        </div>
        <div className="  grid grid-cols-2 ">
          <div>
            <div className="p-2">Product</div>
            <div className="p-2">Overview</div>
            <div className="p-2">Customers</div>
            <div className="p-2">Request a Demo</div>
          </div>
          <div>
            <div className="p-2">Resources</div>
            <div className="p-2">Blog</div>
            <div className="p-2">Climate Guide</div>
            <div className="p-2">Climate Leads</div>
          </div>
        </div>
        <div className="col-span-2  mr-14">
          <div className="grid grid-cols-4 p-1">
            <div></div>
            <div>대표이사</div>
            <div className="col-span-2">이민</div>
          </div>
          <div className="grid grid-cols-4 p-1">
            <div></div>
            <div>사업자 번호</div>
            <div className="col-span-2">102-88-02087</div>
          </div>
          <div className="grid grid-cols-4 p-1">
            <div></div>
            <div>본사</div>
            <div className="col-span-2">서울특별시 관악구 관악로1(서울대학교), 32-1동 203호</div>
          </div>
          <div className="grid grid-cols-4 p-1">
            <div></div>
            <div>TEL</div>
            <div className="col-span-2">010-3652-8419</div>
          </div>
          <div className="grid grid-cols-4 p-1">
            <div></div>
            <div>Email</div>
            <div className="col-span-2">contact@cnrikorea.com</div>
          </div>
          <div className="grid grid-cols-4 p-1">
            <div></div>
            <div className="text-xs text-zinc-400 col-span-3">Copyright © 2021 by carbon neutral research institute. All Rights Reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
