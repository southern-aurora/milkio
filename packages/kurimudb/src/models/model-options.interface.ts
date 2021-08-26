export interface ModelOptionsInterface {
  name: string;
  modelType?: "keyValue" | "collection";
  ioType: "sync" | "async";
  primary?: string;
  driver?: any;
  intrinsicTypes?: string[] | false;
  [others: string]: any;
}
