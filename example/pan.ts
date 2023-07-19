import "dotenv/config";
import { Midjourney } from "../src";
import { sleep } from "../src/utils";
/**
 *
 * a simple example of how to use the vary
 * ```
 * npx tsx example/vary.ts
 * ```
 */
async function main() {
  const client = new Midjourney({
    ServerId: <string>process.env.SERVER_ID,
    ChannelId: <string>process.env.CHANNEL_ID,
    SalaiToken: <string>process.env.SALAI_TOKEN,
    Debug: true,
    Ws: true, //enable ws is required for custom zoom
  });
  await client.init();
  const prompt = "A tiger in the garden.";
  const Imagine = await client.Imagine(
    prompt,
    (uri: string, progress: string) => {
      console.log("loading", uri, "progress", progress);
    }
  );
  console.log(Imagine);
  if (!Imagine) {
    console.log("no message");
    return;
  }
  const Upscale = await client.Upscale({
    index: 2,
    msgId: <string>Imagine.id,
    hash: <string>Imagine.hash,
    flags: Imagine.flags,
    loading: (uri: string, progress: string) => {
      console.log("loading", uri, "progress", progress);
    },
  });
  if (!Upscale) {
    console.log("no message");
    return;
  }
  console.log(Upscale);

  const panLeft = Upscale?.options?.find((o) => o.label === "⬅️");
  if (!panLeft) {
    console.log("no pan");
    return;
  }
  await sleep(1400);
  const varyCustom = await client.Custom({
    msgId: <string>Upscale.id,
    flags: Upscale.flags,
    content: prompt,
    customId: panLeft.custom,
    loading: (uri: string, progress: string) => {
      console.log("loading", uri, "progress", progress);
    },
  });
  console.log("vary (Strong)", varyCustom);
  client.Close();
}
main()
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
