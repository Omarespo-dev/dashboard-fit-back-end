//Importiamo express e i suoi tipi req e res
import express, { Request, Response } from "express";
//Importo dotenv per caricare le variabili dal file .env
import dotenv from "dotenv";

//usiamo express
const app = express();

// Carica le variabili dal file .env in process.env
dotenv.config();

//Ricavo la porta
const port = process.env.PORT;

//Definiamo la rotta home, gestendo la richiesta del client e la risposta
app.get("/", (req: Request, res: Response) => {
  res.send("Progetto Dashboard Fit Tracker");
});

//Mettiamo in ascolto la porta per avviare il server
app.listen(port, () => {
  console.log(`Example app listenint on port ${port}`);
});
