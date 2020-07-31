const addApplication = { query: `mutation
    NewApplication( $_id: ID, $input: NewApplication ){
        newApplication(_id: $_id, input: $input){
            _id
            title
            date
            company
            status   
        }
    }`
}

export default addApplication;