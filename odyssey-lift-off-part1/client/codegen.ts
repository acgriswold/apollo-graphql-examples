import { type CodegenConfig } from '@graphql-codegen/cli';
import { loadEnv } from 'vite'

const env = loadEnv('', process.cwd(), '')

const config: CodegenConfig = {
    schema: env.VITE_APOLLO_SERVER_URI,
    documents: ['src/**/*.tsx'],
    generates: {
        "./src/__generated__/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
            }
        }
    }
}

export default config