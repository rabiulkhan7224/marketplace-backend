export const config = {
  JWT_SECRET: process.env.JWT_SECRET || 'your-very-long-secret-key-change-me',
  JWT_EXPIRES_IN: '7d',
  PORT: process.env.PORT || 5000,
};