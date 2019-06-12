import express from 'express';
import morgan from 'morgan';
import { Routes } from './routes/routes'

class App {

    private app: express.Application;
    private port: number;
    private routes: Routes = new Routes();

    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.routes.routes(this.app);
        this.config();
    }

    private config(): void {
        this.app.use(morgan('combined'));
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Express app is listening on port ${this.port}`);
        });
    }

}

export default App;