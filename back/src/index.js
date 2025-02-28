import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import {open} from "sqlite";

const SERVER = express();

SERVER.use(cors());
SERVER.use(express.json());

const PAGE_NOT_FOUND = 404;
const SERVER_PORT = 4000;

async function GetDatabase()
{
    return await open(
    {
        filename: "db/VitrineDB.db",
        driver: sqlite3.Database,
    });    
}

let DB = GetDatabase();


SERVER.get("/", (request, response) =>
{

});

SERVER.get("/api", async (request, response) =>
{
    const API_RESPONSE = await (await DB).all("select * from Vitrine");    

    response.status(200).json(API_RESPONSE);
});

SERVER.get("*", (request, response) =>
{
    response.sendStatus(PAGE_NOT_FOUND);
});

SERVER.listen(SERVER_PORT, () =>
{
    console.log("SERVER EM FUNCIONAMENTO");
});