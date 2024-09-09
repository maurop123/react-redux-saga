import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeVideosPage, getVideosFetch } from '../store/actions/videosAction.ts'
//app
import './HomePage.css'
import Tile from '../components/TileComponent'

export default function HomePage() {
  const dispatch = useDispatch()
  const videos = useSelector(state => state.videos.videos)
  const videosPage = useSelector(state => state.videos.page)
  const videosPageSize = useSelector(state => state.videos.pageSize)
  const videosPages = Math.ceil(videos.length / videosPageSize)

  return (
    <div className="h-full flex flex-col justify-between">

      <h1>Get Hyped Music Videos</h1>

      <div className="card flex flex-wrap justify-center">
        { videos.length > 0
          ?
            <>
              {
                videos
                .slice((videosPage-1)*videosPageSize, videosPage*videosPageSize)
                .map(video => {
                  return (
                    <Tile key={video.videoId} videoId={video.videoId} title={video.title} />
                  )
                })
              }
              <div className="w-full">
                {
                  Array(videosPages).fill().map((x,i) => {
                    return (<button key={i} className="m-2 rounded-full" onClick={() => dispatch(changeVideosPage(i+1))}>
                    {i+1}
                    </button>)
                  })
                }
              </div>
            </>
          :
            <button onClick={() => dispatch(getVideosFetch())}>
              Get Music Videos 
            </button>
        }
      </div>

      <p className="read-the-docs">
      This is an app for getting hyped with your favorite videos
      </p>
    </div>
    )
    }
