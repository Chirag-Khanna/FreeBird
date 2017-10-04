const path = require('path');
const serverRootPath = path.normalize(__dirname + '/../');
const env = process.env.NODE_ENV || 'development';

const envFileStoreMap = {
    local: "local",
    production: "s3",
    development: "local"
}

const filestorePathMap = {
    "s3": "",
    "local": serverRootPath,
}

const fileStore = filestorePathMap[envFileStoreMap[env]] + 'fileStore/';
const xmlFolder = fileStore + 'XMLs/';
const skillFolder = fileStore + 'skills/';
const resourceFolder = fileStore + 'Resources/';


const config = {
    local: {
        app: {
            name: 'FreeBird-Cafe'
        },
        port: process.env.port || 3080,
        db: {
            url: 'ds131583.mlab.com:31583/freebird_content',
            dbOptions: {
                useMongoClient: true,
                db: {
                    native_parser: true
                },
                server: {
                    poolsize: 20
                },
                user: 'FreeBird',
                pass: 'freebird13082017'
            }
        },
        root: serverRootPath,        
    },
    development: {
        app: {
            name: 'FreeBird-Cafe'
        },
        port: process.env.port || 3080,
        db: {
            url: 'ds131583.mlab.com:31583/freebird_content',
            dbOptions: {
                useMongoClient: true,
                db: {
                    native_parser: true
                },
                server: {
                    poolsize: 20
                },
                user: 'FreeBird',
                pass: 'freebird13082017'
            }
        },
        root: serverRootPath
    },
    production: {
        app: {
            name: 'FreeBird-Cafe'
        },
        port: process.env.port || 3080,
        db: {
            url: 'ds131583.mlab.com:31583/freebird_content',
            dbOptions: {
                useMongoClient: true,
                db: {
                    native_parser: true
                },
                server: {
                    poolsize: 20
                },
                user: 'FreeBird',
                pass: 'freebird13082017'
            }
        },
        root: serverRootPath
    }
};

module.exports = config[env];
