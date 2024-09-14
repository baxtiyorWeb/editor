import { Liveblocks } from "@liveblocks/node";
import env from 'dotenv'

env.config()
export const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
});