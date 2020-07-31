import React, { useState } from 'react'
import '../styles/jobs.css'

const AddApp = ( ) =>{
    const [company, setCompany] = useState('')
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('')

    const onCompany = (e) =>{
        const company = e.target.value
        return setCompany(company)
    }

    const onTitle = (e) =>{
        const title = e.target.value
        return setTitle(title)
    }
    const onDate = (e) =>{
        const date = e.target.value
        return setDate(date)
    }
    const onStatus = (e) =>{
        const status = e.target.value
        return setStatus(status)
    }

    onSubmit = () =>{
        const input = {company, date, title, status}
    }

    return(
        <tr>
            <td className='table_row '></td>
            <td className='table_row'><input type='text' name='company' onChange={onCompany} value={company} size='10'/></td>
            <td className='table_row'><input type='text' name='date' onChange={onDate} value={date} size='10'/></td>
            <td className='table_row'><input type='text' name='title' onChange={onTitle} value={title} size='40'/></td>
            <td className='table_row'><input type='text' name='status' onChange={onStatus} value={status} size='10'/></td>
            <td className='table_row'><button>send</button></td>
        </tr> 
    );
}

export default AddApp;