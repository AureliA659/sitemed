import { z } from 'zod';

// Contact Form Validation
export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z
    .string()
    .email('Please provide a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  phone: z
    .string()
    .regex(/^[\d\s\-\+\(\)]+$/, 'Please provide a valid phone number')
    .optional()
    .or(z.literal('')),
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be less than 200 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
  consent: z
    .boolean()
    .refine((val: boolean) => val === true, 'You must accept the privacy policy'),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// Chat Message Validation
export const ChatMessageSchema = z.object({
  message: z
    .string()
    .min(1, 'Message cannot be empty')
    .max(1000, 'Message must be less than 1000 characters')
    .transform((s: string) => s.trim()),
  userId: z.string().uuid().optional(),
});

export type ChatMessage = z.infer<typeof ChatMessageSchema>;

// Testimonial Submission (for later)
export const TestimonialSchema = z.object({
  patientName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please provide a valid email address'),
  rating: z
    .number()
    .int()
    .min(1, 'Rating must be between 1 and 5')
    .max(5, 'Rating must be between 1 and 5'),
  comment: z
    .string()
    .min(10, 'Comment must be at least 10 characters')
    .max(2000, 'Comment must be less than 2000 characters'),
  serviceId: z.string().uuid().optional(),
});

export type TestimonialData = z.infer<typeof TestimonialSchema>;
