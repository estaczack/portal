import fetch from 'node-fetch'
import express from 'express'

import AutorizaRequest from '../aux/AutorizaRequest.js'

const router = express.Router()

const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3'

router.get('/playlists', AutorizaRequest, async function (req, res, next) {
  const url = `${YOUTUBE_API_BASE_URL}/playlists?key=${process.env.YOUTUBE_API_KEY}&part=snippet,contentDetails&channelId=${process.env.YOUTUBE_CHANNEL_ID}&maxResults=50`
  const { items } = await fetch(url).then(res => res.json())
  const resp = items.map(item => ({
    id: item.id,
    titulo: item.snippet.title,
    descricao: item.snippet.description,
    miniatura: item.snippet.thumbnails.default.url,
    qntVideos: item.contentDetails.itemCount
  }))
  res.json(resp)
})

router.get('/videos/:playlist', AutorizaRequest, async function (req, res, next) {
  const url = `${YOUTUBE_API_BASE_URL}/playlistItems?key=${process.env.YOUTUBE_API_KEY}&part=snippet,contentDetails&playlistId=${req.params.playlist}&maxResults=50`
  const { items } = await fetch(url).then(res => res.json())
  const resp = items.map(item => ({
    id: item.snippet.resourceId.videoId,
    titulo: item.snippet.title,
    descricao: item.snippet.description,
    miniatura: item.snippet.thumbnails.default.url
  }))
  res.json(resp)
})

export default router
