import _dexieDriver from './drivers/DexieDriver';
import _model from './model/index';
export declare const model: typeof _model;
export declare const dexieDriver: typeof _dexieDriver;
export declare const localStorageDriver: typeof _dexieDriver;
export declare const rxjsDriver: typeof _dexieDriver;
export interface ModelInterface {
    config: ConfigInterface;
    [others: string]: any;
}
export interface ConfigInterface {
    name: string;
    type: 'string' | 'number';
    drivers: DriversInterface;
    primary?: string;
    intrinsicTypes?: string[] | false;
}
export interface DriversInterface {
    cache: any;
    cacheInject?: any;
    persistence?: any;
    persistenceInject?: any;
}
export interface CacheDriverInterface {
    value: any;
    set(value: any): void;
    get(): any;
    forget(): void;
    subscribe(): any;
}
export interface PersistenceInterface {
    async: boolean;
    all(): Array<any> | Promise<Array<any>>;
    insert(value: any, key?: string | number): string | number | Promise<string | number>;
    insertOrUpdate(key: string | number, value: any): void | Promise<void>;
    update(key: string | number, value: any): void | Promise<void>;
    select(key: string | number): any | Promise<any>;
    exists(key: string | number): boolean | Promise<boolean>;
    delete(key: string | number): void | Promise<void>;
    seeding(sedding: Function, model: any): void;
    query?(): Object;
}
