import { z } from 'zod';

export const stepOneSchema = z.object({
  email: z.string().nonempty("email can not be empty").email('Invalid email format'),
  name: z.string().nonempty("name can not be empty").min(2, 'Name must have at least 2 characters'),
  phone_number: z.string().nonempty("phone number can not be empty").regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number').min(13, 'Name must have at least 13 characters'),
});