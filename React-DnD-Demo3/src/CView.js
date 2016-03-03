import React, { PropTypes, Component } from 'react';
import { DragSource } from 'react-dnd';

const style = {
  cursor: 'move',
  float: 'right',
  height: '20px',
  width: '20px'
};

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name
    };
  }
};

class CView extends Component {
  propTypes : {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isDropped: PropTypes.bool.isRequired
  };

  render() {
    const { name, isDropped, isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return connectDragSource(
      <img src={'./imgs/v.png'} style={{ ...style, opacity }} />
    );
  }
}

export default DragSource(props => props.type, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(CView)

  // {isDropped ?
  //         <s>{name}</s> :
  //         name
  //       }