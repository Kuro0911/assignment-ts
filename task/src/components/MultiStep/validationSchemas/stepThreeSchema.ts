import { z } from 'zod';

const FILE_SIZE_LIMIT = 10 * 1024 * 1024; 
const ALLOWED_FILE_TYPE = 'image/png'; 

export const stepThreeSchema = z.object({
  single_file: z
    .object({
      name: z.string().nonempty('File is required'),
      type: z.string().nonempty('File type is required').refine(value => value === ALLOWED_FILE_TYPE, {
        message: 'File type must be PNG',
        path: ['type'],
      }),
      size: z.number().min(1, 'File size must be greater than 0').max(FILE_SIZE_LIMIT, 'File size exceeds limit'),
    })
    .refine((file) => file.size <= FILE_SIZE_LIMIT, {
      message: 'File size exceeds limit',
      path: ['file', 'size'],
    }),
});