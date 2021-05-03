import 'dotenv/config';
import { createSchema, config } from '@keystone-next/keystone/schema';

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long should the stay signed in?
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    //   TODO: Add data seeding here
  },
  lists: createSchema({
    //   schema items go in here
  }),
  ui: {
    //   TODO: change this for roles
    isAccessAllowed: () => true,
  },
  //   TODO: Add session values here
});
