import { chromium, firefox, webkit, devices } from 'playwright';
import { resolve } from 'path';

const iPhone = devices['iPhone 11'];

const browsers = [chromium, firefox, webkit];

browsers.forEach(async (browser) => {
  const bw = await browser.launch();
  const deskctx = await bw.newContext();

  let page = await deskctx.newPage();

  await page.goto('https://clocks.jamesinaxx.me');

  await page.screenshot({
    path: resolve(__dirname, `images/desk${browser.name()}/clockImage.png`),
  });

  await page.goto(`file://${resolve(__dirname, 'transparentClock.html')}`);

  await page.screenshot({
    path: resolve(__dirname, `images/desk${browser.name()}/transparentImage.png`),
  });

  const iphonectx = await bw.newContext(iPhone);

  page = await iphonectx.newPage();

  await page.goto('https://clocks.jamesinaxx.me');

  await page.screenshot({
    path: resolve(__dirname, `images/phone${browser.name()}/clockImage.png`),
  });

  await page.goto(`file://${resolve(__dirname, 'transparentClock.html')}`);

  await page.screenshot({
    path: resolve(__dirname, `images/phone${browser.name()}/transparentImage.png`),
  });

  bw.close();
});
