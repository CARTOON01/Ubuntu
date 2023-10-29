import React from 'react'

export default function Spotify() {
    return (
        <iframe src="https://open.spotify.com/embed/playlist/35QZco3h3UELAC2VsLmpSD?utm_source=generator" frameBorder="0" title="Spotify" allowFullScreen="" allow="autoplay"  className="h-full w-full bg-ub-cool-grey" ></iframe>
    )
}

export const displaySpotify = () => {
    <Spotify> </Spotify>
}
