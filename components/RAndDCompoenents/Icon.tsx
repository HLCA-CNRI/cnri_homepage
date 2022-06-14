import {memo, useState} from "react"

interface IconType{
    defaultIcon:any, 
    coloredIcon:any, 
    isCurrent:boolean,
    hasMultiple:boolean
}

const Icon = ({defaultIcon,coloredIcon,isCurrent,hasMultiple}:IconType) =>{  
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

export default memo(Icon)