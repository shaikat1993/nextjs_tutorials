import React from 'react'
 //fetch data 
 async function getIssueList() {
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
            <h3>{issue.title}</h3>
            <p>{issue.body.slice(0,200)}...</p>
            <div className={`pill ${issue.priority}`}>
                {issue.priority} priority
            </div>
        </div>
    ))}
    {issues.length === 0 && (
        <p className="text-center">There are no open issues right now, Yayyyy!!!!!!</p>
    )}
    </>
  )
}
