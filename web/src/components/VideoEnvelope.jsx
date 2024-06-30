import { useNavigate } from 'react-router-dom'

export default function VideoEnvelope(props) {
  const { vid } = props
  const navigate = useNavigate()

  const videoClickHandler = (ev) => {
    const videoId = ev.target.dataset.video
    navigate(`/player?v=${videoId}`)
  }

  return (
    <div className="video-envelope">
      <figure>
        <img
          src={vid.miniatura}
          data-video={vid.id}
          onClick={videoClickHandler}
        />
      </figure>
    </div>
  )
}