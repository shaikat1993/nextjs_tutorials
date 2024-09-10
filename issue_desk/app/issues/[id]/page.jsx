// api call or to fetch data from json
// just like the IssueList.jsx
async function getIssueDetails(id) {
    const res = await fetch('http://localhost:4000/issues/' + id, {
        next: {
            revalidate: 0
        }
    })
    if (!res.ok) {
        throw new Error('Failed to fetch issue');
    }
    return res.json()
}

export default async function IssueDetails({params}) {
    let issue;

    try {
        issue = await getIssueDetails(params.id);
    } catch (error) {
        console.error('Error fetching issue:', error);
        return <div>Error loading issue details.</div>;
    }

  return (
    <main>
        <nav>
            <h2>Issue Details</h2>
        </nav>
        <div className='card'>
          <h3>{issue.title}</h3>  
          <small>{issue.user_email}</small>
          <p>{issue.body}</p>
          <div className={`pill ${issue.priority}`}>
            {issue.priority} priority
          </div>
        </div>
    </main>

  )
}
