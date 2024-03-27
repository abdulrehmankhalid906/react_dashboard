import React, { useState } from "react";

function Product()
{
    const[data, setData]=useState(0)
    function Count()
    {
        setData(data+1);
        console.log(data);
    }
    return(
        <>
            <h1>{data}</h1>

            <button className="btn btn-success btn-sm" onClick={Count}>Count</button>
        </>
    );
}

export default Product;