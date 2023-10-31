interface ICell {
  color: string
}

const CellComponents = ({color}: ICell) => {
  return (
    <div className={`cell ${color}`}>

    </div>
  )
}

export default CellComponents