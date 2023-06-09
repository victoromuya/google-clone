import React from 'react'
import './emailRow.css'
import { Checkbox, IconButton } from '@material-ui/core'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { selectMail } from './features/mailSlice'

function EmailRow({id, title, subject, description, time}) {
const history = useNavigate();
const dispatch = useDispatch();

const openMail = () =>{
    dispatch(
        selectMail({
            id, title, subject, description, time
        })
    );
    history("/mail");
}

  return (
    <div className='emailRow' onClick={openMail}>
        <div className="emailRow__options">
            <Checkbox />
            <IconButton>
                <StarBorderOutlinedIcon />
            </IconButton>

            <IconButton>
                <LabelImportantOutlinedIcon />
            </IconButton>
        </div>

        <h3 className="emailRow__title">
            {title}
        </h3>

        <div className="emailRow__message">
            <h4>{subject} 
            <span className="emailRow__description">
                {description}
            </span>
            </h4>
            
        </div>

        <div className="emailRow__time">
                {time}
        </div>
    </div>
  )
}

export default EmailRow
