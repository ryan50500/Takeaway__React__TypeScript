const  MyArray = [
      {name: 'paul', id: 0, age: 5},
      {name: 'steve', id: 1, age: 3},
      {name: 'ryan', id: 2, age: 7},
      {name: 'tim', id: 8, age: 9}
]

export default MyArray;


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