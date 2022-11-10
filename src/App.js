

import Jobs from './components/Jobs';
import { useEffect, useState } from 'react';

import Collection from "./assests/static-job-listings-master/images/Collection.js"
import data from './assests/static-job-listings-master/data.json'
console.log(data)

export default function App() {

const [jobs, setjobs] = useState([]);

useEffect(()=>setjobs(data)
,[])

  return (
    <div>
      
      <Collection/>
      { jobs.length === 0 ? <p>Jobs are Fetching...</p>
      : jobs.map((job)=> <Jobs key = {job.id} job={job} />)}
    </div>
  )
}