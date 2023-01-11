import React from 'react';
import { Typography } from "@mui/material"



function Score({ teacher, students }) {
    return (
        <div>
            <Typography variant="h3" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Scores for Students'}</Typography>
        </div>
    );
}

export default Score;