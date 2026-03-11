import '../styles/components/contact.css'
import React, { useEffect,useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {

    const formRef = useRef();

    const [formData, setFormData] = useState({
        name:'',
        email: '',
        message: '',
        user_nickname: '',
    })

    const [startTime, setStartTime] = useState(0)
    const [status, setStatus] =useState({ type: '', msg: '' })

    useEffect(() => {
        setStartTime(Date.now())
    }, [])

    const handleChange = (e) => {
        setFormData ({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const timeTaken = (Date.now() - startTime) /1000
        if (formData.user_nickname) {
            console.log('Bot detected, form not submitted')
            setStatus({ type: 'success', msg: 'Your message has been sent!' })
            return
        }
        if(timeTaken < 3) {
            console.log('The bot was caught: Filling out the form too quickly.')
            setStatus({ type: 'error', msg: "Please don't rush while filling out the form." })
            return;
        }

        setStatus({ type: 'loading', msg: 'Sending...' })
      try {
        
        const result = await emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        console.log('Success:', result.text);
        setStatus({ 
            type: 'success', 
            msg: "Your message has been delivered! I'll get back to you soon." 
        });
        setFormData({ name: '', email: '', message: '', user_nickname: '' });

    } catch (error) {
        console.error('Error:', error);
        setStatus({ 
            type: 'error', 
            msg: "Something went wrong. Please try again later." 
        });
    }
    }   
    
    return (
        <section id="contact">
            <div>
                <div className="contact">
                    <span className="line"></span>
                    <h2 className="sub-title">Let's work together...</h2>
                </div>
                <p className="info">
                    Feel free to reach out if you'd like to collaborate or just say hi!
                </p>
            </div>

            <form  ref={formRef} onSubmit={handleSubmit}>
                <div className='hidden-field' aria-hidden='true'>
                    <input type='text' name='user_nickname' value={formData.user_nickname} onChange={handleChange} tabIndex='-1' autoComplete='off' />
                </div>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" name="name" id="name" required 
                    value={formData.name} onChange={handleChange} 
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="email" name="email" id="email" required 
                    value={formData.email} onChange={handleChange} 
                />

                <label htmlFor="message">Message</label>
                <textarea 
                    name="message" id="message" cols="13" rows="4" required 
                    value={formData.message} onChange={handleChange}
                ></textarea>

                <button type="submit" className="btn" disabled={status.type === 'loading'}>
                    {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {status.msg && (
                    <p className={`status-msg ${status.type}`}>
                        {status.msg}
                    </p>
                )}
            </form>
        </section>
    )
}

export default Contact
