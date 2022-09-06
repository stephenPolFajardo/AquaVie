import React from "react";
import { classNames } from "../../core/functions";


function HomePage() { 
    return (
        <div className={classNames(true ? 'Homepage' : 'page')}></div>
    );
}


export default HomePage

