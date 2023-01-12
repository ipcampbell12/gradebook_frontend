import React from 'react';
import { Typography } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';



const columns = [
    { field: 'fname', headerName: 'First Name', width: 170 },
    { field: 'lname', headerName: 'Last Name', width: 130 },
];

function GradeStudent({ teacher, students, onAdd }) {


    return (
        <div className="student-page">
            <Typography variant="h3" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Students'}</Typography>
            <div className="student-chart" style={{ height: 800, width: '100%' }}>
                <div className="students">
                    <DataGrid
                        rows={students}
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

export default GradeStudent;



