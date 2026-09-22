import { registerAs } from '@nestjs/config';

export default registerAs('hubspot', () => ({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
}));