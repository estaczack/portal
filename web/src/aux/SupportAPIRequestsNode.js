const SupportAPIRequests = {

  postHeaders: function () {
    const h = {
      'Content-Type': 'application/json'
    }
    return h
  },

  usuariosEndpoint: function () {
    return process.env.VITE_API_URL + '/api/v1/usuarios'
  },

  youtubeEndpoint: function () {
    return process.env.VITE_API_URL + '/api/v1/youtube'
  }

}

export default SupportAPIRequests