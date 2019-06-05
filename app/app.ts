import express from 'express';
// import * as morgan from 'morgan';

class App {

    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;
        // this.intialization();
    }

    // private intialization(): void {
    //     this.app.use(morgan('combined'));
    // }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Express is listening on port ${this.port}`);
        });
    }

}

export default App;