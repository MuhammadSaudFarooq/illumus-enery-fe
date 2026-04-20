import { z } from 'zod';

const BLOCKED_DOMAINS = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com'];

export const leadSchema = z.object({
  companyName: z
    .string()
    .min(2, 'Company name must be at least 2 characters.')
    .max(100, 'Company name is too long.'),

  contactName: z
    .string()
    .min(2, 'Contact name must be at least 2 characters.')
    .max(100, 'Contact name is too long.'),

  businessEmail: z
    .string()
    .email('Please enter a valid email address.')
    .refine((email) => {
      const domain = email.split('@')[1]?.toLowerCase();
      return !BLOCKED_DOMAINS.includes(domain);
    }, 'Please use your business email address. Personal email providers are not accepted.'),

  serviceRequested: z
    .string()
    .min(1, 'Please select a service.')
    .refine(
      (val) =>
        [
          'Commercial Lighting Solutions',
          'Maintenance & Service Contracts',
          'New Commercial Installs',
        ].includes(val),
      'Please select a valid service offering.'
    ),

  message: z
    .string()
    .max(1000, 'Message cannot exceed 1000 characters.')
    .optional(),
});
