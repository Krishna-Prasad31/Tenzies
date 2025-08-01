import React from "react"

function Body () {

const[num, setNum] = React.useState(randomNum)

function randomNum () {
  return Math.floor((Math.random()* 10)+1) 
  setNum(prevNum => !prevNum)
}


  return(
    <div className="container">
      <div className="GameBoard">
    {num}
    </div>
    <div className="GameBoard">
    {num}
    </div>
    <div className="GameBoard">
    {num}
    </div>
    <div className="GameBoard">
    {num}
    </div>
    <div className="GameBoard">
    {num}
    </div>
    <div className="GameBoard">
    {num}
    </div>
    <div className="GameBoard">
    {num}
    </div>
    <div className="GameBoard">
    {num}
    </div>
    <div className="GameBoard">
    {num}
    </div>
    <div className="GameBoard">
    {num}
    </div>
    </div>
    
    
  )
}

export default Body
