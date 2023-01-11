import React from 'react';
import { Typography } from "@mui/material"




function Student({ teacher, students }) {
    return (
        <div>
            <Typography variant="h3" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Students'}</Typography>

        </div>
    );
}

export default Student;