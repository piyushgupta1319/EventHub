export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
};

export const validateEventTitle = (title: string): boolean => {
  return title.trim().length >= 3 && title.trim().length <= 100;
};

export const validateEventDescription = (description: string): boolean => {
  return description.trim().length >= 10 && description.trim().length <= 5000;
};

export const validateCapacity = (capacity: string | number): boolean => {
  const cap = typeof capacity === 'string' ? parseInt(capacity) : capacity;
  return cap > 0 && cap <= 10000;
};

export const validateVenue = (venue: string): boolean => {
  return venue.trim().length >= 3 && venue.trim().length <= 200;
};

export const validateForm = (data: Record<string, any>): { valid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (data.email && !validateEmail(data.email)) {
    errors.email = 'Invalid email address';
  }

  if (data.password && !validatePassword(data.password)) {
    errors.password = 'Password must be at least 8 characters long';
  }

  if (data.phone && !validatePhoneNumber(data.phone)) {
    errors.phone = 'Invalid phone number';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};
