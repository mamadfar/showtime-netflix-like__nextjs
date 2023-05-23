export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_APP_API_KEY: string;
        }
    }
}
