import React from 'react';

const Rank=({ name,entries })=>{
	return(<div className="tc">
		<div className='white f3'>{`${name},Your Current Entry Count is`}</div>
		<div className='white f2'><p>{entries}</p></div>
		</div>)
}
export default Rank	