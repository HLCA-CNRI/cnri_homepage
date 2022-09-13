// Variants used for transitions in Framer Motion
const TransitionVariants = {
  TansitionVidLToR: {
    vidVisible: {opacity: 1, x: 0, transition: {duration: 0.6}},
    vidHidden: {opacity: 0, x: -250},
  },
  TansitionVidRToL: {
    vidVisible: {opacity: 1, x: 0, transition: {duration: 0.6}},
    vidHidden: {opacity: 0, x: 100},
  },

  TansitionVidBToT: {
    vidVisible: {opacity: 1, y: 0, transition: {duration: 0.6}},
    vidHidden: {opacity: 0, y: 150},
  },

  TransitionContextLToR: {
    initial: {opacity: 0, x: -200, transition: {duration: 0.6}},
    open: {opacity: 1, x: 0, transition: {duration: 0.6}},
    close2: {x: -400, opacity: 0, transition: {duration: 0.6}},
  },

  TransitionContextLToR2: {
    initial: {opacity: 0, x: -200, transition: {duration: 0.6}},
    open: {opacity: 1, x: 0, transition: {duration: 0.6}},
    close2: {x: -400, opacity: 0, transition: {duration: 0.6}},
  },

  TransitionContextRToL: {
    initial: {opacity: 0, x: 200, transition: {duration: 0.6}},
    open: {opacity: 1, x: 0, transition: {duration: 0.6}},
    close2: {x: 400, opacity: 0, transition: {duration: 0.6}},
  },

  TransitionContextTToB: {
    initial: {z: 0, opacity: 0, y: -200, transition: {duration: 0.6}},
    open: {z: 0, opacity: 1, y: 0, transition: {duration: 0.6}},
    close2: {z: 0, opacity: 0, y: -400, transition: {duration: 0.6}},
  },
};

export default TransitionVariants;
