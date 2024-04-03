import { useState } from "react";
import ImgThumbnail from "./ImgThumbnail";

// useState Ornegi:

export default function MultipleImages() {
    const [imageCounter, setImageCounter] = useState(1)

    // function handleAddImage() {
    //     setImageCounter(imageCounter + 1)
    // }
    
    // function handleSubtrackImage() {
    //     setImageCounter(imageCounter - 1)
    // }
        
    function handleClick(event) {
        // console.log(event.target)
        // console.log(event.target.id)
        event.target.id === "add" ? setImageCounter(prev => prev + 1) : setImageCounter(prev => prev > 1 ? prev -1 : prev)
    }
    
    return (
        <>
            <button id="add" onClick={handleClick}>Ekle</button>
            <button id="subtrack" onClick={handleClick}>Sil</button>
            <hr />
            {
                [...Array(imageCounter)].map((item, index) => <ImgThumbnail key={index} imgSrc={`https://picsum.photos/id/${500 + index}/110/100`} />)
            }
            
        </>
    )
}
