/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
import * as tslib_1 from "tslib";
import { ChangeDetectorRef } from '@angular/core';
import { Directive, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormArray } from '@angular/forms';
import { AbstractComponent, AbstractHandleComponent } from './abstract.component';
import { DragDropConfig } from './dnd.config';
import { DragDropService, DragDropSortableService } from './dnd.service';
var SortableContainer = /** @class */ (function (_super) {
    tslib_1.__extends(SortableContainer, _super);
    function SortableContainer(elemRef, dragDropService, config, cdr, _sortableDataService) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this._sortableDataService = _sortableDataService;
        _this._sortableData = [];
        _this.dragEnabled = false;
        return _this;
    }
    Object.defineProperty(SortableContainer.prototype, "draggable", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "sortableData", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sortableData;
        },
        set: /**
         * @param {?} sortableData
         * @return {?}
         */
        function (sortableData) {
            this._sortableData = sortableData;
            if (sortableData instanceof FormArray) {
                this.sortableHandler = new SortableFormArrayHandler();
            }
            else {
                this.sortableHandler = new SortableArrayHandler();
            }
            //
            this.dropEnabled = !!this._sortableData;
            // console.log("collection is changed, drop enabled: " + this.dropEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "dropzones", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    SortableContainer.prototype._onDragEnterCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._sortableDataService.isDragged) {
            /** @type {?} */
            var item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
            // Check does element exist in sortableData of this Container
            if (this.indexOf(item) === -1) {
                // Let's add it
                // console.log('Container._onDragEnterCallback. drag node [' + this._sortableDataService.index.toString() + '] over parent node');
                // Remove item from previouse list
                this._sortableDataService.sortableContainer.removeItemAt(this._sortableDataService.index);
                if (this._sortableDataService.sortableContainer._sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this.insertItemAt(item, 0);
                this._sortableDataService.sortableContainer = this;
                this._sortableDataService.index = 0;
            }
            // Refresh changes in properties of container component
            this.detectChanges();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    SortableContainer.prototype.getItemAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.sortableHandler.getItemAt(this._sortableData, index);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SortableContainer.prototype.indexOf = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return this.sortableHandler.indexOf(this._sortableData, item);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    SortableContainer.prototype.removeItemAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.sortableHandler.removeItemAt(this._sortableData, index);
    };
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    SortableContainer.prototype.insertItemAt = /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (item, index) {
        this.sortableHandler.insertItemAt(this._sortableData, item, index);
    };
    SortableContainer.decorators = [
        { type: Directive, args: [{ selector: '[dnd-sortable-container]' },] }
    ];
    /** @nocollapse */
    SortableContainer.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: ChangeDetectorRef },
        { type: DragDropSortableService }
    ]; };
    SortableContainer.propDecorators = {
        draggable: [{ type: Input, args: ["dragEnabled",] }],
        sortableData: [{ type: Input }],
        dropzones: [{ type: Input, args: ["dropZones",] }]
    };
    return SortableContainer;
}(AbstractComponent));
export { SortableContainer };
if (false) {
    /** @type {?} */
    SortableContainer.prototype._sortableData;
    /** @type {?} */
    SortableContainer.prototype.sortableHandler;
    /** @type {?} */
    SortableContainer.prototype._sortableDataService;
}
var SortableArrayHandler = /** @class */ (function () {
    function SortableArrayHandler() {
    }
    /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    SortableArrayHandler.prototype.getItemAt = /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    function (sortableData, index) {
        return sortableData[index];
    };
    /**
     * @param {?} sortableData
     * @param {?} item
     * @return {?}
     */
    SortableArrayHandler.prototype.indexOf = /**
     * @param {?} sortableData
     * @param {?} item
     * @return {?}
     */
    function (sortableData, item) {
        return sortableData.indexOf(item);
    };
    /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    SortableArrayHandler.prototype.removeItemAt = /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    function (sortableData, index) {
        sortableData.splice(index, 1);
    };
    /**
     * @param {?} sortableData
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    SortableArrayHandler.prototype.insertItemAt = /**
     * @param {?} sortableData
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (sortableData, item, index) {
        sortableData.splice(index, 0, item);
    };
    return SortableArrayHandler;
}());
var SortableFormArrayHandler = /** @class */ (function () {
    function SortableFormArrayHandler() {
    }
    /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    SortableFormArrayHandler.prototype.getItemAt = /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    function (sortableData, index) {
        return sortableData.at(index);
    };
    /**
     * @param {?} sortableData
     * @param {?} item
     * @return {?}
     */
    SortableFormArrayHandler.prototype.indexOf = /**
     * @param {?} sortableData
     * @param {?} item
     * @return {?}
     */
    function (sortableData, item) {
        return sortableData.controls.indexOf(item);
    };
    /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    SortableFormArrayHandler.prototype.removeItemAt = /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    function (sortableData, index) {
        sortableData.removeAt(index);
    };
    /**
     * @param {?} sortableData
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    SortableFormArrayHandler.prototype.insertItemAt = /**
     * @param {?} sortableData
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (sortableData, item, index) {
        sortableData.insert(index, item);
    };
    return SortableFormArrayHandler;
}());
var SortableComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SortableComponent, _super);
    function SortableComponent(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this._sortableContainer = _sortableContainer;
        _this._sortableDataService = _sortableDataService;
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new EventEmitter();
        _this.onDragStartCallback = new EventEmitter();
        _this.onDragOverCallback = new EventEmitter();
        _this.onDragEndCallback = new EventEmitter();
        _this.onDropSuccessCallback = new EventEmitter();
        _this.dropZones = _this._sortableContainer.dropZones;
        _this.dragEnabled = true;
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(SortableComponent.prototype, "draggable", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "droppable", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: /**
         * Drag allowed effect
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: /**
         * Drag effect cursor
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype._onDragStartCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log('_onDragStartCallback. dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = true;
        this._sortableDataService.sortableContainer = this._sortableContainer;
        this._sortableDataService.index = this.index;
        this._sortableDataService.markSortable(this._elem);
        // Add dragData
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        //
        this.onDragStartCallback.emit(this._dragDropService.dragData);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype._onDragOverCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._sortableDataService.isDragged && this._elem !== this._sortableDataService.elem) {
            // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
            this._sortableDataService.sortableContainer = this._sortableContainer;
            this._sortableDataService.index = this.index;
            this._sortableDataService.markSortable(this._elem);
            this.onDragOverCallback.emit(this._dragDropService.dragData);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype._onDragEndCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log('_onDragEndCallback. end dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = false;
        this._sortableDataService.sortableContainer = null;
        this._sortableDataService.index = null;
        this._sortableDataService.markSortable(null);
        // Add dragGata
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        //
        this.onDragEndCallback.emit(this._dragDropService.dragData);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype._onDragEnterCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._sortableDataService.isDragged) {
            this._sortableDataService.markSortable(this._elem);
            if ((this.index !== this._sortableDataService.index) ||
                (this._sortableDataService.sortableContainer.sortableData !== this._sortableContainer.sortableData)) {
                /** @type {?} */
                var item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
                // Remove item from previouse list
                this._sortableDataService.sortableContainer.removeItemAt(this._sortableDataService.index);
                if (this._sortableDataService.sortableContainer.sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this._sortableContainer.insertItemAt(item, this.index);
                if (this._sortableContainer.dropEnabled) {
                    this._sortableContainer.dropEnabled = false;
                }
                this._sortableDataService.sortableContainer = this._sortableContainer;
                this._sortableDataService.index = this.index;
                this.detectChanges();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype._onDropCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._sortableDataService.isDragged) {
            // console.log('onDropCallback.onDropSuccessCallback.dragData', this._dragDropService.dragData);
            this.onDropSuccessCallback.emit(this._dragDropService.dragData);
            if (this._dragDropService.onDragSuccessCallback) {
                // console.log('onDropCallback.onDragSuccessCallback.dragData', this._dragDropService.dragData);
                this._dragDropService.onDragSuccessCallback.emit(this._dragDropService.dragData);
            }
            // Refresh changes in properties of container component
            this._sortableContainer.detectChanges();
        }
    };
    SortableComponent.decorators = [
        { type: Directive, args: [{ selector: '[dnd-sortable]' },] }
    ];
    /** @nocollapse */
    SortableComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: SortableContainer },
        { type: DragDropSortableService },
        { type: ChangeDetectorRef }
    ]; };
    SortableComponent.propDecorators = {
        index: [{ type: Input, args: ['sortableIndex',] }],
        draggable: [{ type: Input, args: ["dragEnabled",] }],
        droppable: [{ type: Input, args: ["dropEnabled",] }],
        dragData: [{ type: Input }],
        effectallowed: [{ type: Input, args: ["effectAllowed",] }],
        effectcursor: [{ type: Input, args: ["effectCursor",] }],
        onDragSuccessCallback: [{ type: Output, args: ["onDragSuccess",] }],
        onDragStartCallback: [{ type: Output, args: ["onDragStart",] }],
        onDragOverCallback: [{ type: Output, args: ["onDragOver",] }],
        onDragEndCallback: [{ type: Output, args: ["onDragEnd",] }],
        onDropSuccessCallback: [{ type: Output, args: ["onDropSuccess",] }]
    };
    return SortableComponent;
}(AbstractComponent));
export { SortableComponent };
if (false) {
    /** @type {?} */
    SortableComponent.prototype.index;
    /**
     * The data that has to be dragged. It can be any JS object
     * @type {?}
     */
    SortableComponent.prototype.dragData;
    /**
     * Callback function called when the drag action ends with a valid drop action.
     * It is activated after the on-drop-success callback
     * @type {?}
     */
    SortableComponent.prototype.onDragSuccessCallback;
    /** @type {?} */
    SortableComponent.prototype.onDragStartCallback;
    /** @type {?} */
    SortableComponent.prototype.onDragOverCallback;
    /** @type {?} */
    SortableComponent.prototype.onDragEndCallback;
    /** @type {?} */
    SortableComponent.prototype.onDropSuccessCallback;
    /** @type {?} */
    SortableComponent.prototype._sortableContainer;
    /** @type {?} */
    SortableComponent.prototype._sortableDataService;
}
var SortableHandleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SortableHandleComponent, _super);
    function SortableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    SortableHandleComponent.decorators = [
        { type: Directive, args: [{ selector: '[dnd-sortable-handle]' },] }
    ];
    /** @nocollapse */
    SortableHandleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: SortableComponent },
        { type: ChangeDetectorRef }
    ]; };
    return SortableHandleComponent;
}(AbstractHandleComponent));
export { SortableHandleComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0aW5lc2VlZC9uZzItZG5kLyIsInNvdXJjZXMiOlsic3JjL3NvcnRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekMsT0FBTyxFQUFDLGlCQUFpQixFQUFFLHVCQUF1QixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUM1QyxPQUFPLEVBQUMsZUFBZSxFQUFFLHVCQUF1QixFQUFDLE1BQU0sZUFBZSxDQUFDOztJQUdoQyw2Q0FBaUI7SUE0QnBELDJCQUFZLE9BQW1CLEVBQUUsZUFBZ0MsRUFBRSxNQUFxQixFQUFFLEdBQXFCLEVBQ25HO1FBRFosWUFHSSxrQkFBTSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsU0FFL0M7UUFKVywwQkFBb0IsR0FBcEIsb0JBQW9COzhCQXZCYyxFQUFFO1FBMEI1QyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzs7S0FDNUI7SUEvQkQsc0JBQTBCLHdDQUFTOzs7OztRQUFuQyxVQUFvQyxLQUFhO1lBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUM5Qjs7O09BQUE7SUFLRCxzQkFBYSwyQ0FBWTs7OztRQVd6QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUM3Qjs7Ozs7UUFiRCxVQUEwQixZQUFrQztZQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVks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QUFDLGFBQWE7MkJBT25CLEtBQUs7Z0NBS0wsS0FBSyxTQUFDLGVBQWU7K0JBT3JCLEtBQUssU0FBQyxjQUFjO3dDQVFwQixNQUFNLFNBQUMsZUFBZTtzQ0FFdEIsTUFBTSxTQUFDLGFBQWE7cUNBQ3BCLE1BQU0sU0FBQyxZQUFZO29DQUNuQixNQUFNLFNBQUMsV0FBVzt3Q0FDbEIsTUFBTSxTQUFDLGVBQWU7OzRCQXBLM0I7RUE0SHVDLGlCQUFpQjtTQUEzQyxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0llLG1EQUF1QjtJQUNoRSxpQ0FBWSxPQUFtQixFQUFFLGVBQWdDLEVBQUUsTUFBcUIsRUFBRSxVQUE2QixFQUNuSCxHQUFxQjtlQUVyQixrQkFBTSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDO0tBQzNEOztnQkFOSixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUU7Ozs7Z0JBeFBBLFVBQVU7Z0JBS2xELGVBQWU7Z0JBRGYsY0FBYztnQkFzUG9GLGlCQUFpQjtnQkEzUG5ILGlCQUFpQjs7a0NBSnpCO0VBOFA2Qyx1QkFBdUI7U0FBdkQsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTggU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxyXG5cclxuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1BcnJheX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtBYnN0cmFjdENvbXBvbmVudCwgQWJzdHJhY3RIYW5kbGVDb21wb25lbnR9IGZyb20gJy4vYWJzdHJhY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi9kbmQuY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlfSBmcm9tICcuL2RuZC5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkbmQtc29ydGFibGUtY29udGFpbmVyXScgfSlcclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlQ29udGFpbmVyIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dChcImRyYWdFbmFibGVkXCIpIHNldCBkcmFnZ2FibGUodmFsdWU6Ym9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSAhIXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NvcnRhYmxlRGF0YTogQXJyYXk8YW55PnxGb3JtQXJyYXkgPSBbXTtcclxuICAgIHByaXZhdGUgc29ydGFibGVIYW5kbGVyOiBTb3J0YWJsZUZvcm1BcnJheUhhbmRsZXJ8U29ydGFibGVBcnJheUhhbmRsZXI7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHNvcnRhYmxlRGF0YShzb3J0YWJsZURhdGE6IEFycmF5PGFueT58Rm9ybUFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhID0gc29ydGFibGVEYXRhO1xyXG4gICAgICAgIGlmIChzb3J0YWJsZURhdGEgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3J0YWJsZUhhbmRsZXIgPSBuZXcgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zb3J0YWJsZUhhbmRsZXIgPSBuZXcgU29ydGFibGVBcnJheUhhbmRsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLmRyb3BFbmFibGVkID0gISF0aGlzLl9zb3J0YWJsZURhdGE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2xsZWN0aW9uIGlzIGNoYW5nZWQsIGRyb3AgZW5hYmxlZDogXCIgKyB0aGlzLmRyb3BFbmFibGVkKTtcclxuICAgIH1cclxuICAgIGdldCBzb3J0YWJsZURhdGEoKTogQXJyYXk8YW55PnxGb3JtQXJyYXkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0YWJsZURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KFwiZHJvcFpvbmVzXCIpIHNldCBkcm9wem9uZXModmFsdWU6QXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzpEcmFnRHJvcENvbmZpZywgY2RyOkNoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgX3NvcnRhYmxlRGF0YVNlcnZpY2U6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xyXG4gICAgICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBfb25EcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW06YW55ID0gdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5nZXRJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCk7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGRvZXMgZWxlbWVudCBleGlzdCBpbiBzb3J0YWJsZURhdGEgb2YgdGhpcyBDb250YWluZXJcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8vIExldCdzIGFkZCBpdFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbnRhaW5lci5fb25EcmFnRW50ZXJDYWxsYmFjay4gZHJhZyBub2RlIFsnICsgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleC50b1N0cmluZygpICsgJ10gb3ZlciBwYXJlbnQgbm9kZScpO1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGl0ZW0gZnJvbSBwcmV2aW91c2UgbGlzdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5yZW1vdmVJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5fc29ydGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGl0ZW0gdG8gbmV3IGxpc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0SXRlbUF0KGl0ZW0sIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBSZWZyZXNoIGNoYW5nZXMgaW4gcHJvcGVydGllcyBvZiBjb250YWluZXIgY29tcG9uZW50XHJcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtQXQoaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydGFibGVIYW5kbGVyLmdldEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGEsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBpbmRleE9mKGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydGFibGVIYW5kbGVyLmluZGV4T2YodGhpcy5fc29ydGFibGVEYXRhLCBpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVJdGVtQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc29ydGFibGVIYW5kbGVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGEsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRJdGVtQXQoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zb3J0YWJsZUhhbmRsZXIuaW5zZXJ0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YSwgaXRlbSwgaW5kZXgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTb3J0YWJsZUFycmF5SGFuZGxlciB7XHJcbiAgICBnZXRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBzb3J0YWJsZURhdGFbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGluZGV4T2Yoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5pbmRleE9mKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHNvcnRhYmxlRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydEl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgc29ydGFibGVEYXRhLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFNvcnRhYmxlRm9ybUFycmF5SGFuZGxlciB7XHJcbiAgICBnZXRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBzb3J0YWJsZURhdGEuYXQoaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluZGV4T2Yoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5jb250cm9scy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHNvcnRhYmxlRGF0YS5yZW1vdmVBdChpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzb3J0YWJsZURhdGEuaW5zZXJ0KGluZGV4LCBpdGVtKTtcclxuICAgIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZV0nIH0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoJ3NvcnRhYmxlSW5kZXgnKSBpbmRleDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dChcImRyYWdFbmFibGVkXCIpIHNldCBkcmFnZ2FibGUodmFsdWU6Ym9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSAhIXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dChcImRyb3BFbmFibGVkXCIpIHNldCBkcm9wcGFibGUodmFsdWU6Ym9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZHJvcEVuYWJsZWQgPSAhIXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRhdGEgdGhhdCBoYXMgdG8gYmUgZHJhZ2dlZC4gSXQgY2FuIGJlIGFueSBKUyBvYmplY3RcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgZHJhZ0RhdGE6IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYWcgYWxsb3dlZCBlZmZlY3RcclxuICAgICAqL1xyXG4gICAgQElucHV0KFwiZWZmZWN0QWxsb3dlZFwiKSBzZXQgZWZmZWN0YWxsb3dlZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIGVmZmVjdCBjdXJzb3JcclxuICAgICAqL1xyXG4gICAgQElucHV0KFwiZWZmZWN0Q3Vyc29yXCIpIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0Q3Vyc29yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgZHJhZyBhY3Rpb24gZW5kcyB3aXRoIGEgdmFsaWQgZHJvcCBhY3Rpb24uXHJcbiAgICAgKiBJdCBpcyBhY3RpdmF0ZWQgYWZ0ZXIgdGhlIG9uLWRyb3Atc3VjY2VzcyBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KFwib25EcmFnU3VjY2Vzc1wiKSBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gICAgQE91dHB1dChcIm9uRHJhZ1N0YXJ0XCIpIG9uRHJhZ1N0YXJ0Q2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KFwib25EcmFnT3ZlclwiKSBvbkRyYWdPdmVyQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KFwib25EcmFnRW5kXCIpIG9uRHJhZ0VuZENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dChcIm9uRHJvcFN1Y2Nlc3NcIikgb25Ecm9wU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6RHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgICAgcHJpdmF0ZSBfc29ydGFibGVDb250YWluZXI6IFNvcnRhYmxlQ29udGFpbmVyLFxyXG4gICAgICAgIHByaXZhdGUgX3NvcnRhYmxlRGF0YVNlcnZpY2U6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlLFxyXG4gICAgICAgIGNkcjpDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xyXG4gICAgICAgIHRoaXMuZHJvcFpvbmVzID0gdGhpcy5fc29ydGFibGVDb250YWluZXIuZHJvcFpvbmVzO1xyXG4gICAgICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZHJvcEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkRyYWdTdGFydENhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdfb25EcmFnU3RhcnRDYWxsYmFjay4gZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuX2VsZW0pO1xyXG4gICAgICAgIC8vIEFkZCBkcmFnRGF0YVxyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IHRoaXMuZHJhZ0RhdGE7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IHRoaXMub25EcmFnU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5vbkRyYWdTdGFydENhbGxiYWNrLmVtaXQodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25EcmFnT3ZlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCAmJiB0aGlzLl9lbGVtICE9PSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmVsZW0pIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdPdmVyQ2FsbGJhY2suIGRyYWdnaW5nIGVsZW0gd2l0aCBpbmRleCAnICsgdGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lcjtcclxuICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuX2VsZW0pO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ092ZXJDYWxsYmFjay5lbWl0KHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vbkRyYWdFbmRDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ0VuZENhbGxiYWNrLiBlbmQgZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKG51bGwpO1xyXG4gICAgICAgIC8vIEFkZCBkcmFnR2F0YVxyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5vbkRyYWdFbmRDYWxsYmFjay5lbWl0KHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uRHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuX2VsZW0pO1xyXG4gICAgICAgICAgICBpZiAoKHRoaXMuaW5kZXggIT09IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5zb3J0YWJsZURhdGEgIT09IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb21wb25lbnQuX29uRHJhZ0VudGVyQ2FsbGJhY2suIGRyYWcgbm9kZSBbJyArIHRoaXMuaW5kZXggKyAnXSBvdmVyIG5vZGUgWycgKyB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIC8vIEdldCBpdGVtXHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTphbnkgPSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmdldEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gcHJldmlvdXNlIGxpc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIucmVtb3ZlSXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGl0ZW0gdG8gbmV3IGxpc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmluc2VydEl0ZW1BdChpdGVtLCB0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gdGhpcy5fc29ydGFibGVDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gdGhpcy5pbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vbkRyb3BDYWxsYmFjayAoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbkRyb3BDYWxsYmFjay5vbkRyb3BTdWNjZXNzQ2FsbGJhY2suZHJhZ0RhdGEnLCB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJvcFN1Y2Nlc3NDYWxsYmFjay5lbWl0KHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25Ecm9wQ2FsbGJhY2sub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmRyYWdEYXRhJywgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2suZW1pdCh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFJlZnJlc2ggY2hhbmdlcyBpbiBwcm9wZXJ0aWVzIG9mIGNvbnRhaW5lciBjb21wb25lbnRcclxuICAgICAgICAgICAgdGhpcy5fc29ydGFibGVDb250YWluZXIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZS1oYW5kbGVdJyB9KVxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVIYW5kbGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdEhhbmRsZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOkRyYWdEcm9wQ29uZmlnLCBfQ29tcG9uZW50OiBTb3J0YWJsZUNvbXBvbmVudCxcclxuICAgICAgICBjZHI6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIF9Db21wb25lbnQsIGNkcik7XHJcbiAgICB9XHJcbn1cclxuIl19