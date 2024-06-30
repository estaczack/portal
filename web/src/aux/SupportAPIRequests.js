const SupportAPIRequests = {

  postHeaders: async function () {
    let bssuser = await JSON.parse(localStorage.getItem('bssuser'))
    if (!bssuser) {
      bssuser ={}
      bssuser.email = ''
      bssuser.jwt = ''
    }
    const h = {
      'Content-Type': 'application/json',
      'X-Email': bssuser.email,
      'Authorization': `BEARER ${bssuser.jwt}`
    }
    return h
  },

  usuariosEndpoint: function () {
    return 'https://api.bsscursos.tech/api/v1/usuarios'
    // return 'http://localhost:4000/api/v1/usuarios'
  },

  youtubeEndpoint: function () {
    return 'https://api.bsscursos.tech/api/v1/youtube'
    // return 'http://localhost:4000/api/v1/youtube'
  }

}

export default SupportAPIRequests
