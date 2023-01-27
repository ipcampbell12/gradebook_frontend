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
import APIServce from '../../APIService';



function AddScores({ teacher, students, onHide, moduleState, setAddShow, titleShow }) {

    //New Student Form
    //const [studentIds, setStudentIds] = useState([])
    const [scores, setScores] = useState([])

    //might need to do an assessment update call
    // const [scored, setScored] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()

        //console.log(scores)

        const teacherId = teacher.id
        //console.log(`The module id is ${newModuleState.id}`)
        const assessmentId = moduleState.id

        // setScored(false)

        APIServce.addClassScores(teacherId, assessmentId, scores)
            .then(response => console.log(response))
            .catch(error => console.log(error))



    }

    // console.log(scores)

    return (

        <TableContainer component={Paper}>
            {titleShow && <Typography> Scores for {moduleState === undefined ? "No assessments have been added yet" : moduleState.name}</Typography>}

            <Form action="" onSubmit={onSubmit} className="form">
                <Table sx={{ maxWidth: 400 }} size="small" aria-label="simple table" align="center">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Score</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {students.map((student) => {
                            return <TableRow key={student.id}>
                                <TableCell align="center">{student.fname}</TableCell>
                                <TableCell align="center" >{student.lname}</TableCell>
                                <TableCell align="center">
                                    <Form.Group className="mb-1" >
                                        <Form.Control type="number" placeholder="0" id={student.id} name="score" onChange={(e) => {
                                            setScores([...scores, { "score": +e.target.value }]);
                                        }} />
                                    </Form.Group>
                                </TableCell>
                            </TableRow>
                        })}

                    </TableBody>
                </Table>

                <Button variant="primary" type="submit" onClick={e => { onSubmit(e); onHide(); setAddShow(true) }}>
                    Add All Scores
                </Button>

            </Form>
        </TableContainer>



    );
}

export default AddScores;

// <Form.Group className="mb-3">
// <Form.Label>Assessment Name</Form.Label>
// <Form.Control type="text" placeholder="Assessment Name" value={name} onChange={(e) => {
//     setName(e.target.value)
// }} />
// </Form.Group>