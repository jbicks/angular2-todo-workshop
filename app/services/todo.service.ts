import {Injectable} from '@angular/core';
import {TodoModel} from '../models/todo.model';

@Injectable()
export class TodoService {

    private _todos: TodoModel[] = [
        {
            id: 1,
            title: 'make cake',
            completed: true
        },
        {
            id: 2,
            title: 'eat cake',
            completed: false
        },
        {
            id: 3,
            title: 'make more cake',
            completed: false
        }
    ];
    
    getTodos(): TodoModel[] {
        return this._todos;
    }

}
