import classNames from "classnames";
import React, { forwardRef } from "react";
type VideoContainerProps = {
  videoPaths: string[];
  currentContent: string;
  videoRef: any;
};
const VideoContainer = ({ videoPaths, currentContent, videoRef }: VideoContainerProps) => {
  return (
    <div>
      {
        <video
          id = "resources"
          ref={currentContent === "resources" ? videoRef : null}
          src={videoPaths[0]}
          loop
          className={classNames(currentContent === "resources" ? "" : "hidden", "pt-4 videos")}

        />
      }
      {
        <video
          id = "processing"
          ref={currentContent === "processing" ? videoRef : null}
          src={videoPaths[1]}
          loop
          className={classNames(currentContent === "processing" ? "" : "hidden", "pt-4 videos")}
        />
      }
      {
        <video
          id = "manufacturing"
          ref={currentContent === "manufacturing" ? videoRef : null}
          src={videoPaths[2]}
          loop
          className={classNames(currentContent === "manufacturing" ? "" : "hidden", "pt-4 videos")}
        />
      }
      {
        <video
          id = "distribution"
          ref={currentContent === "distribution" ? videoRef : null}
          src={videoPaths[3]}
          loop
          className={classNames(currentContent === "distribution" ? "" : "hidden", "pt-4 videos")}
        />
      }
      {
        <video
          id = "use"
          ref={currentContent === "use" ? videoRef : null}
          src={videoPaths[4]}
          loop
          className={classNames(currentContent === "use" ? "" : "hidden", "pt-4 videos")}
        />
      }
      {
        <video
          id = "endOfLife"
          ref={currentContent === "endOfLife" ? videoRef : null}
          src={videoPaths[5]}
          loop
          className={classNames(currentContent === "endOfLife" ? "" : "hidden", "pt-4 videos")}
        />
      }
    </div>
  );
};

export default VideoContainer;
