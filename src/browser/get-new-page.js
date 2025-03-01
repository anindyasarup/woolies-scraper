export const getNewPage = async ({
    browser
}) => (async context => await context.newPage())(await browser.newContext());
