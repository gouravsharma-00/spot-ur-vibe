import React from 'react'
import "@styles/globals.css"

export default function RootLayout({children} : {children : React.ReactNode}) {
    return(
        <html lang='en'>
            <head>
                {/* Opengraph meta */}
                <meta property='og:title' content='spot-ur-vibe | The vibe master' />
                <meta property='og:description' 
                content="Discover new music that matches your vibe. Spot-Ur-Vibe uses Spotify's API and machine learning to give you smart, personalized song recommendations." />
                <meta property='og:url' content='https://spot-ur-vibe.vercel.app/' />
                <meta property='og:image' content='/favicon/favicon.png' />

                {/* Twitter meta */}
                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:url' content='https://spot-ur-vibe.vercel.app/' />
                <meta name='twitter:title' content='spot-ur-vibe | The vibe master' />
                <meta name='twitter:description' 
                content="Discover new music that matches your vibe. Spot-Ur-Vibe uses Spotify's API and machine learning to give you smart, personalized song recommendations." />
                <meta property='twitter:image' content='/favicon/favicon.png' />

                {/* favicon */}
                <link type='image/png' rel='icon' sizes='32x32' href='/favicon/favicon-32x32.png' />
                <link type='image/png' rel='icon' sizes='16x16' href='/favicon/favicon-16x16.png' />

                {/* Title */}
                <title>spot-ur-vibe | The vibe master</title></head>
            <body>
                { children }
            </body>
        </html>
    )
}