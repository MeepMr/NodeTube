import express from 'express';
const localTube = express();

//Exit and Restart-Management
import {cleanUpAndExit, restoreProgress} from './startup-exit.js';
import {serverConfiguration} from "../fileSystem/dataFiles.js";
import {moduleRegEx} from "./module-loader.js";
process.on('exit', cleanUpAndExit);
process.on('uncaughtException', cleanUpAndExit);
process.on('SIGINT', cleanUpAndExit);
process.on('SIGTERM', cleanUpAndExit);
restoreProgress().then( () => {

    localTube.locals = {
        server: {
            title: serverConfiguration.title,
            description: serverConfiguration.description
        },
        author: serverConfiguration.author,
        moduleRegularExpression: moduleRegEx
    };
});

// view engine setup
localTube.set('views', './views');
localTube.set('view engine', 'ejs');

localTube.use(express.json());
localTube.use(express.urlencoded({extended: true}));

//Manage Routers
import {indexRouter, deleteRouter, downloadRouter, watchRouter, registerRouter, managementRouter} from './routerManager.js';
localTube.use('/', indexRouter);
localTube.use('/register', registerRouter);
localTube.use('/watch', watchRouter);
localTube.use('/download', downloadRouter);
localTube.use('/delete', deleteRouter);
localTube.use('/man', managementRouter);

export default localTube;
