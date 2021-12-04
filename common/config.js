export const googleMapApiKey = () => {
  return process.env.GOOGLE_MAP_API_KEY;
};

export const placeholderImage = () => {
  return '/images/placeholder.png';
};

export const apiUrl = () => {
  if (process.env.NODE_ENV === 'development')
    return process.env.DEVELOPMENT_URL;
  else return process.env.PRODUCTION_URL;
};
