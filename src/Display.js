import React from 'react'

const Display = () => {
    return (
        <div className="images__flex">
            {/* https://www.youtube.com/watch?v=J1dg4WXr3cg */}

            {/* can we send these  <img> IDs to <Modal> as props when images clicked?
            the onClick on images would for example => setIndex(id) with its ID
            <Modal> could map through array of objects (description title etc) and return
            the right object in JSX like the below which gets the right object from
            INDEX state (setIndex(id)) */}
            {/* {MyArray[index].map((obj) => {
               return (
                <div key={obj.id}>
                    <h2>{obj.name}</h2>
                    <button className={obj.name}  onClick={handleTheClick}>CLICK ME</button>
                </div>
               )
           })} */}
            {/* if not, store images and key in an array and map through and return JSX.
            each image would have key={} from the array */}
            <img id="0" src="https://ryan50500.github.io/takeaway/images/dansak.jpg"></img>
            <img id="1" src="https://ryan50500.github.io/takeaway/images/korma.jpg"></img>
            <img id="2" src="https://ryan50500.github.io/takeaway/images/Biryani.jpg"></img>
            <img id="3" src="https://ryan50500.github.io/takeaway/images/curry.jpg"></img>
            <img src="https://ryan50500.github.io/takeaway/images/rogan.jpg"></img>
            <img src="https://ryan50500.github.io/takeaway/images/tikka.jpg"></img>
            <img src="https://ryan50500.github.io/takeaway/images/nann.jpg"></img>
            <img src="https://ryan50500.github.io/takeaway/images/keema.jpg"></img>
            <img src="https://ryan50500.github.io/takeaway/images/bhaji.jpg"></img>
            
        </div>
    )
}

export default Display;