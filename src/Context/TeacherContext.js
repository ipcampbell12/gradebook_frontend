import React, { createContext, useState } from 'react';
import NetworkCalls from '../networkCalls';

export const TeacherContext = createContext();

function TeacherContextProvider(props) {

    const [teacher, setTeacher] = useState('')

    const selectTeacher = (id) => {
        console.log(`The teacher id sent to the server is ${id}`)
        NetworkCalls.fetchTeacher(id).then(response => setTeacher(response))
    }

    //console.log(`Teacher context teacher is ${teacher.id}`)
    return (
        <TeacherContext.Provider value={{ teacher, selectTeacher }}>
            {props.children}
        </TeacherContext.Provider>
    )
}

export default TeacherContextProvider;