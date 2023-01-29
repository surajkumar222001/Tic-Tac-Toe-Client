import "./grid.css";

 let Grid = ({renderSquare , handleClick}) => {
   
    
    
  return (
    <>
      <div class="grid">
        <div class="space" id="1" onClick={() => handleClick(0)}>{renderSquare(0)}</div>
        <div class="space" id="2" onClick={() => handleClick(1)}>{renderSquare(1)}</div>
        <div class="space" id="3" onClick={() => handleClick(2)}>{renderSquare(2)}</div>
        <div class="space" id="4" onClick={() => handleClick(3)}>{renderSquare(3)}</div>
        <div class="space" id="5" onClick={() => handleClick(4)}>{renderSquare(4)}</div>
        <div class="space" id="6" onClick={() => handleClick(5)}>{renderSquare(5)}</div>
        <div class="space" id="7" onClick={() => handleClick(6)}>{renderSquare(6)}</div>
        <div class="space" id="8" onClick={() => handleClick(7)}>{renderSquare(7)}</div>
        <div class="space" id="9" onClick={() => handleClick(8)}>{renderSquare(8)}</div>
        
      </div>

      {/* <div class="wrapper">
        <button class="reset">Reset</button>
      </div> */}
    </>
  );
};

export default Grid
