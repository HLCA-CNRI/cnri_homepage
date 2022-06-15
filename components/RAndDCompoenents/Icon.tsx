import {memo, useState} from "react"
import classNames from 'classNames'

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
        <div onMouseOver={changeToColored} onMouseLeave={changeToDefault}>
            {/* {isCurrent ?  */}
            <div className={classNames(isCurrent ? "opacity-100":"hidden opacity-0" , "duration-700 ease-in transition-opacity")}>{coloredIcon}</div>
            {/* : */}
            <div className={classNames(!isCurrent ? "opacity-100":"hidden opacity-0" , "duration-700 ease-in transition-opacity")}>{defaultIcon}</div>
            {/* } */}
        </div>
    )
}

export default memo(Icon)