import * as path from 'path';

const RestProxy = require('./index');
// import * as RestProxy from './index';
import { IProxySettings } from './interfaces';

const settings: IProxySettings = {
    configPath: path.join(__dirname, '/../config/private.json'),
    staticRoot: path.join(__dirname, '/../static'),
    rawBodyLimitSize: '4MB',
    debugOutput: false
};

(new RestProxy(settings)).serve();
