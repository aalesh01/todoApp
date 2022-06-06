import React from "react"


const MoreDetails=()=>{
    

    const displayShow = "block";
    const displayHide = "none";
    const [color, setColor] = React.useState(displayHide);

    const colorHandler = () => {
         ( color===displayHide ? setColor(displayShow) : setColor(displayHide))
    }
    return(
        <>
            <button onClick={colorHandler}><h3> {color === displayHide ? "Show" : "Hide"} More Details </h3></button>

        <div style={{display : color}}>
            <h4>Location: Pune</h4>
            <h4>Organization: Masai</h4>
        </div>
        </>
    )
}

export default MoreDetails;