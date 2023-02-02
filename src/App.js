import Display from './Display';
import Modal from './Modal';
import {useState} from 'react';

const App = () => {
    const [modal, setModal] = useState(false)
    return (
      <>
        <Display setModal={setModal} modal={modal}/>
        <Modal setModal={setModal} modal={modal}/>
      </>
    )
}

export default App



