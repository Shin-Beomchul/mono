import { CacheStorage } from "./CacheStorage";
/**
 * @summary 로컬 저장소 구현체
 * @author Shin BeomChul
 * @since 21.12.09
 *
 * @scope session
 */
export default class CacheStorageOfLocal implements CacheStorage {
    constructor();
    set(key: string, value: any): boolean;
    get(key: string): any;
    del(key: string): void;
    has(key: string): boolean;
    reset(): void;
}
