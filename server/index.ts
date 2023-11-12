import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';

export interface SlideProps {
  id: number;
  text: string;
  imageURL: string;
  audioURL?: string;
}

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const dataPath = './data/slides.json';

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('All good to go!');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

app.get('/slides/:id', (req, res) => {
  const slideID = parseInt(req.params.id);

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw new Error('oops something went wrong');
    }

    const parsedData = JSON.parse(data);
    const { slides } = parsedData;
    const slide = slides.find((slide: SlideProps) => slide.id === slideID);

    if (!slide) {
      res.json({ message: 'Slide not found.' });
      return;
    }
    res.json(slide);
  });
});

app.get('/slides', (_, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw new Error('oops something went wrong');
    }

    const parsedData = JSON.parse(data);
    const { slides } = parsedData;

    res.json(slides);
  });
});
