import React from 'react'
import '../styles/jobs.css'

const Header = ( ) =>{
    
    return(
        <thead>
            <tr>
                <th className='table_row'>#</th>
                <th className='table_row'>Logo</th>
                <th className='table_row'>Site</th>
                <th className='table_row'>Link</th>
                <th className='table_row'>Type</th>
                <th className='table_row'></th>
            </tr>
        </thead> 
    );
}

export default Header;