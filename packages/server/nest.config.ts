import {ConfigObject} from "@nestjs/config/dist/types";
import {envPath} from "../../constants/env";

const DEFAULT_DB_PORT = 5432;
const DEFAULT_SERVER_PORT = 3001;

type NestConfigFactory = ConfigObject & {
    port: number
}

const nestConfigs: () => NestConfigFactory =  () => {
    return ({
        envFilePath: envPath,
        isGlobal: true,
        port: process.env.SERVER_PORT? parseInt(process.env.SERVER_PORT, 10) : DEFAULT_SERVER_PORT,
        database: {
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT? parseInt(process.env.DATABASE_PORT, 10) : DEFAULT_DB_PORT
        }
    })
}


export default nestConfigs;
