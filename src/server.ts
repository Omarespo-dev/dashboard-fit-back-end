//Importiamo express e i suoi tipi req e res
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

//usiamo express
const app = express();

// Carica le variabili dal file .env in process.env
dotenv.config();
//Ricavo la porta
const port = process.env.PORT;

//Middleware Globali
app.use(express.json()); // legge Json da req
app.use(cors({ origin: "http://localhost:5173" }));
app.use(helmet()); // helmet per headers di sicurezza

//Definiamo la rotta home, gestendo la richiesta del client e la risposta
app.get("/", (req: Request, res: Response) => {
  res.send("Progetto Dashboard Fit Tracker");
});

//Mettiamo in ascolto la porta per avviare il server
app.listen(port, () => {
  console.log(`Example app listenint on port ${port}`);
});
