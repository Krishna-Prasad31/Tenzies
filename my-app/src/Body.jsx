import React from "react"

function Body () {

  const generateRandomNumbers = () => {
    return Array.from({ length: 10 }, () => Math.floor((Math.random()* 10)+1) )
}

const[num, setNum] = React.useState(generateRandomNumbers)

const regenerate = () => {
  setNum(generateRandomNumbers())
}




  return(
    <div className="mainWrapper">
    <div className="container">
      <div className="gameBoardWrapper"> 
    {num.map((n, i) => (
      <div className="gameBoard" key = {i} >
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
