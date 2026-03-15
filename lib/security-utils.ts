/**
 * Security utilities for client-side validation and sanitization
 */

/**
 * Sanitize HTML entities to prevent XSS
 */
export function sanitizeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Sanitize user input for display
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .trim()
    .substring(0, 1000); // Limit length
}

/**
 * Check for suspicious patterns
 */
export function isSuspiciousInput(input: string): boolean {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /union\s+select/i,
    /drop\s+table/i,
    /--|#|\/\*/,
  ];

  return suspiciousPatterns.some((pattern) => pattern.test(input));
}

/**
 * Format error message for display
 */
export interface ValidationError {
  field: string;
  message: string;
}

export function formatValidationErrors(
  errors: Record<string, string>
): ValidationError[] {
  return Object.entries(errors).map(([field, message]) => ({
    field,
    message,
  }));
}

/**
 * Check if email is valid basic format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Check if phone is valid (basic)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phone === '' || phoneRegex.test(phone);
}
