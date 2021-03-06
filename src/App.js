import "./styles.css"
import "./Popup.js"
import React, { useState } from 'react';
import { Modal } from "./Popup";

function App() {

  const [showModal, setShowModal] = useState(false);

  /*const openModal = () => {
    setShowModal(true);
  }*/

  return (
    <>
      <button className="red" type="submit" onClick={handleRed}></button>
      <button className="orange" type="submit" onClick={handleOrange}></button>
      <button className="yellow" type="submit" onClick={handleYellow}></button>
      <button className="green" type="submit" onClick={handleGreen}></button>
      <button className="blue" type="submit" onClick={handleBlue}></button>
      <button className="purple" type="submit" onClick={handlePurple}></button>
      <button className="reset" type="submit" onClick={() => window.location.reload(false)}></button>
      <button className="info" type="submit" onClick={() => setShowModal(true)}>?</button>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}


      {/* <Popup open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Modal
      </Popup> */}
    </>
  )


  //button functions
  function handleRed() {
    document.body.style.background = "red";
  }
  function handleOrange() {
    document.body.style.background = "orange";
  }
  function handleYellow() {
    document.body.style.background = "yellow";
  }
  function handleGreen() {
    document.body.style.background = "green";
  }
  function handleBlue() {
    document.body.style.background = "blue";
  }
  function handlePurple() {
    document.body.style.background = "purple";
  }
}

export default App;