import React from 'react';
import { Typography } from "@mui/material"
import GradeStudent from "./GradeStudent"



function Grade({ teacher, students }) {
    return (
        <div>
            <Typography variant="h3" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Grades'}</Typography>
            <GradeStudent />
        </div>
    );
}

export default Grade;