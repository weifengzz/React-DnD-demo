import React from 'react'
import LeftList from './LeftList'
import Mobile from './Mobile'
require("./css.css")

export default React.createClass({
  render() {
    return (
    	<div>
		    <div id="left">
		      <LeftList/>
		    </div>
		    <div id="right">
		    	<Mobile/>
		    </div>
		  </div>
    )
  }
})
