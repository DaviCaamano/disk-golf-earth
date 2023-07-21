import {ConfigFactory} from "@nestjs/config";

const DEFAULT_DB_PORT = 5432;

const nestConfigs: ConfigFactory =  () => {
    console.log('process.env.SERVER_PORT', process.env.SERVER_PORT)
    return ({
        envFilePath: '../../.env.local',
        isGlobal: true,
        database: {
            host: process.env.DB_URL,
            port: process.env.DATABASE_PORT? parseInt(process.env.DATABASE_PORT, 10) : DEFAULT_DB_PORT
        }
    })
}


export default nestConfigs;
