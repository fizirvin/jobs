import React from 'react'
import '../styles/jobs.css'

const Jobs = ({jobs}) =>{

    const renderJobs = jobs.sort( (a,b) => {
            if (a.type === 'platform') return -1;
            
            return 0;
        })
        .map( ({_id, name, link, type, logo}, index) => 
        <tr key={_id}>
            <td className='table_row'>{index+1}</td>
            <td className='table_row'>{logo}</td>
            <td className='table_row'>{name}</td>
            <td className='table_row'><a href={link}>{link}</a></td>
            <td className='table_row'>{type}</td>
        </tr>)
  
    return(
        <div>
            <table className='jobs_table'>
                <thead>
                    <tr>
                        <th className='table_row'>#</th>
                        <th className='table_row'>Logo</th>
                        <th className='table_row'>Site</th>
                        <th className='table_row'>Link</th>
                        <th className='table_row'>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {renderJobs}
                </tbody>
            </table>
        </div>
    );
}

export default Jobs;