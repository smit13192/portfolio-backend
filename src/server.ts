import cors from "cors";
import express, { Request, Response } from "express";
import morgan from "morgan";
import { PORT } from "./lib/core/config";
import { ApiError } from "./lib/core/error/ApiError";
import { Middleware } from "./lib/core/middleware/Middleware";
import router from "./lib/core/router";
import { Log } from "./lib/core/utils/Log";
import { connectDatabase } from "./lib/database";

function main() {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/public", express.static("public"));
    app.use(morgan('dev'));
    app.use(cors());

    connectDatabase();

    app.get('/', (_: Request, res: Response) => {
        return res.send("Server Start");
    });
    app.use('/api/v1', router);
    app.use('*', (_, __, next) => {
        next(new ApiError(404, 'Path not found. Please check the provided location.'));
    });
    app.use(Middleware.errorMiddlware);

    app.listen(PORT, function () {
        Log.d(`Server is running on port ${PORT}`);
    });

    return app;
}

export const app = main();