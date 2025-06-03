import express from "express";
import moviesRoutes from './routes/moviesRoutes.js';
import morgan from "morgan";
import { createStream } from "rotating-file-stream";

const PORT = process.env.PORT || 3000;
const logs_path = process.env.LOGS_PATH;


const app = express();


var accessLogStream = createStream('access.log', {
  interval: '1d', // rotate daily
  path: logs_path
});
app.use(morgan('short', { stream: accessLogStream }));

app.use(express.json());

app.use('/movies', moviesRoutes);

app
  .listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  })
  .on("error", (err) => {
    console.error(`Error al iniciar el servidor con error: ${err}`);
  });
