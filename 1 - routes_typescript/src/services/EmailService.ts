interface IMailTo{
    name: string;
    email: string;
}

interface IMailMessage{
    subject: string;
    body: string;
    attachment?: string[];    //Array<string> can be showed like that
}

interface IMessageDTO{
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService{
    sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService{
    sendMail({to, message}:IMessageDTO){
        console.log(`email enviado para ${to.name} e a mensage é:${message.subject}`)
    }
}

export default EmailService;