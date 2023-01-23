// function fetchTeacher(teacherId) {
//     return fetch(url).then(resp => resp.json());
// }


//This file shouldn't know about the state
export default class NetworkCalls {


    static async fetchAssessments() {
        return fetch(`http://127.0.0.1:5001/assessment`).then(resp => resp.json());

    }

    static async fetchStudentsAssessments() {
        return fetch(`http://127.0.0.1:5001/student_assessment`).then(resp => resp.json());

    }

    static async fetchTeacher(id) {
        return fetch(`http://127.0.0.1:5001/teacher/${id}`).then(resp => resp.json());

    }

    static async fetchTeachersStudents(id) {
        return fetch(`http://127.0.0.1:5001/teacherstudents/${id}`).then(resp => resp.json());

    }

    static async fetchGrades(id) {
        return fetch(`http://127.0.0.1:5001/teacherstudents/${id}/grades`).then(resp => resp.json());

    }

}