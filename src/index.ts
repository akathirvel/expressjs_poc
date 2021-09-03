require('dotenv').config()

import {logger, requestLogger} from "@sunriseupc/nodejs-common";
import express from 'express';

import addressController  from './address-controller'


const expressApp = express();
expressApp.use(requestLogger)

expressApp.use('/address',addressController.router)


const port = process.env.PORT || 9090;
expressApp.listen(port, function () {
    logger.info(`SERVICE RUNNING ON PORT ${port}`);
});
