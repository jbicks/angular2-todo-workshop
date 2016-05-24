import {Component} from '@angular/core';
import {TodoModel} from '../../models/todo.model';
import {TodoItemComponent} from '../todo-item/todo-item.component';
import {TodoService} from '../../services/todo.service';
import {TodoHeaderComponent} from '../todo-header/todo-header.component';

@Component({
    selector: 'todos',
    template: `
    <section class="todoapp">
        <todo-header (todo-added)="add($event)"></todo-header>
        <section class="main">
            <ul class="todo-list">
                <todo-item *ngFor="let todo of getTodos()" [todo]="todo"></todo-item>
            </ul>
        </section>
        <footer class="footer" *ngIf="count">
            <ul class="filters">
                <li>
                    <a href="#">All</a>
                </li>
                <li>
                    <a href="#">Active</a>
                </li>
                <li>
                    <a href="#">Completed</a>
                </li>
            </ul>
        </footer>
    </section>
    `,
    directives:[TodoItemComponent, TodoHeaderComponent]
})
export class TodosComponent {
    
    constructor (private _todoService:TodoService) {
    }
    
    getTodos():TodoModel[] {
        return this._todoService.getTodos();
    }
    
    add(title:string) {
        this._todoService.addTodo(title);
    }
}
