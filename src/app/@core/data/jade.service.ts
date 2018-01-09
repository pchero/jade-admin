import { Injectable } from '@angular/core';

import 'taffy';


@Injectable()
export class JadeService {
  private baseUrl: string = "http://localhost:8081";

  constructor() { 
    console.log("Fired JadeService constructor.");
    console.log("BaseUrl: " + this.baseUrl);
  }

}
