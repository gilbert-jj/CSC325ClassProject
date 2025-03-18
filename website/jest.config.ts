import type { Config } from 'jest';
import nextJest from 'next/jest';

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({
  dir: './',  // Path to your Next.js project
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // You can uncomment the line below if you have any setup files
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// Create Jest config
export default createJestConfig(config);
