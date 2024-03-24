import typia from "typia";
export declare const params: (params: any) => Promise<typia.IValidation<{
    by?: (string & typia.tags.MinLength<2> & typia.tags.MaxLength<16>) | undefined;
}>>;
export declare const results: (results: any) => Promise<string>;
