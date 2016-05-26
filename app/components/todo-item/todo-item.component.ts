import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoModel} from '../../models/todo.model';

@Component({
    selector: 'todo-item',
    template: `
        <li [class.completed]="todo.completed">
            <div class="view">
                <input class="toggle" type="checkbox" (click)="toggleCompletion()" [checked]="todo.completed">
                <label>{{ todo.title }}</label>
                <button class="destroy" (click)="remove()"></button>
            </div>
        </li>
    `
})
export class TodoItemComponent {

    @Input()
    todo:TodoModel;
    
    @Output('removed')
    onRemoved = new EventEmitter();
    
    toggleCompletion() {
        this.todo.completed = !this.todo.completed;
    }
    
    remove() {
        this.onRemoved.emit(null);
    }
}