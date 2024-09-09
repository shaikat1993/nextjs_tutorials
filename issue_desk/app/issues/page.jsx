import React from 'react'
import IssueList from './IssueList'

export default function Issues() {
  return (
    <main>
       <nav>
        <div>
          <h2>Issues</h2>
          <p><small>Currently open issues</small></p>
        </div>
       </nav>


       <IssueList />
    </main>
  )
}


// how to use nested components
// for instance 
// /news/latest (create folder inside folder(like latest folder in news folder))