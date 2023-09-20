declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APOLLO_SERVER_URI: string;
        }
    }
}

export {}