// function fetchTeacher(teacherId) {
//     return fetch(url).then(resp => resp.json());
// }


//This file shouldn't know about the state
export default class NetworkCalls {

    //working
    static fetchTeacher(id) {
        return fetch(`http://127.0.0.1:5001/teacher/${id}`).then(resp => resp.json());

    }

    //working
    static fetchTeachersStudents(id) {
        return fetch(`http://127.0.0.1:5001/teacherstudents/${id}`).then(resp => resp.json());

    }

    static fetchAssessments() {
        return fetch("http://127.0.0.1:5001/assessment").then(resp => resp.json());

    }

    static fetchSubjects() {
        return fetch("http://127.0.0.1:5001/subject").then(resp => resp.json());

    }

    static fetchStudentsAssessments() {
        return fetch(`http://127.0.0.1:5001/student_assessment`).then(resp => resp.json());

    }

    static fetchGrades(teacher_id, subject_id) {
        return fetch(`http://127.0.0.1:5001/teacherstudents/${teacher_id}/grade/${subject_id}`).then(resp => resp.json());

    }
    static fetchAverageGrade(teacher_id, subject_id) {
        return fetch(`http://127.0.0.1:5001/teacherstudents/${teacher_id}/averagegrade/${subject_id}`).then(resp => resp.json());

    }
    static fetchAverageModuleScore(id) {
        return fetch(`http://127.0.0.1:5001/scoresbytest/${id}`).then(resp => resp.json());

    }

}