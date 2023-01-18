import express from 'express'
import cors  from 'cors';
import * as dotenv from 'dotenv'
import colors from 'colors';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js'

import productsRoutes  from './routes/productRoutes.js';
import usersRoutes  from './routes/userRoutes.js';
import orderRoutes  from './routes/orderRoutes.js';
// import uploadRoutes  from './routes/uploadRoutes.js';




dotenv.config();
await connectDB();
const app = express();
app.use(cors());

app.get('/', (req, res) => res.send('Mari Backend API...'));

app.use('/api/products', productsRoutes);

app.use((req, res, next) =>{
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})

//UPLOADS ROUTES
/*
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}
*/


app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port${PORT}!` .yellow
.bold));

