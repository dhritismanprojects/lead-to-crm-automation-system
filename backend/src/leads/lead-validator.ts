export function validateRequiredFields(input: {
  email?: string;
}): void {
  if (!input || typeof input !== 'object') {
    throw new Error('Invalid lead payload');
  }

  if (!input.email) {
    throw new Error('Email is required');
  }
}