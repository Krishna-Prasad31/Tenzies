import React from "react"

function Body () {

  const generateRandomNumbers = () => {
    return Array.from({ length: 10 }, () => Math.floor((Math.random()* 10)+1) )
}

const[num, setNum] = React.useState(generateRandomNumbers)
const [active, setActive] = React.useState(Array(10).fill(false));
const [isWinner, setIsWinner] = React.useState(false)

function handleClick(index) {
  setActive((prev) => {
    const newActive = [...prev];
    newActive[index] = !newActive[index];
    return newActive;
  })
}

const regenerate = () => {
  if(isWinner){
    setNum(generateRandomNumbers())
  setActive(Array(10).fill(false))
  setIsWinner(false)
  }
  else {
    
    setNum((prev) => 
    prev.map((n, i) => (active[i] ? n : Math.floor(Math.random() * 6 + 1))))
  }
  
}

React.useEffect(() => {
  const allHeld = active.every((t) => t)
  const firstValue = num[0];
  const allSame = num.every((n) => n === firstValue)

  if(allHeld && allSame){
    setIsWinner(true);
  }
},[num, active])




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

    <button className="Regenerate" onClick={regenerate}>{isWinner ? "New Game" : "Regenerate"}</button>

    <h2 className="cheer">{isWinner ? "You Win 🥳" : ""}</h2>
    </div>

    
    
    
    
  )
}

export default Body
