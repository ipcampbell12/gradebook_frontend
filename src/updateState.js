

export default class UpdateState {

    static addElement(element, state, setState) {

        const id = Math.max(...state.map(o => o.id)) + 1
        const newElement = { id, ...element }

        setState([...state, newElement])
    };

    static deleteElement(id, state, setState) {

        setState(state.filter((item) => item.id !== id))

    }

    // static updateElement(data, id, state, deleteElement, setState) {

    //     const updatedElement = state.find(item => item.id === id)
    //     deleteElement(id, state, setState)

    //     // for (const prop in updatedElement) {
    //     //     const value = updatedElement[prop]

    //     // }


    // }

}

// updatedStudent.fname = data["fname"]
//     updatedStudent.lname = data["lname"]