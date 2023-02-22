import express from "express";
import http from "http";
import app from './app.js';

app.use(express.json({limit: "20mb"}));
app.use(express.urlencoded({extended: true}));

app.get("/", (q, r,) => 
r.send`${process.env.NAME} API is connected and ready!!!`)

http.createServer(app)
    .listen(process.env.PORT);

console.log(`${process.env.NAME} server ready and listening on port ${process.env.PORT}! 🚀  Go to ${`http://localhost:${process.env.PORT}/`}`);
