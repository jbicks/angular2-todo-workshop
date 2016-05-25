import {Injectable} from '@angular/core';
import {TodoModel} from '../models/todo.model';
import {TodoFilter} from '../enums/todo-filter.enum';

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
    
    getTodos(filter: TodoFilter = null): TodoModel[] {
        var todos = this._todos;
        if (filter == TodoFilter.Active) {
            todos = todos.filter(t => !t.completed);
        }
        else if (filter == TodoFilter.Completed) {
            todos = todos.filter(t => t.completed);
        }
        return todos;
    }
    
    addTodo(title: string) {
        var todo = new TodoModel(title);
        this._todos.push(todo);
    }
}
