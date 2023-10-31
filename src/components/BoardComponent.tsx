import { useEffect, useState } from 'react'
import { Board } from '../model/Board'
import CellComponents from './CellComponents'

const BoardComponent = () => {
  const [board, setBoard] = useState<Board>(new Board)

  useEffect(() => {
    const newBoard = new Board()
    setBoard(newBoard)
  }, [])

  return (
    <div className='board'>
      {board.cells.map(cell => 
      <div className='row'>
        {cell.map(cell => <CellComponents color={cell.color}/>)}
      </div>)}
    </div>
  )
}

export default BoardComponent