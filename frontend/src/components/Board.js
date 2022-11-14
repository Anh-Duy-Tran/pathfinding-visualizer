import Row from "./Row";

const Board = ({ boardDimensions }) => {

  return (
    <div id="Board">
    {
      Array.from(Array(boardDimensions.row)).map((x) => 
        <Row key={x} column={boardDimensions.column} x={x}></Row>
      )
    }
    </div>
  );
}

export default Board