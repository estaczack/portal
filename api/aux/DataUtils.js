const DataUtils = {

  FormatarData: (data) => {
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    const hh = data.getHours()
    const mm = data.getMinutes()
    const ss = data.getSeconds()

    const diaFormatado = dia < 10 ? `0${dia}` : dia
    const mesFormatado = mes < 10 ? `0${mes}` : mes
    const horaFormatada = hh < 10 ? `0${hh}` : hh
    const minFormatados = mm < 10 ? `0${mm}` : mm
    const segFormatados = ss < 10 ? `0${ss}` : ss

    return `${diaFormatado}-${mesFormatado}-${ano} ${horaFormatada}:${minFormatados}:${segFormatados}`
  },

  ParseDataString: (data) => {
    const parte = data.split('-')

    const ano = parseInt(parte[2])
    const mes = parseInt(parte[1]) - 1
    const dia = parseInt(parte[0])

    const dataObj = new Date(ano, mes, dia)
    return this.FormatarData(dataObj)
  }

}

export default DataUtils
