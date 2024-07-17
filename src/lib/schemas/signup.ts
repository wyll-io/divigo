import { z } from 'zod';

export default z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: 'Password must have a length >= 6'
  }),
  username: z.string().optional(),
  firstname: z.string(),
  lastname: z.string()
});
