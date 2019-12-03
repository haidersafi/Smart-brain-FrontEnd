import React from 'react';
import './Imagelinkform.css'

const Imagelinkform=({onInputChange,onSubmit})=>{
	return(
		<div>
		<h2 className='tc'>This Magic Brain will detect faces in your pictures.Give it a try!</h2>
		<div className="center ">
		<div className=' form center	w-50 pa4 br3 shadow-5'>
		<input type='text' className="f4 pa2 ba b--white w-70 center" onChange={onInputChange}/>
		<button className="w-30 f4 grow link ph3 pv2  white bg-light-purple ba b--light-purple" onClick={onSubmit}>Detect</button></div></div></div>)
}
export default Imagelinkform