import express from 'express';
import cors from 'cors';
import winston from 'winston';
import expressPrometheusMiddleware from 'express-prometheus-middleware';
import convertToRoman from './src/converter.js';

const app = express();
const PORT = process.env.PORT || 8080;

// logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/server.log' }),
  ],
});

logger.info('Prometheus metrics available');

// monitoring
app.use(
  expressPrometheusMiddleware({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
  })
);

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());

app.get('/romannumeral', (req, res) => {
  const query = req.query.query;
  const number = parseInt(query, 10);

  const result = convertToRoman(number);

  if (result.startsWith('Invalid input')) {
    return res.status(400).json({ error: result });
  }

  res.json({ input: query, output: result });
});

export { app };

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
