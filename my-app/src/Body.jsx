import React from "react"

function Body () {

  const generateRandomNumbers = () => {
    return Array.from({ length: 10 }, () => Math.floor((Math.random()* 10)+1) )
}

const[num, setNum] = React.useState(generateRandomNumbers)
const [active, setActive] = React.useState(Array(10).fill(false));

function handleClick(index) {
  setActive((prev) => {
    const newActive = [...prev];
    newActive[index] = !newActive[index];
    return newActive;
  })
}

const regenerate = () => {
  setNum(generateRandomNumbers())
  setActive(Array(10).fill(false))
}




  return(
    <div className="mainWrapper">
    <div className="container">
      <div className="gameBoardWrapper"> 
    {num.map((n, i) => (
      <div className={active[i] ? "isToggled" : "gameBoard"} onClick={() => handleClick(i)} key = {i} >
        {n}
      </div>
    ))}
      </div>
      
    </div>

    <button className="Regenerate" onClick={regenerate}>Regenerate</button>
    </div>
    
    
    
    
  )
}

export default Body
