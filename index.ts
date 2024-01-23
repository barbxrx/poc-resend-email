import { Resend } from 'resend';
const resend = new Resend('re_123456789');

(async function() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <bounced@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Teste email',
      html: '<strong>Caro fulano, isso é um teste</strong>'
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();