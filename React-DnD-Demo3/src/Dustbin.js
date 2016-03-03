import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';

const style = {
  width: '50px',
  height: '50px',
  color: 'white',
  textAlign: 'center',
  fontSize: '1rem',
  padding: '5px',
  lineHeight: 'normal',
  float: 'left'
};

const dustbinTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem());
  }
};

class Dustbin extends Component {
  propTypes : {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    accepts: PropTypes.array.isRequired,
    lastDroppedItem: PropTypes.object,
    onDrop: PropTypes.func.isRequired
  };

  render() {
    const { accepts, isOver, canDrop, connectDropTarget, lastDroppedItem } = this.props;
    const isActive = isOver && canDrop;

    let backgroundColor = '#ffffff';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    return connectDropTarget(
      <div style={{ ...style, backgroundColor }}>
     

        {lastDroppedItem &&
          (<div style={{border: '1px dashed gray', height: 40, width: 40, margin: 0}}></div>)
        }
      </div>
    );
  }
}

export default DropTarget(props => props.accepts, dustbinTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(Dustbin)

   // {isActive ?
   //        'Release to drop' :
   //        'This dustbin accepts: ' + accepts.join(', ')
   //      }