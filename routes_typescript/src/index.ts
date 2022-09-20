import express from 'express'
import routes from './routes';
const app = express();

app.use(routes);


/* app.get("/", (req, res)=>{
    res.json({
        Hello: 'Woorld'
    })
}) */

app.listen(3000);

//yarn tsc --init
//yarn tsc src/index.ts
//TS-node dev
// sucrase
//babel