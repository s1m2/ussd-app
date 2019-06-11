import express from 'express';
import morgan from 'morgan';

class App {

    private app: express.Application;
    private port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;
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