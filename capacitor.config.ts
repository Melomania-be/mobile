import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'be.melomania.app',
  appName: 'Melomania',
  webDir: 'www',
  server: {
    url: 'https://tool.melomania.be',
    cleartext: true
  }
};

export default config;
