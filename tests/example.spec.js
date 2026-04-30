// tc001.spec.js
const { chromium } = require('playwright-extra');
const stealth = require('puppeteer-extra-plugin-stealth')();
const { navbar } = require("../pages/navbar")

import { test, expect } from "@playwright/test";


chromium.use(stealth);

test.describe('Rey.id', () => {

  test.describe.configure({ mode: 'serial' });

  test.beforeEach('Pokemon', async ({page}) => {
    await page.goto('https://www.pokemon.com/us/');

    await page.locator('#onetrust-accept-btn-handler').waitFor({state : "visible"})
    const cookies = page.locator('#onetrust-accept-btn-handler')
    if (await cookies.isVisible()) {
      await cookies.click()
    }
  })

  test('TC001 - Pokedex Page', async ({ page }) => {
    // Navigate to Pokédex
    const getPagePokedex = navbar(page)
    await getPagePokedex.pokedexPage()

    const searchInput = page.locator('#searchInput');
    await searchInput.waitFor({ state: 'visible' });
    await searchInput.click();
    await searchInput.pressSequentially('Pikachu', { delay: 100 });
    await page.getByRole('button', { name: 'Search' }).click();
    await page.locator('a[href="/us/pokedex/pikachu"]').waitFor({ state: 'visible' });
    await page.locator('a[href="/us/pokedex/pikachu"]').click();
    await page.locator('a[href="/us/pokedex"]').click();
    const scrollView = page.locator('#loadMore');
    await page.mouse.wheel(0, 1000);
    await scrollView.waitFor({ state: 'visible' });
    await scrollView.scrollIntoViewIfNeeded();
    await scrollView.click();
  });

  test('TC002 => Vidio Games & App', async ({page}) => {
    const getVidioGamesPage = navbar(page)
    await getVidioGamesPage.vidioGamesAppPage()

    await page.locator('a[href="/us/pokemon-video-games/all-pokemon-games/"]').click()
    await expect(page).toHaveURL('https://www.pokemon.com/us/pokemon-video-games/all-pokemon-games')
  })
  
  test('TC003 => Create Account with valid email', async ({ page }) => {
    
    const getLoginPage = navbar(page)
    await getLoginPage.loginPage()
    
    await page.locator('[data-testid="create-account-button"]').waitFor({state : "visible"})
    await page.locator('[data-testid="create-account-button"]').click()

    await page.getByTestId('country-select-test').selectOption('Indonesia')
    await page.getByTestId('year-select-test').selectOption('2005')
    await page.getByTestId('month-select-test').selectOption('January')
    await page.getByTestId('day-select-test').selectOption('3')
    await page.locator('#ageGateSubmit').click()
    await page.locator('.base-container .basic-button:has-text("I am sure")').click()

    await page.getByTestId('email-text-input-test').pressSequentially('loki@gmail.com')
    await page.getByTestId('confirm-text-input-test').pressSequentially('loki@gmail.com')
    await page.getByTestId('email-opt-in-checkbox-marketing').check()
    await page.getByTestId('continue-button').click()

    const message = page.locator('.body-container')
    await expect(message).toHaveText('We are unable to create an account for you.')
   })
})

