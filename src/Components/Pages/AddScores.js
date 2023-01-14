import React, { useState } from 'react';
import { Typography } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function AddScores({ students, assessments }) {

    const [moduleState, setModuleState] = useState('')
    const [scores, setScores] = useState([
        { grade: 0 }
    ])

    const handleFormChange = (index, event) => {
        let data = [...scores]
        data[index][event.target.name] = event.target.value
        setScores(data)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        console.log(scores)

    }




    return (
        <div className="student-chart" >
            <Typography variant="h5" align="center"> Scores for {moduleState} </Typography>
            <TableContainer component={Paper}>
                <Form action="" onSubmit={onSubmit} className="form">
                    <Table sx={{ maxWidth: 300 }} size="small" aria-label="simple table" align="center">
                        <TableHead>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Score</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {students.map((student, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">{student.fname}</TableCell>
                                    <TableCell align="center">{student.lname}</TableCell>
                                    <TableCell align="center">
                                        <Form.Group className="mb-1" >
                                            <Form.Control type="number" placeholder="0" id={`student-${student.id}`} name="grade" value={student.grade} onChange={event => handleFormChange(index, event)} />
                                        </Form.Group>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                    <Button variant="primary" type="submit" onClick={onSubmit}>
                        Add All Scores
                    </Button>
                </Form>
            </TableContainer>

        </div>
    );
}

export default AddScores;