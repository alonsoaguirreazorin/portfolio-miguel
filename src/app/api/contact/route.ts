import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validar que todos los campos estén presentes
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Email para Miguel (recibir el mensaje)
    const emailToMiguel = await resend.emails.send({
      from: fromEmail,
      to: 'miguelcasares01@gmail.com',
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Nuevo Mensaje de Contacto</h1>
          </div>
          
          <div style="padding: 40px 20px; background: #f8f9fa;">
            <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-top: 0;">Detalles del contacto:</h2>
              
              <div style="margin: 20px 0; padding: 15px; background: #f1f3f4; border-radius: 5px;">
                <strong style="color: #667eea;">Nombre:</strong> ${name}
              </div>
              
              <div style="margin: 20px 0; padding: 15px; background: #f1f3f4; border-radius: 5px;">
                <strong style="color: #667eea;">Email:</strong> ${email}
              </div>
              
              <div style="margin: 20px 0; padding: 15px; background: #f1f3f4; border-radius: 5px;">
                <strong style="color: #667eea;">Mensaje:</strong><br>
                <div style="margin-top: 10px; line-height: 1.8;">${message}</div>
              </div>
              
              <div style="margin-top: 30px; padding: 20px; background: #e8f4f8; border-radius: 5px; border-left: 4px solid #667eea;">
                <p style="margin: 0; font-style: italic; color: #555;">
                  Este mensaje fue enviado desde tu portfolio web miguelcasaresmoreno.com
                </p>
              </div>
            </div>
          </div>
          
          <div style="background: #333; color: #fff; padding: 20px; text-align: center;">
            <p style="margin: 0; opacity: 0.8;">Miguel Casares Moreno - Portfolio Profesional</p>
          </div>
        </div>
      `,
    });

    // Email de confirmación para el cliente
    const confirmationEmail = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Hemos recibido tu mensaje - Miguel Casares',
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">¡Gracias por contactarme!</h1>
          </div>
          
          <div style="padding: 40px 20px; background: #f8f9fa;">
            <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-top: 0;">Hola ${name},</h2>
              
              <p style="font-size: 16px; margin: 20px 0;">
                He recibido tu mensaje y te agradezco mucho por contactarme. Me pondré en contacto contigo lo antes posible.
              </p>
              
              <div style="margin: 30px 0; padding: 20px; background: #f1f3f4; border-radius: 5px;">
                <h3 style="margin: 0 0 10px 0; color: #667eea;">Tu mensaje:</h3>
                <p style="margin: 0; line-height: 1.8; font-style: italic;">"${message}"</p>
              </div>
              
              <div style="margin: 30px 0; padding: 20px; background: #e8f4f8; border-radius: 5px; border-left: 4px solid #667eea;">
                <h3 style="margin: 0 0 15px 0; color: #333;">Mientras tanto, puedes:</h3>
                <ul style="margin: 0; padding-left: 20px;">
                  <li style="margin: 8px 0;">Visitar mi perfil de <a href="https://www.linkedin.com/in/miguelcasares/" style="color: #667eea; text-decoration: none;">LinkedIn</a></li>
                  <li style="margin: 8px 0;">Explorar mis proyectos en el <a href="https://miguelcasaresmoreno.com" style="color: #667eea; text-decoration: none;">portfolio</a></li>
                  <li style="margin: 8px 0;">Escribirme directamente a miguelcasares01@gmail.com</li>
                </ul>
              </div>
              
              <p style="font-size: 16px; margin: 20px 0;">
                Saludos cordiales,<br>
                <strong style="color: #667eea;">Miguel Casares Moreno</strong><br>
                <span style="font-size: 14px; color: #666;">Especialista en Business Intelligence & Analytics</span>
              </p>
            </div>
          </div>
          
          <div style="background: #333; color: #fff; padding: 20px; text-align: center;">
            <p style="margin: 0; opacity: 0.8;">Miguel Casares Moreno - Portfolio Profesional</p>
            <p style="margin: 5px 0 0 0; opacity: 0.6; font-size: 14px;">miguelcasaresmoreno.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { 
        message: 'Emails enviados correctamente',
        miguelEmailId: emailToMiguel.data?.id,
        confirmationEmailId: confirmationEmail.data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error enviando emails:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
