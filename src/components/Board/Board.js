import React from 'react';
import PropTypes from 'prop-types';
import './Board.scss';
import boardShape from '../../helpers/propz/boardShape';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    setSingleBoard: PropTypes.func.isRequired,
    removeBoard: PropTypes.func.isRequired,
    editABoard: PropTypes.func.isRequired,
  }

  openSingleBoardEvent = (e) => {
    e.preventDefault();
    const { board, setSingleBoard } = this.props;
    setSingleBoard(board.id);
  }

  deleteBoardEvent = (e) => {
    e.preventDefault();
    const { board, removeBoard } = this.props;
    removeBoard(board.id);
  }

  editBoardEvent = (e) => {
    e.preventDefault();
    const { editABoard, board } = this.props;
    editABoard(board);
  }

  render() {
    const { board } = this.props;

    return (
      <div className="Board col-4">
        <div className="card">
          <div className="card-body">
            <button className="btn btn-danger" onClick={this.deleteBoardEvent}><i className="fas fa-dumpster"></i></button>
            <button className="btn btn-warning" onClick={this.editBoardEvent}><i className="fas fa-pencil-alt"></i></button>
            <h5 className="card-title">{board.name}</h5>
            <p className="card-text">{board.description}</p>
            <button className="btn btn-dark" onClick={this.openSingleBoardEvent}>View Pins</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
