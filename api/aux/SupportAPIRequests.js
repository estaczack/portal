const SupportAPIRequests = {

  postHeaders: async function () {
    const h = {
      'Content-Type': 'application/json'
    }
    return h
  },

  usuariosEndpoint: function () {
    return process.env.API_URL + '/api/v1/usuarios'
  }
}

export default SupportAPIRequests
