'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CreateForm() {
    const router = useRouter()
    // use state
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const issue = {
            title, body, priority, user_email: 'nmvnndwvdnwjkwnjww'
        }

        const res = await fetch('http://localhost:4000/issues', {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(issue)
        })

        if(res.status === 201) {
            router.refresh()
            router.push('/issues')
        }
    }
   return (
    <form onSubmit = {handleSubmit} className="w-1/2">
        <label>
            <span>Title:</span>
            <input 
                required
                type="text" 
                onChange = {(e) => setTitle(e.target.value)}
                value={title}
            />
        </label>
        <label>
            <span>Body:</span>
            <input 
                required
                type="text" 
                onChange = {(e) => setBody(e.target.value)}
                value={body}
            />
        </label>
        <label>
            <span>Priority:</span>
            <select 
                onChange = {(e) => setPriority(e.target.value)}
                value = {priority}
            >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="hight">High Priority</option>
            </select>
        </label>

        <button 
        className="btn-primary"
        disabled={isLoading}>
            {isLoading && <span>Adding...</span>}
            {!isLoading && <span>Add Issue</span>}
        </button>
    </form>
  )
}
