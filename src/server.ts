import express from "express";
import getRovers from "./routes/rovers";
 
const app = express();
const port = 8000;
 
app.use(express.json());
const router = express.Router();
router.get('/rovers', async (req: any, res: any) => res.send(await getRovers()));
app.use('/', router);
 
app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});