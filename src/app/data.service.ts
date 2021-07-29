import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor() {}

  id: number = 1;

  getId() {
    return this.id;
  }
}
