import {Component, Input} from '@angular/core';
import {TodoModel} from '../../models/todo.model';

@Component({
    selector: 'todo-item',
    template: `
        <li [class.completed]="todo.completed">
            <div class="view">
                <input class="toggle" type="checkbox" [checked]="todo.completed">
                <label>{{ todo.title }}</label>
            </div>
        </li>
    `
})
export class TodoItemComponent {

    @Input()
    todo:TodoModel;
    
}
