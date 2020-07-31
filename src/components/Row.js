import React, { useState, Fragment } from 'react'
import AppRow from './AppRow'
import AddApp from './AddApp'
import '../styles/jobs.css'

const Row = ( {item, index }) =>{
    const { name, link, type, logo, applications, _id } = item
    const style = type === 'platform' ? 'platform' : type === 'community' ? 'community' :
    type === 'post' ? 'post' : type === 'freelance' ? 'freelance' : 'other'

    const [apps, setApps] = useState(false)
    const [form, setForm] = useState(false)
    const [input, setInput] = useState({})

    const renderApps = applications.map( (item, index) =>{
        return <AppRow key={item._id} index={index} item={item}></AppRow>
    })

    const onApps = ( ) =>{
        return setApps(!apps)
    }

    const onForm = ( ) =>{
        return setForm(!form)
    }

    const onInput = ( ) =>{

    }

    return(
        <Fragment>
            <tr className={style}>
                <td className='table_row '>{index+1}</td>
                <td className='table_row'><img width='150' src={logo} alt={'logo'} className='logo'></img></td>
                <td className='table_row'>{name}</td>
                <td className='table_row'><a href={link}>{link}</a></td>
                <td className='table_row'>{type}</td>
                <td className='table_row'>
                    <button onClick={onApps}>apps</button>
                    <button onClick={onForm}>+</button>
                </td>
            </tr>
            { apps ? renderApps : null}
            { form ? <AddApp onInput={onInput} input={input}/> : null}
        </Fragment> 
    );
}

export default Row;