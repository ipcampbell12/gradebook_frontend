import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function AddStudent({ onAdd }) {

    //New Student Form
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!firstName || !lastName) {
            return "Add all fields"
        }

        onAdd({ firstName, lastName })

        setFirstName('')
        setLastName('')
    }


    return (
        <form action="" onSubmit={onSubmit}>
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">


                <TextField id="outlined-basic" label="First Name" variant="outlined" value={firstName} onChange={(e) => {
                    setFirstName(e.target.value)
                }} />
                <TextField id="outlined-basic-2" label="Last Name" variant="outlined" value={lastName} onChange={(e) => {
                    setLastName(e.target.value)
                }} />
                <Button variant="contained">Add Student</Button>




            </Box>
        </form>
    );
}