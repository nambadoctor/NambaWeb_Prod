import React from 'react'
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';

export default function NoAppointmentsView() {

    return (
        <div style={{textAlign: 'center'}}>
            <PlaylistRemoveIcon style={{height: 100, width: 100, color: "#0863e4"}}></PlaylistRemoveIcon>
            <div style={{color: "#0863e4", fontSize: 20, marginTop: 10}}>NO APPOINTMENTS</div>
        </div>
    )
}
