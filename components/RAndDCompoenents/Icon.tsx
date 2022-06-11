import {useState} from "react"

interface IconType{
    defaultIcon:any, 
    coloredIcon:any, 
    initial:boolean
}

const Icon = ({defaultIcon,coloredIcon,initial}:IconType) =>{  
    const [isColored,setIsColored] = useState(false)  
    const changeToColored = (e:any) =>{
        setIsColored(true)
    }
    const changeToDefault = (e:any) =>{
        setIsColored(false)
    }
    return (
        <div onMouseOver={changeToColored} onMouseLeave = {changeToDefault}>
            {isColored ? coloredIcon:defaultIcon}
        </div>
    )
}

export default Icon