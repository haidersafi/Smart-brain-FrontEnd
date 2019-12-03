import React from 'react';
import './facerecognition.css';

const Facerecognition=({imageUrl,box})=>{
	return(<div className='center ma'><div className="absolute mt2 ">
		<img id='imageInput' alt='' src={imageUrl} width='500px' height='auto' />
<div  className='bounding-box' style={{top:box.top_row,bottom:box.bottom_row,left:box.left_col,right:
	box.right_col}}></div>
		</div></div>)
}

export default Facerecognition