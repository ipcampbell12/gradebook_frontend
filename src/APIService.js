import { API_URL } from "./config"


export default class APIServce {
    static addStudent(body) {
        return fetch(`${API_URL}/student`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static addTeacher(body) {
        return fetch(`${API_URL}/teacher`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }
    static updateTeacher(id, body) {
        return fetch(`${API_URL}/teacher/${id}`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static deleteTeacher(id) {
        return fetch(`${API_URL}/teacher/${id}`, {
            'method': 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        })
            .then(resp => resp.json())
    }

    static addSubject(body) {
        return fetch(`${API_URL}/subject`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static updateSubject(id, body) {
        return fetch(`${API_URL}/subject/${id}`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static deleteSubject(id) {
        return fetch(`${API_URL}/subject/${id}`, {
            'method': 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
    }

    static updateStudent(id, body) {
        return fetch(`${API_URL}/student/${id}`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static deleteStudent(id) {
        return fetch(`${API_URL}/student/${id}`, {
            'method': 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
    }

    static addAssessment(body) {
        return fetch(`${API_URL}/assessment`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static updateAssessment(id, body) {
        return fetch(`${API_URL}/assessment/${id}`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    //bulk score load
    static addClassScores(teacherId, assessmentId, body) {
        return fetch(`${API_URL}/teacherstudents/${teacherId}/assessment/${assessmentId}`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())

    }

    //update student scores individually
    static updateStudentScore(saId, body) {
        return fetch(`${API_URL}/student_assessment/${saId}`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static deleteAssessment(teacherId, assessmentId) {
        return fetch(`${API_URL}/assessment/${assessmentId}/teacher/${teacherId}`, {
            'method': 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
    }
}


///assessment/<string:assessment_id>