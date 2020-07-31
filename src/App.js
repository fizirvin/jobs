import React, { useState, useEffect } from 'react'
import './App.css'
import Jobs from './components/Jobs'
import { url, opts } from './config'
import initialQuery from './actions/queries/initialQuery'

const App = ( ) =>{
  const [jobs, setJobs] = useState([])

  useEffect( () => {
    const fetchJobs = async () =>{
      opts.body = JSON.stringify(initialQuery)
      const res = await fetch(url, opts);
      const data = await res.json();
      const { jobs } = data.data
      return setJobs(jobs)
    }
    fetchJobs();
  }, [])

  const renderJobs = <Jobs jobs={jobs}></Jobs>
  const loading = <div>Loading</div>
  return (
    <div className="App">
      { jobs.length > 0 ? renderJobs : loading }
    </div>
  );
}

export default App;
