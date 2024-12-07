import React from 'react'

const Contact = () => {
  return (
    <div>

      <div className='contact-form'>
        <h2 className='fade-in'>contact us</h2>
        <form >
          <input type="text"  placeholder='full name' required/>
          <input type="email" placeholder='email' required/>
          <input type="text"  placeholder='phone number'/>
          <textarea placeholder='your message' rows={5} required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact
