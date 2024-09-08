import React from 'react'
import About from '../nav/Screenshot_m.png'
import Footer from '../footer'
function about() {
  return (
 <>
 <div>
 <div 
        className="flex justify-center items-center bg-center  " 
        style={{ 
          backgroundImage: `url(${About})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: '',
          left: '',
          height: '600px',
          width: '1350px',
          display: 'flex', 
          margin: '100px 20px 40px 50px',
          // margin : '20px',
          borderRadius: '30px',
        }}>
</div>
<div className='ml-20 mb-6 '> <Footer  /></div>
    </div></>
  )
}

export default about
