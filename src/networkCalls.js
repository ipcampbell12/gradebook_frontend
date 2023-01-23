// function fetchTeacher(teacherId) {
//     return fetch(url).then(resp => resp.json());
// }


//This file shouldn't know about the state
export default class NetworkCalls {


    static async fetchData(endpoint) {
        return fetch(`http://127.0.0.1:5001/${endpoint}`).then(resp => resp.json());
        // const items = await results.json()
        // setState(items)
        //console.log(items)
    }

    static async fetchTeacher(endpoint, id) {
        return fetch(`http://127.0.0.1:5001/${endpoint}/${id}`).then(resp => resp.json());
        // const items = await results.json()
        // setState(items)
        //console.log(items)
    }

    static async fetchGrades(endpoint, id) {
        return fetch(`http://127.0.0.1:5001/teacherstudents/${id}/${endpoint}`).then(resp => resp.json());
        // const items = await results.json()
        //console.log('fetch grade items are', items);
        // setState(items)
    }

}