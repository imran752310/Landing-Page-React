import React from 'react'

const Footer = () => {
  return (
    <div>
         <section className='section bg-dark text-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 '>
                <h6>Company Information</h6>
                <hr/>
                <p className='text-white'>Bootstrap is a free and buttons, navigation, and other interface components.open-source CSS framework directed at responsive,</p>
            </div>
            <div className='col-md-4 '>
                <h6>Quick Links</h6>
                <hr/>
                <div><a>Home</a></div>
                <div><a>About</a></div>
                <div><a>Contact</a></div>
                <div><a>Blog</a></div>
            </div>
            <div className='col-md-4'>
                <h6>Contact Information</h6>
                <hr/>
                <div><p className='text-white mb-1'>Ghalegay Swat </p></div>
                <div><p className='text-white mb-1'>03343545655 </p></div>
                <div><p className='text-white mb-1'>243546 </p></div>
                <div><p className='text-white mb-1'>123abc@gmail.com </p></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer