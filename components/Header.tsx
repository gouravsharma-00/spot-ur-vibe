import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <nav role='navigation'>
                <ul>
                    <li>Home</li>
                    <li><Link href='/api/login'>Spotify</Link></li>
                </ul>
            </nav>
        </header>
    )
}