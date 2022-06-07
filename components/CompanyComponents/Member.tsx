import min from "../../images/members/min.jpg"
import jonghoh from "../../images/members/jonghoh.jpg"
import prof from "../../images/members/prof.jpg"
import minhyeok from "../../images/members/minhyeok.jpg"
import kyunghoh from "../../images/members/kyunghoh.jpg"
import cherin from "../../images/members/cherin.jpg"

interface MemeberType{
    name:string

}
const Member = ({name}:MemeberType) =>{
    const Mem : { [key: string]: any } = {
        "min":{
            name:"이민",
            position:"Co-Founder/CEO",
            description: "밸런스히어로(Series D), 에어스메디컬(Series A)와 같은 폭발적으로 성장하는 스타트업에서의 리딩 경험이 풍부하며 기후 문제를 비즈니스로 해결하는 것에 관심이 많습니다.",
            pic:min.src,
        },
        "jonghoh": {
            name:"이종호",
            position:"Co-Founder/CTO",
            description: "서울대학교 어드밴스드 에너지 시스템 연구실에서 LCA 연구 및 Machine Learning 석·박사 통합과정 중이며 모든 탄소를 과학적으로 분석해내고 줄여나가고 싶습니다.",
            pic: jonghoh.src
        },
        "prof": {
            name:"송한호",
            position:"",
            description: "",
            pic: prof.src
        },
        "minhyeok": {
            name:"고민혁",
            position:"Researcher Scientist",
            description: "서울대학교 기계항공공학부 학사과정 중이며 LCA 기법 트렌드에 관심이 많고 훗날 이를 주도하고 싶다는 목표가 있습니다.",
            pic: minhyeok.src
        },
        "kyunghoh" : {
            name:"인경호",
            position:"",
            description: "",
            pic: kyunghoh.src
        }, 
        "cherin":{
            name:"유채린",
            position:"",
            description: "",
            pic: cherin.src
        },
    }
    return (
        <section className="flex-shrink-1 border-2 xs: w-[60%] sm:w-[50%] md:w-[28%] ml-2 mr-2 shadow-md ">

            <div className =  {` h-[100%] flex`}>
            <img src={Mem[name].pic} className = "w-[50%]"/>
            <div className = "bg-slate-400 w-[500px]">
                <div className = "font-bold">{Mem[name].name}</div>
                <div>{Mem[name].position}</div>
                <div>{Mem[name].description}</div>
            </div>
            </div>
        </section>
    )
}

export default Member
