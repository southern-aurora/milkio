import { SyncAbstractDriverInterface, AsyncAbstractDriverInterface } from "../..";
import { BaseModel } from "./base-model.class";
import { ModelOptionsInterface } from "./model-options.interface";

export class KeyValueModel<
  DataType extends Record<string, any> = Record<string, any>,
  DriverType extends SyncAbstractDriverInterface | AsyncAbstractDriverInterface = AsyncAbstractDriverInterface
  > extends BaseModel<DataType, DriverType> {
  constructor(options: Partial<ModelOptionsInterface>) {
    super({
      ...options,
      ioType: "async",
      modelType: "keyValue",
    });
  }

  seeded = false;

  seed(seed: Function | Partial<DataType>) {
    let seedFunc;
    if ("function" === typeof seed) {
      seedFunc = () => {
        this.seeded = true;
        seed();
      };
    } else if ("object" === typeof seed && !(seed instanceof Array)) {
      seedFunc = () => {
        this.seeded = true;
        for (const key in seed) this.setItem(key, seed[key] as any);
      };
    } else {
      throw new Error(
        `In "keyValue" model, the argument to the seed function must be "Function" or "Object".`
      );
    }

    if (this.seeded) return;

    if (undefined === this.storage) {
      seedFunc();
      return;
    }
    const storage = this.storage;
    storage.seeding(seedFunc);
  }
}