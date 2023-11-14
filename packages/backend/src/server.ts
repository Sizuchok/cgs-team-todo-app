import 'dotenv/config';
import express from 'express';

import AppRouter from './routes';
import { connectDB } from './config/database.config';

const app = express();
const router = new AppRouter(app);

// Connect to PostgreSQL
connectDB();

// Express configuration
app.set('port', process.env.PORT || 4200);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.init();

const port = app.get('port');
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
