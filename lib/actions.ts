'use server'

import sendEmail from "./mail";
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, { message: "Поле ім’я є обов’язковим." }),
  phone: z.string().min(10, { message: 'Введіть коректний номер телефону.' }),
  message: z.string().min(1, { message: "Поле повідомлення є обов’язковим." }),
  terms: z.any().refine(terms => terms, 'Будь ласка, погодьтеся на обробку персональних даних, щоб відправити повідомлення.')
})

type ContactState = {
  errors?: {
    name?: string[];
    phone?: string[];
    message?: string[];
    terms?: string[];
  };
  success: boolean;
};

export async function sendContactEmail(prevState: ContactState, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    phone: formData.get('phone'),
    message: formData.get('message'),
    terms: formData.get('terms'),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  await sendEmail(
    'Контактна форма',
    `
      Ім'я: ${formData.get('name')}\n
      Телефон: ${formData.get('phone')}\n
      Повідомлення: ${formData.get('message')}
    `
  );

  return { success: true }
}
