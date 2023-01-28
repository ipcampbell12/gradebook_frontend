import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import Button from 'react-bootstrap/Button';

function TestMenu({ assessments, onModule, setAId, handleDeleteOpen }) {

    //Assessments is not getting updated at the same time as the assessemnts get deleted

    //This shows the updated state when I add a new assessment
    console.log(assessments)

    const onClick = (e) => {
        const value = e.target.value
        onModule(value)

    }

    //Make sure you ahve some kind of correcte default value in the value attribute for the select tag

    return (
        <div className="test-menu">
            <Typography variant="h6" align="center"> Assessments </Typography>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        onChange={onClick}
                        value={"Choose an assessment"}
                    >
                        {
                            assessments.map(assessment => {

                                return (<MenuItem className="menu" id={`assessment-${assessment.id}`} key={assessment.id} value={assessment}>
                                    {assessment.name}

                                    <Button className="btn-danger menu-2" onClick={() => { setAId(assessment.id); handleDeleteOpen(); }}> Delete </Button>
                                    <Button className="btn-primary menu-2"> View/Update </Button>

                                </MenuItem>)


                            })

                        }


                    </Select>
                </FormControl>
            </Box>

        </div>
    );
}

export default TestMenu;


