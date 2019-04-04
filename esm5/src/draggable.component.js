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
import { AbstractComponent, AbstractHandleComponent } from './abstract.component';
import { DragDropConfig } from './dnd.config';
import { DragDropService } from './dnd.service';
var DraggableComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DraggableComponent, _super);
    function DraggableComponent(elemRef, dragDropService, config, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        /**
         * Callback function called when the drag actions happened.
         */
        _this.onDragStart = new EventEmitter();
        _this.onDragEnd = new EventEmitter();
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new EventEmitter();
        _this._defaultCursor = _this._elem.style.cursor;
        _this.dragEnabled = true;
        return _this;
    }
    Object.defineProperty(DraggableComponent.prototype, "draggable", {
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
    Object.defineProperty(DraggableComponent.prototype, "dropzones", {
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
    Object.defineProperty(DraggableComponent.prototype, "effectallowed", {
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
    Object.defineProperty(DraggableComponent.prototype, "effectcursor", {
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
    DraggableComponent.prototype._onDragStartCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        this._elem.classList.add(this._config.onDragStartClass);
        //
        this.onDragStart.emit({ dragData: this.dragData, mouseEvent: event });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableComponent.prototype._onDragEndCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        this._elem.classList.remove(this._config.onDragStartClass);
        //
        this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
    };
    DraggableComponent.decorators = [
        { type: Directive, args: [{ selector: '[dnd-draggable]' },] }
    ];
    /** @nocollapse */
    DraggableComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: ChangeDetectorRef }
    ]; };
    DraggableComponent.propDecorators = {
        draggable: [{ type: Input, args: ["dragEnabled",] }],
        onDragStart: [{ type: Output }],
        onDragEnd: [{ type: Output }],
        dragData: [{ type: Input }],
        onDragSuccessCallback: [{ type: Output, args: ["onDragSuccess",] }],
        dropzones: [{ type: Input, args: ["dropZones",] }],
        effectallowed: [{ type: Input, args: ["effectAllowed",] }],
        effectcursor: [{ type: Input, args: ["effectCursor",] }],
        dragImage: [{ type: Input }],
        cloneItem: [{ type: Input }]
    };
    return DraggableComponent;
}(AbstractComponent));
export { DraggableComponent };
if (false) {
    /**
     * Callback function called when the drag actions happened.
     * @type {?}
     */
    DraggableComponent.prototype.onDragStart;
    /** @type {?} */
    DraggableComponent.prototype.onDragEnd;
    /**
     * The data that has to be dragged. It can be any JS object
     * @type {?}
     */
    DraggableComponent.prototype.dragData;
    /**
     * Callback function called when the drag action ends with a valid drop action.
     * It is activated after the on-drop-success callback
     * @type {?}
     */
    DraggableComponent.prototype.onDragSuccessCallback;
    /**
     * Here is the property dragImage you can use:
     * - The string value as url to the image
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="/images/simpler.png">
     * ...
     * - The DragImage value with Image and offset by x and y:
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
    DraggableComponent.prototype.dragImage;
    /** @type {?} */
    DraggableComponent.prototype.cloneItem;
}
var DraggableHandleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DraggableHandleComponent, _super);
    function DraggableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    DraggableHandleComponent.decorators = [
        { type: Directive, args: [{ selector: '[dnd-draggable-handle]' },] }
    ];
    /** @nocollapse */
    DraggableHandleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: DraggableComponent },
        { type: ChangeDetectorRef }
    ]; };
    return DraggableHandleComponent;
}(AbstractHandleComponent));
export { DraggableHandleComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdGluZXNlZWQvbmcyLWRuZC8iLCJzb3VyY2VzIjpbInNyYy9kcmFnZ2FibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hGLE9BQU8sRUFBQyxjQUFjLEVBQVksTUFBTSxjQUFjLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBZSxNQUFNLGVBQWUsQ0FBQzs7SUFHcEIsOENBQWlCO0lBcUVyRCw0QkFBWSxPQUFtQixFQUFFLGVBQWdDLEVBQUUsTUFBcUIsRUFDcEYsR0FBcUI7UUFEekIsWUFHSSxrQkFBTSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsU0FHL0M7Ozs7NEJBbEVtRCxJQUFJLFlBQVksRUFBZ0I7MEJBQ2xDLElBQUksWUFBWSxFQUFnQjs7Ozs7c0NBV2QsSUFBSSxZQUFZLEVBQU87UUFvRHZGLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzlDLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDOztLQUMzQjtJQXpFRCxzQkFBMEIseUNBQVM7Ozs7O1FBQW5DLFVBQW9DLEtBQWE7WUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQzlCOzs7T0FBQTtJQW1CRCxzQkFBd0IseUNBQVM7Ozs7O1FBQWpDLFVBQWtDLEtBQW1CO1lBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQzFCOzs7T0FBQTtJQUtELHNCQUE0Qiw2Q0FBYTtRQUh6Qzs7V0FFRzs7Ozs7O1FBQ0gsVUFBMEMsS0FBYTtZQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM5Qjs7O09BQUE7SUFLRCxzQkFBMkIsNENBQVk7UUFIdkM7O1dBRUc7Ozs7OztRQUNILFVBQXdDLEtBQWE7WUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDN0I7OztPQUFBOzs7OztJQXNDRCxpREFBb0I7Ozs7SUFBcEIsVUFBcUIsS0FBaUI7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDekUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7UUFFeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztLQUN2RTs7Ozs7SUFFRCwrQ0FBa0I7Ozs7SUFBbEIsVUFBbUIsS0FBaUI7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztRQUUzRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0tBQ3JFOztnQkE5RkosU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFOzs7O2dCQU5NLFVBQVU7Z0JBSWxELGVBQWU7Z0JBRGYsY0FBYztnQkFKZCxpQkFBaUI7Ozs0QkFVcEIsS0FBSyxTQUFDLGFBQWE7OEJBT25CLE1BQU07NEJBQ04sTUFBTTsyQkFLTixLQUFLO3dDQU1MLE1BQU0sU0FBQyxlQUFlOzRCQUV0QixLQUFLLFNBQUMsV0FBVztnQ0FPakIsS0FBSyxTQUFDLGVBQWU7K0JBT3JCLEtBQUssU0FBQyxjQUFjOzRCQTJCcEIsS0FBSzs0QkFHTCxLQUFLOzs2QkEvRVY7RUFZd0MsaUJBQWlCO1NBQTVDLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtHZSxvREFBdUI7SUFDakUsa0NBQVksT0FBbUIsRUFBRSxlQUFnQyxFQUFFLE1BQXFCLEVBQUUsVUFBOEIsRUFDcEgsR0FBcUI7ZUFFckIsa0JBQU0sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQztLQUMzRDs7Z0JBTkosU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFOzs7O2dCQXhHRCxVQUFVO2dCQUlsRCxlQUFlO2dCQURmLGNBQWM7Z0JBdUdvRixrQkFBa0I7Z0JBM0dwSCxpQkFBaUI7O21DQUp6QjtFQThHOEMsdUJBQXVCO1NBQXhELHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE4IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcclxuXHJcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3RDb21wb25lbnQsIEFic3RyYWN0SGFuZGxlQ29tcG9uZW50fSBmcm9tICcuL2Fic3RyYWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWcsIERyYWdJbWFnZX0gZnJvbSAnLi9kbmQuY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wRGF0YX0gZnJvbSAnLi9kbmQuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZG5kLWRyYWdnYWJsZV0nIH0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KFwiZHJhZ0VuYWJsZWRcIikgc2V0IGRyYWdnYWJsZSh2YWx1ZTpib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgZHJhZyBhY3Rpb25zIGhhcHBlbmVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgICBAT3V0cHV0KCkgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRhdGEgdGhhdCBoYXMgdG8gYmUgZHJhZ2dlZC4gSXQgY2FuIGJlIGFueSBKUyBvYmplY3RcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgZHJhZ0RhdGE6IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBkcmFnIGFjdGlvbiBlbmRzIHdpdGggYSB2YWxpZCBkcm9wIGFjdGlvbi5cclxuICAgICAqIEl0IGlzIGFjdGl2YXRlZCBhZnRlciB0aGUgb24tZHJvcC1zdWNjZXNzIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoXCJvbkRyYWdTdWNjZXNzXCIpIG9uRHJhZ1N1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBASW5wdXQoXCJkcm9wWm9uZXNcIikgc2V0IGRyb3B6b25lcyh2YWx1ZTpBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5kcm9wWm9uZXMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYWcgYWxsb3dlZCBlZmZlY3RcclxuICAgICAqL1xyXG4gICAgQElucHV0KFwiZWZmZWN0QWxsb3dlZFwiKSBzZXQgZWZmZWN0YWxsb3dlZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIGVmZmVjdCBjdXJzb3JcclxuICAgICAqL1xyXG4gICAgQElucHV0KFwiZWZmZWN0Q3Vyc29yXCIpIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0Q3Vyc29yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZXJlIGlzIHRoZSBwcm9wZXJ0eSBkcmFnSW1hZ2UgeW91IGNhbiB1c2U6XHJcbiAgICAgKiAtIFRoZSBzdHJpbmcgdmFsdWUgYXMgdXJsIHRvIHRoZSBpbWFnZVxyXG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXHJcbiAgICAgKiAgICAgICAgZG5kLWRyYWdnYWJsZSBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXHJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCIvaW1hZ2VzL3NpbXBsZXIucG5nXCI+XHJcbiAgICAgKiAuLi5cclxuICAgICAqIC0gVGhlIERyYWdJbWFnZSB2YWx1ZSB3aXRoIEltYWdlIGFuZCBvZmZzZXQgYnkgeCBhbmQgeTpcclxuICAgICAqICAgbGV0IG15RHJhZ0ltYWdlOiBEcmFnSW1hZ2UgPSBuZXcgRHJhZ0ltYWdlKFwiL2ltYWdlcy9zaW1wbGVyMS5wbmdcIiwgMCwgMCk7XHJcbiAgICAgKiAuLi5cclxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxyXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxyXG4gICAgICogICAgICAgIFtkcmFnSW1hZ2VdPVwibXlEcmFnSW1hZ2VcIj5cclxuICAgICAqIC4uLlxyXG4gICAgICogLSBUaGUgY3VzdG9tIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgdmFsdWUgb2YgZHJhZ0ltYWdlIHByb2dyYW1tYXRpY2FsbHk6XHJcbiAgICAgKiAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcclxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcclxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cImdldERyYWdJbWFnZShzb21lRGF0YSlcIj5cclxuICAgICAqIC4uLlxyXG4gICAgICogICBnZXREcmFnSW1hZ2UodmFsdWU6YW55KTogc3RyaW5nIHtcclxuICAgICAqICAgICByZXR1cm4gdmFsdWUgPyBcIi9pbWFnZXMvc2ltcGxlcjEucG5nXCIgOiBcIi9pbWFnZXMvc2ltcGxlcjIucG5nXCJcclxuICAgICAqICAgfVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBkcmFnSW1hZ2U6IHN0cmluZyB8IERyYWdJbWFnZSB8IEZ1bmN0aW9uO1xyXG5cclxuICAgIFxyXG4gICAgQElucHV0KCkgY2xvbmVJdGVtOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6RHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgICAgY2RyOkNoYW5nZURldGVjdG9yUmVmKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRDdXJzb3IgPSB0aGlzLl9lbGVtLnN0eWxlLmN1cnNvcjtcclxuICAgICAgICB0aGlzLmRyYWdFbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfb25EcmFnU3RhcnRDYWxsYmFjayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IHRoaXMuZHJhZ0RhdGE7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IHRoaXMub25EcmFnU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcub25EcmFnU3RhcnRDbGFzcyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0LmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkRyYWdFbmRDYWxsYmFjayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcub25EcmFnU3RhcnRDbGFzcyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm9uRHJhZ0VuZC5lbWl0KHtkcmFnRGF0YTogdGhpcy5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkbmQtZHJhZ2dhYmxlLWhhbmRsZV0nIH0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVIYW5kbGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdEhhbmRsZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOkRyYWdEcm9wQ29uZmlnLCBfQ29tcG9uZW50OiBEcmFnZ2FibGVDb21wb25lbnQsXHJcbiAgICAgICAgY2RyOkNoYW5nZURldGVjdG9yUmVmKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBfQ29tcG9uZW50LCBjZHIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==