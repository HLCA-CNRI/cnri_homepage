import {useEffect, useState} from "react";
import Link from "next/link";

function Error({statusCode}: {statusCode: number}) {
  const [errText, setErrText] = useState("");

  useEffect(() => {
    switch (statusCode) {
      case 403:
        setErrText("웹 페이지를 볼 수 있는 권한이 없습니다.");
        break;
      case 404:
        setErrText("존재하지 않는 페이지입니다");
        break;
      case 500:
        setErrText("페이지가 작동하지 않습니다");
        break;
      case 503:
      case 504:
        setErrText("서버에 문제가 발생했습니다");
        break;
      default:
        setErrText("알 수 없는 에러가 발생했습니다");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[90vh] text-center">
      <div className="border-2 border-dashed   w-[24vw] h-[24vw] rounded-[50%] flex flex-col items-center justify-center">
        <h1 className="text-[3vw] font-bold bg-clip-text opacity-[80%]">{statusCode}</h1>
        <div className="pb-[2.5vh] text-[gray]">⚠️ {errText}</div>
        <div className="mt-[0.5vh] w-[15vw] bg-lca_mobile_gradient text-[1.3vw] px-[1vw] py-[0.8vh] rounded-[2vw] text-white font-bold drop-shadow-md hover:cursor-pointer ">
          <Link href="/" passHref>
            <span className="drop-shadow-xl">홈으로 이동하기</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

Error.getInitialProps = ({res, err}: {res: any; err: any}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {statusCode};
};

export default Error;
