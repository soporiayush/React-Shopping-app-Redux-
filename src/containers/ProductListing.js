import React from 'react';
import {useSelector} from "react-redux"
function Productlisting() {
    const products = useSelector((state)=> state)
    console.log(products);
    
    return (
        <div className="ui grid container">
            <h1>Product Listing</h1>
        </div>
    );
}

export default Productlisting;