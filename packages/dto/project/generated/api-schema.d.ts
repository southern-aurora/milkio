/**
 * ⚠️ This file is generated and modifications will be overwritten
 */
import type * as cookbook from '../src/apps/cookbook';
import type * as aSandbox$test from '../src/apps/a-sandbox/test';
import type * as helloWorld$say from '../src/apps/hello-world/say';
declare const _default: {
    apiValidator: {
        generatedAt: number;
        validate: {
            cookbook: () => Promise<typeof import("./products/apps/cookbook.ts")>;
            'a-sandbox/test': () => Promise<typeof import("./products/apps/a-sandbox/test.ts")>;
            'hello-world/say': () => Promise<typeof import("./products/apps/hello-world/say.ts")>;
        };
    };
    apiMethodsSchema: {
        cookbook: () => {
            module: Promise<typeof cookbook>;
        };
        'a-sandbox/test': () => {
            module: Promise<typeof aSandbox$test>;
        };
        'hello-world/say': () => {
            module: Promise<typeof helloWorld$say>;
        };
    };
    apiMethodsTypeSchema: {
        cookbook: typeof cookbook;
        'a-sandbox/test': typeof aSandbox$test;
        'hello-world/say': typeof helloWorld$say;
    };
    apiTestsSchema: {
        'a-sandbox/test': () => {
            module: Promise<typeof aSandbox$test>;
        };
        'hello-world/say': () => {
            module: Promise<typeof helloWorld$say>;
        };
    };
};
export default _default;
