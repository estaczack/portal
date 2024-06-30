import { useState, useEffect } from 'react'

import SupportAPIRequests from '../../aux/SupportAPIRequests'

import ShowVideos from '../ShowVideos'

let disciplinas = [
  'PLEi4rTuSjC8q8GOkR1MyH7Nipq-FFzaMa',
  'PLEi4rTuSjC8o17m2YsgASElPBVybJFxIq',
  'PLEi4rTuSjC8oHAonu_WaMRnSdJCk1cfFv',
  'PLEi4rTuSjC8rpBNGyDBllayLFbJ5SiyIF',
  'PLEi4rTuSjC8qTfulinNCApVqhZmoxQTZl',
  'PLEi4rTuSjC8rdxwPxKi4JlkD5MOHEidHB',
  'PLEi4rTuSjC8oOW43QdpAXBeuDYCHgyDUF'
]

export default function MentoriaDesenvolvimento() {

  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    const fetchPlaylists = async () => {
      await fetch(SupportAPIRequests.youtubeEndpoint() + `/playlists`, {
        method: 'GET',
        headers: await SupportAPIRequests.postHeaders()
      }).then(res => res.json()).then(json => {
        let jsonFiltrado = json.map(pl => {
          if (disciplinas.includes(pl.id)) {
            return pl
          }
        })
        jsonFiltrado = jsonFiltrado.filter(pl => pl !== undefined)
        setPlaylists(jsonFiltrado)
      })
    }
    fetchPlaylists()
  }, [])

  return (
    <>
      <button className='button is-black is-fullwidth is-large'>
        Mentoria de Desenvolvimento de Software
      </button>
      <hr />
      {playlists.map((disc, idx) => {
        return (
          <div key={`pl_${disc.id}`}>
            <ShowVideos disciplina={disc.id} titulo={disc.titulo} indice={idx} />
          </div>
        )
      })}
    </>
  )
}