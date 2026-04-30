# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> Rey.id >> TC002 => Vidio Games & App
- Location: tests\example.spec.js:45:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.pokemon.com/us/pokemon-video-games"
Received: "https://www.pokemon.com/us/pokemon-video-games/all-pokemon-games"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × unexpected value "https://www.pokemon.com/us/pokemon-video-games/all-pokemon-games"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - list [ref=e6]:
      - listitem [ref=e7]:
        - link "site_slug" [ref=e8] [cursor=pointer]:
          - /url: https://www.pokemon.com/us/
          - img "site_slug" [ref=e9]
      - listitem [ref=e10]:
        - img "site_slug" [ref=e12] [cursor=pointer]
      - listitem [ref=e13]:
        - link "site_slug" [ref=e14] [cursor=pointer]:
          - /url: https://corporate.pokemon.com/en-us/
          - img "site_slug" [ref=e15]
      - generic:
        - listitem [ref=e16]:
          - link [ref=e17] [cursor=pointer]:
            - /url: https://30.pokemon.com/en-us
            - img [ref=e18]
        - listitem [ref=e19]:
          - link [ref=e20] [cursor=pointer]:
            - /url: https://legends.pokemon.com/en-us/
            - img [ref=e21]
        - listitem [ref=e22]:
          - link [ref=e23] [cursor=pointer]:
            - /url: https://community.pokemon.com/en-us/
            - img [ref=e24]
        - listitem [ref=e25]:
          - link [ref=e26] [cursor=pointer]:
            - /url: https://www.pokemon.com/us/app/
            - img [ref=e27]
    - link:
      - /url: "#"
  - navigation [ref=e28]:
    - generic:
      - text: 
      - list:
        - listitem [ref=e29] [cursor=pointer]:
          - link " Home" [ref=e30]:
            - /url: https://www.pokemon.com/us/
            - generic [ref=e31]: 
            - generic [ref=e32]: Home
        - listitem [ref=e33] [cursor=pointer]:
          - link " Pokédex" [ref=e34]:
            - /url: https://www.pokemon.com/us/pokedex/
            - generic [ref=e35]: 
            - generic [ref=e36]: Pokédex
        - listitem [ref=e37] [cursor=pointer]:
          - link " Video Games & Apps" [ref=e38]:
            - /url: https://www.pokemon.com/us/pokemon-video-games/
            - generic [ref=e40]: 
            - generic [ref=e41]: Video Games & Apps
        - listitem [ref=e42] [cursor=pointer]:
          - link " Trading Card Game" [ref=e43]:
            - /url: https://www.pokemon.com/us/pokemon-tcg/
            - generic [ref=e44]: 
            - generic [ref=e45]: Trading Card Game
        - listitem [ref=e46] [cursor=pointer]:
          - link " Animation" [ref=e47]:
            - /url: https://www.pokemon.com/us/animation
            - generic [ref=e48]: 
            - generic [ref=e49]: Animation
        - listitem [ref=e50] [cursor=pointer]:
          - link " Play! Pokémon Events" [ref=e51]:
            - /url: https://www.pokemon.com/us/play-pokemon/
            - generic [ref=e52]: 
            - generic [ref=e53]: Play! Pokémon Events
        - listitem [ref=e54] [cursor=pointer]:
          - link " News" [ref=e55]:
            - /url: https://www.pokemon.com/us/pokemon-news/
            - generic [ref=e56]: 
            - generic [ref=e57]: News
        - text: 
  - generic [ref=e59]:
    - navigation [ref=e60]:
      - list [ref=e61] [cursor=pointer]:
        - listitem [ref=e62]:
          - link "Log In Log In" [ref=e63]:
            - /url: https://trainer.pokemon.com/profile
            - generic [ref=e64]:
              - img "Log In" [ref=e66]
              - generic [ref=e67]: Log In
      - link "" [ref=e69] [cursor=pointer]:
        - /url: ""
        - text: 
    - text:  
  - generic [ref=e70]:
    - generic [ref=e72]:
      - 'link "Pokémon Legends: Z-A Pokémon Legends: Z‑A E10+"':
        - /url: https://legends.pokemon.com/en-us
        - generic [ref=e74] [cursor=pointer]:
          - 'img "Pokémon Legends: Z-A" [ref=e75]'
          - generic [ref=e76]:
            - 'heading "Pokémon Legends: Z‑A" [level=3] [ref=e77]':
              - emphasis [ref=e78]: "Pokémon Legends: Z‑A"
            - paragraph [ref=e79]
            - img "E10+" [ref=e81]
    - heading " All Pokémon Video Games" [level=1] [ref=e84]:
      - generic [ref=e85]: 
      - text: All Pokémon Video Games
    - generic [ref=e87]:
      - list:
        - listitem [ref=e88]:
          - link "Pokémon Champions Nintendo Switch, iOS, and Android devices April 8, 2026 Pokémon Champions" [ref=e89] [cursor=pointer]:
            - /url: /us/pokemon-video-games/pokemon-champions
            - img "Pokémon Champions" [ref=e91]
            - generic [ref=e93]: Nintendo Switch, iOS, and Android devices
            - generic [ref=e94]: April 8, 2026
            - heading "Pokémon Champions" [level=2] [ref=e95]
            - paragraph
        - listitem [ref=e96]:
          - link "Pokémon Pokopia Nintendo Switch 2 March 5, 2026 Pokémon Pokopia" [ref=e97] [cursor=pointer]:
            - /url: /us/pokemon-video-games/pokemon-pokopia
            - img "Pokémon Pokopia" [ref=e99]
            - generic [ref=e101]: Nintendo Switch 2
            - generic [ref=e102]: March 5, 2026
            - heading "Pokémon Pokopia" [level=2] [ref=e103]
            - paragraph
        - listitem [ref=e104]:
          - 'link "Pokémon Legends: Z-A Nintendo Switch / Nintendo Switch 2 October 16, 2025 Pokémon Legends: Z-A" [ref=e105] [cursor=pointer]':
            - /url: /us/pokemon-video-games/pokemon-legends-z-a
            - 'img "Pokémon Legends: Z-A" [ref=e107]'
            - generic [ref=e109]: Nintendo Switch / Nintendo Switch 2
            - generic [ref=e110]: October 16, 2025
            - 'heading "Pokémon Legends: Z-A" [level=2] [ref=e111]'
            - paragraph
        - listitem [ref=e112]:
          - link "Play! Pokémon Access iOS/Android August 4, 2025 Play! Pokémon Access" [ref=e113] [cursor=pointer]:
            - /url: /us/pokemon-video-games/play-pokemon-access
            - img "Play! Pokémon Access" [ref=e115]
            - generic [ref=e117]: iOS/Android
            - generic [ref=e118]: August 4, 2025
            - heading "Play! Pokémon Access" [level=2] [ref=e119]
            - paragraph
        - listitem [ref=e120]:
          - link "Pokémon Friends iOS/Android, Nintendo Switch, Nintendo Switch 2 July 22, 2025 Pokémon Friends" [ref=e121] [cursor=pointer]:
            - /url: /us/pokemon-video-games/pokemon-friends
            - img "Pokémon Friends" [ref=e123]
            - generic [ref=e125]: iOS/Android, Nintendo Switch, Nintendo Switch 2
            - generic [ref=e126]: July 22, 2025
            - heading "Pokémon Friends" [level=2] [ref=e127]
            - paragraph
        - listitem [ref=e128]:
          - link "Pokémon Trading Card Game Pocket iOS and Android devices October 30, 2024 Pokémon Trading Card Game Pocket" [ref=e129] [cursor=pointer]:
            - /url: /us/pokemon-video-games/pokemon-trading-card-game-pocket
            - img "Pokémon Trading Card Game Pocket" [ref=e131]
            - generic [ref=e133]: iOS and Android devices
            - generic [ref=e134]: October 30, 2024
            - heading "Pokémon Trading Card Game Pocket" [level=2] [ref=e135]
            - paragraph
        - listitem [ref=e136]:
          - link "Detective Pikachu Returns Nintendo Switch October 6, 2023 Detective Pikachu Returns" [ref=e137] [cursor=pointer]:
            - /url: /us/pokemon-video-games/detective-pikachu-returns
            - img "Detective Pikachu Returns" [ref=e139]
            - generic [ref=e141]: Nintendo Switch
            - generic [ref=e142]: October 6, 2023
            - heading "Detective Pikachu Returns" [level=2] [ref=e143]
            - paragraph
        - listitem [ref=e144]:
          - link "Pokémon Sleep iOS and Android devices July 19, 2023 Pokémon Sleep" [ref=e145] [cursor=pointer]:
            - /url: /us/pokemon-video-games/pokemon-sleep
            - img "Pokémon Sleep" [ref=e147]
            - generic [ref=e149]: iOS and Android devices
            - generic [ref=e150]: July 19, 2023
            - heading "Pokémon Sleep" [level=2] [ref=e151]
            - paragraph
        - listitem [ref=e152]:
          - link "Pokémon Trading Card Game Live Windows, Mac, iOS, and Android devices June 8, 2023 Pokémon Trading Card Game Live" [ref=e153] [cursor=pointer]:
            - /url: /us/pokemon-video-games/pokemon-trading-card-game-live
            - img "Pokémon Trading Card Game Live" [ref=e155]
            - generic [ref=e157]: Windows, Mac, iOS, and Android devices
            - generic [ref=e158]: June 8, 2023
            - heading "Pokémon Trading Card Game Live" [level=2] [ref=e159]
            - paragraph
        - listitem [ref=e160]:
          - link "Pokémon Scarlet and Pokémon Violet Nintendo Switch November 18, 2022 Pokémon Scarlet and Pokémon Violet" [ref=e161] [cursor=pointer]:
            - /url: /us/pokemon-video-games/pokemon-scarlet-and-pokemon-violet
            - img "Pokémon Scarlet and Pokémon Violet" [ref=e163]
            - generic [ref=e165]: Nintendo Switch
            - generic [ref=e166]: November 18, 2022
            - heading "Pokémon Scarlet and Pokémon Violet" [level=2] [ref=e167]
            - paragraph
        - listitem [ref=e168]:
          - 'link "Pokémon Legends: Arceus Nintendo Switch January 28, 2022 Pokémon Legends: Arceus" [ref=e169] [cursor=pointer]':
            - /url: /us/pokemon-video-games/pokemon-legends-arceus
            - 'img "Pokémon Legends: Arceus" [ref=e171]'
            - generic [ref=e173]: Nintendo Switch
            - generic [ref=e174]: January 28, 2022
            - 'heading "Pokémon Legends: Arceus" [level=2] [ref=e175]'
            - paragraph
        - listitem [ref=e176]:
          - link "Pokémon Brilliant Diamond and Pokémon Shining Pearl Nintendo Switch November 19, 2021 Pokémon Brilliant Diamond and Pokémon Shining Pearl" [ref=e177] [cursor=pointer]:
            - /url: /us/pokemon-video-games/pokemon-brilliant-diamond-and-pokemon-shining-pearl
            - img "Pokémon Brilliant Diamond and Pokémon Shining Pearl" [ref=e179]
            - generic [ref=e181]: Nintendo Switch
            - generic [ref=e182]: November 19, 2021
            - heading "Pokémon Brilliant Diamond and Pokémon Shining Pearl" [level=2] [ref=e183]
            - paragraph
      - link "Load More Games" [ref=e184] [cursor=pointer]:
        - /url: "#"
        - generic [ref=e185]: Load More Games
  - text: 
  - contentinfo [ref=e188]:
    - generic [ref=e189]:
      - paragraph [ref=e190]: Sign up for Pokémon emails!
      - generic [ref=e191]:
        - generic [ref=e192]:
          - textbox "Email" [ref=e193]
          - generic [ref=e194]:
            - combobox [ref=e195]:
              - option "Afghanistan"
              - option "Albania"
              - option "Algeria"
              - option "Andorra"
              - option "Angola"
              - option "Anguilla"
              - option "Antigua and Barbuda"
              - option "Argentina"
              - option "Armenia"
              - option "Aruba"
              - option "Australia"
              - option "Austria"
              - option "Azerbaijan"
              - option "Bahamas"
              - option "Bahrain"
              - option "Barbados"
              - option "Belarus"
              - option "Belgium"
              - option "Belize"
              - option "Benin"
              - option "Bolivia"
              - option "Bosnia and Herzegovina"
              - option "Botswana"
              - option "Brazil"
              - option "Brunei"
              - option "Bulgaria"
              - option "Burkina Faso"
              - option "Burundi"
              - option "Cameroon"
              - option "Canada"
              - option "Cayman Islands"
              - option "Central African Republic"
              - option "Chad"
              - option "Chile"
              - option "China"
              - option "Colombia"
              - option "Comoros"
              - option "Congo"
              - option "Cook Islands"
              - option "Costa Rica"
              - option "Croatia"
              - option "Curaçao"
              - option "Cyprus"
              - option "Czech Republic"
              - option "Denmark"
              - option "Djibouti"
              - option "Dominica"
              - option "Dominican Republic"
              - option "Ecuador"
              - option "Egypt"
              - option "El Salvador"
              - option "Equatorial Guinea"
              - option "Eritrea"
              - option "Estonia"
              - option "Ethiopia"
              - option "Finland"
              - option "France"
              - option "French Guiana"
              - option "Gabon"
              - option "Gambia"
              - option "Georgia"
              - option "Germany"
              - option "Ghana"
              - option "Gibraltar"
              - option "Greece"
              - option "Grenada"
              - option "Guadeloupe"
              - option "Guam"
              - option "Guatemala"
              - option "Guernsey"
              - option "Guinea-Bissau"
              - option "Guyana"
              - option "Haiti"
              - option "Honduras"
              - option "Hong Kong"
              - option "Hungary"
              - option "Iceland"
              - option "India"
              - option "Indonesia"
              - option "Ireland"
              - option "Isle of Man"
              - option "Israel"
              - option "Italy"
              - option "Jamaica"
              - option "Japan"
              - option "Jersey"
              - option "Jordan"
              - option "Kazakhstan"
              - option "Kenya"
              - option "Kuwait"
              - option "Latvia"
              - option "Lebanon"
              - option "Lesotho"
              - option "Liechtenstein"
              - option "Lithuania"
              - option "Luxembourg"
              - option "Macao"
              - option "Macedonia (Republic of)"
              - option "Madagascar"
              - option "Malawi"
              - option "Malaysia"
              - option "Mali"
              - option "Malta"
              - option "Martinique"
              - option "Mauritania"
              - option "Mauritius"
              - option "Mexico"
              - option "Moldova, Republic of"
              - option "Monaco"
              - option "Montenegro"
              - option "Montserrat"
              - option "Morocco"
              - option "Mozambique"
              - option "Namibia"
              - option "Netherlands"
              - option "Netherlands Antilles"
              - option "New Zealand"
              - option "Nicaragua"
              - option "Niger"
              - option "Nigeria"
              - option "Norway"
              - option "Oman"
              - option "Pakistan"
              - option "Panama"
              - option "Paraguay"
              - option "Peru"
              - option "Philippines"
              - option "Poland"
              - option "Portugal"
              - option "Qatar"
              - option "Romania"
              - option "Russian Federation"
              - option "Rwanda"
              - option "Saint Kitts and Nevis"
              - option "Saint Lucia"
              - option "Saint Vincent and the Grenadines"
              - option "San Marino"
              - option "Sao Tome and Principe"
              - option "Saudi Arabia"
              - option "Senegal"
              - option "Serbia"
              - option "Serbia and Kosovo"
              - option "Seychelles"
              - option "Sierra Leone"
              - option "Singapore"
              - option "Sint Maarten"
              - option "Slovakia (Slovak Republic)"
              - option "Slovenia"
              - option "Somalia"
              - option "South Africa"
              - option "Spain"
              - option "Sudan"
              - option "Suriname"
              - option "Swaziland"
              - option "Sweden"
              - option "Switzerland"
              - option "Taiwan"
              - option "Tajikistan"
              - option "Tanzania, United Republic of"
              - option "Thailand"
              - option "Togo"
              - option "Trinidad and Tobago"
              - option "Tunisia"
              - option "Turkey"
              - option "Turkmenistan"
              - option "Turks and Caicos Islands"
              - option "Uganda"
              - option "Ukraine"
              - option "United Arab Emirates"
              - option "United Kingdom (Great Britain)"
              - option "United States" [selected]
              - option "Uruguay"
              - option "Uzbekistan"
              - option "Vatican City"
              - option "Venezuela"
              - option "Virgin Islands (British)"
              - option "Virgin Islands (U.S.)"
              - option "Yemen"
              - option "Zambia"
              - option "Zimbabwe"
            - textbox "Birthday" [ref=e196]
        - generic [ref=e197]:
          - paragraph [ref=e198]: "I’d like to receive emails about:"
          - generic [ref=e199]:
            - checkbox "Pokémon video games, apps, and more" [checked] [ref=e200]
            - generic [ref=e201]: Pokémon video games, apps, and more
          - generic [ref=e202]:
            - checkbox "Pokémon Center (our official online shop)" [checked] [ref=e203]
            - generic [ref=e204]: Pokémon Center (our official online shop)
          - generic [ref=e205]:
            - checkbox "I accept the Pokemon.com Terms of Use and Privacy Notice" [ref=e206]
            - generic [ref=e207]:
              - text: I accept the Pokemon.com
              - link "Terms of Use" [ref=e208] [cursor=pointer]:
                - /url: /us/terms-of-use
              - text: and
              - link "Privacy Notice" [ref=e209] [cursor=pointer]:
                - /url: /us/privacy-notice
      - button "SIGN UP" [ref=e210]
    - generic [ref=e211]:
      - generic [ref=e212]:
        - heading "The Pokémon Company" [level=2] [ref=e213]:
          - generic [ref=e214]: The Pokémon Company
        - list [ref=e215]:
          - listitem [ref=e216]:
            - link "News" [ref=e217] [cursor=pointer]:
              - /url: /us/pokemon-news
          - listitem [ref=e218]:
            - link "Parents Guide" [ref=e219] [cursor=pointer]:
              - /url: /us/parents-guide
          - listitem [ref=e220]:
            - link "Customer Service" [ref=e221] [cursor=pointer]:
              - /url: /us/customer-service
          - listitem [ref=e222]:
            - link "About Our Company" [ref=e223] [cursor=pointer]:
              - /url: https://corporate.pokemon.com/en-us/
          - listitem [ref=e224]: Careers
          - listitem [ref=e225]:
            - link "Select a Country/Region" [ref=e226] [cursor=pointer]:
              - /url: /us/country-region
              - text: Select a Country/Region
          - listitem [ref=e227]: Press Site
      - generic [ref=e231]:
        - 'generic "External: https://www.facebook.com/pokemon" [ref=e232] [cursor=pointer]':
          - generic [ref=e233]: Facebook
        - 'generic "External: https://www.youtube.com/user/Pokemon" [ref=e234] [cursor=pointer]':
          - generic [ref=e235]: Youtube
        - 'generic "External: https://www.twitter.com/pokemon" [ref=e236] [cursor=pointer]':
          - generic [ref=e237]: Twitter
        - 'generic "External: https://www.instagram.com/pokemon" [ref=e238] [cursor=pointer]':
          - generic [ref=e239]: Instagram
        - 'generic "External: https://www.pinterest.com/pokemon" [ref=e240] [cursor=pointer]':
          - generic [ref=e241]: Pinterest
      - generic [ref=e243]:
        - generic [ref=e244]:
          - 'generic "External: https://caru.bbbprograms.org/seal/Confirmation/1596150491" [ref=e245] [cursor=pointer]'
          - list [ref=e246]:
            - listitem [ref=e247]:
              - link "Terms of Use" [ref=e248] [cursor=pointer]:
                - /url: /us/terms-of-use
            - listitem [ref=e249]:
              - link "Privacy Notice" [ref=e250] [cursor=pointer]:
                - /url: /us/privacy-notice
            - listitem [ref=e251]:
              - link "Cookie Page" [ref=e252] [cursor=pointer]:
                - /url: /us/cookie-page
            - listitem [ref=e253]:
              - link "Legal Info" [ref=e254] [cursor=pointer]:
                - /url: /us/legal
            - listitem [ref=e255]:
              - link "Security" [ref=e256] [cursor=pointer]:
                - /url: /us/vulnerability-disclosure-program
        - generic [ref=e257]: ©2026 Pokémon. ©1995 - 2026 Nintendo/Creatures Inc./GAME FREAK inc. TM, ®Nintendo.
  - text:         
  - iframe [ref=e260]:
    - generic [ref=f15e5]:
      - generic [ref=f15e6]:
        - text: protected by
        - strong [ref=f15e7]: reCAPTCHA
      - generic [ref=f15e9]:
        - text: "For site owner: v1beta1 is deprecated."
        - link "Take action." [ref=f15e10] [cursor=pointer]:
          - /url: https://docs.cloud.google.com/recaptcha/docs/migration-v1
```

# Test source

```ts
  1  | // tc001.spec.js
  2  | const { chromium } = require('playwright-extra');
  3  | const stealth = require('puppeteer-extra-plugin-stealth')();
  4  | const { navbar } = require("../pages/navbar")
  5  | 
  6  | import { test, expect } from "@playwright/test";
  7  | 
  8  | 
  9  | chromium.use(stealth);
  10 | 
  11 | test.describe('Rey.id', () => {
  12 | 
  13 |   test.describe.configure({ mode: 'serial' });
  14 | 
  15 |   test.beforeEach('Pokemon', async ({page}) => {
  16 |     await page.goto('https://www.pokemon.com/us/');
  17 | 
  18 |     await page.locator('#onetrust-accept-btn-handler').waitFor({state : "visible"})
  19 |     const cookies = page.locator('#onetrust-accept-btn-handler')
  20 |     if (await cookies.isVisible()) {
  21 |       await cookies.click()
  22 |     }
  23 |   })
  24 | 
  25 |   test('TC001 - Pokedex Page', async ({ page }) => {
  26 |     // Navigate to Pokédex
  27 |     const getPagePokedex = navbar(page)
  28 |     await getPagePokedex.pokedexPage()
  29 | 
  30 |     const searchInput = page.locator('#searchInput');
  31 |     await searchInput.waitFor({ state: 'visible' });
  32 |     await searchInput.click();
  33 |     await searchInput.pressSequentially('Pikachu', { delay: 100 });
  34 |     await page.getByRole('button', { name: 'Search' }).click();
  35 |     await page.locator('a[href="/us/pokedex/pikachu"]').waitFor({ state: 'visible' });
  36 |     await page.locator('a[href="/us/pokedex/pikachu"]').click();
  37 |     await page.locator('a[href="/us/pokedex"]').click();
  38 |     const scrollView = page.locator('#loadMore');
  39 |     await page.mouse.wheel(0, 1000);
  40 |     await scrollView.waitFor({ state: 'visible' });
  41 |     await scrollView.scrollIntoViewIfNeeded();
  42 |     await scrollView.click();
  43 |   });
  44 | 
  45 |   test('TC002 => Vidio Games & App', async ({page}) => {
  46 |     const getVidioGamesPage = navbar(page)
  47 |     await getVidioGamesPage.vidioGamesAppPage()
  48 | 
  49 |     await page.locator('a[href="/us/pokemon-video-games/all-pokemon-games/"]').click()
> 50 |     await expect(page).toHaveURL('https://www.pokemon.com/us/pokemon-video-games')
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  51 |   })
  52 |   
  53 |   test('TC003 => Create Account with valid email', async ({ page }) => {
  54 |     
  55 |     const getLoginPage = navbar(page)
  56 |     await getLoginPage.loginPage()
  57 |     
  58 |     await page.locator('[data-testid="create-account-button"]').waitFor({state : "visible"})
  59 |     await page.locator('[data-testid="create-account-button"]').click()
  60 | 
  61 |     await page.getByTestId('country-select-test').selectOption('Indonesia')
  62 |     await page.getByTestId('year-select-test').selectOption('2005')
  63 |     await page.getByTestId('month-select-test').selectOption('January')
  64 |     await page.getByTestId('day-select-test').selectOption('3')
  65 |     await page.locator('#ageGateSubmit').click()
  66 |     await page.locator('.base-container .basic-button:has-text("I am sure")').click()
  67 | 
  68 |     await page.getByTestId('email-text-input-test').pressSequentially('loki@gmail.com')
  69 |     await page.getByTestId('confirm-text-input-test').pressSequentially('loki@gmail.com')
  70 |     await page.getByTestId('email-opt-in-checkbox-marketing').check()
  71 |     await page.getByTestId('continue-button').click()
  72 | 
  73 |     const message = page.locator('.body-container')
  74 |     await expect(message).toHaveText('We are unable to create an account for you.')
  75 |    })
  76 | })
  77 | 
  78 | 
```