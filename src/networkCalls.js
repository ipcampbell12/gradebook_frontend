// function fetchTeacher(teacherId) {
//     return fetch(url).then(resp => resp.json());
// }

export default class NetworkCalls {


    async fetchData(endpoint, setState) {
        const results = await fetch(`http://127.0.0.1:5001/${endpoint}`)
        const items = await results.json()
        setState(items)
        //console.log(items)
    }

    async fetchTeacher(endpoint, setState, id) {
        const results = await fetch(`http://127.0.0.1:5001/${endpoint}/${id}`)
        const items = await results.json()
        setState(items)
        //console.log(items)
    }

    async fetchGrades(endpoint, setState, id) {
        const results = await fetch(`http://127.0.0.1:5001/teacherstudents/${id}/${endpoint}`)
        const items = await results.json()
        console.log('fetch grade items are', items);
        setState(items)
    }

}