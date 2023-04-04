import React, { useState, useEffect } from 'react'

import './emailList.css'
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import InboxIcon from '@material-ui/icons/Inbox'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import PeopleIcon from '@material-ui/icons/People'
import SettingsIcon from '@material-ui/icons/Settings'
import Section from './Section.js'
import EmailRow from './EmailRow.js'
import { db } from './Firebase.js'



function EmailList() {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection("emails")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => setEmails(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        ));
    }, [])

  return (
    <div className='emailList'>
        <div className="emailList__settings">
            <div className="emailList__settingsLeft">
                <Checkbox />
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>

                <IconButton>
                    <RedoIcon />
                </IconButton>

                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>

            <div className="emailList_settingsRight">
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>

                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>

                <IconButton>
                    <KeyboardHideIcon />
                </IconButton>

                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>
        </div>

        <div className="emailList__sections">
            <Section Icon={InboxIcon} title="Primary" color="red" selected />
            <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
            <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
        </div>

        <div className="emailList__List">
        {emails.map(({id, data : {to, subject, message, timestamp}}) => (
                <EmailRow
                id={id}
                key={id} 
                title={to}
                subject={subject}
                description={message}
                time={new Date(timestamp?.seconds * 1000).toUTCString()}
                />
            ))}
            <EmailRow 

            />

        <EmailRow 
            id= "2"
            title = "second one"
            subject = "thsis is just the next"
            description = "so this one is going to longer for a  short test, so this one is going to longer for a  short test"
            time = "10pm"
            />
        <EmailRow 
            id= "2"
            title = "second one"
            subject = "thsis is just the next"
            description = "so this one is going to longer for a  short test, so this one is going to longer for a  short test"
            time = "10pm"
            />
        
        <EmailRow 
            id= "2"
            title = "second one"
            subject = "thsis is just the next"
            description = "so this one is going to longer for a  short test, so this one is going to longer for a  short test"
            time = "10pm"
            />

<EmailRow 
            id= "2"
            title = "second one"
            subject = "thsis is just the next"
            description = "so this one is going to longer for a  short test, so this one is going to longer for a  short test"
            time = "10pm"
            />

<EmailRow 
            id= "2"
            title = "second one"
            subject = "thsis is just the next"
            description = "so this one is going to longer for a  short test, so this one is going to longer for a  short test"
            time = "10pm"
            />
            <EmailRow 
            id= "2"
            title = "second one"
            subject = "thsis is just the next"
            description = "so this one is going to longer for a  short test, so this one is going to longer for a  short test"
            time = "10pm"
            />
            <EmailRow 
            id= "2"
            title = "second one"
            subject = "thsis is just the next"
            description = "so this one is going to longer for a  short test, so this one is going to longer for a  short test"
            time = "10pm"
            />
            <EmailRow 
            id= "2"
            title = "second one"
            subject = "thsis is just the next"
            description = "so this one is going to longer for a  short test, so this one is going to longer for a  short test"
            time = "10pm"
            />
            <EmailRow 
            id= "2"
            title = "second one"
            subject = "thsis is just the next"
            description = "so this one is going to longer for a  short test, so this one is going to longer for a  short test"
            time = "10pm"
            />
            <EmailRow 
            id= "2"
            title = "second one"
            subject = "thsis is just the next"
            description = "so this one is going to longer for a  short test, so this one is going to longer for a  short test"
            time = "10pm"
            />
            <EmailRow 
            id= "2"
            title = "second one"
            subject = "thsis is just the next"
            description = "so this one is going to longer for a  short test, so this one is going to longer for a  short test"
            time = "10pm"
            />
            <EmailRow 
            id= "2"
            title = "second one"
            subject = "thsis is just the next"
            description = "so this one is going to longer for a  short test, so this one is going to longer for a  short test"
            time = "10pm"
            />
            <EmailRow 
            id= "2"
            title = "second one"
            subject = "thsis is just the next"
            description = "so this one is going to longer for a  short test, so this one is going to longer for a  short test"
            time = "10pm"
            />
        </div>
    </div>
  )
}

export default EmailList
