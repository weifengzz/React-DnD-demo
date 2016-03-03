import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import ImageBox from './ImageBox';

class Container extends Component {
  render() {
    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Dustbin />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <ImageBox name='DB1' src='./img1.jpg'/>
          <ImageBox name='DB2' src="./img2.jpg"/>
          <ImageBox name='DB3' src="./img3.jpeg"/>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container)