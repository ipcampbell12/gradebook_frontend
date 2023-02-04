
export default class APIServce {
    static addStudent(body) {
        return fetch('http://127.0.0.1:5001/student', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static addTeacher(body) {
        return fetch('http://127.0.0.1:5001/teacher', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static addSubject(body) {
        return fetch(`http://127.0.0.1:5001/subject`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static updateSubject(id, body) {
        return fetch(`http://127.0.0.1:5001/subject/${id}`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static deleteSubject(id) {
        return fetch(`http://127.0.0.1:5001/subject/${id}`, {
            'method': 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
    }

    static updateStudent(id, body) {
        return fetch(`http://127.0.0.1:5001/student/${id}`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static deleteStudent(id) {
        return fetch(`http://127.0.0.1:5001/student/${id}`, {
            'method': 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
    }

    static addAssessment(body) {
        return fetch(`http://127.0.0.1:5001/assessment`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static updateAssessment(id, body) {
        return fetch(`http://127.0.0.1:5001/assessment/${id}`, {
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
        return fetch(`http://127.0.0.1:5001/teacherstudents/${teacherId}/assessment/${assessmentId}`, {
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
        return fetch(`http://127.0.0.1:5001/student_assessment/${saId}`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static deleteAssessment(teacherId, assessmentId) {
        return fetch(`http://127.0.0.1:5001/assessment/${assessmentId}/teacher/${teacherId}`, {
            'method': 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
    }
}


///assessment/<string:assessment_id>