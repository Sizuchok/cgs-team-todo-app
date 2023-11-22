import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/database.config';
import { exceptionFilter } from './middleware/exception-filter.middleware';
import AppRouter from './routes';

const app = express();
const router = new AppRouter(app);

// Connect to PostgreSQL
connectDB();

// Express configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 4200);

router.init();

app.use(exceptionFilter);

const port = app.get('port');
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
