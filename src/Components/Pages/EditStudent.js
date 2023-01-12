import React from 'react';
import { Typography } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import AddStudent from './AddStudent';


const columns = [
    { field: 'fname', headerName: 'First Name', width: 170 },
    { field: 'lname', headerName: 'Last Name', width: 130 },
];

function Student({ teacher, students, onAdd }) {


    return (
        <div className="student-page1">
            <Typography variant="h3" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Students'}</Typography>
            <div className="student-chart" style={{ height: 600, width: '100%' }}>
                <div className="students">
                    <DataGrid
                        rows={students}
                        columns={columns}
                        pageSize={8}
                        rowsPerPageOptions={[8]}
                        checkboxSelection
                    />
                </div>
                <div className="form">
                    <AddStudent onAdd={onAdd} />
                </div>


            </div>

        </div>
    );
}

export default Student;



