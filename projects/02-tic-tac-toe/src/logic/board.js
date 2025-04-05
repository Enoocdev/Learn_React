import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS){

        const [a , b , c] = combo

        if(
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ){
            return boardToCheck[a]
        }
        }

        return null
    }

export    const updateboard = (index) =>{
    
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
    export  const checkEndGame = (newBoard) =>{

            return newBoard.every((square) => square !== null)
        }