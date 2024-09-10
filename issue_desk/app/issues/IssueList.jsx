import Link from 'next/link'
import React from 'react'
 //fetch data 
 async function getIssueList() {
    // mock delay to imitate the loading scenario
    await new Promise(resolve => setTimeout(resolve, 3000))

    
    const res = await fetch('http://localhost:4000/issues', {
        next: {
            revalidate: 0 // use 0 to opt out of using cache
        }
    })

    // get json from resposne
    // get json from response
    if (!res.ok) {
        throw new Error('Failed to fetch issues')
    }
    return res.json()
 }

export default async function issueList() {
   // issue list from the getIssueList method
   const issues = await getIssueList()
  return (
    <>
    {issues.map((issue) => (
        <div key = {issue.id} className = "card my-5">
            <Link href={`/issues/${issue.id}`}>
            <h3>{issue.title}</h3>
            <p>{issue.body.slice(0,200)}...</p>
            <div className={`pill ${issue.priority}`}>
                {issue.priority} priority
            </div>
            </Link>
        </div>
    ))}
    {issues.length === 0 && (
        <p className="text-center">There are no open issues right now, Yayyyy!!!!!!</p>
    )}
    </>
  )
}

// /issues/{id} id is the id of any json object which we have in db.json file
