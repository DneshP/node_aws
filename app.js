import express from "express";
import routes from "./routes/index.js";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
const __filename = pathToFileURL(import.meta.url);
const __dirname = fileURLToPath(__filename);

const app = express();
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './assets')));
app.set('view engine', 'ejs');
routes(app);

const port = process.env.PORT || 8080;

app.listen(port);
console.log(`Yo server is up @ ${port}`);