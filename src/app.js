import express from 'express';
import router from '../routes/routes';

const app = express();

//this is needed to get access to request body.
app.use(express.json());

app.listen(process.env.PORT || 5000);

app.use(router);

export default app;
