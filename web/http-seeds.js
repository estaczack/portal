import dotenv from 'dotenv'

dotenv.config()

import SupportAPIRequests from './src/aux/SupportAPIRequestsNode.js'

const criaUsuarioSeed = async (data) => {
    await fetch(SupportAPIRequests.usuariosEndpoint(), {
        method: 'POST',
        headers: await SupportAPIRequests.postHeaders(),
        body: JSON.stringify(data)
    }).then(res => res.json()).then(json => {
        if (json.ok) {
            console.log('Usuários criados com sucesso')
        } else {
            console.log(json.msg)
        }
    })
}

const marcos = {
    nome: 'Marcos Gabriel Costa',
    email: 'marcosgabriel.smc@gmail.com',
    senha: 'Marcos123456',
    celular: '21994146088',
    referencia: '',
    papel: 'superadmin'
}

const ed = {
    nome: 'Ed de Almeida',
    email: 'edvaldoajunior@gmail.com',
    senha: '4lf4b3t0',
    celular: '4197172130',
    referencia: '',
    papel: 'superadmin'
}

const marcelo = {
    nome: 'Marcelo Fantini',
    email: 'marcelo.asfantini@gmail.com',
    senha: 'Marcelo123456',
    celular: '11979698338',
    referencia: '',
    papel: 'superadmin'
}

criaUsuarioSeed(marcos)
criaUsuarioSeed(ed)
criaUsuarioSeed(marcelo)