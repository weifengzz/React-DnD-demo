import React from 'react'
import LeftList from './LeftList'
import Container from './Container'
require("./css.css")

export default React.createClass({
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
