
export const navbar = (page) => {

    const pokedexPage = async () => {
        await page.getByRole('link', { name: /Pokédex/i, exact: true }).click();
    }

    const vidioGamesAppPage = async () => {
        await page.getByRole('link', { name: /Video Games & Apps/i, exact: true }).click();
    }

    const loginPage = async () => {
        await page.locator('.sign-up a[href="https://trainer.pokemon.com/profile"]').click()
    }

    return {
        pokedexPage,
        vidioGamesAppPage,
        loginPage
    }
}