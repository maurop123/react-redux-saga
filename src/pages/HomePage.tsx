import React, { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeVideosPage, getVideosFetch, searchVideos } from '../store/actions/videosAction.ts'
//app
import './HomePage.css'
import Tile from '../components/TileComponent'

export default function HomePage() {
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()
  const videosUnfiltered = useSelector(state => state.videos.videos)
  const videos = useMemo(() => {
    return videosUnfiltered.filter(v => v.title.toLowerCase().includes(searchText.toLowerCase()))
  }, [videosUnfiltered, searchText])
  const videosPage = useSelector(state => state.videos.page)
  const videosPageSize = useSelector(state => state.videos.pageSize)
  const videosPages = Math.ceil(videos.length / videosPageSize)

  function handleSearchChanges(event) {
    const newInput = event.target.value
    setSearchText(newInput)
  }

  return (
    <div className="h-full flex flex-col justify-between">

      <h1>Get HYPED | Music Videos</h1>

<div>

  { videos.length > 0
    ?
      <>
        <input type="text"
               className="outline rounded-md mt-12 text-white pl-2 pb-0.5 h-10 text-2xl"
               placeholder="Search video title"
               onChange={handleSearchChanges}
        />
        <div className="card flex flex-wrap justify-center">
        {
        //Tiles
          videos
          .slice((videosPage-1)*videosPageSize, videosPage*videosPageSize)
          .map(video => {
            return (
              <Tile key={video.videoId} videoId={video.videoId} title={video.title} />
            )
          })
        }
        </div>
        <div className="w-full">
          {
        //Pagination
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
