import React, { createContext, useState, useEffect } from 'react';
import NetworkCalls from '../networkCalls';

export const TeacherContext = createContext();

function TeacherContextProvider(props) {

    const getIncomeValues = () => {
        const storedValues = localStorage.getItem('currentTeacher');
        return storedValues ? JSON.parse(storedValues) : [];
    }

    const [teacher, setTeacher] = useState(getIncomeValues)

    useEffect(() => {
        localStorage.setItem('currentTeacher', JSON.stringify(teacher))
    }, [teacher])

    console.log(`The TeacherContext context is ${teacher.fname}`)

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