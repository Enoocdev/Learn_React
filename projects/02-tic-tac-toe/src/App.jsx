import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import { TURNOS} from "./constants"
import { checkWinner, checkEndGame } from "./logic/board"
import { WinnerModal } from "./WinnerModal"


function App() {
  const [board,setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNOS.X)
  const [winner,setWinner] = useState(null)


  const reset = () => {
    const newBoard = Array(9).fill(null)
    setBoard(newBoard)
    setWinner(null)
    setTurn(TURNOS.X)
  }

  const updateboard = (index) =>{

    if( board[index] || winner) return

    const newTurn = turn === TURNOS.X ? TURNOS.O : TURNOS.X
    const newBoard = [ ... board ]
    newBoard[index] = turn
    setBoard(newBoard)
    setTurn(newTurn)

    const mewWinner = checkWinner(newBoard)
    if(mewWinner){
      setWinner(mewWinner)
      confetti()
    }else if (checkEndGame(newBoard)){ 
      setWinner(false)
    }
    
  }
  
  return (
    <section className="board">
    <h1>Tic tac toe</h1>
    <button onClick={reset}>
                  reset
                </button>
      <section className="game">
        {
          board.map( ( square , i ) => {
              return(
                <Square 
                  key={i}
                  index={i}
                  updateboard={updateboard}
                  >

                    {square}
                  
                  </Square>

              )

          }
        )
        }
        
      </section>
      <section className="turn">
          <Square isSelected={turn === TURNOS.X}>
            {TURNOS.X}
          </Square>
          <Square isSelected={turn === TURNOS.O}>
            {TURNOS.O}
          </Square>
        </section>
              <WinnerModal winner={winner} reset={reset} ></WinnerModal>
    </section>
  )
}

export default App
