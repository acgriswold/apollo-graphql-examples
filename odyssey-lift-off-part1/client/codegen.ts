import { type CodegenConfig } from '@graphql-codegen/cli';

require('dotenv').config()

const config: CodegenConfig = {
    schema: process.env.APOLLO_SERVER_URI,
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