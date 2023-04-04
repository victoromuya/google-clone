import React from 'react'
import './sendMail.css'
import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { closeSendMessage } from './features/mailSlice'
import { db } from './Firebase.js'
import firebase from 'firebase/compat/app'

function SendMail() {
    const dispatch = useDispatch()
    const { register, handleSubmit, watch,  errors } = useForm();

    const onSubmit = (formdata) =>{
        console.log(formdata)
        db.collection('emails').add({
            to : formdata.to,
            subject : formdata.subject,
            message : formdata.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        dispatch(closeSendMessage());
    }
  return (
    <div className='sendmail'>
        <div className="sendmail__header">
            <h3>New message</h3>
            <CloseIcon className="sendmail__close" onClick={() => dispatch(closeSendMessage())}/>
        </div>
        <form className='sendmail__form' onSubmit={handleSubmit(onSubmit)}>
            <input name='to' placeholder='to' type="text" ref={register({required : true})}/>
            { errors.to && <p className="sendmail__error">to is required</p> }

            <input name='subject' placeholder='subject' type="text" ref={register({required : true})}/>
            { errors.subject &&( <p className="sendmail__error">subject is required</p>) }

            <textarea name='message' placeholder='message' 
            type="text"  className='sendmail__message' ref={register({required : true})}/>
            { errors.message &&( <p className="sendmail__error">message is required</p>) }  

        <div className="sendmail__options">
            <Button className="sendmail__send" type="submit" variant='contained' color='primary'>Send</Button>
        </div>  
        </form>
        
    </div>
  )
}

export default SendMail
