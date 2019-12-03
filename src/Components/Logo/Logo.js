import React from 'react'
import Tilt from 'react-tilt'
import	'./Logo.css'
import brain from './brain.png'
const Logo=()=>{
return(<div className='ma4 mt2'>
<Tilt className="Tilt br2 shadow-2 flex justify-center items-center" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner"><img className='w-100'   alt='logo' src={brain}/></div>
</Tilt>
	</div>)
}
export default Logo