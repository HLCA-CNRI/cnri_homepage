// 비디오 나오는 방향을 정해주는 framer motion variant
const VideoTransition: any = {
  LToR: {
    vidVisible: {opacity: 1, x: 0, transition: {duration: 0.6}},
    vidHidden: {opacity: 0, x: -150},
  },
  RToL: {
    vidVisible: {opacity: 1, x: 0, transition: {duration: 0.6}},
    vidHidden: {opacity: 0, x: 100},
  },
  BToT: {
    vidVisible: {opacity: 1, y: 0, transition: {duration: 0.6}},
    vidHidden: {opacity: 0, y: 150},
  },
};

export default VideoTransition;
