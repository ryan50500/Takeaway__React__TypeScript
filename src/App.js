import Display from './Display';
import Modal from './Modal';
import {useState} from 'react';

const App = () => {
    const [modal, setModal] = useState(false)
    const [index, setIndex] = useState(0)
    console.log('did it render?');
    return (
      <>
        <Display setModal={setModal} modal={modal} setIndex={setIndex}/>
        <Modal setModal={setModal} modal={modal} index={index}/>
      </>
    )
}

export default App



