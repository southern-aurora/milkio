/**
 * ⚠️ This file is generated and modifications will be overwritten
 */

// api
import type * as cookbook from '../src/apps/cookbook'
import type * as aSandbox$test from '../src/apps/a-sandbox/test'
import type * as helloWorld$say from '../src/apps/hello-world/say'

import _apiValidator from './products/api-validator.ts'

export default {
  apiValidator: _apiValidator,
  apiMethodsSchema: {
    'cookbook': () => ({ module: import('../src/apps/cookbook') }),
    'a-sandbox/test': () => ({ module: import('../src/apps/a-sandbox/test') }),
    'hello-world/say': () => ({ module: import('../src/apps/hello-world/say') }),
    
  },
  apiMethodsTypeSchema: {
    'cookbook': undefined as unknown as typeof cookbook,
    'a-sandbox/test': undefined as unknown as typeof aSandbox$test,
    'hello-world/say': undefined as unknown as typeof helloWorld$say,
    
  },
  apiTestsSchema: {
    'a-sandbox/test': () => ({ module: import('../src/apps/a-sandbox/test') }),
    'hello-world/say': () => ({ module: import('../src/apps/hello-world/say') }),
    
  },
}