import { notFound } from "next/navigation";

// for no found page 
export const dynamicParams = false;

//static rendeing
// we will create a async function  which will give us the id and its values
// why? to get all issue object pre build so that it can easily load those in a quicker way

export async function generateStaticParams() {
    // [{id: '1'}, {id: '2'}, ....]
     const res = await fetch('http://localhost:4000/issues');

     // get issues 
     const issues = await res.json()

     return issues.map((issue) => {
        id: issue.id
     })
}

// api call or to fetch data from json
// just like the IssueList.jsx
async function getIssueDetails(id) {
    const res = await fetch('http://localhost:4000/issues/' + id, {
        next: {
            revalidate: 60
        }
    })
    if (!res.ok) {
        //has a build in function
        notFound();
        //throw new Error('Failed to fetch issue');
    }
    return res.json()
}

export default async function IssueDetails({params}) {
    const issue = await getIssueDetails(params.id);

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
