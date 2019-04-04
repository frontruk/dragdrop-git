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
var AbstractComponent = /** @class */ (function () {
    function AbstractComponent(elemRef, _dragDropService, _config, _cdr) {
        var _this = this;
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
        this._elem.ondragenter = function (event) {
            _this._onDragEnter(event);
        };
        this._elem.ondragover = function (event) {
            _this._onDragOver(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.dropEffect = _this._config.dropEffect.name;
            }
            return false;
        };
        this._elem.ondragleave = function (event) {
            _this._onDragLeave(event);
        };
        this._elem.ondrop = function (event) {
            _this._onDrop(event);
        };
        //
        // Drag events
        //
        this._elem.onmousedown = function (event) {
            _this._target = event.target;
        };
        this._elem.ondragstart = function (event) {
            if (_this._dragHandle) {
                if (!_this._dragHandle.contains(/** @type {?} */ (_this._target))) {
                    event.preventDefault();
                    return;
                }
            }
            _this._onDragStart(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.setData('text', '');
                // Change drag effect
                event.dataTransfer.effectAllowed = _this.effectAllowed || _this._config.dragEffect.name;
                // Change drag image
                if (isPresent(_this.dragImage)) {
                    if (isString(_this.dragImage)) {
                        (/** @type {?} */ (event.dataTransfer)).setDragImage(createImage(/** @type {?} */ (_this.dragImage)));
                    }
                    else if (isFunction(_this.dragImage)) {
                        (/** @type {?} */ (event.dataTransfer)).setDragImage(callFun(/** @type {?} */ (_this.dragImage)));
                    }
                    else {
                        /** @type {?} */
                        var img = /** @type {?} */ (_this.dragImage);
                        (/** @type {?} */ (event.dataTransfer)).setDragImage(img.imageElement, img.x_offset, img.y_offset);
                    }
                }
                else if (isPresent(_this._config.dragImage)) {
                    /** @type {?} */
                    var dragImage = _this._config.dragImage;
                    (/** @type {?} */ (event.dataTransfer)).setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
                }
                else if (_this.cloneItem) {
                    _this._dragHelper = /** @type {?} */ (_this._elem.cloneNode(true));
                    _this._dragHelper.classList.add('dnd-drag-item');
                    _this._dragHelper.style.position = "absolute";
                    _this._dragHelper.style.top = "0px";
                    _this._dragHelper.style.left = "-1000px";
                    _this._elem.parentElement.appendChild(_this._dragHelper);
                    (/** @type {?} */ (event.dataTransfer)).setDragImage(_this._dragHelper, event.offsetX, event.offsetY);
                }
                /** @type {?} */
                var cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
                if (_this._dragEnabled) {
                    cursorelem.style.cursor = _this.effectCursor ? _this.effectCursor : _this._config.dragCursor;
                }
                else {
                    cursorelem.style.cursor = _this._defaultCursor;
                }
            }
        };
        this._elem.ondragend = function (event) {
            if (_this._elem.parentElement && _this._dragHelper) {
                _this._elem.parentElement.removeChild(_this._dragHelper);
            }
            // console.log('ondragend', event.target);
            // console.log('ondragend', event.target);
            _this._onDragEnd(event);
            /** @type {?} */
            var cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
            cursorelem.style.cursor = _this._defaultCursor;
        };
    }
    Object.defineProperty(AbstractComponent.prototype, "dragEnabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dragEnabled;
        },
        set: /**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            this._dragEnabled = !!enabled;
            this._elem.draggable = this._dragEnabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} elem
     * @return {?}
     */
    AbstractComponent.prototype.setDragHandle = /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        this._dragHandle = elem;
    };
    /******* Change detection ******/
    /**
     * **** Change detection *****
     * @return {?}
     */
    AbstractComponent.prototype.detectChanges = /**
     * **** Change detection *****
     * @return {?}
     */
    function () {
        var _this = this;
        // Programmatically run change detection to fix issue in Safari
        setTimeout(function () {
            if (_this._cdr && !(/** @type {?} */ (_this._cdr)).destroyed) {
                _this._cdr.detectChanges();
            }
        }, 250);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractComponent.prototype._onDragEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log('ondragenter._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragEnterCallback(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractComponent.prototype._onDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // // console.log('ondragover._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // The element is over the same source element - do nothing
            if (event.preventDefault) {
                // Necessary. Allows us to drop.
                event.preventDefault();
            }
            this._onDragOverCallback(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractComponent.prototype._onDragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log('ondragleave._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragLeaveCallback(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractComponent.prototype._onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log('ondrop._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // Necessary. Allows us to drop.
            this._preventAndStop(event);
            this._onDropCallback(event);
            this.detectChanges();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractComponent.prototype._isDropAllowed = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
            for (var i = 0; i < this._dragDropService.allowedDropZones.length; i++) {
                /** @type {?} */
                var dragZone = this._dragDropService.allowedDropZones[i];
                if (this.dropZones.indexOf(dragZone) !== -1) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractComponent.prototype._preventAndStop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractComponent.prototype._onDragStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        //console.log('ondragstart.dragEnabled', this._dragEnabled);
        if (this._dragEnabled) {
            this._dragDropService.allowedDropZones = this.dropZones;
            // console.log('ondragstart.allowedDropZones', this._dragDropService.allowedDropZones);
            this._onDragStartCallback(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractComponent.prototype._onDragEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._dragDropService.allowedDropZones = [];
        // console.log('ondragend.allowedDropZones', this._dragDropService.allowedDropZones);
        this._onDragEndCallback(event);
    };
    //**** Drop Callbacks ****//
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractComponent.prototype._onDragEnterCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractComponent.prototype._onDragOverCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractComponent.prototype._onDragLeaveCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractComponent.prototype._onDropCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    //**** Drag Callbacks ****//
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractComponent.prototype._onDragStartCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractComponent.prototype._onDragEndCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    AbstractComponent.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AbstractComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: ChangeDetectorRef }
    ]; };
    return AbstractComponent;
}());
export { AbstractComponent };
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
var AbstractHandleComponent = /** @class */ (function () {
    function AbstractHandleComponent(elemRef, _dragDropService, _config, _Component, _cdr) {
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._Component = _Component;
        this._cdr = _cdr;
        this._elem = elemRef.nativeElement;
        this._Component.setDragHandle(this._elem);
    }
    return AbstractHandleComponent;
}());
export { AbstractHandleComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0aW5lc2VlZC9uZzItZG5kLyIsInNvdXJjZXMiOlsic3JjL2Fic3RyYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQWEsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7SUFvRmhGLDJCQUFZLE9BQW1CLEVBQVMsZ0JBQWlDLEVBQVMsT0FBdUIsRUFDN0Y7UUFEWixpQkE0RkM7UUE1RnVDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUM3RixTQUFJLEdBQUosSUFBSTs7Ozs0QkFwRWdCLEtBQUs7Ozs7MkJBWWQsS0FBSzt5QkEwQk4sRUFBRTt5QkEyQkgsS0FBSzs7UUFNdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7OztRQUk5QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxVQUFDLEtBQVk7WUFDbEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdB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QUFZLEtBQUs7Ozs7O0lBQ3JDLGdEQUFvQjs7OztJQUFwQixVQUFxQixLQUFZLEtBQUs7Ozs7O0lBQ3RDLDJDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBWSxLQUFLO0lBRWpDLDRCQUE0Qjs7Ozs7SUFDNUIsZ0RBQW9COzs7O0lBQXBCLFVBQXFCLEtBQVksS0FBSzs7Ozs7SUFDdEMsOENBQWtCOzs7O0lBQWxCLFVBQW1CLEtBQVksS0FBSzs7Z0JBaFN2QyxVQUFVOzs7O2dCQU5ILFVBQVU7Z0JBR1QsZUFBZTtnQkFEZixjQUFjO2dCQUhILGlCQUFpQjs7NEJBSnJDOztTQVlzQixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrU3ZDLElBQUE7SUFFSSxpQ0FBWSxPQUFtQixFQUFTLGdCQUFpQyxFQUFTLE9BQXVCLEVBQzdGLFlBQXVDLElBQXVCO1FBRGxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUM3RixlQUFVLEdBQVYsVUFBVTtRQUE2QixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUN0RSxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdDO2tDQXBUTDtJQXFUQyxDQUFBO0FBUEQsbUNBT0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxOCBTZXJnZXkgQWtvcGtva2h5YW50c1xyXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXHJcblxyXG5pbXBvcnQge0luamVjdGFibGUsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERyYWdEcm9wQ29uZmlnLCBEcmFnSW1hZ2UgfSBmcm9tICcuL2RuZC5jb25maWcnO1xyXG5pbXBvcnQgeyBEcmFnRHJvcFNlcnZpY2UgfSBmcm9tICcuL2RuZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcsIGlzRnVuY3Rpb24sIGlzUHJlc2VudCwgY3JlYXRlSW1hZ2UsIGNhbGxGdW4gfSBmcm9tICcuL2RuZC51dGlscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdENvbXBvbmVudCB7XHJcbiAgICBfZWxlbTogSFRNTEVsZW1lbnQ7XHJcbiAgICBfZHJhZ0hhbmRsZTogSFRNTEVsZW1lbnQ7XHJcbiAgICBfZHJhZ0hlbHBlcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBfZGVmYXVsdEN1cnNvcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGFzdCBlbGVtZW50IHRoYXQgd2FzIG1vdXNlZG93bidlZFxyXG4gICAgICovXHJcbiAgICBfdGFyZ2V0OiBFdmVudFRhcmdldDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIG9iamVjdCBpcyBkcmFnZ2FibGUuIERlZmF1bHQgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZHJhZ0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNldCBkcmFnRW5hYmxlZChlbmFibGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0VuYWJsZWQgPSAhIWVuYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5kcmFnZ2FibGUgPSB0aGlzLl9kcmFnRW5hYmxlZDtcclxuICAgIH1cclxuICAgIGdldCBkcmFnRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZHJhZ0VuYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgZHJvcCBvbiB0aGlzIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgZHJvcEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogRHJhZyBlZmZlY3RcclxuICAgICAqL1xyXG4gICAgZWZmZWN0QWxsb3dlZDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIGN1cnNvclxyXG4gICAgICovXHJcbiAgICBlZmZlY3RDdXJzb3I6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc3RyaWN0IHBsYWNlcyB3aGVyZSBhIGRyYWdnYWJsZSBlbGVtZW50IGNhbiBiZSBkcm9wcGVkLiBFaXRoZXIgb25lIG9mXHJcbiAgICAgKiB0aGVzZSB0d28gbWVjaGFuaXNtcyBjYW4gYmUgdXNlZDpcclxuICAgICAqXHJcbiAgICAgKiAtIGRyb3Bab25lczogYW4gYXJyYXkgb2Ygc3RyaW5ncyB0aGF0IHBlcm1pdHMgdG8gc3BlY2lmeSB0aGUgZHJvcCB6b25lc1xyXG4gICAgICogICBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb21wb25lbnQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBkcm9wLXpvbmVzIGF0dHJpYnV0ZVxyXG4gICAgICogICBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgZHJvcHBhYmxlIGNvbXBvbmVudCBhY2NlcHRzIGRyb3Agb3BlcmF0aW9ucyBieVxyXG4gICAgICogICBhbGwgdGhlIGRyYWdnYWJsZSBjb21wb25lbnRzIHRoYXQgZG8gbm90IHNwZWNpZnkgdGhlIGFsbG93ZWQtZHJvcC16b25lc1xyXG4gICAgICpcclxuICAgICAqIC0gYWxsb3dEcm9wOiBhIGJvb2xlYW4gZnVuY3Rpb24gZm9yIGRyb3BwYWJsZSBjb21wb25lbnRzLCB0aGF0IGlzIGNoZWNrZWRcclxuICAgICAqICAgd2hlbiBhbiBpdGVtIGlzIGRyYWdnZWQuIFRoZSBmdW5jdGlvbiBpcyBwYXNzZWQgdGhlIGRyYWdEYXRhIG9mIHRoaXNcclxuICAgICAqICAgaXRlbS5cclxuICAgICAqICAgLSBpZiBpdCByZXR1cm5zIHRydWUsIHRoZSBpdGVtIGNhbiBiZSBkcm9wcGVkIGluIHRoaXMgY29tcG9uZW50XHJcbiAgICAgKiAgIC0gaWYgaXQgcmV0dXJucyBmYWxzZSwgdGhlIGl0ZW0gY2Fubm90IGJlIGRyb3BwZWQgaGVyZVxyXG4gICAgICovXHJcbiAgICBhbGxvd0Ryb3A6IChkcm9wRGF0YTogYW55KSA9PiBib29sZWFuO1xyXG4gICAgZHJvcFpvbmVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVyZSBpcyB0aGUgcHJvcGVydHkgZHJhZ0ltYWdlIHlvdSBjYW4gdXNlOlxyXG4gICAgICogLSBUaGUgc3RyaW5nIHZhbHVlIGFzIHVybCB0byB0aGUgaW1hZ2VcclxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxyXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxyXG4gICAgICogICAgICAgIFtkcmFnSW1hZ2VdPVwiL2ltYWdlcy9zaW1wbGVyLnBuZ1wiPlxyXG4gICAgICogLi4uXHJcbiAgICAgKiAtIFRoZSBEcmFnSW1hZ2UgdmFsdWUgd2l0aCBJbWFnZSBhbmQgb3B0aW9uYWwgb2Zmc2V0IGJ5IHggYW5kIHk6XHJcbiAgICAgKiAgIGxldCBteURyYWdJbWFnZTogRHJhZ0ltYWdlID0gbmV3IERyYWdJbWFnZShcIi9pbWFnZXMvc2ltcGxlcjEucG5nXCIsIDAsIDApO1xyXG4gICAgICogLi4uXHJcbiAgICAgKiAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcclxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcclxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cIm15RHJhZ0ltYWdlXCI+XHJcbiAgICAgKiAuLi5cclxuICAgICAqIC0gVGhlIGN1c3RvbSBmdW5jdGlvbiB0byByZXR1cm4gdGhlIHZhbHVlIG9mIGRyYWdJbWFnZSBwcm9ncmFtbWF0aWNhbGx5OlxyXG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXHJcbiAgICAgKiAgICAgICAgZG5kLWRyYWdnYWJsZSBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXHJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCJnZXREcmFnSW1hZ2Uoc29tZURhdGEpXCI+XHJcbiAgICAgKiAuLi5cclxuICAgICAqICAgZ2V0RHJhZ0ltYWdlKHZhbHVlOmFueSk6IHN0cmluZyB7XHJcbiAgICAgKiAgICAgcmV0dXJuIHZhbHVlID8gXCIvaW1hZ2VzL3NpbXBsZXIxLnBuZ1wiIDogXCIvaW1hZ2VzL3NpbXBsZXIyLnBuZ1wiXHJcbiAgICAgKiAgIH1cclxuICAgICAqL1xyXG4gICAgZHJhZ0ltYWdlOiBzdHJpbmcgfCBEcmFnSW1hZ2UgfCBGdW5jdGlvbjtcclxuXHJcbiAgICBjbG9uZUl0ZW06IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgX2RyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBwdWJsaWMgX2NvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgICAgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG5cclxuICAgICAgICAvLyBBc3NpZ24gZGVmYXVsdCBjdXJzb3IgdW5sZXNzIG92ZXJyaWRkZW5cclxuICAgICAgICB0aGlzLl9kZWZhdWx0Q3Vyc29yID0gX2NvbmZpZy5kZWZhdWx0Q3Vyc29yO1xyXG4gICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5zdHlsZS5jdXJzb3IgPSB0aGlzLl9kZWZhdWx0Q3Vyc29yOyAgLy8gc2V0IGRlZmF1bHQgY3Vyc29yIG9uIG91ciBlbGVtZW50XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBEUk9QIGV2ZW50c1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyYWdlbnRlciA9IChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fb25EcmFnRW50ZXIoZXZlbnQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyYWdvdmVyID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fb25EcmFnT3ZlcihldmVudCk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLl9jb25maWcuZHJvcEVmZmVjdC5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9lbGVtLm9uZHJhZ2xlYXZlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdMZWF2ZShldmVudCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9lbGVtLm9uZHJvcCA9IChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fb25Ecm9wKGV2ZW50KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gRHJhZyBldmVudHNcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2VsZW0ub25tb3VzZWRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyYWdzdGFydCA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnSGFuZGxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2RyYWdIYW5kbGUuY29udGFpbnMoPEVsZW1lbnQ+dGhpcy5fdGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdTdGFydChldmVudCk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgZHJhZyBlZmZlY3RcclxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gdGhpcy5lZmZlY3RBbGxvd2VkIHx8IHRoaXMuX2NvbmZpZy5kcmFnRWZmZWN0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgZHJhZyBpbWFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLmRyYWdJbWFnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5kcmFnSW1hZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKGNyZWF0ZUltYWdlKDxzdHJpbmc+dGhpcy5kcmFnSW1hZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5kcmFnSW1hZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKGNhbGxGdW4oPEZ1bmN0aW9uPnRoaXMuZHJhZ0ltYWdlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltZzogRHJhZ0ltYWdlID0gPERyYWdJbWFnZT50aGlzLmRyYWdJbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UoaW1nLmltYWdlRWxlbWVudCwgaW1nLnhfb2Zmc2V0LCBpbWcueV9vZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNQcmVzZW50KHRoaXMuX2NvbmZpZy5kcmFnSW1hZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRyYWdJbWFnZTogRHJhZ0ltYWdlID0gdGhpcy5fY29uZmlnLmRyYWdJbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZShkcmFnSW1hZ2UuaW1hZ2VFbGVtZW50LCBkcmFnSW1hZ2UueF9vZmZzZXQsIGRyYWdJbWFnZS55X29mZnNldCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2xvbmVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0hlbHBlciA9IDxIVE1MRWxlbWVudD50aGlzLl9lbGVtLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnSGVscGVyLmNsYXNzTGlzdC5hZGQoJ2RuZC1kcmFnLWl0ZW0nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnSGVscGVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdIZWxwZXIuc3R5bGUudG9wID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnSGVscGVyLnN0eWxlLmxlZnQgPSBcIi0xMDAwcHhcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fZHJhZ0hlbHBlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UodGhpcy5fZHJhZ0hlbHBlciwgZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hhbmdlIGRyYWcgY3Vyc29yXHJcbiAgICAgICAgICAgICAgICBsZXQgY3Vyc29yZWxlbSA9ICh0aGlzLl9kcmFnSGFuZGxlKSA/IHRoaXMuX2RyYWdIYW5kbGUgOiB0aGlzLl9lbGVtO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcmVsZW0uc3R5bGUuY3Vyc29yID0gdGhpcy5lZmZlY3RDdXJzb3IgPyB0aGlzLmVmZmVjdEN1cnNvciA6IHRoaXMuX2NvbmZpZy5kcmFnQ3Vyc29yO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3JlbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuX2RlZmF1bHRDdXJzb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9lbGVtLm9uZHJhZ2VuZCA9IChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VsZW0ucGFyZW50RWxlbWVudCAmJiB0aGlzLl9kcmFnSGVscGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5fZHJhZ0hlbHBlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ29uZHJhZ2VuZCcsIGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ0VuZChldmVudCk7XHJcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgc3R5bGUgb2YgZHJhZ2dlZCBlbGVtZW50XHJcbiAgICAgICAgICAgIGxldCBjdXJzb3JlbGVtID0gKHRoaXMuX2RyYWdIYW5kbGUpID8gdGhpcy5fZHJhZ0hhbmRsZSA6IHRoaXMuX2VsZW07XHJcbiAgICAgICAgICAgIGN1cnNvcmVsZW0uc3R5bGUuY3Vyc29yID0gdGhpcy5fZGVmYXVsdEN1cnNvcjtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREcmFnSGFuZGxlKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0hhbmRsZSA9IGVsZW07XHJcbiAgICB9XHJcbiAgICAvKioqKioqKiBDaGFuZ2UgZGV0ZWN0aW9uICoqKioqKi9cclxuXHJcbiAgICBkZXRlY3RDaGFuZ2VzICgpIHtcclxuICAgICAgICAvLyBQcm9ncmFtbWF0aWNhbGx5IHJ1biBjaGFuZ2UgZGV0ZWN0aW9uIHRvIGZpeCBpc3N1ZSBpbiBTYWZhcmlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9jZHIgJiYgISh0aGlzLl9jZHIgYXMgVmlld1JlZikuZGVzdHJveWVkICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDI1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8qKioqKiogRHJvcHBhYmxlICoqKioqKiovL1xyXG4gICAgcHJpdmF0ZSBfb25EcmFnRW50ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uZHJhZ2VudGVyLl9pc0Ryb3BBbGxvd2VkJywgdGhpcy5faXNEcm9wQWxsb3dlZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdPdmVyKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdvdmVyLl9pc0Ryb3BBbGxvd2VkJywgdGhpcy5faXNEcm9wQWxsb3dlZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IGlzIG92ZXIgdGhlIHNhbWUgc291cmNlIGVsZW1lbnQgLSBkbyBub3RoaW5nXHJcbiAgICAgICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTmVjZXNzYXJ5LiBBbGxvd3MgdXMgdG8gZHJvcC5cclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ092ZXJDYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ0xlYXZlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdsZWF2ZS5faXNEcm9wQWxsb3dlZCcsIHRoaXMuX2lzRHJvcEFsbG93ZWQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25Ecm9wKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyb3AuX2lzRHJvcEFsbG93ZWQnLCB0aGlzLl9pc0Ryb3BBbGxvd2VkKTtcclxuICAgICAgICBpZiAodGhpcy5faXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgICAgICAgLy8gTmVjZXNzYXJ5LiBBbGxvd3MgdXMgdG8gZHJvcC5cclxuICAgICAgICAgICAgdGhpcy5fcHJldmVudEFuZFN0b3AoZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fb25Ecm9wQ2FsbGJhY2soZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzRHJvcEFsbG93ZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICgodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCB8fCAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcykpICYmIHRoaXMuZHJvcEVuYWJsZWQpIHtcclxuICAgICAgICAgICAgLy8gRmlyc3QsIGlmIGBhbGxvd0Ryb3BgIGlzIHNldCwgY2FsbCBpdCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGVcclxuICAgICAgICAgICAgLy8gZHJhZ2dlZCBlbGVtZW50IGNhbiBiZSBkcm9wcGVkIGhlcmUuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbG93RHJvcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dEcm9wKHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgdXNlIGRyb3Bab25lcyBpZiB0aGV5IGFyZSBzZXQuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRyb3Bab25lcy5sZW5ndGggPT09IDAgJiYgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBkcmFnWm9uZTogc3RyaW5nID0gdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kcm9wWm9uZXMuaW5kZXhPZihkcmFnWm9uZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3ByZXZlbnRBbmRTdG9wKGV2ZW50OiBFdmVudCk6IGFueSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vKioqKioqKioqKiogRHJhZ2dhYmxlICoqKioqKioqKiovL1xyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ1N0YXJ0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ29uZHJhZ3N0YXJ0LmRyYWdFbmFibGVkJywgdGhpcy5fZHJhZ0VuYWJsZWQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnRW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyA9IHRoaXMuZHJvcFpvbmVzO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25kcmFnc3RhcnQuYWxsb3dlZERyb3Bab25lcycsIHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzKTtcclxuICAgICAgICAgICAgdGhpcy5fb25EcmFnU3RhcnRDYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ0VuZChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyA9IFtdO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdlbmQuYWxsb3dlZERyb3Bab25lcycsIHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzKTtcclxuICAgICAgICB0aGlzLl9vbkRyYWdFbmRDYWxsYmFjayhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8qKioqIERyb3AgQ2FsbGJhY2tzICoqKiovL1xyXG4gICAgX29uRHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7IH1cclxuICAgIF9vbkRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7IH1cclxuICAgIF9vbkRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50OiBFdmVudCkgeyB9XHJcbiAgICBfb25Ecm9wQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7IH1cclxuXHJcbiAgICAvLyoqKiogRHJhZyBDYWxsYmFja3MgKioqKi8vXHJcbiAgICBfb25EcmFnU3RhcnRDYWxsYmFjayhldmVudDogRXZlbnQpIHsgfVxyXG4gICAgX29uRHJhZ0VuZENhbGxiYWNrKGV2ZW50OiBFdmVudCkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEhhbmRsZUNvbXBvbmVudCB7XHJcbiAgICBfZWxlbTogSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgX2RyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBwdWJsaWMgX2NvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgICAgcHJpdmF0ZSBfQ29tcG9uZW50OiBBYnN0cmFjdENvbXBvbmVudCwgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fQ29tcG9uZW50LnNldERyYWdIYW5kbGUodGhpcy5fZWxlbSk7XHJcbiAgICB9XHJcbn1cclxuIl19