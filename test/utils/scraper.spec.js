import Scraper from "../../utils/scraper.js"; // se saca el hmtl en si

describe("Scraper", ()  => { 
    let scraper;

    beforeAll(async () => {
        scraper = new Scraper();
        await scraper.init();
    });

    afterAll (async () => {
        await scraper.close();
    });

    it ('Deberia obtener el conteindo de la página', async () => {
        const url = "https://www.google.com";
        const content = await scraper.getPageContent(url);
        expect(content).toContain("<title>Google</title>"); // se podria añadir onreo de estos 
   });
   
});