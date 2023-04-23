import sgMail from "@sendgrid/mail";
sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

/**
 * It takes a request object, extracts the email, object and message from the
 * request, then sends an email to dedal.eip@gmail.com with the email, object and
 * message as the body of the email
 * @param  - request - the request object
 * @returns an object with a body property.
 */
export const post = async({ request }) => {
  const res = await request.formData()

  const email = await res.get("email")
  const object = await res.get("object")
  const message = await res.get("message")

  const mail = {
    to: "dedal.eip@gmail.com",
    from: "dedal.eip@gmail.com",
    subject: `Assistance showcase web: ${object}`,
    html: `<h1>From ${email}</h1><h2>${message}</h2>`
  };

  sgMail.send(mail).then(() => {
    console.log('Email sent')
  }).catch((error) => {
    console.error(error)
  })

  return {
    body: {
      message: "message sent"
    }
  }
}