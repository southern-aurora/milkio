import { type Api, type ExecuteResult, type ExecuteOptions } from ".."
import type schema from "../../../generated/api-schema"

export function defineApiTest<ApiT extends Api>(_api: ApiT, cases: Array<ApiTestCases<ApiT>>) {
  return {
    getCases: () => cases,
    isApiTest: true
  }
}

export type ApiTestCases<ApiT extends Api> = {
  handler: (test: {
    // execute
    execute: (params: Parameters<ApiT["action"]>[0], headers?: Record<string, string>, options?: ExecuteOptions) => Promise<ExecuteResult<Awaited<ReturnType<ApiT["action"]>>>>;
    // execute other
    executeOther: <Path extends keyof (typeof schema)["apiMethodsTypeSchema"], Result extends Awaited<ReturnType<(typeof schema)["apiMethodsTypeSchema"][Path]["api"]["action"]>>>(path: Path, params: Parameters<(typeof schema)["apiMethodsTypeSchema"][Path]["api"]["action"]>[0] | string, headers?: Record<string, string>, options?: ExecuteOptions) => Promise<ExecuteResult<Result>>;
    // reject
    reject: (message?: string) => void;
  }) => Promise<void> | void;
  name: string;
  timeout?: number;
};
