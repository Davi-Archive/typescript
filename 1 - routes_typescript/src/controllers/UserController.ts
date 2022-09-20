import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
    { name: 'Davi', email: 'davialves@gmail.com'}
];

export default {
    async index(req: Request, res: Response){
        return res.json(users)
    },

    async create( req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail({
            to: {name: 'Davi' , email: 'davialves@gmail.com'},
            message: {subject:'Olá amiguinho', body:'okaychamp'}
        }
        );
    return res.send("sucesso ")
    }
};