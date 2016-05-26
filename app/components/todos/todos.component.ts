import {Component} from '@angular/core';
import {TodoModel} from '../../models/todo.model';
import {TodoItemComponent} from '../todo-item/todo-item.component';
import {TodoService} from '../../services/todo.service';
import {TodoHeaderComponent} from '../todo-header/todo-header.component';
import {TodoFilter} from '../../enums/todo-filter.enum';
import {TodoFooterComponent} from '../todo-footer/todo-footer.component';

@Component({
    selector: 'todos',
    template: `
    <section class="todoapp">
        <todo-header (todo-added)="add($event)"></todo-header>
        <section class="main">
            <ul class="todo-list">
                <todo-item *ngFor="let todo of getTodos()" [todo]="todo" (removed)="remove(todo)"></todo-item>
            </ul>
        </section>
        <todo-footer *ngIf="hasTodos()" [filter]="filter" (filter-changed)="setFilter($event)"></todo-footer>
    </section>
    `,
    directives:[TodoItemComponent, TodoHeaderComponent, TodoFooterComponent]
})
export class TodosComponent {
    
    filter:TodoFilter = TodoFilter.All;
    
    constructor (private _todoService:TodoService) {
    }
    
    getTodos():TodoModel[] {
        return this._todoService.getTodos(this.filter);
    }
    
    add(title:string) {
        this._todoService.addTodo(title);
    }
    
    hasTodos():boolean {
        return this._todoService.getTodos().length > 0;
    }
    
    setFilter(filter:TodoFilter) {
        this.filter = filter;
    }
    
    remove (todo:TodoModel) {
        this._todoService.removeTodo(todo);
    }
}
