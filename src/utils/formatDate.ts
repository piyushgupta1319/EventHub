export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const formatDateTime = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const formatTimeOnly = (timeString: string): string => {
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};

export const getDaysUntilEvent = (eventDate: string): number => {
  const today = new Date();
  const event = new Date(eventDate);
  const timeDiff = event.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
};

export const isEventToday = (eventDate: string): boolean => {
  const today = new Date().toISOString().split('T')[0];
  return eventDate === today;
};

export const isEventUpcoming = (eventDate: string): boolean => {
  const today = new Date().toISOString().split('T')[0];
  return eventDate > today;
};

export const isEventPast = (eventDate: string): boolean => {
  const today = new Date().toISOString().split('T')[0];
  return eventDate < today;
};
