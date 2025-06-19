// lib/sendgrid.js
import { setApiKey, send } from '@sendgrid/mail'

setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = async (to, subject, text, html) => {
  const msg = {
    to,
    from: process.env.SENDGRID_SENDER_EMAIL,
    subject,
    text,
    html,
  }

  try {
    await send(msg)
    console.log('Email enviado com sucesso!')
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    throw error
  }
}

export default sendEmail
