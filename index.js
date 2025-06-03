import express from "express";
import moviesRoutes from "./routes/moviesRoutes.js";
import { validateMovie, logWithMorgan} from "./middlewares.js";

const PORT = process.env.PORT || 3000;


const app = express();

//#region Middlewares
//app.use(validateMovie);
app.use(logWithMorgan);
//#endregion




app.use(express.json());
app.use("/movies", moviesRoutes);

app
  .listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  })
  .on("error", (err) => {
    console.error(`Error al iniciar el servidor con error: ${err}`);
  });
