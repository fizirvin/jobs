import React, { useState, useEffect } from 'react'
import '../styles/jobs.css'

const AppRow = ( {item, index}) =>{
    const { title, date, status, company} = item

    
    return(
        <tr>
            <td className='table_row '>{index+1}</td>
            <td className='table_row'>{company}</td>
            <td className='table_row'>{date}</td>
            <td className='table_row'>{title}</td>
            <td className='table_row'>{status}</td>
            <td className='table_row'></td>
        </tr> 
    );
}

export default AppRow;