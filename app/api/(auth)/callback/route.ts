import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest) {
    const code = new URL(request.url).searchParams.get('code');
    const token_URL = 'https://accounts.spotify.com/api/token'
    
    if (!code) {
        return new NextResponse('No code provided', { status: 400 });
    }

    try {
        const body = await fetch(token_URL, {
            method: 'POST',
            headers: {
                'Content-Type' : "application/x-www-form-urlencoded",
                'Authorization': 
                'Basic ' + Buffer.from(process.env.Cleint_ID +':'+ process.env.Client_Secret).toString('base64'),
    
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code,
                redirect_uri: process.env.Redirect_URI as string,
              }),
        })
        const { access_token, refresh_token } = await body.json()

        const response =  NextResponse.redirect(`https://spot-ur-vibe.vercel.app/client`);
        response.cookies.set('spotify_token', access_token, {
            httpOnly: true,
            secure: true,
            path: '/'
        })

        return response;

    }catch(err) {
        return new NextResponse('Auth failed', {status: 401});
    }
}