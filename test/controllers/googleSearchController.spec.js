import googleSearchController from "../../controllers/googleSearchController";


describe ("Google Search controller", () => {
    
    it('Deberia conseguir los links de una busquedad de google', async()=> {
        const query = "Wikipedia";
        const links = await googleSearchController.searchLinks(query);
        expect(links).toContain("https://www.wikipedia.org");
    })
})
