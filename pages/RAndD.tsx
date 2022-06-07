import SlideShow from "../components/SlideShow"
const RAndD = () =>{
    return(
        <div className = "m-4 border-2 mx-16 h-[100vh]">
            <div className = "h-[70%] w-[100%] bg-slate-200">
                <SlideShow/>
            </div>
            <div className = "h-[70%] w-[100%] bg-slate-300 p-4">
                <div className = "text-5xl">What is LCA?</div>

            </div>
            <div className = "h-[70%] w-[100%] bg-slate-400 p-4">
                <div className = "text-5xl">Our Work and Partnership</div>

            </div>
        </div>
    )
}

export default RAndD