import React from 'react'
require ("bootstrap/dist/css/bootstrap.min.css")
require("./css.css")

export default class LeftList extends React.Component {
	render () {
		return (
			<div>
	  		<div className="list-group" style={{width:150, margin: 20}}>
				  <span id="sp-drag1" className="list-group-item">
				  	View
				  	<img src={"./imgs/v.png"} className="toolsImg" id="drag1" draggable={true}></img>
				  </span>
				  <span  id="sp-drag2" className="list-group-item">
				  	Image
				  	<img src={"./imgs/img.png"} className="toolsImg" id="drag2" draggable={true}></img>
				  </span>
				   <span id="sp-drag3" className="list-group-item">
				  	Text
				  	<img src={"./imgs/txt.png"} className="toolsImg" id="drag3" draggable={true}></img>
				  </span>
				  <span id="sp-drag4" className="list-group-item">
				  	TextInput
				  	<img src={"./imgs/txtInput.png"} className="toolsImg" id="drag4" draggable={true}></img>
				  </span>
				   <span className="list-group-item">
				  	View
				  	<img src={"./imgs/v.png"} className="toolsImg"></img>
				  </span>
				  <span className="list-group-item">
				  	Image
				  	<img src={"./imgs/img.png"} className="toolsImg"></img>
				  </span>
				   <span className="list-group-item">
				  	Text
				  	<img src={"./imgs/txt.png"} className="toolsImg"></img>
				  </span>
				  <span className="list-group-item">
				  	TextInput
				  	<img src={"./imgs/txtInput.png"} className="toolsImg"></img>
				  </span>
				   <span className="list-group-item">
				  	View
				  	<img src={"./imgs/v.png"} className="toolsImg"></img>
				  </span>
				  <span className="list-group-item">
				  	Image
				  	<img src={"./imgs/img.png"} className="toolsImg"></img>
				  </span>
				   <span className="list-group-item">
				  	Text
				  	<img src={"./imgs/txt.png"} className="toolsImg"></img>
				  </span>
				  <span className="list-group-item">
				  	TextInput
				  	<img src={"./imgs/txtInput.png"} className="toolsImg"></img>
				  </span>
				  <span className="list-group-item">
				  	View
				  	<img src={"./imgs/v.png"} className="toolsImg"></img>
				  </span>
				  <span className="list-group-item">
				  	Image
				  	<img src={"./imgs/img.png"} className="toolsImg"></img>
				  </span>
				   <span className="list-group-item">
				  	Text
				  	<img src={"./imgs/txt.png"} className="toolsImg"></img>
				  </span>
				  <span className="list-group-item">
				  	TextInput
				  	<img src={"./imgs/txtInput.png"} className="toolsImg"></img>
				  </span>
				</div>
			</div>
		)
	};
}