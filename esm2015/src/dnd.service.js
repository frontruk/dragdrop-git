/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
import { Injectable } from '@angular/core';
import { DragDropConfig } from './dnd.config';
import { isPresent } from './dnd.utils';
export class DragDropData {
}
if (false) {
    /** @type {?} */
    DragDropData.prototype.dragData;
    /** @type {?} */
    DragDropData.prototype.mouseEvent;
}
/**
 * @return {?}
 */
export function dragDropServiceFactory() {
    return new DragDropService();
}
export class DragDropService {
    constructor() {
        this.allowedDropZones = [];
    }
}
DragDropService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    DragDropService.prototype.allowedDropZones;
    /** @type {?} */
    DragDropService.prototype.onDragSuccessCallback;
    /** @type {?} */
    DragDropService.prototype.dragData;
    /** @type {?} */
    DragDropService.prototype.isDragged;
}
/**
 * @param {?} config
 * @return {?}
 */
export function dragDropSortableServiceFactory(config) {
    return new DragDropSortableService(config);
}
export class DragDropSortableService {
    /**
     * @param {?} _config
     */
    constructor(_config) {
        this._config = _config;
    }
    /**
     * @return {?}
     */
    get elem() {
        return this._elem;
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    markSortable(elem) {
        if (isPresent(this._elem)) {
            this._elem.classList.remove(this._config.onSortableDragClass);
        }
        if (isPresent(elem)) {
            this._elem = elem;
            this._elem.classList.add(this._config.onSortableDragClass);
        }
    }
}
DragDropSortableService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DragDropSortableService.ctorParameters = () => [
    { type: DragDropConfig }
];
if (false) {
    /** @type {?} */
    DragDropSortableService.prototype.index;
    /** @type {?} */
    DragDropSortableService.prototype.sortableContainer;
    /** @type {?} */
    DragDropSortableService.prototype.isDragged;
    /** @type {?} */
    DragDropSortableService.prototype._elem;
    /** @type {?} */
    DragDropSortableService.prototype._config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RpbmVzZWVkL25nMi1kbmQvIiwic291cmNlcyI6WyJzcmMvZG5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBQyxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFFdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUM1QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBR3RDLE1BQU07Q0FHTDs7Ozs7Ozs7OztBQUVELE1BQU07SUFDRixPQUFPLElBQUksZUFBZSxFQUFFLENBQUM7Q0FDaEM7QUFHRCxNQUFNOztnQ0FDZ0MsRUFBRTs7OztZQUZ2QyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FBUVgsTUFBTSx5Q0FBeUMsTUFBc0I7SUFDakUsT0FBTyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQzlDO0FBR0QsTUFBTTs7OztJQVVGLFlBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7S0FBSTs7OztRQUpuQyxJQUFJO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDOzs7Ozs7SUFLdEIsWUFBWSxDQUFDLElBQWlCO1FBQzFCLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUM5RDtLQUNKOzs7WUFyQkosVUFBVTs7OztZQXpCSCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTggU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxyXG5cclxuaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi9kbmQuY29uZmlnJztcclxuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJy4vZG5kLnV0aWxzJztcclxuaW1wb3J0IHtTb3J0YWJsZUNvbnRhaW5lcn0gZnJvbSAnLi9zb3J0YWJsZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wRGF0YSB7XHJcbiAgICBkcmFnRGF0YTogYW55O1xyXG4gICAgbW91c2VFdmVudDogTW91c2VFdmVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdEcm9wU2VydmljZUZhY3RvcnkoKTogRHJhZ0Ryb3BTZXJ2aWNlICB7XHJcbiAgICByZXR1cm4gbmV3IERyYWdEcm9wU2VydmljZSgpO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcFNlcnZpY2Uge1xyXG4gICAgYWxsb3dlZERyb3Bab25lczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgb25EcmFnU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPjtcclxuICAgIGRyYWdEYXRhOiBhbnk7XHJcbiAgICBpc0RyYWdnZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmFnRHJvcFNvcnRhYmxlU2VydmljZUZhY3RvcnkoY29uZmlnOiBEcmFnRHJvcENvbmZpZyk6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlICB7XHJcbiAgICByZXR1cm4gbmV3IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlKGNvbmZpZyk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlIHtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICBzb3J0YWJsZUNvbnRhaW5lcjogU29ydGFibGVDb250YWluZXI7XHJcbiAgICBpc0RyYWdnZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfZWxlbTogSFRNTEVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgZ2V0IGVsZW0oKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbmZpZzpEcmFnRHJvcENvbmZpZykge31cclxuXHJcbiAgICBtYXJrU29ydGFibGUoZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoaXNQcmVzZW50KHRoaXMuX2VsZW0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcub25Tb3J0YWJsZURyYWdDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1ByZXNlbnQoZWxlbSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbSA9IGVsZW07XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcub25Tb3J0YWJsZURyYWdDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==