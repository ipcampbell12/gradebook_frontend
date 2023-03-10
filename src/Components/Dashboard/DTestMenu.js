import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';


function DTestMenu({ assessments, onModule, currentSubject }) {


    const onClick = (e) => {
        const value = e.target.value
        onModule(value)

    }

    // console.log(`Test menu subject state is ${currentSubject.name}`)
    // console.log(assessments)

    return (
        <div>
            <Typography variant="h6" align="center"> Scored Assessments </Typography>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        onChange={onClick}


                    >
                        {
                            assessments.map(assessment => {

                                return assessment.subject.id === currentSubject.id && (<MenuItem id={`assessment-${assessment.id}`} key={assessment.id} value={assessment} onChange={onClick}>{assessment.name}</MenuItem>)


                            })

                        }


                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default DTestMenu;