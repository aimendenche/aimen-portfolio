import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Créez un compte sur resend.com et obtenez une clé API
const resend = new Resend('re_votre_cle_api');

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'votre-site@votredomaine.com',
      to: 'yanisyousnadj@gmail.com', // Votre email où vous voulez recevoir les messages
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de l'envoi de l'email' }, { status: 500 });
  }
}
