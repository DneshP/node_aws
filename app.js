import express from "express";
import routes from "./routes/index.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './assets')));
app.set('view engine', 'ejs');
routes(app);

const port = process.env.PORT || 8080;

app.listen(port);
console.log(`Yo server is up @ ${port}`);