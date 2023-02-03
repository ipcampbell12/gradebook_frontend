import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

function SubjectMenu({ subjects, currentSubject, setCurrentSubject }) {

    const onClick = (e) => {
        const value = e.target.value
        setCurrentSubject(value)
        // console.log(value)

    }


    return (
        <div>
            <Typography variant="h6" align="center"> Subjects </Typography>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={onClick}
                    value={subjects.find(subject => subject.id === currentSubject.id)}
                >
                    {
                        subjects.map(subject => {

                            return (<MenuItem className="menu" id={`assessment-${subject.id}`} key={subject.id} value={subject} onChange={onClick}>
                                {subject.name}

                            </MenuItem>)


                        })

                    }
                </Select>
            </FormControl>
        </div>
    );
}

export default SubjectMenu;