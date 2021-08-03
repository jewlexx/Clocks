import { chromium, firefox, webkit } from 'playwright';
import { resolve } from 'path';

const browsers = [chromium, firefox, webkit];

browsers.forEach(async browser => {
  const bw = await browser.launch();
  const ctx = await bw.newContext();

  const page = await ctx.newPage();

  await page.goto('https://clocks.jamesinaxx.me');

  await page.screenshot({
    path: resolve(__dirname, `images/${browser.name()}/clockImage.png`),
  });

  await page.goto(`file://${resolve(__dirname, 'transparentClock.html')}`);

  await page.screenshot({
    path: resolve(__dirname, `images/${browser.name()}/transparentImage.png`),
  });

  bw.close();
});
