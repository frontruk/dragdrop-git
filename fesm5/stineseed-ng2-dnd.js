import { Injectable, ChangeDetectorRef, ElementRef, Directive, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { __extends } from 'tslib';
import { FormArray } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Check and return true if an object is type of string
 * @param {?} obj
 * @return {?}
 */
function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object not undefined or null
 * @param {?} obj
 * @return {?}
 */
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
/**
 * Check and return true if an object is type of Function
 * @param {?} obj
 * @return {?}
 */
function isFunction(obj) {
    return typeof obj === "function";
}
/**
 * Create Image element with specified url string
 * @param {?} src
 * @return {?}
 */
function createImage(src) {
    /** @type {?} */
    var img = new HTMLImageElement();
    img.src = src;
    return img;
}
/**
 * Call the function
 * @param {?} fun
 * @return {?}
 */
function callFun(fun) {
    return fun();
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DataTransferEffect = /** @class */ (function () {
    function DataTransferEffect(name) {
        this.name = name;
    }
    DataTransferEffect.COPY = new DataTransferEffect('copy');
    DataTransferEffect.LINK = new DataTransferEffect('link');
    DataTransferEffect.MOVE = new DataTransferEffect('move');
    DataTransferEffect.NONE = new DataTransferEffect('none');
    return DataTransferEffect;
}());
var DragImage = /** @class */ (function () {
    function DragImage(imageElement, x_offset, y_offset) {
        if (x_offset === void 0) { x_offset = 0; }
        if (y_offset === void 0) { y_offset = 0; }
        this.imageElement = imageElement;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        if (isString(this.imageElement)) {
            /** @type {?} */
            var imgScr = /** @type {?} */ (this.imageElement);
            this.imageElement = new HTMLImageElement();
            (/** @type {?} */ (this.imageElement)).src = imgScr;
        }
    }
    return DragImage;
}());
var DragDropConfig = /** @class */ (function () {
    function DragDropConfig() {
        this.onDragStartClass = "dnd-drag-start";
        this.onDragEnterClass = "dnd-drag-enter";
        this.onDragOverClass = "dnd-drag-over";
        this.onSortableDragClass = "dnd-sortable-drag";
        this.dragEffect = DataTransferEffect.MOVE;
        this.dropEffect = DataTransferEffect.MOVE;
        this.dragCursor = "move";
        this.defaultCursor = "pointer";
    }
    return DragDropConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DragDropData = /** @class */ (function () {
    function DragDropData() {
    }
    return DragDropData;
}());
/**
 * @return {?}
 */
function dragDropServiceFactory() {
    return new DragDropService();
}
var DragDropService = /** @class */ (function () {
    function DragDropService() {
        this.allowedDropZones = [];
    }
    DragDropService.decorators = [
        { type: Injectable }
    ];
    return DragDropService;
}());
/**
 * @param {?} config
 * @return {?}
 */
function dragDropSortableServiceFactory(config) {
    return new DragDropSortableService(config);
}
var DragDropSortableService = /** @class */ (function () {
    function DragDropSortableService(_config) {
        this._config = _config;
    }
    Object.defineProperty(DragDropSortableService.prototype, "elem", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} elem
     * @return {?}
     */
    DragDropSortableService.prototype.markSortable = /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        if (isPresent(this._elem)) {
            this._elem.classList.remove(this._config.onSortableDragClass);
        }
        if (isPresent(elem)) {
            this._elem = elem;
            this._elem.classList.add(this._config.onSortableDragClass);
        }
    };
    DragDropSortableService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DragDropSortableService.ctorParameters = function () { return [
        { type: DragDropConfig }
    ]; };
    return DragDropSortableService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DraggableComponent = /** @class */ (function (_super) {
    __extends(DraggableComponent, _super);
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
var DraggableHandleComponent = /** @class */ (function (_super) {
    __extends(DraggableHandleComponent, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DroppableComponent = /** @class */ (function (_super) {
    __extends(DroppableComponent, _super);
    function DroppableComponent(elemRef, dragDropService, config, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        /**
         * Callback function called when the drop action completes correctly.
         * It is activated before the on-drag-success callback.
         */
        _this.onDropSuccess = new EventEmitter();
        _this.onDragEnter = new EventEmitter();
        _this.onDragOver = new EventEmitter();
        _this.onDragLeave = new EventEmitter();
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(DroppableComponent.prototype, "droppable", {
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
    Object.defineProperty(DroppableComponent.prototype, "allowdrop", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.allowDrop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "dropzones", {
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
    Object.defineProperty(DroppableComponent.prototype, "effectallowed", {
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
    Object.defineProperty(DroppableComponent.prototype, "effectcursor", {
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
    DroppableComponent.prototype._onDragEnterCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragEnterClass);
            this.onDragEnter.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DroppableComponent.prototype._onDragOverCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragOverClass);
            this.onDragOver.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DroppableComponent.prototype._onDragLeaveCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
            this.onDragLeave.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DroppableComponent.prototype._onDropCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var dataTransfer = (/** @type {?} */ (event)).dataTransfer;
        if (this._dragDropService.isDragged || (dataTransfer && dataTransfer.files)) {
            this.onDropSuccess.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            if (this._dragDropService.onDragSuccessCallback) {
                this._dragDropService.onDragSuccessCallback.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            }
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
        }
    };
    DroppableComponent.decorators = [
        { type: Directive, args: [{ selector: '[dnd-droppable]' },] }
    ];
    /** @nocollapse */
    DroppableComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: ChangeDetectorRef }
    ]; };
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
    return DroppableComponent;
}(AbstractComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SortableContainer = /** @class */ (function (_super) {
    __extends(SortableContainer, _super);
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
    __extends(SortableComponent, _super);
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
var SortableHandleComponent = /** @class */ (function (_super) {
    __extends(SortableHandleComponent, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var providers = [
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { providers, DndModule, AbstractComponent, AbstractHandleComponent, DataTransferEffect, DragImage, DragDropConfig, dragDropServiceFactory, dragDropSortableServiceFactory, DragDropData, DragDropService, DragDropSortableService, DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpbmVzZWVkLW5nMi1kbmQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BzdGluZXNlZWQvbmcyLWRuZC9zcmMvZG5kLnV0aWxzLnRzIiwibmc6Ly9Ac3RpbmVzZWVkL25nMi1kbmQvc3JjL2RuZC5jb25maWcudHMiLCJuZzovL0BzdGluZXNlZWQvbmcyLWRuZC9zcmMvZG5kLnNlcnZpY2UudHMiLCJuZzovL0BzdGluZXNlZWQvbmcyLWRuZC9zcmMvYWJzdHJhY3QuY29tcG9uZW50LnRzIiwibmc6Ly9Ac3RpbmVzZWVkL25nMi1kbmQvc3JjL2RyYWdnYWJsZS5jb21wb25lbnQudHMiLCJuZzovL0BzdGluZXNlZWQvbmcyLWRuZC9zcmMvZHJvcHBhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHN0aW5lc2VlZC9uZzItZG5kL3NyYy9zb3J0YWJsZS5jb21wb25lbnQudHMiLCJuZzovL0BzdGluZXNlZWQvbmcyLWRuZC9zcmMvZG5kLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxOCBTZXJnZXkgQWtvcGtva2h5YW50c1xyXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXHJcblxyXG4vKipcclxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBpcyB0eXBlIG9mIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKG9iajphbnkpIHtcclxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBub3QgdW5kZWZpbmVkIG9yIG51bGxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ByZXNlbnQob2JqOiBhbnkpIHtcclxuICAgIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBhbmQgcmV0dXJuIHRydWUgaWYgYW4gb2JqZWN0IGlzIHR5cGUgb2YgRnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iajogYW55KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIEltYWdlIGVsZW1lbnQgd2l0aCBzcGVjaWZpZWQgdXJsIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlKHNyYzogc3RyaW5nKSB7XHJcbiAgICBsZXQgaW1nOkhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSFRNTEltYWdlRWxlbWVudCgpO1xyXG4gICAgaW1nLnNyYyA9IHNyYztcclxuICAgIHJldHVybiBpbWc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxsIHRoZSBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxGdW4oZnVuOiBGdW5jdGlvbikge1xyXG4gICAgcmV0dXJuIGZ1bigpO1xyXG59IiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTggU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxyXG5cclxuaW1wb3J0IHtpc1N0cmluZ30gZnJvbSAnLi9kbmQudXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFUcmFuc2ZlckVmZmVjdCB7XHJcblxyXG4gICAgc3RhdGljIENPUFkgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdjb3B5Jyk7XHJcbiAgICBzdGF0aWMgTElOSyA9IG5ldyBEYXRhVHJhbnNmZXJFZmZlY3QoJ2xpbmsnKTtcclxuICAgIHN0YXRpYyBNT1ZFID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnbW92ZScpO1xyXG4gICAgc3RhdGljIE5PTkUgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdub25lJyk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnSW1hZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGltYWdlRWxlbWVudDogYW55LFxyXG4gICAgICAgIHB1YmxpYyB4X29mZnNldDogbnVtYmVyID0gMCxcclxuICAgICAgICBwdWJsaWMgeV9vZmZzZXQ6IG51bWJlciA9IDApIHtcclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHRoaXMuaW1hZ2VFbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHJlYWwgaW1hZ2UgZnJvbSBzdHJpbmcgc291cmNlXHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nU2NyOiBzdHJpbmcgPSA8c3RyaW5nPnRoaXMuaW1hZ2VFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZUVsZW1lbnQgPSBuZXcgSFRNTEltYWdlRWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgKDxIVE1MSW1hZ2VFbGVtZW50PnRoaXMuaW1hZ2VFbGVtZW50KS5zcmMgPSBpbWdTY3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcENvbmZpZyB7XHJcbiAgICBwdWJsaWMgb25EcmFnU3RhcnRDbGFzczogc3RyaW5nID0gXCJkbmQtZHJhZy1zdGFydFwiO1xyXG4gICAgcHVibGljIG9uRHJhZ0VudGVyQ2xhc3M6IHN0cmluZyA9IFwiZG5kLWRyYWctZW50ZXJcIjtcclxuICAgIHB1YmxpYyBvbkRyYWdPdmVyQ2xhc3M6IHN0cmluZyA9IFwiZG5kLWRyYWctb3ZlclwiO1xyXG4gICAgcHVibGljIG9uU29ydGFibGVEcmFnQ2xhc3M6IHN0cmluZyA9IFwiZG5kLXNvcnRhYmxlLWRyYWdcIjtcclxuXHJcbiAgICBwdWJsaWMgZHJhZ0VmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJvcEVmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJhZ0N1cnNvcjogc3RyaW5nID0gXCJtb3ZlXCI7XHJcbiAgICBwdWJsaWMgZHJhZ0ltYWdlOiBEcmFnSW1hZ2U7XHJcbiAgICBwdWJsaWMgZGVmYXVsdEN1cnNvcjogc3RyaW5nID0gXCJwb2ludGVyXCI7XHJcbn0iLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxOCBTZXJnZXkgQWtvcGtva2h5YW50c1xyXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXHJcblxyXG5pbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuL2RuZC5jb25maWcnO1xyXG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnLi9kbmQudXRpbHMnO1xyXG5pbXBvcnQge1NvcnRhYmxlQ29udGFpbmVyfSBmcm9tICcuL3NvcnRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BEYXRhIHtcclxuICAgIGRyYWdEYXRhOiBhbnk7XHJcbiAgICBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSgpOiBEcmFnRHJvcFNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTZXJ2aWNlKCk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wU2VydmljZSB7XHJcbiAgICBhbGxvd2VkRHJvcFpvbmVzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+O1xyXG4gICAgZHJhZ0RhdGE6IGFueTtcclxuICAgIGlzRHJhZ2dlZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeShjb25maWc6IERyYWdEcm9wQ29uZmlnKTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UoY29uZmlnKTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2Uge1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICAgIHNvcnRhYmxlQ29udGFpbmVyOiBTb3J0YWJsZUNvbnRhaW5lcjtcclxuICAgIGlzRHJhZ2dlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIF9lbGVtOiBIVE1MRWxlbWVudDtcclxuICAgIHB1YmxpYyBnZXQgZWxlbSgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29uZmlnOkRyYWdEcm9wQ29uZmlnKSB7fVxyXG5cclxuICAgIG1hcmtTb3J0YWJsZShlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5fZWxlbSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5vblNvcnRhYmxlRHJhZ0NsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzUHJlc2VudChlbGVtKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtID0gZWxlbTtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5vblNvcnRhYmxlRHJhZ0NsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTggU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxyXG5cclxuaW1wb3J0IHtJbmplY3RhYmxlLCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld1JlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEcmFnRHJvcENvbmZpZywgRHJhZ0ltYWdlIH0gZnJvbSAnLi9kbmQuY29uZmlnJztcclxuaW1wb3J0IHsgRHJhZ0Ryb3BTZXJ2aWNlIH0gZnJvbSAnLi9kbmQuc2VydmljZSc7XHJcbmltcG9ydCB7IGlzU3RyaW5nLCBpc0Z1bmN0aW9uLCBpc1ByZXNlbnQsIGNyZWF0ZUltYWdlLCBjYWxsRnVuIH0gZnJvbSAnLi9kbmQudXRpbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RDb21wb25lbnQge1xyXG4gICAgX2VsZW06IEhUTUxFbGVtZW50O1xyXG4gICAgX2RyYWdIYW5kbGU6IEhUTUxFbGVtZW50O1xyXG4gICAgX2RyYWdIZWxwZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgX2RlZmF1bHRDdXJzb3I6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIExhc3QgZWxlbWVudCB0aGF0IHdhcyBtb3VzZWRvd24nZWRcclxuICAgICAqL1xyXG4gICAgX3RhcmdldDogRXZlbnRUYXJnZXQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoZSBvYmplY3QgaXMgZHJhZ2dhYmxlLiBEZWZhdWx0IGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2RyYWdFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzZXQgZHJhZ0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2RyYWdFbmFibGVkID0gISFlbmFibGVkO1xyXG4gICAgICAgIHRoaXMuX2VsZW0uZHJhZ2dhYmxlID0gdGhpcy5fZHJhZ0VuYWJsZWQ7XHJcbiAgICB9XHJcbiAgICBnZXQgZHJhZ0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYWdFbmFibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIGRyb3Agb24gdGhpcyBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGRyb3BFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIERyYWcgZWZmZWN0XHJcbiAgICAgKi9cclxuICAgIGVmZmVjdEFsbG93ZWQ6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogRHJhZyBjdXJzb3JcclxuICAgICAqL1xyXG4gICAgZWZmZWN0Q3Vyc29yOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXN0cmljdCBwbGFjZXMgd2hlcmUgYSBkcmFnZ2FibGUgZWxlbWVudCBjYW4gYmUgZHJvcHBlZC4gRWl0aGVyIG9uZSBvZlxyXG4gICAgICogdGhlc2UgdHdvIG1lY2hhbmlzbXMgY2FuIGJlIHVzZWQ6XHJcbiAgICAgKlxyXG4gICAgICogLSBkcm9wWm9uZXM6IGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCBwZXJtaXRzIHRvIHNwZWNpZnkgdGhlIGRyb3Agem9uZXNcclxuICAgICAqICAgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29tcG9uZW50LiBCeSBkZWZhdWx0LCBpZiB0aGUgZHJvcC16b25lcyBhdHRyaWJ1dGVcclxuICAgICAqICAgaXMgbm90IHNwZWNpZmllZCwgdGhlIGRyb3BwYWJsZSBjb21wb25lbnQgYWNjZXB0cyBkcm9wIG9wZXJhdGlvbnMgYnlcclxuICAgICAqICAgYWxsIHRoZSBkcmFnZ2FibGUgY29tcG9uZW50cyB0aGF0IGRvIG5vdCBzcGVjaWZ5IHRoZSBhbGxvd2VkLWRyb3Atem9uZXNcclxuICAgICAqXHJcbiAgICAgKiAtIGFsbG93RHJvcDogYSBib29sZWFuIGZ1bmN0aW9uIGZvciBkcm9wcGFibGUgY29tcG9uZW50cywgdGhhdCBpcyBjaGVja2VkXHJcbiAgICAgKiAgIHdoZW4gYW4gaXRlbSBpcyBkcmFnZ2VkLiBUaGUgZnVuY3Rpb24gaXMgcGFzc2VkIHRoZSBkcmFnRGF0YSBvZiB0aGlzXHJcbiAgICAgKiAgIGl0ZW0uXHJcbiAgICAgKiAgIC0gaWYgaXQgcmV0dXJucyB0cnVlLCB0aGUgaXRlbSBjYW4gYmUgZHJvcHBlZCBpbiB0aGlzIGNvbXBvbmVudFxyXG4gICAgICogICAtIGlmIGl0IHJldHVybnMgZmFsc2UsIHRoZSBpdGVtIGNhbm5vdCBiZSBkcm9wcGVkIGhlcmVcclxuICAgICAqL1xyXG4gICAgYWxsb3dEcm9wOiAoZHJvcERhdGE6IGFueSkgPT4gYm9vbGVhbjtcclxuICAgIGRyb3Bab25lczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlcmUgaXMgdGhlIHByb3BlcnR5IGRyYWdJbWFnZSB5b3UgY2FuIHVzZTpcclxuICAgICAqIC0gVGhlIHN0cmluZyB2YWx1ZSBhcyB1cmwgdG8gdGhlIGltYWdlXHJcbiAgICAgKiAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcclxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcclxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cIi9pbWFnZXMvc2ltcGxlci5wbmdcIj5cclxuICAgICAqIC4uLlxyXG4gICAgICogLSBUaGUgRHJhZ0ltYWdlIHZhbHVlIHdpdGggSW1hZ2UgYW5kIG9wdGlvbmFsIG9mZnNldCBieSB4IGFuZCB5OlxyXG4gICAgICogICBsZXQgbXlEcmFnSW1hZ2U6IERyYWdJbWFnZSA9IG5ldyBEcmFnSW1hZ2UoXCIvaW1hZ2VzL3NpbXBsZXIxLnBuZ1wiLCAwLCAwKTtcclxuICAgICAqIC4uLlxyXG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXHJcbiAgICAgKiAgICAgICAgZG5kLWRyYWdnYWJsZSBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXHJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCJteURyYWdJbWFnZVwiPlxyXG4gICAgICogLi4uXHJcbiAgICAgKiAtIFRoZSBjdXN0b20gZnVuY3Rpb24gdG8gcmV0dXJuIHRoZSB2YWx1ZSBvZiBkcmFnSW1hZ2UgcHJvZ3JhbW1hdGljYWxseTpcclxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxyXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxyXG4gICAgICogICAgICAgIFtkcmFnSW1hZ2VdPVwiZ2V0RHJhZ0ltYWdlKHNvbWVEYXRhKVwiPlxyXG4gICAgICogLi4uXHJcbiAgICAgKiAgIGdldERyYWdJbWFnZSh2YWx1ZTphbnkpOiBzdHJpbmcge1xyXG4gICAgICogICAgIHJldHVybiB2YWx1ZSA/IFwiL2ltYWdlcy9zaW1wbGVyMS5wbmdcIiA6IFwiL2ltYWdlcy9zaW1wbGVyMi5wbmdcIlxyXG4gICAgICogICB9XHJcbiAgICAgKi9cclxuICAgIGRyYWdJbWFnZTogc3RyaW5nIHwgRHJhZ0ltYWdlIHwgRnVuY3Rpb247XHJcblxyXG4gICAgY2xvbmVJdGVtOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgcHVibGljIF9kcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgcHVibGljIF9jb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICAgIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgICAgICAgLy8gQXNzaWduIGRlZmF1bHQgY3Vyc29yIHVubGVzcyBvdmVycmlkZGVuXHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdEN1cnNvciA9IF9jb25maWcuZGVmYXVsdEN1cnNvcjtcclxuICAgICAgICB0aGlzLl9lbGVtID0gZWxlbVJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2VsZW0uc3R5bGUuY3Vyc29yID0gdGhpcy5fZGVmYXVsdEN1cnNvcjsgIC8vIHNldCBkZWZhdWx0IGN1cnNvciBvbiBvdXIgZWxlbWVudFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gRFJPUCBldmVudHNcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2VsZW0ub25kcmFnZW50ZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ0VudGVyKGV2ZW50KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2VsZW0ub25kcmFnb3ZlciA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ092ZXIoZXZlbnQpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5fY29uZmlnLmRyb3BFZmZlY3QubmFtZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyYWdsZWF2ZSA9IChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fb25EcmFnTGVhdmUoZXZlbnQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyb3AgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJvcChldmVudCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIERyYWcgZXZlbnRzXHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9lbGVtLm9ubW91c2Vkb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2VsZW0ub25kcmFnc3RhcnQgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZHJhZ0hhbmRsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kcmFnSGFuZGxlLmNvbnRhaW5zKDxFbGVtZW50PnRoaXMuX3RhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fb25EcmFnU3RhcnQoZXZlbnQpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJycpO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hhbmdlIGRyYWcgZWZmZWN0XHJcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IHRoaXMuZWZmZWN0QWxsb3dlZCB8fCB0aGlzLl9jb25maWcuZHJhZ0VmZmVjdC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hhbmdlIGRyYWcgaW1hZ2VcclxuICAgICAgICAgICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5kcmFnSW1hZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHRoaXMuZHJhZ0ltYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZShjcmVhdGVJbWFnZSg8c3RyaW5nPnRoaXMuZHJhZ0ltYWdlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuZHJhZ0ltYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZShjYWxsRnVuKDxGdW5jdGlvbj50aGlzLmRyYWdJbWFnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWc6IERyYWdJbWFnZSA9IDxEcmFnSW1hZ2U+dGhpcy5kcmFnSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKGltZy5pbWFnZUVsZW1lbnQsIGltZy54X29mZnNldCwgaW1nLnlfb2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzUHJlc2VudCh0aGlzLl9jb25maWcuZHJhZ0ltYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkcmFnSW1hZ2U6IERyYWdJbWFnZSA9IHRoaXMuX2NvbmZpZy5kcmFnSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlLmltYWdlRWxlbWVudCwgZHJhZ0ltYWdlLnhfb2Zmc2V0LCBkcmFnSW1hZ2UueV9vZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNsb25lSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdIZWxwZXIgPSA8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0hlbHBlci5jbGFzc0xpc3QuYWRkKCdkbmQtZHJhZy1pdGVtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0hlbHBlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnSGVscGVyLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0hlbHBlci5zdHlsZS5sZWZ0ID0gXCItMTAwMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbS5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2RyYWdIZWxwZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKHRoaXMuX2RyYWdIZWxwZXIsIGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoYW5nZSBkcmFnIGN1cnNvclxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnNvcmVsZW0gPSAodGhpcy5fZHJhZ0hhbmRsZSkgPyB0aGlzLl9kcmFnSGFuZGxlIDogdGhpcy5fZWxlbTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZHJhZ0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3JlbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuZWZmZWN0Q3Vyc29yID8gdGhpcy5lZmZlY3RDdXJzb3IgOiB0aGlzLl9jb25maWcuZHJhZ0N1cnNvcjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yZWxlbS5zdHlsZS5jdXJzb3IgPSB0aGlzLl9kZWZhdWx0Q3Vyc29yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyYWdlbmQgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbGVtLnBhcmVudEVsZW1lbnQgJiYgdGhpcy5fZHJhZ0hlbHBlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX2RyYWdIZWxwZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdlbmQnLCBldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdFbmQoZXZlbnQpO1xyXG4gICAgICAgICAgICAvLyBSZXN0b3JlIHN0eWxlIG9mIGRyYWdnZWQgZWxlbWVudFxyXG4gICAgICAgICAgICBsZXQgY3Vyc29yZWxlbSA9ICh0aGlzLl9kcmFnSGFuZGxlKSA/IHRoaXMuX2RyYWdIYW5kbGUgOiB0aGlzLl9lbGVtO1xyXG4gICAgICAgICAgICBjdXJzb3JlbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuX2RlZmF1bHRDdXJzb3I7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RHJhZ0hhbmRsZShlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2RyYWdIYW5kbGUgPSBlbGVtO1xyXG4gICAgfVxyXG4gICAgLyoqKioqKiogQ2hhbmdlIGRldGVjdGlvbiAqKioqKiovXHJcblxyXG4gICAgZGV0ZWN0Q2hhbmdlcyAoKSB7XHJcbiAgICAgICAgLy8gUHJvZ3JhbW1hdGljYWxseSBydW4gY2hhbmdlIGRldGVjdGlvbiB0byBmaXggaXNzdWUgaW4gU2FmYXJpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5fY2RyICYmICEodGhpcy5fY2RyIGFzIFZpZXdSZWYpLmRlc3Ryb3llZCApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyNTApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vKioqKioqIERyb3BwYWJsZSAqKioqKioqLy9cclxuICAgIHByaXZhdGUgX29uRHJhZ0VudGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdlbnRlci5faXNEcm9wQWxsb3dlZCcsIHRoaXMuX2lzRHJvcEFsbG93ZWQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnT3ZlcihldmVudDogRXZlbnQpIHtcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygnb25kcmFnb3Zlci5faXNEcm9wQWxsb3dlZCcsIHRoaXMuX2lzRHJvcEFsbG93ZWQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBpcyBvdmVyIHRoZSBzYW1lIHNvdXJjZSBlbGVtZW50IC0gZG8gbm90aGluZ1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5lY2Vzc2FyeS4gQWxsb3dzIHVzIHRvIGRyb3AuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdPdmVyQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdMZWF2ZShldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25kcmFnbGVhdmUuX2lzRHJvcEFsbG93ZWQnLCB0aGlzLl9pc0Ryb3BBbGxvd2VkKTtcclxuICAgICAgICBpZiAodGhpcy5faXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5fb25EcmFnTGVhdmVDYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJvcChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25kcm9wLl9pc0Ryb3BBbGxvd2VkJywgdGhpcy5faXNEcm9wQWxsb3dlZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIC8vIE5lY2Vzc2FyeS4gQWxsb3dzIHVzIHRvIGRyb3AuXHJcbiAgICAgICAgICAgIHRoaXMuX3ByZXZlbnRBbmRTdG9wKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJvcENhbGxiYWNrKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0Ryb3BBbGxvd2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoKHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgfHwgKGV2ZW50LmRhdGFUcmFuc2ZlciAmJiBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpKSAmJiB0aGlzLmRyb3BFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIC8vIEZpcnN0LCBpZiBgYWxsb3dEcm9wYCBpcyBzZXQsIGNhbGwgaXQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlXHJcbiAgICAgICAgICAgIC8vIGRyYWdnZWQgZWxlbWVudCBjYW4gYmUgZHJvcHBlZCBoZXJlLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd0Ryb3ApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbG93RHJvcCh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIHVzZSBkcm9wWm9uZXMgaWYgdGhleSBhcmUgc2V0LlxyXG4gICAgICAgICAgICBpZiAodGhpcy5kcm9wWm9uZXMubGVuZ3RoID09PSAwICYmIHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHJhZ1pvbmU6IHN0cmluZyA9IHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHJvcFpvbmVzLmluZGV4T2YoZHJhZ1pvbmUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wcmV2ZW50QW5kU3RvcChldmVudDogRXZlbnQpOiBhbnkge1xyXG4gICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyoqKioqKioqKioqIERyYWdnYWJsZSAqKioqKioqKioqLy9cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdTdGFydChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdvbmRyYWdzdGFydC5kcmFnRW5hYmxlZCcsIHRoaXMuX2RyYWdFbmFibGVkKTtcclxuICAgICAgICBpZiAodGhpcy5fZHJhZ0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMgPSB0aGlzLmRyb3Bab25lcztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ29uZHJhZ3N0YXJ0LmFsbG93ZWREcm9wWm9uZXMnLCB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdFbmQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMgPSBbXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25kcmFnZW5kLmFsbG93ZWREcm9wWm9uZXMnLCB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyk7XHJcbiAgICAgICAgdGhpcy5fb25EcmFnRW5kQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vKioqKiBEcm9wIENhbGxiYWNrcyAqKioqLy9cclxuICAgIF9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkgeyB9XHJcbiAgICBfb25EcmFnT3ZlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkgeyB9XHJcbiAgICBfb25EcmFnTGVhdmVDYWxsYmFjayhldmVudDogRXZlbnQpIHsgfVxyXG4gICAgX29uRHJvcENhbGxiYWNrKGV2ZW50OiBFdmVudCkgeyB9XHJcblxyXG4gICAgLy8qKioqIERyYWcgQ2FsbGJhY2tzICoqKiovL1xyXG4gICAgX29uRHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7IH1cclxuICAgIF9vbkRyYWdFbmRDYWxsYmFjayhldmVudDogRXZlbnQpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RIYW5kbGVDb21wb25lbnQge1xyXG4gICAgX2VsZW06IEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgcHVibGljIF9kcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgcHVibGljIF9jb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICAgIHByaXZhdGUgX0NvbXBvbmVudDogQWJzdHJhY3RDb21wb25lbnQsIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICB0aGlzLl9lbGVtID0gZWxlbVJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX0NvbXBvbmVudC5zZXREcmFnSGFuZGxlKHRoaXMuX2VsZW0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE4IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcclxuXHJcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3RDb21wb25lbnQsIEFic3RyYWN0SGFuZGxlQ29tcG9uZW50fSBmcm9tICcuL2Fic3RyYWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWcsIERyYWdJbWFnZX0gZnJvbSAnLi9kbmQuY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wRGF0YX0gZnJvbSAnLi9kbmQuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZG5kLWRyYWdnYWJsZV0nIH0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KFwiZHJhZ0VuYWJsZWRcIikgc2V0IGRyYWdnYWJsZSh2YWx1ZTpib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgZHJhZyBhY3Rpb25zIGhhcHBlbmVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgICBAT3V0cHV0KCkgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRhdGEgdGhhdCBoYXMgdG8gYmUgZHJhZ2dlZC4gSXQgY2FuIGJlIGFueSBKUyBvYmplY3RcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgZHJhZ0RhdGE6IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBkcmFnIGFjdGlvbiBlbmRzIHdpdGggYSB2YWxpZCBkcm9wIGFjdGlvbi5cclxuICAgICAqIEl0IGlzIGFjdGl2YXRlZCBhZnRlciB0aGUgb24tZHJvcC1zdWNjZXNzIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoXCJvbkRyYWdTdWNjZXNzXCIpIG9uRHJhZ1N1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBASW5wdXQoXCJkcm9wWm9uZXNcIikgc2V0IGRyb3B6b25lcyh2YWx1ZTpBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5kcm9wWm9uZXMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYWcgYWxsb3dlZCBlZmZlY3RcclxuICAgICAqL1xyXG4gICAgQElucHV0KFwiZWZmZWN0QWxsb3dlZFwiKSBzZXQgZWZmZWN0YWxsb3dlZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIGVmZmVjdCBjdXJzb3JcclxuICAgICAqL1xyXG4gICAgQElucHV0KFwiZWZmZWN0Q3Vyc29yXCIpIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0Q3Vyc29yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZXJlIGlzIHRoZSBwcm9wZXJ0eSBkcmFnSW1hZ2UgeW91IGNhbiB1c2U6XHJcbiAgICAgKiAtIFRoZSBzdHJpbmcgdmFsdWUgYXMgdXJsIHRvIHRoZSBpbWFnZVxyXG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXHJcbiAgICAgKiAgICAgICAgZG5kLWRyYWdnYWJsZSBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXHJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCIvaW1hZ2VzL3NpbXBsZXIucG5nXCI+XHJcbiAgICAgKiAuLi5cclxuICAgICAqIC0gVGhlIERyYWdJbWFnZSB2YWx1ZSB3aXRoIEltYWdlIGFuZCBvZmZzZXQgYnkgeCBhbmQgeTpcclxuICAgICAqICAgbGV0IG15RHJhZ0ltYWdlOiBEcmFnSW1hZ2UgPSBuZXcgRHJhZ0ltYWdlKFwiL2ltYWdlcy9zaW1wbGVyMS5wbmdcIiwgMCwgMCk7XHJcbiAgICAgKiAuLi5cclxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxyXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxyXG4gICAgICogICAgICAgIFtkcmFnSW1hZ2VdPVwibXlEcmFnSW1hZ2VcIj5cclxuICAgICAqIC4uLlxyXG4gICAgICogLSBUaGUgY3VzdG9tIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgdmFsdWUgb2YgZHJhZ0ltYWdlIHByb2dyYW1tYXRpY2FsbHk6XHJcbiAgICAgKiAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcclxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcclxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cImdldERyYWdJbWFnZShzb21lRGF0YSlcIj5cclxuICAgICAqIC4uLlxyXG4gICAgICogICBnZXREcmFnSW1hZ2UodmFsdWU6YW55KTogc3RyaW5nIHtcclxuICAgICAqICAgICByZXR1cm4gdmFsdWUgPyBcIi9pbWFnZXMvc2ltcGxlcjEucG5nXCIgOiBcIi9pbWFnZXMvc2ltcGxlcjIucG5nXCJcclxuICAgICAqICAgfVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBkcmFnSW1hZ2U6IHN0cmluZyB8IERyYWdJbWFnZSB8IEZ1bmN0aW9uO1xyXG5cclxuICAgIFxyXG4gICAgQElucHV0KCkgY2xvbmVJdGVtOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6RHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgICAgY2RyOkNoYW5nZURldGVjdG9yUmVmKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRDdXJzb3IgPSB0aGlzLl9lbGVtLnN0eWxlLmN1cnNvcjtcclxuICAgICAgICB0aGlzLmRyYWdFbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfb25EcmFnU3RhcnRDYWxsYmFjayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IHRoaXMuZHJhZ0RhdGE7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IHRoaXMub25EcmFnU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcub25EcmFnU3RhcnRDbGFzcyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0LmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkRyYWdFbmRDYWxsYmFjayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcub25EcmFnU3RhcnRDbGFzcyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm9uRHJhZ0VuZC5lbWl0KHtkcmFnRGF0YTogdGhpcy5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkbmQtZHJhZ2dhYmxlLWhhbmRsZV0nIH0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVIYW5kbGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdEhhbmRsZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOkRyYWdEcm9wQ29uZmlnLCBfQ29tcG9uZW50OiBEcmFnZ2FibGVDb21wb25lbnQsXHJcbiAgICAgICAgY2RyOkNoYW5nZURldGVjdG9yUmVmKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBfQ29tcG9uZW50LCBjZHIpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE4IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcclxuXHJcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3RDb21wb25lbnR9IGZyb20gJy4vYWJzdHJhY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi9kbmQuY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wRGF0YX0gZnJvbSAnLi9kbmQuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZG5kLWRyb3BwYWJsZV0nIH0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KFwiZHJvcEVuYWJsZWRcIikgc2V0IGRyb3BwYWJsZSh2YWx1ZTpib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgZHJvcCBhY3Rpb24gY29tcGxldGVzIGNvcnJlY3RseS5cclxuICAgICAqIEl0IGlzIGFjdGl2YXRlZCBiZWZvcmUgdGhlIG9uLWRyYWctc3VjY2VzcyBjYWxsYmFjay5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRHJvcFN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgICBAT3V0cHV0KCkgb25EcmFnRW50ZXI6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgICBAT3V0cHV0KCkgb25EcmFnT3ZlcjogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcclxuICAgIEBPdXRwdXQoKSBvbkRyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcclxuXHJcbiAgICBASW5wdXQoXCJhbGxvd0Ryb3BcIikgc2V0IGFsbG93ZHJvcCh2YWx1ZTogKGRyb3BEYXRhOiBhbnkpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmFsbG93RHJvcCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dChcImRyb3Bab25lc1wiKSBzZXQgZHJvcHpvbmVzKHZhbHVlOkFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLmRyb3Bab25lcyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJhZyBhbGxvd2VkIGVmZmVjdFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoXCJlZmZlY3RBbGxvd2VkXCIpIHNldCBlZmZlY3RhbGxvd2VkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVmZmVjdEFsbG93ZWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYWcgZWZmZWN0IGN1cnNvclxyXG4gICAgICovXHJcbiAgICBASW5wdXQoXCJlZmZlY3RDdXJzb3JcIikgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RDdXJzb3IgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOkRyYWdEcm9wQ29uZmlnLFxyXG4gICAgICAgIGNkcjpDaGFuZ2VEZXRlY3RvclJlZikge1xyXG5cclxuICAgICAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgY2RyKTtcclxuXHJcbiAgICAgICAgdGhpcy5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgX29uRHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLm9uRHJhZ0VudGVyQ2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ0VudGVyLmVtaXQoe2RyYWdEYXRhOiB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vbkRyYWdPdmVyQ2FsbGJhY2sgKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5vbkRyYWdPdmVyQ2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ092ZXIuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9vbkRyYWdMZWF2ZUNhbGxiYWNrIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcub25EcmFnT3ZlckNsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5vbkRyYWdFbnRlckNsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdMZWF2ZS5lbWl0KHtkcmFnRGF0YTogdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgX29uRHJvcENhbGxiYWNrIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGxldCBkYXRhVHJhbnNmZXIgPSAoZXZlbnQgYXMgYW55KS5kYXRhVHJhbnNmZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgfHwgKGRhdGFUcmFuc2ZlciAmJiBkYXRhVHJhbnNmZXIuZmlsZXMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Ecm9wU3VjY2Vzcy5lbWl0KHtkcmFnRGF0YTogdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjay5lbWl0KHtkcmFnRGF0YTogdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcub25EcmFnT3ZlckNsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5vbkRyYWdFbnRlckNsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTggU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxyXG5cclxuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1BcnJheX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtBYnN0cmFjdENvbXBvbmVudCwgQWJzdHJhY3RIYW5kbGVDb21wb25lbnR9IGZyb20gJy4vYWJzdHJhY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi9kbmQuY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlfSBmcm9tICcuL2RuZC5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkbmQtc29ydGFibGUtY29udGFpbmVyXScgfSlcclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlQ29udGFpbmVyIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dChcImRyYWdFbmFibGVkXCIpIHNldCBkcmFnZ2FibGUodmFsdWU6Ym9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSAhIXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NvcnRhYmxlRGF0YTogQXJyYXk8YW55PnxGb3JtQXJyYXkgPSBbXTtcclxuICAgIHByaXZhdGUgc29ydGFibGVIYW5kbGVyOiBTb3J0YWJsZUZvcm1BcnJheUhhbmRsZXJ8U29ydGFibGVBcnJheUhhbmRsZXI7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHNvcnRhYmxlRGF0YShzb3J0YWJsZURhdGE6IEFycmF5PGFueT58Rm9ybUFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhID0gc29ydGFibGVEYXRhO1xyXG4gICAgICAgIGlmIChzb3J0YWJsZURhdGEgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3J0YWJsZUhhbmRsZXIgPSBuZXcgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zb3J0YWJsZUhhbmRsZXIgPSBuZXcgU29ydGFibGVBcnJheUhhbmRsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLmRyb3BFbmFibGVkID0gISF0aGlzLl9zb3J0YWJsZURhdGE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2xsZWN0aW9uIGlzIGNoYW5nZWQsIGRyb3AgZW5hYmxlZDogXCIgKyB0aGlzLmRyb3BFbmFibGVkKTtcclxuICAgIH1cclxuICAgIGdldCBzb3J0YWJsZURhdGEoKTogQXJyYXk8YW55PnxGb3JtQXJyYXkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0YWJsZURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KFwiZHJvcFpvbmVzXCIpIHNldCBkcm9wem9uZXModmFsdWU6QXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzpEcmFnRHJvcENvbmZpZywgY2RyOkNoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgX3NvcnRhYmxlRGF0YVNlcnZpY2U6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xyXG4gICAgICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBfb25EcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW06YW55ID0gdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5nZXRJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCk7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGRvZXMgZWxlbWVudCBleGlzdCBpbiBzb3J0YWJsZURhdGEgb2YgdGhpcyBDb250YWluZXJcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8vIExldCdzIGFkZCBpdFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbnRhaW5lci5fb25EcmFnRW50ZXJDYWxsYmFjay4gZHJhZyBub2RlIFsnICsgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleC50b1N0cmluZygpICsgJ10gb3ZlciBwYXJlbnQgbm9kZScpO1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGl0ZW0gZnJvbSBwcmV2aW91c2UgbGlzdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5yZW1vdmVJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5fc29ydGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGl0ZW0gdG8gbmV3IGxpc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0SXRlbUF0KGl0ZW0sIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBSZWZyZXNoIGNoYW5nZXMgaW4gcHJvcGVydGllcyBvZiBjb250YWluZXIgY29tcG9uZW50XHJcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtQXQoaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydGFibGVIYW5kbGVyLmdldEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGEsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBpbmRleE9mKGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydGFibGVIYW5kbGVyLmluZGV4T2YodGhpcy5fc29ydGFibGVEYXRhLCBpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVJdGVtQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc29ydGFibGVIYW5kbGVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGEsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRJdGVtQXQoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zb3J0YWJsZUhhbmRsZXIuaW5zZXJ0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YSwgaXRlbSwgaW5kZXgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTb3J0YWJsZUFycmF5SGFuZGxlciB7XHJcbiAgICBnZXRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBzb3J0YWJsZURhdGFbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGluZGV4T2Yoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5pbmRleE9mKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHNvcnRhYmxlRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydEl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgc29ydGFibGVEYXRhLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFNvcnRhYmxlRm9ybUFycmF5SGFuZGxlciB7XHJcbiAgICBnZXRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBzb3J0YWJsZURhdGEuYXQoaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluZGV4T2Yoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5jb250cm9scy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHNvcnRhYmxlRGF0YS5yZW1vdmVBdChpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzb3J0YWJsZURhdGEuaW5zZXJ0KGluZGV4LCBpdGVtKTtcclxuICAgIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZV0nIH0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoJ3NvcnRhYmxlSW5kZXgnKSBpbmRleDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dChcImRyYWdFbmFibGVkXCIpIHNldCBkcmFnZ2FibGUodmFsdWU6Ym9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSAhIXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dChcImRyb3BFbmFibGVkXCIpIHNldCBkcm9wcGFibGUodmFsdWU6Ym9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZHJvcEVuYWJsZWQgPSAhIXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRhdGEgdGhhdCBoYXMgdG8gYmUgZHJhZ2dlZC4gSXQgY2FuIGJlIGFueSBKUyBvYmplY3RcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgZHJhZ0RhdGE6IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYWcgYWxsb3dlZCBlZmZlY3RcclxuICAgICAqL1xyXG4gICAgQElucHV0KFwiZWZmZWN0QWxsb3dlZFwiKSBzZXQgZWZmZWN0YWxsb3dlZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIGVmZmVjdCBjdXJzb3JcclxuICAgICAqL1xyXG4gICAgQElucHV0KFwiZWZmZWN0Q3Vyc29yXCIpIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0Q3Vyc29yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgZHJhZyBhY3Rpb24gZW5kcyB3aXRoIGEgdmFsaWQgZHJvcCBhY3Rpb24uXHJcbiAgICAgKiBJdCBpcyBhY3RpdmF0ZWQgYWZ0ZXIgdGhlIG9uLWRyb3Atc3VjY2VzcyBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KFwib25EcmFnU3VjY2Vzc1wiKSBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gICAgQE91dHB1dChcIm9uRHJhZ1N0YXJ0XCIpIG9uRHJhZ1N0YXJ0Q2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KFwib25EcmFnT3ZlclwiKSBvbkRyYWdPdmVyQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KFwib25EcmFnRW5kXCIpIG9uRHJhZ0VuZENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dChcIm9uRHJvcFN1Y2Nlc3NcIikgb25Ecm9wU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6RHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgICAgcHJpdmF0ZSBfc29ydGFibGVDb250YWluZXI6IFNvcnRhYmxlQ29udGFpbmVyLFxyXG4gICAgICAgIHByaXZhdGUgX3NvcnRhYmxlRGF0YVNlcnZpY2U6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlLFxyXG4gICAgICAgIGNkcjpDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xyXG4gICAgICAgIHRoaXMuZHJvcFpvbmVzID0gdGhpcy5fc29ydGFibGVDb250YWluZXIuZHJvcFpvbmVzO1xyXG4gICAgICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZHJvcEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkRyYWdTdGFydENhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdfb25EcmFnU3RhcnRDYWxsYmFjay4gZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuX2VsZW0pO1xyXG4gICAgICAgIC8vIEFkZCBkcmFnRGF0YVxyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IHRoaXMuZHJhZ0RhdGE7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IHRoaXMub25EcmFnU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5vbkRyYWdTdGFydENhbGxiYWNrLmVtaXQodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25EcmFnT3ZlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCAmJiB0aGlzLl9lbGVtICE9PSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmVsZW0pIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdPdmVyQ2FsbGJhY2suIGRyYWdnaW5nIGVsZW0gd2l0aCBpbmRleCAnICsgdGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lcjtcclxuICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuX2VsZW0pO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ092ZXJDYWxsYmFjay5lbWl0KHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vbkRyYWdFbmRDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ0VuZENhbGxiYWNrLiBlbmQgZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKG51bGwpO1xyXG4gICAgICAgIC8vIEFkZCBkcmFnR2F0YVxyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5vbkRyYWdFbmRDYWxsYmFjay5lbWl0KHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uRHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuX2VsZW0pO1xyXG4gICAgICAgICAgICBpZiAoKHRoaXMuaW5kZXggIT09IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5zb3J0YWJsZURhdGEgIT09IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb21wb25lbnQuX29uRHJhZ0VudGVyQ2FsbGJhY2suIGRyYWcgbm9kZSBbJyArIHRoaXMuaW5kZXggKyAnXSBvdmVyIG5vZGUgWycgKyB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIC8vIEdldCBpdGVtXHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTphbnkgPSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmdldEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gcHJldmlvdXNlIGxpc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIucmVtb3ZlSXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGl0ZW0gdG8gbmV3IGxpc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmluc2VydEl0ZW1BdChpdGVtLCB0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gdGhpcy5fc29ydGFibGVDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gdGhpcy5pbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vbkRyb3BDYWxsYmFjayAoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbkRyb3BDYWxsYmFjay5vbkRyb3BTdWNjZXNzQ2FsbGJhY2suZHJhZ0RhdGEnLCB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJvcFN1Y2Nlc3NDYWxsYmFjay5lbWl0KHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25Ecm9wQ2FsbGJhY2sub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmRyYWdEYXRhJywgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2suZW1pdCh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFJlZnJlc2ggY2hhbmdlcyBpbiBwcm9wZXJ0aWVzIG9mIGNvbnRhaW5lciBjb21wb25lbnRcclxuICAgICAgICAgICAgdGhpcy5fc29ydGFibGVDb250YWluZXIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZS1oYW5kbGVdJyB9KVxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVIYW5kbGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdEhhbmRsZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOkRyYWdEcm9wQ29uZmlnLCBfQ29tcG9uZW50OiBTb3J0YWJsZUNvbXBvbmVudCxcclxuICAgICAgICBjZHI6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIF9Db21wb25lbnQsIGNkcik7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTggU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi9kbmQuY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlLCBkcmFnRHJvcFNlcnZpY2VGYWN0b3J5LCBkcmFnRHJvcFNvcnRhYmxlU2VydmljZUZhY3Rvcnl9IGZyb20gJy4vZG5kLnNlcnZpY2UnO1xyXG5pbXBvcnQge0RyYWdnYWJsZUNvbXBvbmVudCwgRHJhZ2dhYmxlSGFuZGxlQ29tcG9uZW50fSBmcm9tICcuL2RyYWdnYWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Ryb3BwYWJsZUNvbXBvbmVudH0gZnJvbSAnLi9kcm9wcGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3J0YWJsZUNvbnRhaW5lciwgU29ydGFibGVDb21wb25lbnQsIFNvcnRhYmxlSGFuZGxlQ29tcG9uZW50fSBmcm9tICcuL3NvcnRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2Fic3RyYWN0LmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZG5kLmNvbmZpZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZG5kLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RyYWdnYWJsZS5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2Ryb3BwYWJsZS5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NvcnRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgbGV0IHByb3ZpZGVycyA9IFtcclxuICAgIERyYWdEcm9wQ29uZmlnLFxyXG4gICAgeyBwcm92aWRlOiBEcmFnRHJvcFNlcnZpY2UsIHVzZUZhY3Rvcnk6IGRyYWdEcm9wU2VydmljZUZhY3RvcnkgfSxcclxuICAgIHsgcHJvdmlkZTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UsIHVzZUZhY3Rvcnk6IGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeSwgZGVwczogW0RyYWdEcm9wQ29uZmlnXSB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0RyYWdnYWJsZUNvbXBvbmVudCwgRHJhZ2dhYmxlSGFuZGxlQ29tcG9uZW50LCBEcm9wcGFibGVDb21wb25lbnQsIFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUNvbXBvbmVudCwgU29ydGFibGVIYW5kbGVDb21wb25lbnRdLFxyXG4gIGV4cG9ydHMgOiBbRHJhZ2dhYmxlQ29tcG9uZW50LCBEcmFnZ2FibGVIYW5kbGVDb21wb25lbnQsIERyb3BwYWJsZUNvbXBvbmVudCwgU29ydGFibGVDb250YWluZXIsIFNvcnRhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUhhbmRsZUNvbXBvbmVudF0sXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRG5kTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogRG5kTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IHByb3ZpZGVyc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBT0Esa0JBQXlCLEdBQU87SUFDNUIsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUM7Q0FDbEM7Ozs7OztBQUtELG1CQUEwQixHQUFRO0lBQzlCLE9BQU8sR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDO0NBQzVDOzs7Ozs7QUFLRCxvQkFBMkIsR0FBUTtJQUMvQixPQUFPLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQztDQUNwQzs7Ozs7O0FBS0QscUJBQTRCLEdBQVc7O0lBQ25DLElBQUksR0FBRyxHQUFvQixJQUFJLGdCQUFn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