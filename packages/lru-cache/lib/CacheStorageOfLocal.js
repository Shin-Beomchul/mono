/**
 * @summary 로컬 저장소 구현체
 * @author Shin BeomChul
 * @since 21.12.09
 *
 * @scope session
 */
export default class CacheStorageOfLocal {
    constructor() {
        console.log("create CacheStorage Of Local");
    }
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    get(key) {
        const objectJson = localStorage.getItem(key);
        if (objectJson != null) {
            return JSON.parse(objectJson);
        }
        return undefined;
    }
    del(key) {
        localStorage.removeItem(key);
    }
    has(key) {
        return localStorage.getItem(key) != null ? true : false;
    }
    reset() {
        localStorage.clear();
    }
}
//# sourceMappingURL=CacheStorageOfLocal.js.map