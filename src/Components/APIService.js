
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
}
