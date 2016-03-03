import React, { PropTypes, Component } from 'react';
import { DragSource } from 'react-dnd';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  cursor: 'move',
  float: 'right'
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
      <div style={{ ...style, opacity }}>
        {isDropped ?
          <s>{name}</s> :
          name
        }
      </div>
    );
  }
}

export default DragSource(props => props.type, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(CView)