import React from 'react'
import Header from './Header'
import Row from './Row'
import '../styles/jobs.css'

const Jobs = ({jobs}) =>{
    
    const renderJobs = jobs.sort( (a,b) => {
        if (a.type === 'platform') return -1;
        return 0;
    })
    .map( (item, index) =>{
        
        return <Row key={item._id} index={index} item={item}></Row>
    })
    
  
    return(
        <div>
            <table className='jobs_table'>
                {<Header/>}
                <tbody>
                    {renderJobs}
                </tbody>
            </table>
        </div>
    );
}

export default Jobs;