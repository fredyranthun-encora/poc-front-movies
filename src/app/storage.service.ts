import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(key: string): unknown {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined; 
  }

  setData(key: string, data: unknown) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }
}
