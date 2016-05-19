import {Component} from '@angular/core';

@Component({
    selector: 'todos',
    template: `
    <section class="todoapp">
        <header class="header">
            <h1>Todos</h1>
            <input class="new-todo" placeholder="What needs to be done?">
        </header>
        <section class="main">
            
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
    `
})
export class TodosComponent {
}
