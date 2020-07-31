import React, { useState } from 'react'
import '../styles/jobs.css'

const AddApp = ({onInput}) =>{
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

    const onSubmit = () =>{
        if(!company || !date || !title || !status){
            return
        }
        else {
            const time = 'T00:00:00.000-06:00'
            const formatDate  = `${date}${time}`
            const input = {company, date: formatDate, title, status}
            return onInput(input)
        }
    }

    return(
        <tr>
            <td className='table_row '></td>
            <td className='table_row'><input type='text' name='company' onChange={onCompany} value={company} size='10'/></td>
            <td className='table_row'><input type='date' name='date' onChange={onDate} value={date} size='10'/></td>
            <td className='table_row'><input type='text' name='title' onChange={onTitle} value={title} size='40'/></td>
            <td className='table_row'><input type='text' name='status' onChange={onStatus} value={status} size='10'/></td>
            <td className='table_row'><button onClick={onSubmit}>send</button></td>
        </tr> 
    );
}

export default AddApp;