import React from 'react'
import IssueList from './IssueList'
import { Suspense } from 'react'
import Loading from '../loading'

export default function Issues() {
  return (
    <main>
       <nav>
        <div>
          <h2>Issues</h2>
          <p><small>Currently open issues</small></p>
        </div>
       </nav>

      <Suspense fallback = {<Loading/>}>
        <IssueList />
      </Suspense>
    </main>
  )
}


// how to use nested components
// for instance 
// /news/latest (create folder inside folder(like latest folder in news folder))