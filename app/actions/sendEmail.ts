'use server';

import { Resend } from 'resend';
import { GoogleGenerativeAI } from "@google/generative-ai";

// NOTE: This is a placeholder for a more robust email template
const createEmailHtml = (data: { [key: string]: string }): string => {
  return `
    <h1>New Travel Inquiry</h1>
    <p>You have received a new inquiry from the UNF Global Tourism website.</p>
    <ul>
      <li><strong>Name:</strong> ${data.fullname}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Phone:</strong> ${data.phone}</li>
      <li><strong>Destination:</strong> ${data.destination}</li>
      <li><strong>Message:</strong></li>
    </ul>
    <p>${data.message}</p>
  `;
};

export async function sendBookingEmail(formData: FormData) {
  const data = {
    fullname: formData.get('fullname') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    destination: formData.get('destination') as string,
    message: formData.get('message') as string,
  };

  // 1. Send the email using Resend
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: emailError } = await resend.emails.send({
      from: 'UNF Global Inquiry <onboarding@resend.dev>',
      to: ['huzaifakhan0856551@gmail.com'],
      subject: `New Inquiry from ${data.fullname} for ${data.destination}`,
      html: createEmailHtml(data),
    });

    if (emailError) {
      console.error('Resend Error:', emailError);
      return { success: false, error: emailError.message };
    }
  } catch (error) {
    console.error('Email Sending Error:', error);
    return { success: false, error: 'An unexpected error occurred while sending the email.' };
  }

  // 2. Generate AI summary using Gemini
  let aiSummary = "Your inquiry has been received. Our elite travel team will contact you shortly to discuss your bespoke itinerary.";
  try {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const prompt = `You are an elite travel consultant for UNF Global Tourism. A client has just sent an inquiry: Name: ${data.fullname}, Interested in: ${data.destination}. Provide a short, professional response.`;
      
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      if (text) {
        aiSummary = text;
      }
    }
  } catch(e) {
    console.error("AI Summary Generation Error:", e);
    // If AI fails, we proceed with the default summary, as the email has already been sent.
  }

  return { success: true, aiSummary };
}
