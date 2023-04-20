import Parser from "../../utils/parser.js"; // aqui estan los test 

import fs from "fs";


describe("Parser", ()  => { //parser en mayusculas es una clase
  let parser;
    beforeAll(() => {
        const hmtl = fs.readFileSync("../test.html", "utf8");
       /* const html = `
        <html>
            <head>
                <title>Test</title>
            </head>
            <body>
                <div id="root">
                    <a href="wwww.google.com"></a>
                    <a href="wwww.facebook.com"></a>
                    <p>Hello</p>
                    <p>World</p>
                    <img src="image1.png"></img>
                    <img src="image2.png"></img>
                </div>
            </body>
        </html>`; */
         parser = new Parser(html);// parse en minisculas plantilla
    }); 
    
    it ('Deberia conseguir el título de la página', () => {
         const title = parser.getTitle();
         console.log (title); // para ver q te da el test del titulo
         expect(title).toBe("Test");
    });

    it ('Deberia conseguir los links de la página', () => {
        const links = parser.getLinks();
        console.log (links);
        expect(links).toEqual(["wwww.google.com", "wwww.facebook.com"]);
    });

    it('Deberia conseguir los parrafos de la página', () => {
        const paragraphs = parser.getParagraphs();
        console.log (paragraphs);
        expect(paragraphs).toEqual(["Hello", "World"])
    });

    it('Deberia conseguir los imagenes de la página', () => {
        const images = parser.getImages();
        console.log (images);
        expect(images).toEqual(["image1.png", "image2.png"]);
    });


});