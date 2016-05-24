import {Component} from '@angular/core';
import {TodoModel} from '../../models/todo.model';
import {TodoItemComponent} from '../todo-item/todo-item.component';

@Component({
    selector: 'todos',
    template: `
    <section class="todoapp">
        <header class="header">
            <h1>Todos</h1>
            <input class="new-todo" placeholder="What needs to be done?">
        </header>
        <section class="main">
            <ul class="todo-list">
                <todo-item *ngFor="let todo of todos" [todo]="todo"></todo-item>
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
    directives:[TodoItemComponent]
})
export class TodosComponent {
    
    todos:TodoModel[] = [
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
    
}
