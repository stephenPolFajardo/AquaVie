import React from "react";
import Logo from "../../assets/logo.jpg";
import NavigationBar from "../navigation/navigation";



const HeaderTemplate = () => {
    return (
        <div className="">
            <div className="dFlex justifyContent gap-2 padding-20">
                <img className="imageLogo" src={Logo} />
                <div className="descWidth">We offer safe, clean, and purified water and for your convenience, we will pick it up and deliver it to your doorstep.</div>
            </div>
            <NavigationBar />
        </div>
    )
}


export default HeaderTemplate