import Scraper from "../utils/scraper.js";
import Parser from "../utils/parser.js";
import googleSearchController from "./googleSearchController.js";


async function getContent(query){
    const googleLinks = await googleSearchController.searchLinks(`wikipedia" ${query}`);
    const url = googleLinks.find((link) => link.includes("wikipedia.org"))
   
    const scraper = new Scraper();
    await scraper.init();
    const html = await scraper.getPageContent(url);
    const parser = new Parser(html);

    const title = parser.getTitle();
    const links = parser.getLinks();
    const images = parser.getImages();
    const paragraphs = parser.getParagraphs();

    scraper.close();
    return {
        title,
        links,
        images,
        paragraphs,
    }


}

export default {
    getContent
}