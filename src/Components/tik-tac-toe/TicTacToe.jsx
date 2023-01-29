import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from './Grid'
import './tictactoe.css'
import { useSelector } from "react-redux";
import * as userReducer from "../../redux/user/user.reducer"
 


const TicTacToe = () => {
  
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);
  const [draw , setDraw] = useState([]);


  let {invitedUser} = useSelector((state) => {
    return state[userReducer.userReducerFeatureKey]
  })

  function handleClick(index) {
    if (winner || board[index]) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setDraw([...draw , null])
  }


  

  function renderSquare(index) {
    
    return (
      <>
        {board[index] === "X" ? (
          <div  className="x" style={{ fontSize: "50px", textAlign: "center" }} ><b>X</b></div>
        ) : board[index] === "O" ? (
          <div className="o" style={{ fontSize: "50px", textAlign: "center" }}> <b>O</b> </div>
        ) : null}
      </>
    );
  }
  

  function calculateWinner(board) {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    
    return null;
  }
  
  let status;
  if (winner) {
    winner === "X" ? status = `You win`:  status = `You lost`  
    
  } else {
    status = ` ${isXNext ? "Your move" : "Their move"}`;
  }

  if(draw.length === 9){
    status = "It’s a Draw!"
  }

  

  return (
    <React.Fragment>
      <section className="p-3">
        <div className="container layout bg-light">
        
          <div className="card-body mt-5">
            <div><Link to="/home"><i class="fa fa-regular fa-chevron-left "/></Link></div>
            <h3 >Game with {invitedUser.name}</h3>
            <span>Your piece</span>
            <div className="x"><b>X</b></div> 
            <div className={` ${winner === "X" ? "bg-success" : winner === "O" ? "bg-danger " : "bg-warning" }  w-100 mt-5 text-center text-center p-2`}>{status}</div>
            <Grid renderSquare={renderSquare}  handleClick={handleClick}/>
            <Link to='' className="btn btn-warning btn-lg w-100 p-3 mt-3">Submit</Link>
          </div>  
        </div>
      </section>
    </React.Fragment>
  );
};

export default TicTacToe;
