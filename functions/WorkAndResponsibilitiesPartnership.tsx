import totalBusinessD from "../images/companies/totalBusinessD.png"
import totalBusinessC from "../images/companies/totalBusinessC.png"
import tsD from "../images/companies/tsD.png"
import tsC from "../images/companies/tsC.png"
import h2D from "../images/companies/h2D.png"
import h2C from "../images/companies/h2C.png"
import poscoC from "../images/companies/poscoC.png"
import poscoD from "../images/companies/poscoD.png"
import snuD from "../images/companies/snuD.png"
import snuC from "../images/companies/snuC.png"


import min from "../images/members/min.jpg";
import jonghoh from "../images/members/jonghoh.jpg";
import minhyeok from "../images/members/minhyeok.jpg";
import kyunghoh from "../images/members/kyunghoh.jpg";
import cherin from "../images/members/cherin.jpg";


export const WorkAndPartnershipContent:{ [key: string]: any  } = {
    totalBusiness:{
        title: "totalBusiness", 
        default:  <img id  = "totalBusiness" src={totalBusinessD.src} className = "object-cover w-full "/>,
        colored:  <img id  = "totalBusiness" src={totalBusinessC.src} className = "object-cover w-full "/>,
        img: <img id  = "totalBusiness" src = {min.src}  className = "object-cover w-full " />
    },
    ts:{
        title: "ts", 
        default:  <img id = "ts" src={tsD.src} className = "object-cover w-full "/>,
        colored:  <img id = "ts" src={tsC.src} className = "object-cover w-full "/>,
        img: <img id  = "ts" src = {jonghoh.src}  className = "object-cover w-full " />
    }, 
    h2:{
        title: "h2", 
        default:  <img  id = "h2" src={h2D.src} className = "object-cover w-full "/>,
        colored:  <img id = "h2" src={h2C.src} className = "object-cover w-full "/>,
        img: <img id  = "ts" src = {minhyeok.src}  className = "object-cover w-full " />
    },
    posco:{
        title: "posco", 
        default:  <img id = "posco" src={poscoD.src} className = "object-cover w-full "/>,
        colored:  <img id = "posco" src={poscoC.src} className = "object-cover w-full "/>,
        img: <img id  = "totalBusiness" src = {kyunghoh.src}  className = "object-cover w-full " />
    },
    snu:{
        title: "snu", 
        default:  <img id = "snu" src={snuD.src} className = "object-cover w-full "/>,
        colored:  <img id = "snu" src={snuC.src} className = "object-cover w-full "/>,
        img: <img id  = "totalBusiness" src = {cherin.src}  className = "object-cover w-full " />
    },

}