import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.alias['@/data-schema'] = path.resolve(__dirname, 'resource');
    config.resolve.alias['@/amplify-outputs'] = path.resolve(__dirname, 'amplify_outputs');
    return config;
  },
};

export default nextConfig;