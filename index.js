import express from "express";
import wikipediaController from "./controllers/wikipediaController.js";

const app = express();
/**
 * Get wikipedia controller
 * 
 * @access Public
 * @returns {string} - html
 */

app.get("/", async (req, res) =>{
    const query = req.query.q; // para eelgir la palabra q quieres usar 
    const {title,links,paragraphs,images} = await wikipediaController.getContent(query);
    // const data = await wikipediaController.getContent(query);
    // res.send (data);
    res.send(`
        <h1>${title}</h1>,
        <p>${paragraphs[1]}</p>,
        <img src="${images[2]}">
    `);
});

app.listen(3999,() =>{
    console.log("server started on port 3999");
});
