import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
    constructor() { }
    load(key: string) {
        var val = localStorage.getItem(key)
        return val ? JSON.parse(val) : null
    }

    save(key: string, val: any): void {
        localStorage[key] = JSON.stringify(val)
    }
}