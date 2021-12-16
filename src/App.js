import "./styles.css"


function App() {
  return (
    <>
      <button className="red" type="submit" onClick={handleRed}>Red</button>
      <button className="orange" type="submit" onClick={handleOrange}>Orange</button>
      <button className="yellow" type="submit" onClick={handleYellow}>Yellow</button>
      <button className="green" type="submit" onClick={handleGreen}>Green</button>
      <button className="blue" type="submit" onClick={handleBlue}>Blue</button>
      <button className="purple" type="submit" onClick={handlePurple}>Purple</button>
      <button className="customCol" type="submit" onClick={handleCustom}>Custom &#9660;</button>
      <button className="reset" type="submit" onClick={() => window.location.reload(false)}>Reset</button>
      <button className="info" type="submit" onClick={showInfo}>Info</button>

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


  function handleCustom() {
    document.body.style.backgroundColor = "DeepPink";
    console.log("custom triggered");
    /*set up custom color input, maybe try to enable 
    the choice of a gradient, in all 4 direction up, # of colors: TBD*/
  }

  function showInfo() {
    document.body.style.backgroundColor = "white";      /*display description*/
    console.log("info triggered");
  }


  /*  
    info display: insta, "use this to light your enviroment with you sceen..", 
    "beginner project made by davon whitworth" (set name as hyperlink to open insta on new window)*/

}

export default App;