import { NextResponse } from "next/server";

export async function GET() {
    const scope = "user-read-private user-read-email user-top-read";
    const Redirect_URI = process.env.Redirect_URI;

    const authURL = 
    `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.Client_ID}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(Redirect_URI)}`;

    return NextResponse.redirect(authURL)
}