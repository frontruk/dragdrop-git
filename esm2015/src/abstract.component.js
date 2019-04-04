/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
import { Injectable, ChangeDetectorRef } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DragDropConfig } from './dnd.config';
import { DragDropService } from './dnd.service';
import { isString, isFunction, isPresent, createImage, callFun } from './dnd.utils';
/**
 * @abstract
 */
export class AbstractComponent {
    /**
     * @param {?} elemRef
     * @param {?} _dragDropService
     * @param {?} _config
     * @param {?} _cdr
     */
    constructor(elemRef, _dragDropService, _config, _cdr) {
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._cdr = _cdr;
        /**
         * Whether the object is draggable. Default is true.
         */
        this._dragEnabled = false;
        /**
         * Allows drop on this element
         */
        this.dropEnabled = false;
        this.dropZones = [];
        this.cloneItem = false;
        // Assign default cursor unless overridden
        this._defaultCursor = _config.defaultCursor;
        this._elem = elemRef.nativeElement;
        this._elem.style.cursor = this._defaultCursor; // set default cursor on our element
        //
        // DROP events
        //
        this._elem.ondragenter = (event) => {
            this._onDragEnter(event);
        };
        this._elem.ondragover = (event) => {
            this._onDragOver(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.dropEffect = this._config.dropEffect.name;
            }
            return false;
        };
        this._elem.ondragleave = (event) => {
            this._onDragLeave(event);
        };
        this._elem.ondrop = (event) => {
            this._onDrop(event);
        };
        //
        // Drag events
        //
        this._elem.onmousedown = (event) => {
            this._target = event.target;
        };
        this._elem.ondragstart = (event) => {
            if (this._dragHandle) {
                if (!this._dragHandle.contains(/** @type {?} */ (this._target))) {
                    event.preventDefault();
                    return;
                }
            }
            this._onDragStart(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.setData('text', '');
                // Change drag effect
                event.dataTransfer.effectAllowed = this.effectAllowed || this._config.dragEffect.name;
                // Change drag image
                if (isPresent(this.dragImage)) {
                    if (isString(this.dragImage)) {
                        (/** @type {?} */ (event.dataTransfer)).setDragImage(createImage(/** @type {?} */ (this.dragImage)));
                    }
                    else if (isFunction(this.dragImage)) {
                        (/** @type {?} */ (event.dataTransfer)).setDragImage(callFun(/** @type {?} */ (this.dragImage)));
                    }
                    else {
                        /** @type {?} */
                        let img = /** @type {?} */ (this.dragImage);
                        (/** @type {?} */ (event.dataTransfer)).setDragImage(img.imageElement, img.x_offset, img.y_offset);
                    }
                }
                else if (isPresent(this._config.dragImage)) {
                    /** @type {?} */
                    let dragImage = this._config.dragImage;
                    (/** @type {?} */ (event.dataTransfer)).setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
                }
                else if (this.cloneItem) {
                    this._dragHelper = /** @type {?} */ (this._elem.cloneNode(true));
                    this._dragHelper.classList.add('dnd-drag-item');
                    this._dragHelper.style.position = "absolute";
                    this._dragHelper.style.top = "0px";
                    this._dragHelper.style.left = "-1000px";
                    this._elem.parentElement.appendChild(this._dragHelper);
                    (/** @type {?} */ (event.dataTransfer)).setDragImage(this._dragHelper, event.offsetX, event.offsetY);
                }
                /** @type {?} */
                let cursorelem = (this._dragHandle) ? this._dragHandle : this._elem;
                if (this._dragEnabled) {
                    cursorelem.style.cursor = this.effectCursor ? this.effectCursor : this._config.dragCursor;
                }
                else {
                    cursorelem.style.cursor = this._defaultCursor;
                }
            }
        };
        this._elem.ondragend = (event) => {
            if (this._elem.parentElement && this._dragHelper) {
                this._elem.parentElement.removeChild(this._dragHelper);
            }
            // console.log('ondragend', event.target);
            this._onDragEnd(event);
            /** @type {?} */
            let cursorelem = (this._dragHandle) ? this._dragHandle : this._elem;
            cursorelem.style.cursor = this._defaultCursor;
        };
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    set dragEnabled(enabled) {
        this._dragEnabled = !!enabled;
        this._elem.draggable = this._dragEnabled;
    }
    /**
     * @return {?}
     */
    get dragEnabled() {
        return this._dragEnabled;
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    setDragHandle(elem) {
        this._dragHandle = elem;
    }
    /**
     * **** Change detection *****
     * @return {?}
     */
    detectChanges() {
        // Programmatically run change detection to fix issue in Safari
        setTimeout(() => {
            if (this._cdr && !(/** @type {?} */ (this._cdr)).destroyed) {
                this._cdr.detectChanges();
            }
        }, 250);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragEnter(event) {
        // console.log('ondragenter._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragEnterCallback(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragOver(event) {
        // // console.log('ondragover._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // The element is over the same source element - do nothing
            if (event.preventDefault) {
                // Necessary. Allows us to drop.
                event.preventDefault();
            }
            this._onDragOverCallback(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragLeave(event) {
        // console.log('ondragleave._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragLeaveCallback(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDrop(event) {
        // console.log('ondrop._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // Necessary. Allows us to drop.
            this._preventAndStop(event);
            this._onDropCallback(event);
            this.detectChanges();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _isDropAllowed(event) {
        if ((this._dragDropService.isDragged || (event.dataTransfer && event.dataTransfer.files)) && this.dropEnabled) {
            // First, if `allowDrop` is set, call it to determine whether the
            // dragged element can be dropped here.
            if (this.allowDrop) {
                return this.allowDrop(this._dragDropService.dragData);
            }
            // Otherwise, use dropZones if they are set.
            if (this.dropZones.length === 0 && this._dragDropService.allowedDropZones.length === 0) {
                return true;
            }
            for (let i = 0; i < this._dragDropService.allowedDropZones.length; i++) {
                /** @type {?} */
                let dragZone = this._dragDropService.allowedDropZones[i];
                if (this.dropZones.indexOf(dragZone) !== -1) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _preventAndStop(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragStart(event) {
        //console.log('ondragstart.dragEnabled', this._dragEnabled);
        if (this._dragEnabled) {
            this._dragDropService.allowedDropZones = this.dropZones;
            // console.log('ondragstart.allowedDropZones', this._dragDropService.allowedDropZones);
            this._onDragStartCallback(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragEnd(event) {
        this._dragDropService.allowedDropZones = [];
        // console.log('ondragend.allowedDropZones', this._dragDropService.allowedDropZones);
        this._onDragEndCallback(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragEnterCallback(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragOverCallback(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragLeaveCallback(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDropCallback(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragStartCallback(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragEndCallback(event) { }
}
AbstractComponent.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AbstractComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DragDropService },
    { type: DragDropConfig },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    AbstractComponent.prototype._elem;
    /** @type {?} */
    AbstractComponent.prototype._dragHandle;
    /** @type {?} */
    AbstractComponent.prototype._dragHelper;
    /** @type {?} */
    AbstractComponent.prototype._defaultCursor;
    /**
     * Last element that was mousedown'ed
     * @type {?}
     */
    AbstractComponent.prototype._target;
    /**
     * Whether the object is draggable. Default is true.
     * @type {?}
     */
    AbstractComponent.prototype._dragEnabled;
    /**
     * Allows drop on this element
     * @type {?}
     */
    AbstractComponent.prototype.dropEnabled;
    /**
     * Drag effect
     * @type {?}
     */
    AbstractComponent.prototype.effectAllowed;
    /**
     * Drag cursor
     * @type {?}
     */
    AbstractComponent.prototype.effectCursor;
    /**
     * Restrict places where a draggable element can be dropped. Either one of
     * these two mechanisms can be used:
     *
     * - dropZones: an array of strings that permits to specify the drop zones
     *   associated with this component. By default, if the drop-zones attribute
     *   is not specified, the droppable component accepts drop operations by
     *   all the draggable components that do not specify the allowed-drop-zones
     *
     * - allowDrop: a boolean function for droppable components, that is checked
     *   when an item is dragged. The function is passed the dragData of this
     *   item.
     *   - if it returns true, the item can be dropped in this component
     *   - if it returns false, the item cannot be dropped here
     * @type {?}
     */
    AbstractComponent.prototype.allowDrop;
    /** @type {?} */
    AbstractComponent.prototype.dropZones;
    /**
     * Here is the property dragImage you can use:
     * - The string value as url to the image
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="/images/simpler.png">
     * ...
     * - The DragImage value with Image and optional offset by x and y:
     *   let myDragImage: DragImage = new DragImage("/images/simpler1.png", 0, 0);
     * ...
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="myDragImage">
     * ...
     * - The custom function to return the value of dragImage programmatically:
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="getDragImage(someData)">
     * ...
     *   getDragImage(value:any): string {
     *     return value ? "/images/simpler1.png" : "/images/simpler2.png"
     *   }
     * @type {?}
     */
    AbstractComponent.prototype.dragImage;
    /** @type {?} */
    AbstractComponent.prototype.cloneItem;
    /** @type {?} */
    AbstractComponent.prototype._dragDropService;
    /** @type {?} */
    AbstractComponent.prototype._config;
    /** @type {?} */
    AbstractComponent.prototype._cdr;
}
export class AbstractHandleComponent {
    /**
     * @param {?} elemRef
     * @param {?} _dragDropService
     * @param {?} _config
     * @param {?} _Component
     * @param {?} _cdr
     */
    constructor(elemRef, _dragDropService, _config, _Component, _cdr) {
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._Component = _Component;
        this._cdr = _cdr;
        this._elem = elemRef.nativeElement;
        this._Component.setDragHandle(this._elem);
    }
}
if (false) {
    /** @type {?} */
    AbstractHandleComponent.prototype._elem;
    /** @type {?} */
    AbstractHandleComponent.prototype._dragDropService;
    /** @type {?} */
    AbstractHandleComponent.prototype._config;
    /** @type {?} */
    AbstractHandleComponent.prototype._Component;
    /** @type {?} */
    AbstractHandleComponent.prototype._cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0aW5lc2VlZC9uZzItZG5kLyIsInNvdXJjZXMiOlsic3JjL2Fic3RyYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQWEsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQUdwRixNQUFNOzs7Ozs7O0lBaUZGLFlBQVksT0FBbUIsRUFBUyxnQkFBaUMsRUFBUyxPQUF1QixFQUM3RjtRQUQ0QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDN0YsU0FBSSxHQUFKLElBQUk7Ozs7NEJBcEVnQixLQUFLOzs7OzJCQVlkLEtBQUs7eUJBMEJOLEVBQUU7eUJBMkJILEtBQUs7O1FBTXRCLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7Ozs7UUFJOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxD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O0lBQ3RDLGVBQWUsQ0FBQyxLQUFZLEtBQUs7Ozs7O0lBR2pDLG9CQUFvQixDQUFDLEtBQVksS0FBSzs7Ozs7SUFDdEMsa0JBQWtCLENBQUMsS0FBWSxLQUFLOzs7WUFoU3ZDLFVBQVU7Ozs7WUFOSCxVQUFVO1lBR1QsZUFBZTtZQURmLGNBQWM7WUFISCxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMFNyQyxNQUFNOzs7Ozs7OztJQUVGLFlBQVksT0FBbUIsRUFBUyxnQkFBaUMsRUFBUyxPQUF1QixFQUM3RixZQUF1QyxJQUF1QjtRQURsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDN0YsZUFBVSxHQUFWLFVBQVU7UUFBNkIsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFDdEUsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM3QztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTggU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxyXG5cclxuaW1wb3J0IHtJbmplY3RhYmxlLCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld1JlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEcmFnRHJvcENvbmZpZywgRHJhZ0ltYWdlIH0gZnJvbSAnLi9kbmQuY29uZmlnJztcclxuaW1wb3J0IHsgRHJhZ0Ryb3BTZXJ2aWNlIH0gZnJvbSAnLi9kbmQuc2VydmljZSc7XHJcbmltcG9ydCB7IGlzU3RyaW5nLCBpc0Z1bmN0aW9uLCBpc1ByZXNlbnQsIGNyZWF0ZUltYWdlLCBjYWxsRnVuIH0gZnJvbSAnLi9kbmQudXRpbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RDb21wb25lbnQge1xyXG4gICAgX2VsZW06IEhUTUxFbGVtZW50O1xyXG4gICAgX2RyYWdIYW5kbGU6IEhUTUxFbGVtZW50O1xyXG4gICAgX2RyYWdIZWxwZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgX2RlZmF1bHRDdXJzb3I6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIExhc3QgZWxlbWVudCB0aGF0IHdhcyBtb3VzZWRvd24nZWRcclxuICAgICAqL1xyXG4gICAgX3RhcmdldDogRXZlbnRUYXJnZXQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoZSBvYmplY3QgaXMgZHJhZ2dhYmxlLiBEZWZhdWx0IGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2RyYWdFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzZXQgZHJhZ0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2RyYWdFbmFibGVkID0gISFlbmFibGVkO1xyXG4gICAgICAgIHRoaXMuX2VsZW0uZHJhZ2dhYmxlID0gdGhpcy5fZHJhZ0VuYWJsZWQ7XHJcbiAgICB9XHJcbiAgICBnZXQgZHJhZ0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYWdFbmFibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIGRyb3Agb24gdGhpcyBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGRyb3BFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIERyYWcgZWZmZWN0XHJcbiAgICAgKi9cclxuICAgIGVmZmVjdEFsbG93ZWQ6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogRHJhZyBjdXJzb3JcclxuICAgICAqL1xyXG4gICAgZWZmZWN0Q3Vyc29yOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXN0cmljdCBwbGFjZXMgd2hlcmUgYSBkcmFnZ2FibGUgZWxlbWVudCBjYW4gYmUgZHJvcHBlZC4gRWl0aGVyIG9uZSBvZlxyXG4gICAgICogdGhlc2UgdHdvIG1lY2hhbmlzbXMgY2FuIGJlIHVzZWQ6XHJcbiAgICAgKlxyXG4gICAgICogLSBkcm9wWm9uZXM6IGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCBwZXJtaXRzIHRvIHNwZWNpZnkgdGhlIGRyb3Agem9uZXNcclxuICAgICAqICAgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29tcG9uZW50LiBCeSBkZWZhdWx0LCBpZiB0aGUgZHJvcC16b25lcyBhdHRyaWJ1dGVcclxuICAgICAqICAgaXMgbm90IHNwZWNpZmllZCwgdGhlIGRyb3BwYWJsZSBjb21wb25lbnQgYWNjZXB0cyBkcm9wIG9wZXJhdGlvbnMgYnlcclxuICAgICAqICAgYWxsIHRoZSBkcmFnZ2FibGUgY29tcG9uZW50cyB0aGF0IGRvIG5vdCBzcGVjaWZ5IHRoZSBhbGxvd2VkLWRyb3Atem9uZXNcclxuICAgICAqXHJcbiAgICAgKiAtIGFsbG93RHJvcDogYSBib29sZWFuIGZ1bmN0aW9uIGZvciBkcm9wcGFibGUgY29tcG9uZW50cywgdGhhdCBpcyBjaGVja2VkXHJcbiAgICAgKiAgIHdoZW4gYW4gaXRlbSBpcyBkcmFnZ2VkLiBUaGUgZnVuY3Rpb24gaXMgcGFzc2VkIHRoZSBkcmFnRGF0YSBvZiB0aGlzXHJcbiAgICAgKiAgIGl0ZW0uXHJcbiAgICAgKiAgIC0gaWYgaXQgcmV0dXJucyB0cnVlLCB0aGUgaXRlbSBjYW4gYmUgZHJvcHBlZCBpbiB0aGlzIGNvbXBvbmVudFxyXG4gICAgICogICAtIGlmIGl0IHJldHVybnMgZmFsc2UsIHRoZSBpdGVtIGNhbm5vdCBiZSBkcm9wcGVkIGhlcmVcclxuICAgICAqL1xyXG4gICAgYWxsb3dEcm9wOiAoZHJvcERhdGE6IGFueSkgPT4gYm9vbGVhbjtcclxuICAgIGRyb3Bab25lczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlcmUgaXMgdGhlIHByb3BlcnR5IGRyYWdJbWFnZSB5b3UgY2FuIHVzZTpcclxuICAgICAqIC0gVGhlIHN0cmluZyB2YWx1ZSBhcyB1cmwgdG8gdGhlIGltYWdlXHJcbiAgICAgKiAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcclxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcclxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cIi9pbWFnZXMvc2ltcGxlci5wbmdcIj5cclxuICAgICAqIC4uLlxyXG4gICAgICogLSBUaGUgRHJhZ0ltYWdlIHZhbHVlIHdpdGggSW1hZ2UgYW5kIG9wdGlvbmFsIG9mZnNldCBieSB4IGFuZCB5OlxyXG4gICAgICogICBsZXQgbXlEcmFnSW1hZ2U6IERyYWdJbWFnZSA9IG5ldyBEcmFnSW1hZ2UoXCIvaW1hZ2VzL3NpbXBsZXIxLnBuZ1wiLCAwLCAwKTtcclxuICAgICAqIC4uLlxyXG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXHJcbiAgICAgKiAgICAgICAgZG5kLWRyYWdnYWJsZSBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXHJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCJteURyYWdJbWFnZVwiPlxyXG4gICAgICogLi4uXHJcbiAgICAgKiAtIFRoZSBjdXN0b20gZnVuY3Rpb24gdG8gcmV0dXJuIHRoZSB2YWx1ZSBvZiBkcmFnSW1hZ2UgcHJvZ3JhbW1hdGljYWxseTpcclxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxyXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxyXG4gICAgICogICAgICAgIFtkcmFnSW1hZ2VdPVwiZ2V0RHJhZ0ltYWdlKHNvbWVEYXRhKVwiPlxyXG4gICAgICogLi4uXHJcbiAgICAgKiAgIGdldERyYWdJbWFnZSh2YWx1ZTphbnkpOiBzdHJpbmcge1xyXG4gICAgICogICAgIHJldHVybiB2YWx1ZSA/IFwiL2ltYWdlcy9zaW1wbGVyMS5wbmdcIiA6IFwiL2ltYWdlcy9zaW1wbGVyMi5wbmdcIlxyXG4gICAgICogICB9XHJcbiAgICAgKi9cclxuICAgIGRyYWdJbWFnZTogc3RyaW5nIHwgRHJhZ0ltYWdlIHwgRnVuY3Rpb247XHJcblxyXG4gICAgY2xvbmVJdGVtOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgcHVibGljIF9kcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgcHVibGljIF9jb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICAgIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgICAgICAgLy8gQXNzaWduIGRlZmF1bHQgY3Vyc29yIHVubGVzcyBvdmVycmlkZGVuXHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdEN1cnNvciA9IF9jb25maWcuZGVmYXVsdEN1cnNvcjtcclxuICAgICAgICB0aGlzLl9lbGVtID0gZWxlbVJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2VsZW0uc3R5bGUuY3Vyc29yID0gdGhpcy5fZGVmYXVsdEN1cnNvcjsgIC8vIHNldCBkZWZhdWx0IGN1cnNvciBvbiBvdXIgZWxlbWVudFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gRFJPUCBldmVudHNcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2VsZW0ub25kcmFnZW50ZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ0VudGVyKGV2ZW50KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2VsZW0ub25kcmFnb3ZlciA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ092ZXIoZXZlbnQpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5fY29uZmlnLmRyb3BFZmZlY3QubmFtZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyYWdsZWF2ZSA9IChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fb25EcmFnTGVhdmUoZXZlbnQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyb3AgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJvcChldmVudCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIERyYWcgZXZlbnRzXHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9lbGVtLm9ubW91c2Vkb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2VsZW0ub25kcmFnc3RhcnQgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZHJhZ0hhbmRsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kcmFnSGFuZGxlLmNvbnRhaW5zKDxFbGVtZW50PnRoaXMuX3RhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fb25EcmFnU3RhcnQoZXZlbnQpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJycpO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hhbmdlIGRyYWcgZWZmZWN0XHJcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IHRoaXMuZWZmZWN0QWxsb3dlZCB8fCB0aGlzLl9jb25maWcuZHJhZ0VmZmVjdC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hhbmdlIGRyYWcgaW1hZ2VcclxuICAgICAgICAgICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5kcmFnSW1hZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHRoaXMuZHJhZ0ltYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZShjcmVhdGVJbWFnZSg8c3RyaW5nPnRoaXMuZHJhZ0ltYWdlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuZHJhZ0ltYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZShjYWxsRnVuKDxGdW5jdGlvbj50aGlzLmRyYWdJbWFnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWc6IERyYWdJbWFnZSA9IDxEcmFnSW1hZ2U+dGhpcy5kcmFnSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKGltZy5pbWFnZUVsZW1lbnQsIGltZy54X29mZnNldCwgaW1nLnlfb2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzUHJlc2VudCh0aGlzLl9jb25maWcuZHJhZ0ltYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkcmFnSW1hZ2U6IERyYWdJbWFnZSA9IHRoaXMuX2NvbmZpZy5kcmFnSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlLmltYWdlRWxlbWVudCwgZHJhZ0ltYWdlLnhfb2Zmc2V0LCBkcmFnSW1hZ2UueV9vZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNsb25lSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdIZWxwZXIgPSA8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0hlbHBlci5jbGFzc0xpc3QuYWRkKCdkbmQtZHJhZy1pdGVtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0hlbHBlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnSGVscGVyLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0hlbHBlci5zdHlsZS5sZWZ0ID0gXCItMTAwMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbS5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2RyYWdIZWxwZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKHRoaXMuX2RyYWdIZWxwZXIsIGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoYW5nZSBkcmFnIGN1cnNvclxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnNvcmVsZW0gPSAodGhpcy5fZHJhZ0hhbmRsZSkgPyB0aGlzLl9kcmFnSGFuZGxlIDogdGhpcy5fZWxlbTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZHJhZ0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3JlbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuZWZmZWN0Q3Vyc29yID8gdGhpcy5lZmZlY3RDdXJzb3IgOiB0aGlzLl9jb25maWcuZHJhZ0N1cnNvcjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yZWxlbS5zdHlsZS5jdXJzb3IgPSB0aGlzLl9kZWZhdWx0Q3Vyc29yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyYWdlbmQgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbGVtLnBhcmVudEVsZW1lbnQgJiYgdGhpcy5fZHJhZ0hlbHBlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX2RyYWdIZWxwZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdlbmQnLCBldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdFbmQoZXZlbnQpO1xyXG4gICAgICAgICAgICAvLyBSZXN0b3JlIHN0eWxlIG9mIGRyYWdnZWQgZWxlbWVudFxyXG4gICAgICAgICAgICBsZXQgY3Vyc29yZWxlbSA9ICh0aGlzLl9kcmFnSGFuZGxlKSA/IHRoaXMuX2RyYWdIYW5kbGUgOiB0aGlzLl9lbGVtO1xyXG4gICAgICAgICAgICBjdXJzb3JlbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuX2RlZmF1bHRDdXJzb3I7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RHJhZ0hhbmRsZShlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2RyYWdIYW5kbGUgPSBlbGVtO1xyXG4gICAgfVxyXG4gICAgLyoqKioqKiogQ2hhbmdlIGRldGVjdGlvbiAqKioqKiovXHJcblxyXG4gICAgZGV0ZWN0Q2hhbmdlcyAoKSB7XHJcbiAgICAgICAgLy8gUHJvZ3JhbW1hdGljYWxseSBydW4gY2hhbmdlIGRldGVjdGlvbiB0byBmaXggaXNzdWUgaW4gU2FmYXJpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5fY2RyICYmICEodGhpcy5fY2RyIGFzIFZpZXdSZWYpLmRlc3Ryb3llZCApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyNTApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vKioqKioqIERyb3BwYWJsZSAqKioqKioqLy9cclxuICAgIHByaXZhdGUgX29uRHJhZ0VudGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdlbnRlci5faXNEcm9wQWxsb3dlZCcsIHRoaXMuX2lzRHJvcEFsbG93ZWQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnT3ZlcihldmVudDogRXZlbnQpIHtcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygnb25kcmFnb3Zlci5faXNEcm9wQWxsb3dlZCcsIHRoaXMuX2lzRHJvcEFsbG93ZWQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBpcyBvdmVyIHRoZSBzYW1lIHNvdXJjZSBlbGVtZW50IC0gZG8gbm90aGluZ1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5lY2Vzc2FyeS4gQWxsb3dzIHVzIHRvIGRyb3AuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdPdmVyQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdMZWF2ZShldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25kcmFnbGVhdmUuX2lzRHJvcEFsbG93ZWQnLCB0aGlzLl9pc0Ryb3BBbGxvd2VkKTtcclxuICAgICAgICBpZiAodGhpcy5faXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5fb25EcmFnTGVhdmVDYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJvcChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25kcm9wLl9pc0Ryb3BBbGxvd2VkJywgdGhpcy5faXNEcm9wQWxsb3dlZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIC8vIE5lY2Vzc2FyeS4gQWxsb3dzIHVzIHRvIGRyb3AuXHJcbiAgICAgICAgICAgIHRoaXMuX3ByZXZlbnRBbmRTdG9wKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJvcENhbGxiYWNrKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0Ryb3BBbGxvd2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoKHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgfHwgKGV2ZW50LmRhdGFUcmFuc2ZlciAmJiBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpKSAmJiB0aGlzLmRyb3BFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIC8vIEZpcnN0LCBpZiBgYWxsb3dEcm9wYCBpcyBzZXQsIGNhbGwgaXQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlXHJcbiAgICAgICAgICAgIC8vIGRyYWdnZWQgZWxlbWVudCBjYW4gYmUgZHJvcHBlZCBoZXJlLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd0Ryb3ApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbG93RHJvcCh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIHVzZSBkcm9wWm9uZXMgaWYgdGhleSBhcmUgc2V0LlxyXG4gICAgICAgICAgICBpZiAodGhpcy5kcm9wWm9uZXMubGVuZ3RoID09PSAwICYmIHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHJhZ1pvbmU6IHN0cmluZyA9IHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHJvcFpvbmVzLmluZGV4T2YoZHJhZ1pvbmUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wcmV2ZW50QW5kU3RvcChldmVudDogRXZlbnQpOiBhbnkge1xyXG4gICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyoqKioqKioqKioqIERyYWdnYWJsZSAqKioqKioqKioqLy9cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdTdGFydChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdvbmRyYWdzdGFydC5kcmFnRW5hYmxlZCcsIHRoaXMuX2RyYWdFbmFibGVkKTtcclxuICAgICAgICBpZiAodGhpcy5fZHJhZ0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMgPSB0aGlzLmRyb3Bab25lcztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ29uZHJhZ3N0YXJ0LmFsbG93ZWREcm9wWm9uZXMnLCB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdFbmQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMgPSBbXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25kcmFnZW5kLmFsbG93ZWREcm9wWm9uZXMnLCB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyk7XHJcbiAgICAgICAgdGhpcy5fb25EcmFnRW5kQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vKioqKiBEcm9wIENhbGxiYWNrcyAqKioqLy9cclxuICAgIF9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkgeyB9XHJcbiAgICBfb25EcmFnT3ZlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkgeyB9XHJcbiAgICBfb25EcmFnTGVhdmVDYWxsYmFjayhldmVudDogRXZlbnQpIHsgfVxyXG4gICAgX29uRHJvcENhbGxiYWNrKGV2ZW50OiBFdmVudCkgeyB9XHJcblxyXG4gICAgLy8qKioqIERyYWcgQ2FsbGJhY2tzICoqKiovL1xyXG4gICAgX29uRHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7IH1cclxuICAgIF9vbkRyYWdFbmRDYWxsYmFjayhldmVudDogRXZlbnQpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RIYW5kbGVDb21wb25lbnQge1xyXG4gICAgX2VsZW06IEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgcHVibGljIF9kcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgcHVibGljIF9jb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICAgIHByaXZhdGUgX0NvbXBvbmVudDogQWJzdHJhY3RDb21wb25lbnQsIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICB0aGlzLl9lbGVtID0gZWxlbVJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX0NvbXBvbmVudC5zZXREcmFnSGFuZGxlKHRoaXMuX2VsZW0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==