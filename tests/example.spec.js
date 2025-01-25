// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/'
const DOG_PREFIX_IMAGE_URL = 'https://images.dog.ceo/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByTitle('facts')
  const breed = await page.getByTitle('breeds')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const breedContent = await breed.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(breedContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(DOG_PREFIX_IMAGE_URL)).toBeTruthy()
});
