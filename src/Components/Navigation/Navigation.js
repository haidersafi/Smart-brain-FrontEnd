import React from 'react'

const Navigation=({onRouteChange,signedIn})=>{
	console.log('Navi',signedIn	)
	return(signedIn===true)?(<nav className='flex justify-end'><p className='f3 link dim dark-black underline pa3 pointer ' onClick={()=>onRouteChange('signInPage')}>Sign Out</p></nav>)
	:(<h1 className='tc mt5  f1  ttu tracked'>Face Recognition Brain</h1>)	
}
export default Navigation