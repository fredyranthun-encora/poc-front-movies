import { Injectable } from '@angular/core';
import { generate } from 'random-words';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor() { }

  generateWord(): string {
    const word = generate(2);
    return word[0];
  }
}
