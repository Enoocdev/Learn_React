import { Square } from "./components/Square"

export function WinnerModal ( {winner, reset} ) {

        if(winner === null) return null

        const winnerText = winner === false ? 'Empate' : 'Ganó'

    return (
        <section  className="winner">
            <div className="text">
            
            <h2 >
                {
                winnerText
                }
            </h2>
            <header className="win">
                { winner && <Square>{winner}</Square>}
                
            </header>
            <button onClick={reset}>
                reset
            </button>
            </div>
            
        </section>
        
        )

    }