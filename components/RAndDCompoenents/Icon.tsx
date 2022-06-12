import {useState} from "react"

interface IconType{
    defaultIcon:any, 
    coloredIcon:any, 
    isCurrent:boolean
}

const Icon = ({defaultIcon,coloredIcon,isCurrent}:IconType) =>{  
    const [isColored,setIsColored] = useState(false)  
    const changeToColored = (e:any) =>{
        setIsColored(true)
    }
    const changeToDefault = (e:any) =>{
        setIsColored(false)
    }
    return (
        <div onMouseOver={changeToColored} onMouseLeave = {changeToDefault}>
            {isCurrent ? coloredIcon:defaultIcon}
        </div>
    )
}

export default Icon