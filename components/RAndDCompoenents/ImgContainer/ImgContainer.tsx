interface imgContainerType{
    currentContent :string
}

const ImgContainer = ({currentContent}:imgContainerType) =>{
    return(
        <div>
            {
            <img id = "totalBusiness" src = {"/images/partnershipData/h2.png"}  className = {`${currentContent == "totalBusiness" ? "visible":"hidden"} object-cover`}  />
            }
            {
           <img id = "h2"  src = {"/images/partnershipData/posco.png"}  className = {`${currentContent == "h2" ? "visible":"hidden"} object-cover`}  />
            }
            {
           <img  id = "posco" src = {"/images/partnershipData/snu.png"} className = {`${currentContent == "posco" ? "visible":"hidden"} object-cover`}  />
            }
            {
           <img  id = "snu" src = {"/images/partnershipData/totalBusiness.png"}  className = {`${currentContent == "snu" ? "visible":"hidden"} object-cover`}  />
            }
        </div>
       
    )
}

export default ImgContainer