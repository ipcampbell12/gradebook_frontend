import { API_URL } from "./config";

//This file shouldn't know about the state
export default class NetworkCalls {

    //working
    static fetchTeacher(id) {
        return fetch(`${API_URL}/teacher/${id}`).then(resp => resp.json());

    }

    static fetchAllTeachers() {
        return fetch(`${API_URL}/teacher`).then(resp => resp.json());

    }

    static fetchTeachersStudents(id) {
        return fetch(`${API_URL}/teacherstudents/${id}`).then(resp => resp.json());

    }

    static fetchAssessments(id) {
        return fetch(`${API_URL}/teacherassessments/${id}`).then(resp => resp.json());

    }

    static fetchSubjects(id) {
        return fetch(`${API_URL}/teachersubjects/${id}`).then(resp => resp.json());

    }

    static fetchStudentsAssessments(id) {
        return fetch(`${API_URL}/student_assessment/${id}`).then(resp => resp.json());

    }

    static fetchGrades(teacher_id, subject_id) {
        return fetch(`${API_URL}/teacherstudents/${teacher_id}/grade/${subject_id}`).then(resp => resp.json());

    }
    static fetchAverageGrade(teacher_id, subject_id) {
        return fetch(`${API_URL}/teacherstudents/${teacher_id}/averagegrade/${subject_id}`).then(resp => resp.json());

    }
    static fetchAverageModuleScore(assessment_id, teacher_id) {
        return fetch(`${API_URL}/scoresbytest/${assessment_id}/teacher/${teacher_id}`).then(resp => resp.json());

    }

}