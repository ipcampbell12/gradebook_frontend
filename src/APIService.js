
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
    static addClassScores(body, teacher_id, assessment_id) {
        return fetch(`http://127.0.0.1:5001/teacherstudents/${teacher_id}/assessment/${assessment_id}`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }
}