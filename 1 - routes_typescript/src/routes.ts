import express from 'express'
import UserController from './controllers/UserController';

const routes = express.Router();

routes.get("/", (req, res)=>{
    res.json({
        Hello: 'Woorld 1'
    })
})

routes.get('/user', UserController.index)
routes.post('/user', UserController.index)

export default routes;