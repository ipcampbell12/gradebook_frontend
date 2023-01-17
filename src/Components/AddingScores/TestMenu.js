import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

function TestMenu({ assessments, onModule }) {



    const onClick = (e) => {
        const value = e.target.value
        onModule(value)

    }


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
                        value={assessments.name}
                    >
                        {
                            assessments.map(assessment => {

                                return assessment.scored === true && (<MenuItem id={`assessment-${assessment.id}`} key={assessment.id} value={assessment} onChange={onClick}>{assessment.name}</MenuItem>)


                            })

                        }


                    </Select>
                </FormControl>
            </Box>
            <Typography variant="h6" align="center"> Unscored Assessments </Typography>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        onChange={onClick}
                        value={assessments.name}
                    >
                        {
                            assessments.map(assessment => {

                                return assessment.scored === false && (<MenuItem id={`assessment-${assessment.id}`} key={assessment.id} value={assessment} onChange={onClick}>{assessment.name}</MenuItem>)


                            })

                        }


                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default TestMenu;