import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173';

test('has title', async ({ page }) => {
  await page.goto(LOCALHOST_URL);
  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');
  const textContent = await text.textContent();

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(image?.isVisible)
});

