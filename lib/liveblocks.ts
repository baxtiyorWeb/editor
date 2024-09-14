import { Liveblocks } from "@liveblocks/node";
import env from 'dotenv'

env.config()
export const liveblocks = new Liveblocks({
  secret: 'sk_dev_7Gn124rKadEyRH8QVZSAK_3hc5ghvWymkn4LSz0damLGHuqRc4oZtD8au3-HqLEI' as string,
});