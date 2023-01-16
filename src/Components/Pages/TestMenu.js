import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

function TestMenu({ assessments }) {
    return (
        <div>
            <Typography variant="h6" align="center"> Unscored Assessments </Typography>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    >
                        {
                            assessments.map(assessment => {

                                return <MenuItem id={`assessment-${assessment.id}`} value={assessment.name}>{assessment.name}</MenuItem>


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
                    >
                        {
                            assessments.map(assessment => {

                                return <MenuItem id={`assessment-${assessment.id}`} value={assessment.name}>{assessment.name}</MenuItem>


                            })

                        }


                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default TestMenu;