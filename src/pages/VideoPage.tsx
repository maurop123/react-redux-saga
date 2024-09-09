import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function VideoPage() {
  const { videoId } = useParams()

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Link to="/" className="self-start mb-5">&lt; Home</Link>
      <iframe
        className="h-5/6 w-5/6"
        src={`https://youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}
