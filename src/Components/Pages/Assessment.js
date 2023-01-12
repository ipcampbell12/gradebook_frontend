import React from 'react';
import { Typography } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import AddAssessment from './AddAssessment'

const columns = [
    { field: 'name', headerName: 'Assessment Title', width: 170 },
    { field: 'date', headerName: 'Date Created', width: 130 },
    { field: 'subject_id', headerName: 'Subject Id', width: 130 },
];


function Assessment({ teacher, assessments, onAdd }) {
    return (
        <div className="student-page">
            <Typography variant="h3" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Assessments'}</Typography>
            <div className="student-chart" style={{ height: 800, width: '100%' }}>
                <div className="students">
                    <DataGrid
                        rows={assessments}
                        columns={columns}
                        pageSize={12}
                        rowsPerPageOptions={[12]}
                        checkboxSelection
                    />
                </div>
                <div className="form">

                </div>


            </div>

        </div>
    );
}

export default Assessment;