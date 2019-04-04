/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
import { ChangeDetectorRef } from '@angular/core';
import { Directive, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { AbstractComponent } from './abstract.component';
import { DragDropConfig } from './dnd.config';
import { DragDropService } from './dnd.service';
export class DroppableComponent extends AbstractComponent {
    /**
     * @param {?} elemRef
     * @param {?} dragDropService
     * @param {?} config
     * @param {?} cdr
     */
    constructor(elemRef, dragDropService, config, cdr) {
        super(elemRef, dragDropService, config, cdr);
        /**
         * Callback function called when the drop action completes correctly.
         * It is activated before the on-drag-success callback.
         */
        this.onDropSuccess = new EventEmitter();
        this.onDragEnter = new EventEmitter();
        this.onDragOver = new EventEmitter();
        this.onDragLeave = new EventEmitter();
        this.dropEnabled = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set droppable(value) {
        this.dropEnabled = !!value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set allowdrop(value) {
        this.allowDrop = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dropzones(value) {
        this.dropZones = value;
    }
    /**
     * Drag allowed effect
     * @param {?} value
     * @return {?}
     */
    set effectallowed(value) {
        this.effectAllowed = value;
    }
    /**
     * Drag effect cursor
     * @param {?} value
     * @return {?}
     */
    set effectcursor(value) {
        this.effectCursor = value;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragEnterCallback(event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragEnterClass);
            this.onDragEnter.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragOverCallback(event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragOverClass);
            this.onDragOver.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    }
    ;
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragLeaveCallback(event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
            this.onDragLeave.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    }
    ;
    /**
     * @param {?} event
     * @return {?}
     */
    _onDropCallback(event) {
        /** @type {?} */
        let dataTransfer = (/** @type {?} */ (event)).dataTransfer;
        if (this._dragDropService.isDragged || (dataTransfer && dataTransfer.files)) {
            this.onDropSuccess.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            if (this._dragDropService.onDragSuccessCallback) {
                this._dragDropService.onDragSuccessCallback.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            }
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
        }
    }
}
DroppableComponent.decorators = [
    { type: Directive, args: [{ selector: '[dnd-droppable]' },] }
];
/** @nocollapse */
DroppableComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DragDropService },
    { type: DragDropConfig },
    { type: ChangeDetectorRef }
];
DroppableComponent.propDecorators = {
    droppable: [{ type: Input, args: ["dropEnabled",] }],
    onDropSuccess: [{ type: Output }],
    onDragEnter: [{ type: Output }],
    onDragOver: [{ type: Output }],
    onDragLeave: [{ type: Output }],
    allowdrop: [{ type: Input, args: ["allowDrop",] }],
    dropzones: [{ type: Input, args: ["dropZones",] }],
    effectallowed: [{ type: Input, args: ["effectAllowed",] }],
    effectcursor: [{ type: Input, args: ["effectCursor",] }]
};
if (false) {
    /**
     * Callback function called when the drop action completes correctly.
     * It is activated before the on-drag-success callback.
     * @type {?}
     */
    DroppableComponent.prototype.onDropSuccess;
    /** @type {?} */
    DroppableComponent.prototype.onDragEnter;
    /** @type {?} */
    DroppableComponent.prototype.onDragOver;
    /** @type {?} */
    DroppableComponent.prototype.onDragLeave;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHBhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdGluZXNlZWQvbmcyLWRuZC8iLCJzb3VyY2VzIjpbInNyYy9kcm9wcGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUM1QyxPQUFPLEVBQUMsZUFBZSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBRzVELE1BQU0seUJBQTBCLFNBQVEsaUJBQWlCOzs7Ozs7O0lBcUNyRCxZQUFZLE9BQW1CLEVBQUUsZUFBZ0MsRUFBRSxNQUFxQixFQUNwRixHQUFxQjtRQUVyQixLQUFLLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7Ozs7OzZCQTlCSyxJQUFJLFlBQVksRUFBZ0I7MkJBQ2xDLElBQUksWUFBWSxFQUFnQjswQkFDakMsSUFBSSxZQUFZLEVBQWdCOzJCQUMvQixJQUFJLFlBQVksRUFBZ0I7UUE2QmhGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0tBQzNCOzs7OztJQXpDRCxJQUEwQixTQUFTLENBQUMsS0FBYTtRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDOUI7Ozs7O0lBV0QsSUFBd0IsU0FBUyxDQUFDLEtBQWlDO1FBQy9ELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0tBQzFCOzs7OztJQUVELElBQXdCLFNBQVMsQ0FBQyxLQUFtQjtRQUNqRCxJQUFJLENBQUMsU0FB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Y0FBYztZQUpkLGlCQUFpQjs7O3dCQVVwQixLQUFLLFNBQUMsYUFBYTs0QkFRbkIsTUFBTTswQkFDTixNQUFNO3lCQUNOLE1BQU07MEJBQ04sTUFBTTt3QkFFTixLQUFLLFNBQUMsV0FBVzt3QkFJakIsS0FBSyxTQUFDLFdBQVc7NEJBT2pCLEtBQUssU0FBQyxlQUFlOzJCQU9yQixLQUFLLFNBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE4IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcclxuXHJcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3RDb21wb25lbnR9IGZyb20gJy4vYWJzdHJhY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi9kbmQuY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wRGF0YX0gZnJvbSAnLi9kbmQuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZG5kLWRyb3BwYWJsZV0nIH0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KFwiZHJvcEVuYWJsZWRcIikgc2V0IGRyb3BwYWJsZSh2YWx1ZTpib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgZHJvcCBhY3Rpb24gY29tcGxldGVzIGNvcnJlY3RseS5cclxuICAgICAqIEl0IGlzIGFjdGl2YXRlZCBiZWZvcmUgdGhlIG9uLWRyYWctc3VjY2VzcyBjYWxsYmFjay5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRHJvcFN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgICBAT3V0cHV0KCkgb25EcmFnRW50ZXI6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgICBAT3V0cHV0KCkgb25EcmFnT3ZlcjogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcclxuICAgIEBPdXRwdXQoKSBvbkRyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcclxuXHJcbiAgICBASW5wdXQoXCJhbGxvd0Ryb3BcIikgc2V0IGFsbG93ZHJvcCh2YWx1ZTogKGRyb3BEYXRhOiBhbnkpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmFsbG93RHJvcCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dChcImRyb3Bab25lc1wiKSBzZXQgZHJvcHpvbmVzKHZhbHVlOkFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLmRyb3Bab25lcyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJhZyBhbGxvd2VkIGVmZmVjdFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoXCJlZmZlY3RBbGxvd2VkXCIpIHNldCBlZmZlY3RhbGxvd2VkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVmZmVjdEFsbG93ZWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYWcgZWZmZWN0IGN1cnNvclxyXG4gICAgICovXHJcbiAgICBASW5wdXQoXCJlZmZlY3RDdXJzb3JcIikgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RDdXJzb3IgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOkRyYWdEcm9wQ29uZmlnLFxyXG4gICAgICAgIGNkcjpDaGFuZ2VEZXRlY3RvclJlZikge1xyXG5cclxuICAgICAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgY2RyKTtcclxuXHJcbiAgICAgICAgdGhpcy5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgX29uRHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLm9uRHJhZ0VudGVyQ2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ0VudGVyLmVtaXQoe2RyYWdEYXRhOiB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vbkRyYWdPdmVyQ2FsbGJhY2sgKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5vbkRyYWdPdmVyQ2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ092ZXIuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9vbkRyYWdMZWF2ZUNhbGxiYWNrIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcub25EcmFnT3ZlckNsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5vbkRyYWdFbnRlckNsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdMZWF2ZS5lbWl0KHtkcmFnRGF0YTogdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgX29uRHJvcENhbGxiYWNrIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGxldCBkYXRhVHJhbnNmZXIgPSAoZXZlbnQgYXMgYW55KS5kYXRhVHJhbnNmZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgfHwgKGRhdGFUcmFuc2ZlciAmJiBkYXRhVHJhbnNmZXIuZmlsZXMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Ecm9wU3VjY2Vzcy5lbWl0KHtkcmFnRGF0YTogdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjay5lbWl0KHtkcmFnRGF0YTogdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcub25EcmFnT3ZlckNsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5vbkRyYWdFbnRlckNsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19