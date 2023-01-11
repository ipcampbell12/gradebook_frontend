import React from 'react';
import { Typography } from "@mui/material"



function Assessment({ teacher, students }) {
    return (
        <div>
            <Typography variant="h3" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Assessments'}</Typography>

        </div>
    );
}

export default Assessment;