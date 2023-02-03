// function fetchTeacher(teacherId) {
//     return fetch(url).then(resp => resp.json());
// }


//This file shouldn't know about the state
export default class NetworkCalls {

    //working
    static fetchTeacher(id) {
        return fetch(`http://127.0.0.1:5001/teacher/${id}`).then(resp => resp.json());

    }

    static fetchAllTeachers() {
        return fetch(`http://127.0.0.1:5001/teacher`).then(resp => resp.json());

    }

    static fetchTeachersStudents(id) {
        return fetch(`http://127.0.0.1:5001/teacherstudents/${id}`).then(resp => resp.json());

    }

    static fetchAssessments(id) {
        return fetch(`http://127.0.0.1:5001/teacherassessments/${id}`).then(resp => resp.json());

    }

    static fetchSubjects(id) {
        return fetch(`http://127.0.0.1:5001/teachersubjects/${id}`).then(resp => resp.json());

    }

    static fetchStudentsAssessments(id) {
        return fetch(`http://127.0.0.1:5001/student_assessment/${id}`).then(resp => resp.json());

    }

    static fetchGrades(teacher_id, subject_id) {
        return fetch(`http://127.0.0.1:5001/teacherstudents/${teacher_id}/grade/${subject_id}`).then(resp => resp.json());

    }
    static fetchAverageGrade(teacher_id, subject_id) {
        return fetch(`http://127.0.0.1:5001/teacherstudents/${teacher_id}/averagegrade/${subject_id}`).then(resp => resp.json());

    }
    static fetchAverageModuleScore(assessment_id, teacher_id) {
        return fetch(`http://127.0.0.1:5001/scoresbytest/${assessment_id}/teacher/${teacher_id}`).then(resp => resp.json());

    }

}