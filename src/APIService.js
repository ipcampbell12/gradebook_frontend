
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

<<<<<<< HEAD
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

=======
>>>>>>> parent of 926803d (add delete and update student ApI calls)
    static addAssessment(body) {
        return fetch('http://127.0.0.1:5001/assessment', {
            'method': 'POST',
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