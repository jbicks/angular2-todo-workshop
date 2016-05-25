import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoFilter} from '../../enums/todo-filter.enum';

@Component({
    selector: 'todo-footer',
    templateUrl: 'app/components/todo-footer/todo-footer.template.html'
})
export class TodoFooterComponent {

    @Input()
    filter: TodoFilter;

    @Output('filter-changed')
    onFilterChanged:EventEmitter<TodoFilter> = new EventEmitter();

    isCurrentFilter(filterName:string):boolean{
        return this.filter == TodoFilter[filterName];
    }

    setFilter(filterName:string) {
        this.onFilterChanged.emit(TodoFilter[filterName]);
        return false;
    }
    
    getFilterNames():string[]{
        return Object.keys(TodoFilter)
            .filter(v => Number.isInteger(+v))
            .map(v => TodoFilter[v]);
    }
}
