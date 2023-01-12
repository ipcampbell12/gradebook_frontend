import React, { useState } from 'react';
import { Typography } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import AddAssessment from './AddAssessment';


const columns1 = [
    { field: 'fname', headerName: 'First Name', width: 170 },
    { field: 'lname', headerName: 'Last Name', width: 130 },
    { field: 'score', headerName: 'Score', width: 130 },
];

const columns2 = [
    { field: 'name', headerName: 'Assessment', width: 170 },
    { field: 'date', headerName: 'Date', width: 170 },
];

function Grade({ teacher, students, assessments, onAssessment }) {

    const [moduleState, setModuleState] = useState('')



    return (
        <div className="student-page2">
            <Typography variant="h4" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Grades'}</Typography>
            <div className="container">
                <div className="student-chart" >
                    <Typography varaint="h5" align="center"> Scores for {moduleState} </Typography>
                    <DataGrid
                        rows={students}
                        columns={columns1}
                        pageSize={8}
                        rowsPerPageOptions={[8]}
                    />
                </div>
                <div className="menu">

                </div>

                <div className="assessments">
                    <Typography varaint="h5" align="center"> Assessment List </Typography>
                    <div className="assessment-chart" >

                        <DataGrid
                            rows={assessments}
                            columns={columns2}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                    <div className="form">
                        <AddAssessment onAdd={onAssessment} onModule={setModuleState} />

                    </div>

                </div>



            </div>





        </div >

    );

}

export default Grade;