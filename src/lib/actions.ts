
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Form submission failed. Please check the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  // In a real application, you would send this data to your backend, email service, or CRM.
  // For example:
  // try {
  //   await sendEmail({ name, email, message }); // Implement this function
  //   return { message: "Thank you for your message! We'll be in touch soon.", success: true };
  // } catch (error) {
  //   return { message: "Something went wrong. Please try again later.", success: false };
  // }

  console.log("Contact Form Submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  
  // Simulate a successful submission for now
  return { message: "Thank you for your message! We'll be in touch soon.", success: true };
}
