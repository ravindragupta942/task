import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class App_service {

    private search_data = new BehaviorSubject<string>('');
    input_search_data = this.search_data.asObservable();
    global_data: any = [];

    constructor() { }

    onEnter(data) {
        this.search_data.next(data);
    }
}