import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import Button from 'react-bootstrap/Button';

function SubjectMenu({ subjects, currentSubject, setCurrentSubject, handleSubjectUpdateOpen, setSubjectId }) {

    const onClick = (e) => {
        const value = e.target.value
        setCurrentSubject(value)
        // console.log(value)

    }



    return (
        <div className="subject-menu">
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

                                <Button className="btn-danger menu-2" onClick={() => { setSubjectId(subject.id); handleSubjectUpdateOpen(); }}> Delete </Button>
                                <Button className="btn-primary menu-2" onClick={() => { setSubjectId(subject.id); handleSubjectUpdateOpen(); }}> View/Update </Button>


                            </MenuItem>)


                        })

                    }
                </Select>
            </FormControl>
        </div>
    );
}

export default SubjectMenu;