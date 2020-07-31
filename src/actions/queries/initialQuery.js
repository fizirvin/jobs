const initialQuery = { 
    query: `query {
        jobs {
            _id
            name
            link
            type
            logo
            applications {
                title
                company
                date
                status
            }
        }
    }`
}

export default initialQuery;