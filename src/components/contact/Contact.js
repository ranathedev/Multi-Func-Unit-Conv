import PropTypes from 'prop-types'
import { useState } from 'react'
import clsx from 'clsx'

import { db } from '../../../firebase-config'
import { collection, addDoc } from 'firebase/firestore'

import MailIcon from '../../assets/mail.svg'
import FacebookIcon from '../../assets/facebook.svg'
import TwitterIcon from '../../assets/twitter.svg'

import stl from './Contact.module.scss'

const Contact = ({ customClass }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const collectionRef = collection(db, 'messages')

  const submitHandler = async e => {
    e.preventDefault()
    await addDoc(collectionRef, { name, email, msg })

    alert('Message Received.')

    setName('')
    setEmail('')
    setMsg('')
  }

  return (
    <div className={clsx(stl.container, customClass)}>
      <form onSubmit={submitHandler}>
        <h1>Let's Connect</h1>
        <label>Your Name</label>
        <input
          type="text"
          placeholder="John Doe"
          required
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
        />
        <label>Your Email</label>
        <input
          type="email"
          placeholder="johndoe@example.com"
          required
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
        />
        <label>Your Message</label>
        <textarea
          placeholder="Please make it short and meaningful."
          required
          value={msg}
          onChange={e => {
            setMsg(e.target.value)
          }}
        />
        <input type="submit" value="Send" />
      </form>
      <div className={stl.divider}></div>
      <div className={stl.contact}>
        <div>
          <h1>More ways to connect</h1>
        </div>
        <div className={stl.followBtn}>
          <a href="mailto:intizaralirana2@gmail.com" target="_blank">
            <span>Write us an email</span>
            <div className={stl.iconContainer}>
              <MailIcon />
            </div>
          </a>
        </div>
        <div className={stl.followBtn}>
          <a href="https://proxar.ranaintizar.com/me/facebook" target="_blank">
            <span>Connect us on</span>
            <div className={stl.iconContainer}>
              <FacebookIcon />
            </div>
          </a>
        </div>
        <div className={stl.followBtn}>
          <a href="https://proxar.ranaintizar.com/me/twitter" target="_blank">
            <span>Follow us on</span>
            <div className={stl.iconContainer}>
              <TwitterIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

Contact.propTypes = {
  customClass: PropTypes.string,
}

export default Contact
