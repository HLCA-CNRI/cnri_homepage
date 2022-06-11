import {useState} from "react"
import { LCAContents } from "../functions/LCAContents"

const Prac = () =>{
    const [colored,setColored] = useState(false)
    const [val,setVal] = useState(LCAContents.truck)
    const changeToColored = (e:any) =>{
        // console.log(e.target.id)
        const val = e.target.id
        if ( LCAContents[val] != undefined){
            console.log("Here",LCAContents[val].videoPath)
        }
        // console.log(LCAContents[val].videoPath)
        setColored(true)
    }

    const ChangeToDefault = (e:any) =>{
        setColored(false)
    }
    return(
        <div onMouseOver={changeToColored} onMouseLeave = {ChangeToDefault}>
            {colored ? LCAContents.truck.colored:LCAContents.truck.default}
        </div>
    )

}

export default Prac