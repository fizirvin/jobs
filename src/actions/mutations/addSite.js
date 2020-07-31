const addSite = { query: `mutation
    NewProfile( $_id: ID, $input: NewProfile ){
        newProfile(_id: $_id, input: $input){
            _id
            number
            firstname
            lastname
            entry
            department
            area
            position
            picture_URL
        }
    }`
}

export default addSite;