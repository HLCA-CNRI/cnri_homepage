import h2 from "../images/partnershipData/h2.png"
import posco from "../images/partnershipData/posco.png"
import snu from "../images/partnershipData/snu.png"
import totalBusiness from "../images/partnershipData/totalBusiness.png"

interface imgContainerType{
    currentContent :string
}

const imgContainer = ({currentContent}:imgContainerType) =>{
    return(
        <div>
            {
            <img id = "totalBusiness" src = {totalBusiness.src}  className = {`${currentContent == "totalBusiness" ? "visible":"hidden"} object-cover`}  />
            }
            {
           <img id = "h2"  src = {h2.src}  className = {`${currentContent == "h2" ? "visible":"hidden"} object-cover`}  />
            }
            {
           <img  id = "posco" src = {posco.src} className = {`${currentContent == "posco" ? "visible":"hidden"} object-cover`}  />
            }
            {
           <img  id = "snu" src = {snu.src}  className = {`${currentContent == "snu" ? "visible":"hidden"} object-cover`}  />
            }
        </div>
       
    )
}

export default imgContainer