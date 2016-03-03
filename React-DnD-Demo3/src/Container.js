import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import CView from './CView';
import ItemTypes from './ItemTypes';
import update from 'react/lib/update';
require ("bootstrap/dist/css/bootstrap.min.css")
require("./css.css")

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dustbins: [
        { accepts: [ItemTypes.View], lastDroppedItem: null }
      ],
      boxes: [
        { name: 'View', type: ItemTypes.View },
      ],
      droppedBoxNames: []
    };
  }

  isDropped(boxName) {
    return this.state.droppedBoxNames.indexOf(boxName) > -1;
  }

  render() {
    const { boxes, dustbins } = this.state;

    return (
      <div>
        <div className="m_top" >
          <img src={"./imgs/b1.gif"} style={{height:70, width:321}}/>
        </div>
        <div className="m_center">
          <div className="m_center_border">
            <img src={"./imgs/b2.gif"} style={{height:453, width:32}}/>
          </div>
          <div className="m_center_center" style={{float:"left"}} style={{float:"left"}}>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              {dustbins.map(({ accepts, lastDroppedItem }, index) =>
                <Dustbin accepts={accepts}
                         lastDroppedItem={lastDroppedItem}
                         onDrop={(item) => this.handleDrop(index, item)}
                         key={index} />
              )}
            </div>

            <div style={{ overflow: 'hidden', clear: 'both' }}>
              {boxes.map(({ name, type }, index) =>
                <CView name={name}
                     type={type}
                     isDropped={this.isDropped(name)}
                     key={index} />
              )}
            </div>
          </div>
          <div className="m_center_border">
            <img src={"./imgs/b4.gif"} style={{height:453, width:32}}/>
          </div>
        </div>
        <div className="m_bottom">
          <img src={"./imgs/b5.gif"} style={{height:77, width:321}}/>
        </div>
      </div>
    );
  }

  handleDrop(index, item) {
    const { name } = item;

    this.setState(update(this.state, {
      dustbins: {
        [index]: {
          lastDroppedItem: {
            $set: item
          }
        }
      },
      droppedBoxNames: name ? {
        $push: [name]
      } : {}
    }));
  }
}
export default (Container)


