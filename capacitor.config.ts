import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'be.melomania.app',
  appName: 'Melomania',
  webDir: 'www',
  server: {
    url: 'http://192.168.1.73:5173',
    cleartext: true
  }
};

export default config;
