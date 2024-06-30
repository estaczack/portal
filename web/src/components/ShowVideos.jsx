import { useState, useEffect } from 'react'

import SupportAPIRequests from '../aux/SupportAPIRequests'
import VideoEnvelope from './VideoEnvelope'

export default function ShowVideos(props) {
  const { disciplina, titulo, indice } = props

  const [lista, setLista] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      await fetch(SupportAPIRequests.youtubeEndpoint() + `/videos/${disciplina}`, {
        method: 'GET',
        headers: await SupportAPIRequests.postHeaders()
      }).then(res => res.json()).then(json => {
        setLista(json)
      })
    }
    fetchVideos()
  }, [])

  return (
    <div className={`box lista_videos_${indice % 2}`}>
      <button className='button is-dark is-fullwidth'>{titulo}</button>
      {lista.map(vid => {
        return (
          <VideoEnvelope key={vid.id} vid={vid} />
        )
      })}
    </div>
  )
}