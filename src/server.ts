import express from "express";
import getRovers from "./routes/rovers";
import getPhotos from "./routes/photos";
 
const app = express();
const port = 8000;
 
app.use(express.json());
const router = express.Router();
router.get('/rovers', async (req: any, res: any) => res.send(await getRovers()));
router.get('/rovers/:rover/photos/:camera', async (req: any, res: any) => res.send(await getPhotos(req.params.rover[0].toUpperCase() + req.params.rover.slice(1),  req.params.camera.toUpperCase())));
app.use('/', router);
 
app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});