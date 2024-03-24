import typia from "typia";
import { _validate, type ExecuteResultSuccess } from "milkio";
import { type TSONEncode } from "@southern-aurora/tson";
import type * as aSandbox$test from "../../../../src/apps/a-sandbox/test";
type ParamsT = Parameters<typeof aSandbox$test['api']['action']>[0];
export const params = async (params: any) => ((input: any): typia.IValidation<ParamsT> => { const validate = (input: any): typia.IValidation<ParamsT> => {
    const errors = [] as any[];
    const __is = (input: any): input is ParamsT => {
        const $io0 = (input: any): boolean => undefined === input.by || "string" === typeof input.by && (2 <= input.by.length && input.by.length <= 16);
        return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
    };
    if (false === __is(input)) {
        const $report = (typia.misc.validatePrune as any).report(errors);
        ((input: any, _path: string, _exceptionable: boolean = true): input is ParamsT => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.by || "string" === typeof input.by && (2 <= input.by.length || $report(_exceptionable, {
                    path: _path + ".by",
                    expected: "string & MinLength<2>",
                    value: input.by
                })) && (input.by.length <= 16 || $report(_exceptionable, {
                    path: _path + ".by",
                    expected: "string & MaxLength<16>",
                    value: input.by
                })) || $report(_exceptionable, {
                    path: _path + ".by",
                    expected: "((string & MinLength<2> & MaxLength<16>) | undefined)",
                    value: input.by
                })].every((flag: boolean) => flag);
            return ("object" === typeof input && null !== input && false === Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "__type",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "__type",
                value: input
            });
        })(input, "$input", true);
    }
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const prune = (input: ParamsT): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("by" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; const output = validate(input); if (output.success)
    prune(input); return output; })(params);
type ResultsT = Awaited<ReturnType<typeof aSandbox$test['api']['action']>>;
export const results = async (results: any) => { _validate(((input: any): typia.IValidation<TSONEncode<ExecuteResultSuccess<ResultsT>>> => {
    const errors = [] as any[];
    const __is = (input: any): input is TSONEncode<ExecuteResultSuccess<ResultsT>> => {
        const $io0 = (input: any): boolean => "string" === typeof input.executeId && true === input.success && ("object" === typeof input.data && null !== input.data && "string" === typeof (input.data as any).youSay);
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input)) {
        const $report = (typia.validate as any).report(errors);
        ((input: any, _path: string, _exceptionable: boolean = true): input is TSONEncode<ExecuteResultSuccess<ResultsT>> => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.executeId || $report(_exceptionable, {
                    path: _path + ".executeId",
                    expected: "string",
                    value: input.executeId
                }), true === input.success || $report(_exceptionable, {
                    path: _path + ".success",
                    expected: "true",
                    value: input.success
                }), ("object" === typeof input.data && null !== input.data || $report(_exceptionable, {
                    path: _path + ".data",
                    expected: "RecursiveObjectXToString<__object, bigint | RegExp | URL | Date | Uint8Array | ArrayBuffer>",
                    value: input.data
                })) && $vo1(input.data, _path + ".data", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".data",
                    expected: "RecursiveObjectXToString<__object, bigint | RegExp | URL | Date | Uint8Array | ArrayBuffer>",
                    value: input.data
                })].every((flag: boolean) => flag);
            const $vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.youSay || $report(_exceptionable, {
                    path: _path + ".youSay",
                    expected: "string",
                    value: input.youSay
                })].every((flag: boolean) => flag);
            return ("object" === typeof input && null !== input || $report(true, {
                path: _path + "",
                expected: "RecursiveObjectXToString<ExecuteResultSuccess<__object>, bigint | RegExp | URL | Date | Uint8Array | ArrayBuffer>",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "RecursiveObjectXToString<ExecuteResultSuccess<__object>, bigint | RegExp | URL | Date | Uint8Array | ArrayBuffer>",
                value: input
            });
        })(input, "$input", true);
    }
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
})(results)); return ((input: TSONEncode<ExecuteResultSuccess<ResultsT>>): string => {
    const $io1 = (input: any): boolean => "string" === typeof input.youSay;
    const $string = (typia.json.stringify as any).string;
    const $so0 = (input: any): any => `{"executeId":${$string(input.executeId)},"success":${input.success},"data":${`{"youSay":${$string((input.data as any).youSay)}}`}}`;
    return $so0(input);
})(results); };
