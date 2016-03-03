import React from 'react'
require ("bootstrap/dist/css/bootstrap.min.css")
require("./css.css")

export default class Mobile extends React.Component {
	render () {
		return (
			<div>
				<div className="m_top" >
					<img src={"./imgs/b1.gif"} style={{height:70, width:321}}/>
				</div>
				<div className="m_center">
					<div className="m_center_border">
						<img src={"./imgs/b2.gif"} style={{height:453, width:32}}/>
					</div>
					<div className="m_center_center" onDrop={this.drop} onDragOver={this.allowDrop} style={{float:"left"}} style={{float:"left"}}>
					</div>
					<div className="m_center_border">
						<img src={"./imgs/b4.gif"} style={{height:453, width:32}}/>
					</div>
				</div>
				<div className="m_bottom">
					<img src={"./imgs/b5.gif"} style={{height:77, width:321}}/>
				</div>
			</div>
		)
	};
	allowDrop(event)
	{
		event.preventDefault();
	};
}

