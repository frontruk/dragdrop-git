/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
import { NgModule } from "@angular/core";
import { DragDropConfig } from './dnd.config';
import { DragDropService, DragDropSortableService, dragDropServiceFactory, dragDropSortableServiceFactory } from './dnd.service';
import { DraggableComponent, DraggableHandleComponent } from './draggable.component';
import { DroppableComponent } from './droppable.component';
import { SortableContainer, SortableComponent, SortableHandleComponent } from './sortable.component';
export { AbstractComponent, AbstractHandleComponent } from './abstract.component';
export { DataTransferEffect, DragImage, DragDropConfig } from './dnd.config';
export { dragDropServiceFactory, dragDropSortableServiceFactory, DragDropData, DragDropService, DragDropSortableService } from './dnd.service';
export { DraggableComponent, DraggableHandleComponent } from './draggable.component';
export { DroppableComponent } from './droppable.component';
export { SortableContainer, SortableComponent, SortableHandleComponent } from './sortable.component';
/** @type {?} */
export var providers = [
    DragDropConfig,
    { provide: DragDropService, useFactory: dragDropServiceFactory },
    { provide: DragDropSortableService, useFactory: dragDropSortableServiceFactory, deps: [DragDropConfig] }
];
var DndModule = /** @class */ (function () {
    function DndModule() {
    }
    /**
     * @return {?}
     */
    DndModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DndModule,
            providers: providers
        };
    };
    DndModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent],
                    exports: [DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent],
                },] }
    ];
    return DndModule;
}());
export { DndModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdGluZXNlZWQvbmcyLWRuZC8iLCJzb3VyY2VzIjpbInNyYy9kbmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBQyxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsc0JBQXNCLEVBQUUsOEJBQThCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0gsT0FBTyxFQUFDLGtCQUFrQixFQUFFLHdCQUF3QixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbkYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFbkcsMkRBQWMsc0JBQXNCLENBQUM7QUFDckMsOERBQWMsY0FBYyxDQUFDO0FBQzdCLCtIQUFjLGVBQWUsQ0FBQztBQUM5Qiw2REFBYyx1QkFBdUIsQ0FBQztBQUN0QyxtQ0FBYyx1QkFBdUIsQ0FBQztBQUN0Qyw4RUFBYyxzQkFBc0IsQ0FBQzs7QUFFckMsV0FBVyxTQUFTLEdBQUc7SUFDbkIsY0FBYztJQUNkLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUU7SUFDaEUsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLDhCQUE4QixFQUFFLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFO0NBQzNHLENBQUM7Ozs7Ozs7SUFRTyxpQkFBTzs7O0lBQWQ7UUFDTSxPQUFPO1lBQ0gsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLFNBQVM7U0FDdkIsQ0FBQztLQUNMOztnQkFYSixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsd0JBQXdCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUM7b0JBQy9JLE9BQU8sRUFBRyxDQUFDLGtCQUFrQixFQUFFLHdCQUF3QixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixDQUFDO2lCQUU1STs7b0JBN0JEOztTQThCYSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTggU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi9kbmQuY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlLCBkcmFnRHJvcFNlcnZpY2VGYWN0b3J5LCBkcmFnRHJvcFNvcnRhYmxlU2VydmljZUZhY3Rvcnl9IGZyb20gJy4vZG5kLnNlcnZpY2UnO1xyXG5pbXBvcnQge0RyYWdnYWJsZUNvbXBvbmVudCwgRHJhZ2dhYmxlSGFuZGxlQ29tcG9uZW50fSBmcm9tICcuL2RyYWdnYWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Ryb3BwYWJsZUNvbXBvbmVudH0gZnJvbSAnLi9kcm9wcGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3J0YWJsZUNvbnRhaW5lciwgU29ydGFibGVDb21wb25lbnQsIFNvcnRhYmxlSGFuZGxlQ29tcG9uZW50fSBmcm9tICcuL3NvcnRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2Fic3RyYWN0LmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZG5kLmNvbmZpZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZG5kLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RyYWdnYWJsZS5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2Ryb3BwYWJsZS5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NvcnRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgbGV0IHByb3ZpZGVycyA9IFtcclxuICAgIERyYWdEcm9wQ29uZmlnLFxyXG4gICAgeyBwcm92aWRlOiBEcmFnRHJvcFNlcnZpY2UsIHVzZUZhY3Rvcnk6IGRyYWdEcm9wU2VydmljZUZhY3RvcnkgfSxcclxuICAgIHsgcHJvdmlkZTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UsIHVzZUZhY3Rvcnk6IGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeSwgZGVwczogW0RyYWdEcm9wQ29uZmlnXSB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0RyYWdnYWJsZUNvbXBvbmVudCwgRHJhZ2dhYmxlSGFuZGxlQ29tcG9uZW50LCBEcm9wcGFibGVDb21wb25lbnQsIFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUNvbXBvbmVudCwgU29ydGFibGVIYW5kbGVDb21wb25lbnRdLFxyXG4gIGV4cG9ydHMgOiBbRHJhZ2dhYmxlQ29tcG9uZW50LCBEcmFnZ2FibGVIYW5kbGVDb21wb25lbnQsIERyb3BwYWJsZUNvbXBvbmVudCwgU29ydGFibGVDb250YWluZXIsIFNvcnRhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUhhbmRsZUNvbXBvbmVudF0sXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRG5kTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogRG5kTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IHByb3ZpZGVyc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl19