const nodeEnv = process.env.NODE_ENV?.toLowerCase();
const isStaging = nodeEnv === 'staging';
const isProduction = nodeEnv === 'production';
export const envPath =  isStaging ? '../../.env.staging' : isProduction ? '../../.env.production': '../../.env.local';
const dotEnv = require('dotenv');

export const dotEnvConfig = () => dotEnv.config({ path: envPath});
