import { z } from 'zod';

const FILE_SIZE_LIMIT = 10 * 1024 * 1024; // 10MB file size limit
const ACCEPTED_TYPES = ["image/png", "application/pdf"];

export const stepFourSchema = z.object({
  multi_ups1: z.object({
      name: z.string().nonempty('File is required'),
      type: z.string().nonempty('File type is required'),
      size: z.number().min(1, 'File size must be greater than 0').max(FILE_SIZE_LIMIT, 'File size exceeds limit'),
    })
    .refine(
      (file) => ACCEPTED_TYPES.includes(file?.type),
      "only .png and .pdf files are accepted."
    ),
  multi_ups2: z
    .any()
    .nullable(),
  multi_ups3:  z
    .any()
    .nullable()
});