import React from 'react'
import Link from 'next/link';

export default function Layout({children}) {
  return (
    <div>
        <Link href="/home">Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
        <hr />
        {children}
    </div>
  )
}
