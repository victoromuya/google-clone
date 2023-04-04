
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import EmailIcon from '@material-ui/icons/Email'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import ErrorIcon from '@material-ui/icons/Error'
import DeleteIcon from '@material-ui/icons/Delete'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import PrintIcon from '@material-ui/icons/Print'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import React from 'react'
import './mail.css'
import { IconButton } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectOpenMail } from './features/mailSlice.js'

function Mail() {

  const history = useNavigate();
  const selectedMail = useSelector(selectOpenMail)

  return (
    <div className='mail'>
        <div className="mail__tools">
          <div className="mail__toolsLeft">
            <IconButton onClick={() => history("/")}>
              <ArrowBackIcon />
            </IconButton>

            <IconButton>
              <MoveToInboxIcon />
            </IconButton>

            <IconButton>
              <ErrorIcon />
            </IconButton>

            <IconButton>
              <DeleteIcon />
            </IconButton>

            <IconButton>
              <EmailIcon />
            </IconButton>

            <IconButton>
              <WatchLaterIcon />
            </IconButton>

            <IconButton>
              <LabelImportantIcon />
            </IconButton>

            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>

          <div className="mail__toolsRight">
          <IconButton>
              <UnfoldMoreIcon />
            </IconButton>

            <IconButton>
              <PrintIcon />
            </IconButton>

            <IconButton>
              <ExitToAppIcon />
            </IconButton>
          </div>

        </div>

        <div className="mail__body">
          <div className="mail__bodyHeader">
            <h2>{selectedMail?.subject}</h2>
            <LabelImportantIcon className='mail__important' />
            <p>{selectedMail?.to}</p>
            <p className='mail__time'>{selectedMail?.time}</p>
          </div>
          <div className="mail__message">
              <p>{selectedMail?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Mail
