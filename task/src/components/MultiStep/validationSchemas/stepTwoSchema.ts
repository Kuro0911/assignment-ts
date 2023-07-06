import { z } from 'zod';


const PincodeValidator = (val: number): boolean => {
  const pincodeRegex = /^\d{6}$/; // Indian pincode regex pattern
  return pincodeRegex.test(String(val));
};
export const stepTwoSchema = z.object({
  address_1: z.string().nonempty("address can not be empty").min(2, 'address must have at least 2 characters'),
  address_2: z.string(),
  city: z.string().nonempty("city can not be empty"),
  state: z.string().nonempty("state can not be empty"),
  pincode: z.number().refine(PincodeValidator, {
    message: 'Invalid Indian pincode',
  }),
  country: z.string().nonempty("country can not be empty")
});

