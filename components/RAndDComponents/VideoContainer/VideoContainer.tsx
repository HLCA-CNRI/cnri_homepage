import classNames from "classnames";
import {memo} from "react";

type VideoContainerProps = {
  videoPaths: string[]; // 비디오 격로들 나열
  currentContent: string; // 현제 보여줄 옵젝트
  videoRef: any; // 비디오를 dom을 조정할 수 있는 useRef
};

// 비디오는 currentContent이면 보여지고, 아니면 hidden
function VideoContainer({videoPaths, currentContent, videoRef}: VideoContainerProps) {
  return (
    <div>
      <video
        id="resources"
        ref={currentContent === "resources" ? videoRef : null}
        src={videoPaths[0]}
        loop
        muted
        className={classNames(
          currentContent === "resources" ? "" : "hidden",
          " videos rounded-lg shadow-xl"
        )}
      />
      <video
        id="processing"
        ref={currentContent === "processing" ? videoRef : null}
        src={videoPaths[1]}
        loop
        muted
        className={classNames(
          currentContent === "processing" ? "" : "hidden",
          " videos rounded-lg shadow-xl"
        )}
      />
      <video
        id="manufacturing"
        ref={currentContent === "manufacturing" ? videoRef : null}
        src={videoPaths[2]}
        loop
        muted
        className={classNames(
          currentContent === "manufacturing" ? "" : "hidden",
          " videos rounded-lg shadow-xl"
        )}
      />
      <video
        id="distribution"
        ref={currentContent === "distribution" ? videoRef : null}
        src={videoPaths[3]}
        loop
        muted
        className={classNames(
          currentContent === "distribution" ? "" : "hidden",
          " videos rounded-lg shadow-xl"
        )}
      />
      <video
        id="use"
        ref={currentContent === "use" ? videoRef : null}
        src={videoPaths[4]}
        loop
        className={classNames(
          currentContent === "use" ? "" : "hidden",
          "videos rounded-lg shadow-xl"
        )}
        muted
      />
      <video
        id="endOfLife"
        ref={currentContent === "endOfLife" ? videoRef : null}
        src={videoPaths[5]}
        loop
        muted
        className={classNames(
          currentContent === "endOfLife" ? "" : "hidden",
          "videos rounded-lg shadow-xl "
        )}
      />
    </div>
  );
}

export default memo(VideoContainer);
