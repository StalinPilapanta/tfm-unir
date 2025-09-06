import 'dotenv/config';
import express from 'express';
import routesMaterias from './routes/materias.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/materias', routesMaterias);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log('Servidor activo en el puerto ' + PORT));
} catch(e) {
    console.log(e);
}