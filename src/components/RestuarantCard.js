import { CDN_URL } from "../utils/constants";

const styleCard ={
  backgroundColor: "#f0f0f0",
}
const RestuarantCard = (props) =>{
    const{resData} = props; //destructuring
    const{
        name, 
        avgRating, 
        cuisines, 
        costForTwo, 
        sla, 
        cloudinaryImageId}=resData?.info;
    return(
        <div className="res-card" style={styleCard}>
            <img 
             className="res-logo" src={
                CDN_URL + cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestuarantCard;