import Link from "next/link";

const Error = ({errCode, text}: {errCode: string; text: string}) => (
  <div className="flex flex-col items-center justify-center w-[100vw] h-[90vh] text-center">
    <div className="border-2 border-dashed   w-[24vw] h-[24vw] rounded-[50%] flex flex-col items-center justify-center">
      <h1 className="text-[3vw] font-bold bg-clip-text opacity-[80%]">{errCode}</h1>
      <div className="pb-[2.5vh] text-[gray]">⚠️ {text}</div>
      <div className="mt-[0.5vh] w-[15vw] bg-lca_mobile_gradient text-[1.3vw] px-[1vw] py-[0.8vh] rounded-[2vw] text-white font-bold drop-shadow-md hover:cursor-pointer ">
        <Link href="/">
          <span className="drop-shadow-xl">홈으로 이동하기</span>
        </Link>
      </div>
    </div>
  </div>
);
export default Error;
