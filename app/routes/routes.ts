import { Request, Response, Router } from 'express';

export class Routes {

    public routes(app: Router): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).json({
                message: 'Successful'
            })
        })
    }
}