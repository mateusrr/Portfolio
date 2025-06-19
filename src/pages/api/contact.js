// pages/api/contact.js

import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' })
  }

  try {
    const { name, phone, email, message, subject } = req.body

    await sendgrid.send({
      to: process.env.SENDGRID_SENDER_EMAIL,
      from: process.env.SENDGRID_SENDER_EMAIL,
      replyTo: email,
      subject: `Mensagem de Contato - MR Portfólio`,
      html: `
      <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mensagem enviada do site A Escritura</title>
          </head>
          <body style="font-family: 'Poppins', sans-serif; margin: 0; padding: 50px; background-color: #e5e5e5; font-size: 15px; text-align: justify;">
            <div style="color: #000000; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
              <p style="font-size: 12px;"><strong>Nome:</strong> ${name} | <strong>Telefone:</strong> ${phone} | <strong>Email:</strong> ${email}</p>
              <p><strong>Assunto:</strong> ${subject}</p>
              <p><strong>Mensagem:</strong> ${message}</p>
            </div>
          </body>
        </html>
      `,
    })

    return res.status(200).json({ message: 'Mensagem enviada com sucesso!' })
  } catch (error) {
    console.error(error.response?.body || error)
    return res.status(500).json({ error: 'Erro ao enviar email' })
  }
}
