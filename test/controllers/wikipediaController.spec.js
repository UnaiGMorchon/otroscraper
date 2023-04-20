import wikipediaController from "../../controllers/wikipediaController";

describe ("wikipedia controller", () => {
    
    it('Deberia conseguir el contenido de una pagina de wikipedia', async()=> {
        const query = "gato";
        const {title,links,paragraphs,images} = await wikipediaController.getContent(query); // { lo recoge como un objeto en de de array q seria colocado en el miso orden}
        expect(title).toContain('Felis silvestris catus'); // hay q  mirar como sale la pagina de gato de wikipedia
        expect(links).toContain('/wiki/Felis_silvestris');
        expect(paragraphs[0]).toContain('El gato doméstico');
        expect(images).toContain('//upload.wikimedia.org/wikipedia/commons/thumb/6/64/Collage_of_Six_Cats-02.jpg/250px-Collage_of_Six_Cats-02.jpg');
    },10000);
});
