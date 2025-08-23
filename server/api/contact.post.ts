import process from 'node:process'
import { Resend } from 'resend'
import { contactSchema } from '~/types/contact/contact.types'

// todo: add upstash rate limiting. really not a priority

export default defineEventHandler(async (event) => {
  if (!process.env.RESEND_API_KEY) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server configuration error: RESEND_API_KEY is not set.',
    })
  }
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await readValidatedBody(event, contactSchema.parse)

    // not sure if honeypots are even useful anymore
    if (body.honeypot) {
      return { status: 'OK' }
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['jackmayhew5@gmail.com'],
      subject: `New message from ${body.firstName}`,
      text: `Name: ${body.firstName}\nEmail: ${body.email}\n\nMessage:\n${body.message}`,
    })

    if (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Error sending email. Please try again later.',
      })
    }

    return { status: 'OK' }
  }
  catch (e: any) {
    // re-throw as is
    if (e.statusCode) {
      throw e
    }

    // validation error, treat as a 400
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})
