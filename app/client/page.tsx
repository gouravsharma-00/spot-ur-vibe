import { cookies } from "next/headers";

type spotifyUser = {
    display_name : string;
    email : string;
    images : {url : string}[];
}

export default async function Page() {
    const cookiestore = cookies();
    const token = (await cookiestore).get('spotify_token')?.value

    if(!token) return <h1>Please Login using your spotify account</h1>

    const res = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    if(!res.ok) return <h1>Login failed!! try logging in again</h1>

    const user : spotifyUser = await res.json()
    return (
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Welcome, {user.display_name}</h1>
          {user.images?.[0] && (
            <img
              src={user.images[0].url}
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4"
            />
          )}
          <p>Email: {user.email}</p>
        </div>
      );
}