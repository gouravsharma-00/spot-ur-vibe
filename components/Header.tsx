import React from 'react'

export default function Header() {
    return (
        <header>
            <nav role='navigation'>
                <ul>
                    <li>Home</li>
                    <li><a href='/api/login'>Spotify</a></li>
                    <li><a href='/api/logout'>logout</a></li>
                </ul>
            </nav>
        </header>
    )
}