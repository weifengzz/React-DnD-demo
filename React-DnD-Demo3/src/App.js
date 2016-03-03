import React from 'react'
import LeftList from './LeftList'
import Container from './Container'
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
require("./css.css")

var App = React.createClass({
  render() {
    return (
    	<div>
		    <div id="left">
		      <LeftList/>
		    </div>
		    <div id="right">
		    	<Container/>
		    </div>
		  </div>
    )
  }
})
export default DragDropContext(HTML5Backend)(App)