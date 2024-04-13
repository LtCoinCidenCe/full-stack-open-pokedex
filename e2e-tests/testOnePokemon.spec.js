/* eslint-disable no-console */
const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Test one pokemon', () => {
  beforeEach(async ({ page }) => {
    await page.goto('')
  })

  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('Butterfree can be navigated to', async ({ page }) => {
    await page.getByText('butterfree').locator('..').click()
    await expect(page.getByText('butterfree')).toBeVisible()
    await expect(page.getByText('speed')).toBeVisible()
    await expect(page.getByText('tinted lens')).toBeVisible()
    console.log('Butterfree can be navigated to')
  })
})
