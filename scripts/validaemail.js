const nodemailer = require('nodemailer');

// Configuração do transporte
const transporter = nodemailer.createTransport({
  host: '191.252.102.250', // IP do seu servidor de email
  port: 25, // Porta padrão para SMTP
  secure: false, // true para 465, false para outras portas
  auth: {
    user: 'eddealmeida', // Seu usuário de autenticação no servidor de email
    pass: 'H3rm4nn2024@'    // Sua senha de autenticação no servidor de email
  },
  tls: {
    rejectUnauthorized: false // Use apenas se o servidor de email não tiver um certificado SSL/TLS válido
  }
});

// Função para enviar email
const enviarEmail = (destinatario, assunto, mensagem) => {
  const mailOptions = {
    from: '"Seu Nome" <seu-email@bsscursos.tech>', // Endereço de email de origem
    to: destinatario, // Endereço de email de destino
    subject: assunto, // Assunto do email
    text: mensagem // Texto do email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Erro ao enviar email: ', error);
    }
    console.log('Email enviado: ', info.response);
  });
};

// Exemplo de uso
enviarEmail('edvaldoajunior@gmail.com', 'Testando envio 01', 'Mensagem de teste!');
