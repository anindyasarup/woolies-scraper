import { firefox } from 'playwright';

export const getBrowser = async ({
    config: { launchOptions }
}) => await firefox.launch(launchOptions);
