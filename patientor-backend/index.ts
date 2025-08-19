import express from 'express';
import cors from 'cors';

const app = express();
// const allowedOrigins = ['http://localhost:5173'];
// const options: cors.CorsOptions = {
//   origin: allowedOrigins
// };

app.use(express.json());
// app.use(cors(options));
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pingged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
