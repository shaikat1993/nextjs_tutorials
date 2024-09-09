import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
//import Logo from './helpdesk.png'
import Gif from './helpdesk.gif'


export default function Navbar() {
  return (
    <nav>
      <Image
      src={Gif}
      alt = 'HelpDesk logo'
      width = {42}
      height = {42}
      quality = {100}
      // placeholder='blur'
      unoptimized={true}
      className="bg-transparent mix-blend-multiply"
      />
        <h1>Issue board Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/issues">Issues</Link>
    </nav>
  )
}
