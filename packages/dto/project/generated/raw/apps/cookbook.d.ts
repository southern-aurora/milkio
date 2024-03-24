import typia from "typia";
export declare const params: (params: any) => Promise<typia.IValidation<string & typia.tags.MinLength<3> & typia.tags.MaxLength<16>>>;
export declare const results: (results: any) => Promise<string>;
