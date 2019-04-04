(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@stineseed/ng2-dnd', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global.stineseed = global.stineseed || {}, global.stineseed['ng2-dnd'] = {}),global.ng.core,global.ng.forms));
}(this, (function (exports,core,forms) { 'use strict';

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
            if (x_offset === void 0) {
                x_offset = 0;
            }
            if (y_offset === void 0) {
                y_offset = 0;
            }
            this.imageElement = imageElement;
            this.x_offset = x_offset;
            this.y_offset = y_offset;
            if (isString(this.imageElement)) {
                /** @type {?} */
                var imgScr = /** @type {?} */ (this.imageElement);
                this.imageElement = new HTMLImageElement();
                ( /** @type {?} */(this.imageElement)).src = imgScr;
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
            { type: core.Injectable }
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
             */ function () {
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DragDropSortableService.ctorParameters = function () {
            return [
                { type: DragDropConfig }
            ];
        };
        return DragDropSortableService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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
                            ( /** @type {?} */(event.dataTransfer)).setDragImage(createImage(/** @type {?} */ (_this.dragImage)));
                        }
                        else if (isFunction(_this.dragImage)) {
                            ( /** @type {?} */(event.dataTransfer)).setDragImage(callFun(/** @type {?} */ (_this.dragImage)));
                        }
                        else {
                            /** @type {?} */
                            var img = /** @type {?} */ (_this.dragImage);
                            ( /** @type {?} */(event.dataTransfer)).setDragImage(img.imageElement, img.x_offset, img.y_offset);
                        }
                    }
                    else if (isPresent(_this._config.dragImage)) {
                        /** @type {?} */
                        var dragImage = _this._config.dragImage;
                        ( /** @type {?} */(event.dataTransfer)).setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
                    }
                    else if (_this.cloneItem) {
                        _this._dragHelper = /** @type {?} */ (_this._elem.cloneNode(true));
                        _this._dragHelper.classList.add('dnd-drag-item');
                        _this._dragHelper.style.position = "absolute";
                        _this._dragHelper.style.top = "0px";
                        _this._dragHelper.style.left = "-1000px";
                        _this._elem.parentElement.appendChild(_this._dragHelper);
                        ( /** @type {?} */(event.dataTransfer)).setDragImage(_this._dragHelper, event.offsetX, event.offsetY);
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
             */ function () {
                return this._dragEnabled;
            },
            set: /**
             * @param {?} enabled
             * @return {?}
             */ function (enabled) {
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
                    if (_this._cdr && !( /** @type {?} */(_this._cdr)).destroyed) {
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AbstractComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: DragDropService },
                { type: DragDropConfig },
                { type: core.ChangeDetectorRef }
            ];
        };
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
            _this.onDragStart = new core.EventEmitter();
            _this.onDragEnd = new core.EventEmitter();
            /**
             * Callback function called when the drag action ends with a valid drop action.
             * It is activated after the on-drop-success callback
             */
            _this.onDragSuccessCallback = new core.EventEmitter();
            _this._defaultCursor = _this._elem.style.cursor;
            _this.dragEnabled = true;
            return _this;
        }
        Object.defineProperty(DraggableComponent.prototype, "draggable", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.dragEnabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DraggableComponent.prototype, "dropzones", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function (value) {
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
             */ function (value) {
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
            { type: core.Directive, args: [{ selector: '[dnd-draggable]' },] }
        ];
        /** @nocollapse */
        DraggableComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: DragDropService },
                { type: DragDropConfig },
                { type: core.ChangeDetectorRef }
            ];
        };
        DraggableComponent.propDecorators = {
            draggable: [{ type: core.Input, args: ["dragEnabled",] }],
            onDragStart: [{ type: core.Output }],
            onDragEnd: [{ type: core.Output }],
            dragData: [{ type: core.Input }],
            onDragSuccessCallback: [{ type: core.Output, args: ["onDragSuccess",] }],
            dropzones: [{ type: core.Input, args: ["dropZones",] }],
            effectallowed: [{ type: core.Input, args: ["effectAllowed",] }],
            effectcursor: [{ type: core.Input, args: ["effectCursor",] }],
            dragImage: [{ type: core.Input }],
            cloneItem: [{ type: core.Input }]
        };
        return DraggableComponent;
    }(AbstractComponent));
    var DraggableHandleComponent = /** @class */ (function (_super) {
        __extends(DraggableHandleComponent, _super);
        function DraggableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
            return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
        }
        DraggableHandleComponent.decorators = [
            { type: core.Directive, args: [{ selector: '[dnd-draggable-handle]' },] }
        ];
        /** @nocollapse */
        DraggableHandleComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: DragDropService },
                { type: DragDropConfig },
                { type: DraggableComponent },
                { type: core.ChangeDetectorRef }
            ];
        };
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
            _this.onDropSuccess = new core.EventEmitter();
            _this.onDragEnter = new core.EventEmitter();
            _this.onDragOver = new core.EventEmitter();
            _this.onDragLeave = new core.EventEmitter();
            _this.dropEnabled = true;
            return _this;
        }
        Object.defineProperty(DroppableComponent.prototype, "droppable", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.dropEnabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DroppableComponent.prototype, "allowdrop", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.allowDrop = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DroppableComponent.prototype, "dropzones", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function (value) {
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
             */ function (value) {
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
                var dataTransfer = ( /** @type {?} */(event)).dataTransfer;
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
            { type: core.Directive, args: [{ selector: '[dnd-droppable]' },] }
        ];
        /** @nocollapse */
        DroppableComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: DragDropService },
                { type: DragDropConfig },
                { type: core.ChangeDetectorRef }
            ];
        };
        DroppableComponent.propDecorators = {
            droppable: [{ type: core.Input, args: ["dropEnabled",] }],
            onDropSuccess: [{ type: core.Output }],
            onDragEnter: [{ type: core.Output }],
            onDragOver: [{ type: core.Output }],
            onDragLeave: [{ type: core.Output }],
            allowdrop: [{ type: core.Input, args: ["allowDrop",] }],
            dropzones: [{ type: core.Input, args: ["dropZones",] }],
            effectallowed: [{ type: core.Input, args: ["effectAllowed",] }],
            effectcursor: [{ type: core.Input, args: ["effectCursor",] }]
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
             */ function (value) {
                this.dragEnabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SortableContainer.prototype, "sortableData", {
            get: /**
             * @return {?}
             */ function () {
                return this._sortableData;
            },
            set: /**
             * @param {?} sortableData
             * @return {?}
             */ function (sortableData) {
                this._sortableData = sortableData;
                if (sortableData instanceof forms.FormArray) {
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
             */ function (value) {
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
            { type: core.Directive, args: [{ selector: '[dnd-sortable-container]' },] }
        ];
        /** @nocollapse */
        SortableContainer.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: DragDropService },
                { type: DragDropConfig },
                { type: core.ChangeDetectorRef },
                { type: DragDropSortableService }
            ];
        };
        SortableContainer.propDecorators = {
            draggable: [{ type: core.Input, args: ["dragEnabled",] }],
            sortableData: [{ type: core.Input }],
            dropzones: [{ type: core.Input, args: ["dropZones",] }]
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
            _this.onDragSuccessCallback = new core.EventEmitter();
            _this.onDragStartCallback = new core.EventEmitter();
            _this.onDragOverCallback = new core.EventEmitter();
            _this.onDragEndCallback = new core.EventEmitter();
            _this.onDropSuccessCallback = new core.EventEmitter();
            _this.dropZones = _this._sortableContainer.dropZones;
            _this.dragEnabled = true;
            _this.dropEnabled = true;
            return _this;
        }
        Object.defineProperty(SortableComponent.prototype, "draggable", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.dragEnabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SortableComponent.prototype, "droppable", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function (value) {
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
             */ function (value) {
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
            { type: core.Directive, args: [{ selector: '[dnd-sortable]' },] }
        ];
        /** @nocollapse */
        SortableComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: DragDropService },
                { type: DragDropConfig },
                { type: SortableContainer },
                { type: DragDropSortableService },
                { type: core.ChangeDetectorRef }
            ];
        };
        SortableComponent.propDecorators = {
            index: [{ type: core.Input, args: ['sortableIndex',] }],
            draggable: [{ type: core.Input, args: ["dragEnabled",] }],
            droppable: [{ type: core.Input, args: ["dropEnabled",] }],
            dragData: [{ type: core.Input }],
            effectallowed: [{ type: core.Input, args: ["effectAllowed",] }],
            effectcursor: [{ type: core.Input, args: ["effectCursor",] }],
            onDragSuccessCallback: [{ type: core.Output, args: ["onDragSuccess",] }],
            onDragStartCallback: [{ type: core.Output, args: ["onDragStart",] }],
            onDragOverCallback: [{ type: core.Output, args: ["onDragOver",] }],
            onDragEndCallback: [{ type: core.Output, args: ["onDragEnd",] }],
            onDropSuccessCallback: [{ type: core.Output, args: ["onDropSuccess",] }]
        };
        return SortableComponent;
    }(AbstractComponent));
    var SortableHandleComponent = /** @class */ (function (_super) {
        __extends(SortableHandleComponent, _super);
        function SortableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
            return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
        }
        SortableHandleComponent.decorators = [
            { type: core.Directive, args: [{ selector: '[dnd-sortable-handle]' },] }
        ];
        /** @nocollapse */
        SortableHandleComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: DragDropService },
                { type: DragDropConfig },
                { type: SortableComponent },
                { type: core.ChangeDetectorRef }
            ];
        };
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
            { type: core.NgModule, args: [{
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

    exports.providers = providers;
    exports.DndModule = DndModule;
    exports.AbstractComponent = AbstractComponent;
    exports.AbstractHandleComponent = AbstractHandleComponent;
    exports.DataTransferEffect = DataTransferEffect;
    exports.DragImage = DragImage;
    exports.DragDropConfig = DragDropConfig;
    exports.dragDropServiceFactory = dragDropServiceFactory;
    exports.dragDropSortableServiceFactory = dragDropSortableServiceFactory;
    exports.DragDropData = DragDropData;
    exports.DragDropService = DragDropService;
    exports.DragDropSortableService = DragDropSortableService;
    exports.DraggableComponent = DraggableComponent;
    exports.DraggableHandleComponent = DraggableHandleComponent;
    exports.DroppableComponent = DroppableComponent;
    exports.SortableContainer = SortableContainer;
    exports.SortableComponent = SortableComponent;
    exports.SortableHandleComponent = SortableHandleComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpbmVzZWVkLW5nMi1kbmQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac3RpbmVzZWVkL25nMi1kbmQvc3JjL2RuZC51dGlscy50cyIsIm5nOi8vQHN0aW5lc2VlZC9uZzItZG5kL3NyYy9kbmQuY29uZmlnLnRzIiwibmc6Ly9Ac3RpbmVzZWVkL25nMi1kbmQvc3JjL2RuZC5zZXJ2aWNlLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQHN0aW5lc2VlZC9uZzItZG5kL3NyYy9hYnN0cmFjdC5jb21wb25lbnQudHMiLCJuZzovL0BzdGluZXNlZWQvbmcyLWRuZC9zcmMvZHJhZ2dhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHN0aW5lc2VlZC9uZzItZG5kL3NyYy9kcm9wcGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac3RpbmVzZWVkL25nMi1kbmQvc3JjL3NvcnRhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHN0aW5lc2VlZC9uZzItZG5kL3NyYy9kbmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE4IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBhbmQgcmV0dXJuIHRydWUgaWYgYW4gb2JqZWN0IGlzIHR5cGUgb2Ygc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcob2JqOmFueSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBhbmQgcmV0dXJuIHRydWUgaWYgYW4gb2JqZWN0IG5vdCB1bmRlZmluZWQgb3IgbnVsbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJlc2VudChvYmo6IGFueSkge1xyXG4gICAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBGdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqOiBhbnkpIHtcclxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgSW1hZ2UgZWxlbWVudCB3aXRoIHNwZWNpZmllZCB1cmwgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2Uoc3JjOiBzdHJpbmcpIHtcclxuICAgIGxldCBpbWc6SFRNTEltYWdlRWxlbWVudCA9IG5ldyBIVE1MSW1hZ2VFbGVtZW50KCk7XHJcbiAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgcmV0dXJuIGltZztcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGwgdGhlIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FsbEZ1bihmdW46IEZ1bmN0aW9uKSB7XHJcbiAgICByZXR1cm4gZnVuKCk7XHJcbn0iLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxOCBTZXJnZXkgQWtvcGtva2h5YW50c1xyXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXHJcblxyXG5pbXBvcnQge2lzU3RyaW5nfSBmcm9tICcuL2RuZC51dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVRyYW5zZmVyRWZmZWN0IHtcclxuXHJcbiAgICBzdGF0aWMgQ09QWSA9IG5ldyBEYXRhVHJhbnNmZXJFZmZlY3QoJ2NvcHknKTtcclxuICAgIHN0YXRpYyBMSU5LID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnbGluaycpO1xyXG4gICAgc3RhdGljIE1PVkUgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdtb3ZlJyk7XHJcbiAgICBzdGF0aWMgTk9ORSA9IG5ldyBEYXRhVHJhbnNmZXJFZmZlY3QoJ25vbmUnKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdJbWFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaW1hZ2VFbGVtZW50OiBhbnksXHJcbiAgICAgICAgcHVibGljIHhfb2Zmc2V0OiBudW1iZXIgPSAwLFxyXG4gICAgICAgIHB1YmxpYyB5X29mZnNldDogbnVtYmVyID0gMCkge1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5pbWFnZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgcmVhbCBpbWFnZSBmcm9tIHN0cmluZyBzb3VyY2VcclxuICAgICAgICAgICAgICAgIGxldCBpbWdTY3I6IHN0cmluZyA9IDxzdHJpbmc+dGhpcy5pbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlRWxlbWVudCA9IG5ldyBIVE1MSW1hZ2VFbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAoPEhUTUxJbWFnZUVsZW1lbnQ+dGhpcy5pbWFnZUVsZW1lbnQpLnNyYyA9IGltZ1NjcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wQ29uZmlnIHtcclxuICAgIHB1YmxpYyBvbkRyYWdTdGFydENsYXNzOiBzdHJpbmcgPSBcImRuZC1kcmFnLXN0YXJ0XCI7XHJcbiAgICBwdWJsaWMgb25EcmFnRW50ZXJDbGFzczogc3RyaW5nID0gXCJkbmQtZHJhZy1lbnRlclwiO1xyXG4gICAgcHVibGljIG9uRHJhZ092ZXJDbGFzczogc3RyaW5nID0gXCJkbmQtZHJhZy1vdmVyXCI7XHJcbiAgICBwdWJsaWMgb25Tb3J0YWJsZURyYWdDbGFzczogc3RyaW5nID0gXCJkbmQtc29ydGFibGUtZHJhZ1wiO1xyXG5cclxuICAgIHB1YmxpYyBkcmFnRWZmZWN0OiBEYXRhVHJhbnNmZXJFZmZlY3QgPSBEYXRhVHJhbnNmZXJFZmZlY3QuTU9WRTtcclxuICAgIHB1YmxpYyBkcm9wRWZmZWN0OiBEYXRhVHJhbnNmZXJFZmZlY3QgPSBEYXRhVHJhbnNmZXJFZmZlY3QuTU9WRTtcclxuICAgIHB1YmxpYyBkcmFnQ3Vyc29yOiBzdHJpbmcgPSBcIm1vdmVcIjtcclxuICAgIHB1YmxpYyBkcmFnSW1hZ2U6IERyYWdJbWFnZTtcclxuICAgIHB1YmxpYyBkZWZhdWx0Q3Vyc29yOiBzdHJpbmcgPSBcInBvaW50ZXJcIjtcclxufSIsIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE4IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcclxuXHJcbmltcG9ydCB7SW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4vZG5kLmNvbmZpZyc7XHJcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuL2RuZC51dGlscyc7XHJcbmltcG9ydCB7U29ydGFibGVDb250YWluZXJ9IGZyb20gJy4vc29ydGFibGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcERhdGEge1xyXG4gICAgZHJhZ0RhdGE6IGFueTtcclxuICAgIG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmFnRHJvcFNlcnZpY2VGYWN0b3J5KCk6IERyYWdEcm9wU2VydmljZSAge1xyXG4gICAgcmV0dXJuIG5ldyBEcmFnRHJvcFNlcnZpY2UoKTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BTZXJ2aWNlIHtcclxuICAgIGFsbG93ZWREcm9wWm9uZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIG9uRHJhZ1N1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT47XHJcbiAgICBkcmFnRGF0YTogYW55O1xyXG4gICAgaXNEcmFnZ2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VGYWN0b3J5KGNvbmZpZzogRHJhZ0Ryb3BDb25maWcpOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSAge1xyXG4gICAgcmV0dXJuIG5ldyBEcmFnRHJvcFNvcnRhYmxlU2VydmljZShjb25maWcpO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSB7XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgc29ydGFibGVDb250YWluZXI6IFNvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgaXNEcmFnZ2VkOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX2VsZW06IEhUTUxFbGVtZW50O1xyXG4gICAgcHVibGljIGdldCBlbGVtKCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb25maWc6RHJhZ0Ryb3BDb25maWcpIHt9XHJcblxyXG4gICAgbWFya1NvcnRhYmxlKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLl9lbGVtKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLm9uU29ydGFibGVEcmFnQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNQcmVzZW50KGVsZW0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLm9uU29ydGFibGVEcmFnQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE4IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcclxuXHJcbmltcG9ydCB7SW5qZWN0YWJsZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0VsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb25maWcsIERyYWdJbWFnZSB9IGZyb20gJy4vZG5kLmNvbmZpZyc7XHJcbmltcG9ydCB7IERyYWdEcm9wU2VydmljZSB9IGZyb20gJy4vZG5kLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpc1N0cmluZywgaXNGdW5jdGlvbiwgaXNQcmVzZW50LCBjcmVhdGVJbWFnZSwgY2FsbEZ1biB9IGZyb20gJy4vZG5kLnV0aWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Q29tcG9uZW50IHtcclxuICAgIF9lbGVtOiBIVE1MRWxlbWVudDtcclxuICAgIF9kcmFnSGFuZGxlOiBIVE1MRWxlbWVudDtcclxuICAgIF9kcmFnSGVscGVyOiBIVE1MRWxlbWVudDtcclxuICAgIF9kZWZhdWx0Q3Vyc29yOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXN0IGVsZW1lbnQgdGhhdCB3YXMgbW91c2Vkb3duJ2VkXHJcbiAgICAgKi9cclxuICAgIF90YXJnZXQ6IEV2ZW50VGFyZ2V0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgb2JqZWN0IGlzIGRyYWdnYWJsZS4gRGVmYXVsdCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9kcmFnRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2V0IGRyYWdFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9kcmFnRW5hYmxlZCA9ICEhZW5hYmxlZDtcclxuICAgICAgICB0aGlzLl9lbGVtLmRyYWdnYWJsZSA9IHRoaXMuX2RyYWdFbmFibGVkO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRyYWdFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kcmFnRW5hYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyBkcm9wIG9uIHRoaXMgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBkcm9wRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIGVmZmVjdFxyXG4gICAgICovXHJcbiAgICBlZmZlY3RBbGxvd2VkOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIERyYWcgY3Vyc29yXHJcbiAgICAgKi9cclxuICAgIGVmZmVjdEN1cnNvcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzdHJpY3QgcGxhY2VzIHdoZXJlIGEgZHJhZ2dhYmxlIGVsZW1lbnQgY2FuIGJlIGRyb3BwZWQuIEVpdGhlciBvbmUgb2ZcclxuICAgICAqIHRoZXNlIHR3byBtZWNoYW5pc21zIGNhbiBiZSB1c2VkOlxyXG4gICAgICpcclxuICAgICAqIC0gZHJvcFpvbmVzOiBhbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgcGVybWl0cyB0byBzcGVjaWZ5IHRoZSBkcm9wIHpvbmVzXHJcbiAgICAgKiAgIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbXBvbmVudC4gQnkgZGVmYXVsdCwgaWYgdGhlIGRyb3Atem9uZXMgYXR0cmlidXRlXHJcbiAgICAgKiAgIGlzIG5vdCBzcGVjaWZpZWQsIHRoZSBkcm9wcGFibGUgY29tcG9uZW50IGFjY2VwdHMgZHJvcCBvcGVyYXRpb25zIGJ5XHJcbiAgICAgKiAgIGFsbCB0aGUgZHJhZ2dhYmxlIGNvbXBvbmVudHMgdGhhdCBkbyBub3Qgc3BlY2lmeSB0aGUgYWxsb3dlZC1kcm9wLXpvbmVzXHJcbiAgICAgKlxyXG4gICAgICogLSBhbGxvd0Ryb3A6IGEgYm9vbGVhbiBmdW5jdGlvbiBmb3IgZHJvcHBhYmxlIGNvbXBvbmVudHMsIHRoYXQgaXMgY2hlY2tlZFxyXG4gICAgICogICB3aGVuIGFuIGl0ZW0gaXMgZHJhZ2dlZC4gVGhlIGZ1bmN0aW9uIGlzIHBhc3NlZCB0aGUgZHJhZ0RhdGEgb2YgdGhpc1xyXG4gICAgICogICBpdGVtLlxyXG4gICAgICogICAtIGlmIGl0IHJldHVybnMgdHJ1ZSwgdGhlIGl0ZW0gY2FuIGJlIGRyb3BwZWQgaW4gdGhpcyBjb21wb25lbnRcclxuICAgICAqICAgLSBpZiBpdCByZXR1cm5zIGZhbHNlLCB0aGUgaXRlbSBjYW5ub3QgYmUgZHJvcHBlZCBoZXJlXHJcbiAgICAgKi9cclxuICAgIGFsbG93RHJvcDogKGRyb3BEYXRhOiBhbnkpID0+IGJvb2xlYW47XHJcbiAgICBkcm9wWm9uZXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZXJlIGlzIHRoZSBwcm9wZXJ0eSBkcmFnSW1hZ2UgeW91IGNhbiB1c2U6XHJcbiAgICAgKiAtIFRoZSBzdHJpbmcgdmFsdWUgYXMgdXJsIHRvIHRoZSBpbWFnZVxyXG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXHJcbiAgICAgKiAgICAgICAgZG5kLWRyYWdnYWJsZSBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXHJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCIvaW1hZ2VzL3NpbXBsZXIucG5nXCI+XHJcbiAgICAgKiAuLi5cclxuICAgICAqIC0gVGhlIERyYWdJbWFnZSB2YWx1ZSB3aXRoIEltYWdlIGFuZCBvcHRpb25hbCBvZmZzZXQgYnkgeCBhbmQgeTpcclxuICAgICAqICAgbGV0IG15RHJhZ0ltYWdlOiBEcmFnSW1hZ2UgPSBuZXcgRHJhZ0ltYWdlKFwiL2ltYWdlcy9zaW1wbGVyMS5wbmdcIiwgMCwgMCk7XHJcbiAgICAgKiAuLi5cclxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxyXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxyXG4gICAgICogICAgICAgIFtkcmFnSW1hZ2VdPVwibXlEcmFnSW1hZ2VcIj5cclxuICAgICAqIC4uLlxyXG4gICAgICogLSBUaGUgY3VzdG9tIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgdmFsdWUgb2YgZHJhZ0ltYWdlIHByb2dyYW1tYXRpY2FsbHk6XHJcbiAgICAgKiAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcclxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcclxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cImdldERyYWdJbWFnZShzb21lRGF0YSlcIj5cclxuICAgICAqIC4uLlxyXG4gICAgICogICBnZXREcmFnSW1hZ2UodmFsdWU6YW55KTogc3RyaW5nIHtcclxuICAgICAqICAgICByZXR1cm4gdmFsdWUgPyBcIi9pbWFnZXMvc2ltcGxlcjEucG5nXCIgOiBcIi9pbWFnZXMvc2ltcGxlcjIucG5nXCJcclxuICAgICAqICAgfVxyXG4gICAgICovXHJcbiAgICBkcmFnSW1hZ2U6IHN0cmluZyB8IERyYWdJbWFnZSB8IEZ1bmN0aW9uO1xyXG5cclxuICAgIGNsb25lSXRlbTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBfZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIHB1YmxpYyBfY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgICBwcml2YXRlIF9jZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcblxyXG4gICAgICAgIC8vIEFzc2lnbiBkZWZhdWx0IGN1cnNvciB1bmxlc3Mgb3ZlcnJpZGRlblxyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRDdXJzb3IgPSBfY29uZmlnLmRlZmF1bHRDdXJzb3I7XHJcbiAgICAgICAgdGhpcy5fZWxlbSA9IGVsZW1SZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0aGlzLl9lbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuX2RlZmF1bHRDdXJzb3I7ICAvLyBzZXQgZGVmYXVsdCBjdXJzb3Igb24gb3VyIGVsZW1lbnRcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIERST1AgZXZlbnRzXHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9lbGVtLm9uZHJhZ2VudGVyID0gKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdFbnRlcihldmVudCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9lbGVtLm9uZHJhZ292ZXIgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdPdmVyKGV2ZW50KTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2ZlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuX2NvbmZpZy5kcm9wRWZmZWN0Lm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2VsZW0ub25kcmFnbGVhdmUgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ0xlYXZlKGV2ZW50KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2VsZW0ub25kcm9wID0gKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkRyb3AoZXZlbnQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBEcmFnIGV2ZW50c1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fZWxlbS5vbm1vdXNlZG93biA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl90YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9lbGVtLm9uZHJhZ3N0YXJ0ID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RyYWdIYW5kbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZHJhZ0hhbmRsZS5jb250YWlucyg8RWxlbWVudD50aGlzLl90YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ1N0YXJ0KGV2ZW50KTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2ZlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICcnKTtcclxuICAgICAgICAgICAgICAgIC8vIENoYW5nZSBkcmFnIGVmZmVjdFxyXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSB0aGlzLmVmZmVjdEFsbG93ZWQgfHwgdGhpcy5fY29uZmlnLmRyYWdFZmZlY3QubmFtZTtcclxuICAgICAgICAgICAgICAgIC8vIENoYW5nZSBkcmFnIGltYWdlXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNQcmVzZW50KHRoaXMuZHJhZ0ltYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZyh0aGlzLmRyYWdJbWFnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UoY3JlYXRlSW1hZ2UoPHN0cmluZz50aGlzLmRyYWdJbWFnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLmRyYWdJbWFnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UoY2FsbEZ1big8RnVuY3Rpb24+dGhpcy5kcmFnSW1hZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nOiBEcmFnSW1hZ2UgPSA8RHJhZ0ltYWdlPnRoaXMuZHJhZ0ltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZShpbWcuaW1hZ2VFbGVtZW50LCBpbWcueF9vZmZzZXQsIGltZy55X29mZnNldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ByZXNlbnQodGhpcy5fY29uZmlnLmRyYWdJbWFnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZHJhZ0ltYWdlOiBEcmFnSW1hZ2UgPSB0aGlzLl9jb25maWcuZHJhZ0ltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKGRyYWdJbWFnZS5pbWFnZUVsZW1lbnQsIGRyYWdJbWFnZS54X29mZnNldCwgZHJhZ0ltYWdlLnlfb2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jbG9uZUl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnSGVscGVyID0gPEhUTUxFbGVtZW50PnRoaXMuX2VsZW0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdIZWxwZXIuY2xhc3NMaXN0LmFkZCgnZG5kLWRyYWctaXRlbScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdIZWxwZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0hlbHBlci5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdIZWxwZXIuc3R5bGUubGVmdCA9IFwiLTEwMDBweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW0ucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9kcmFnSGVscGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZSh0aGlzLl9kcmFnSGVscGVyLCBldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgZHJhZyBjdXJzb3JcclxuICAgICAgICAgICAgICAgIGxldCBjdXJzb3JlbGVtID0gKHRoaXMuX2RyYWdIYW5kbGUpID8gdGhpcy5fZHJhZ0hhbmRsZSA6IHRoaXMuX2VsZW07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RyYWdFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yZWxlbS5zdHlsZS5jdXJzb3IgPSB0aGlzLmVmZmVjdEN1cnNvciA/IHRoaXMuZWZmZWN0Q3Vyc29yIDogdGhpcy5fY29uZmlnLmRyYWdDdXJzb3I7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcmVsZW0uc3R5bGUuY3Vyc29yID0gdGhpcy5fZGVmYXVsdEN1cnNvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX2VsZW0ub25kcmFnZW5kID0gKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZWxlbS5wYXJlbnRFbGVtZW50ICYmIHRoaXMuX2RyYWdIZWxwZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLl9kcmFnSGVscGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25kcmFnZW5kJywgZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5fb25EcmFnRW5kKGV2ZW50KTtcclxuICAgICAgICAgICAgLy8gUmVzdG9yZSBzdHlsZSBvZiBkcmFnZ2VkIGVsZW1lbnRcclxuICAgICAgICAgICAgbGV0IGN1cnNvcmVsZW0gPSAodGhpcy5fZHJhZ0hhbmRsZSkgPyB0aGlzLl9kcmFnSGFuZGxlIDogdGhpcy5fZWxlbTtcclxuICAgICAgICAgICAgY3Vyc29yZWxlbS5zdHlsZS5jdXJzb3IgPSB0aGlzLl9kZWZhdWx0Q3Vyc29yO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldERyYWdIYW5kbGUoZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9kcmFnSGFuZGxlID0gZWxlbTtcclxuICAgIH1cclxuICAgIC8qKioqKioqIENoYW5nZSBkZXRlY3Rpb24gKioqKioqL1xyXG5cclxuICAgIGRldGVjdENoYW5nZXMgKCkge1xyXG4gICAgICAgIC8vIFByb2dyYW1tYXRpY2FsbHkgcnVuIGNoYW5nZSBkZXRlY3Rpb24gdG8gZml4IGlzc3VlIGluIFNhZmFyaVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2NkciAmJiAhKHRoaXMuX2NkciBhcyBWaWV3UmVmKS5kZXN0cm95ZWQgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMjUwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyoqKioqKiBEcm9wcGFibGUgKioqKioqKi8vXHJcbiAgICBwcml2YXRlIF9vbkRyYWdFbnRlcihldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25kcmFnZW50ZXIuX2lzRHJvcEFsbG93ZWQnLCB0aGlzLl9pc0Ryb3BBbGxvd2VkKTtcclxuICAgICAgICBpZiAodGhpcy5faXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5fb25EcmFnRW50ZXJDYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ092ZXIoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coJ29uZHJhZ292ZXIuX2lzRHJvcEFsbG93ZWQnLCB0aGlzLl9pc0Ryb3BBbGxvd2VkKTtcclxuICAgICAgICBpZiAodGhpcy5faXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgaXMgb3ZlciB0aGUgc2FtZSBzb3VyY2UgZWxlbWVudCAtIGRvIG5vdGhpbmdcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOZWNlc3NhcnkuIEFsbG93cyB1cyB0byBkcm9wLlxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fb25EcmFnT3ZlckNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnTGVhdmUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uZHJhZ2xlYXZlLl9pc0Ryb3BBbGxvd2VkJywgdGhpcy5faXNEcm9wQWxsb3dlZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ0xlYXZlQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyb3AoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uZHJvcC5faXNEcm9wQWxsb3dlZCcsIHRoaXMuX2lzRHJvcEFsbG93ZWQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICAgICAgICAvLyBOZWNlc3NhcnkuIEFsbG93cyB1cyB0byBkcm9wLlxyXG4gICAgICAgICAgICB0aGlzLl9wcmV2ZW50QW5kU3RvcChldmVudCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9vbkRyb3BDYWxsYmFjayhldmVudCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNEcm9wQWxsb3dlZChldmVudDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkIHx8IChldmVudC5kYXRhVHJhbnNmZXIgJiYgZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKSkgJiYgdGhpcy5kcm9wRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAvLyBGaXJzdCwgaWYgYGFsbG93RHJvcGAgaXMgc2V0LCBjYWxsIGl0IHRvIGRldGVybWluZSB3aGV0aGVyIHRoZVxyXG4gICAgICAgICAgICAvLyBkcmFnZ2VkIGVsZW1lbnQgY2FuIGJlIGRyb3BwZWQgaGVyZS5cclxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dEcm9wKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbGxvd0Ryb3AodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB1c2UgZHJvcFpvbmVzIGlmIHRoZXkgYXJlIHNldC5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZHJvcFpvbmVzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRyYWdab25lOiBzdHJpbmcgPSB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRyb3Bab25lcy5pbmRleE9mKGRyYWdab25lKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcHJldmVudEFuZFN0b3AoZXZlbnQ6IEV2ZW50KTogYW55IHtcclxuICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8qKioqKioqKioqKiBEcmFnZ2FibGUgKioqKioqKioqKi8vXHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnU3RhcnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnb25kcmFnc3RhcnQuZHJhZ0VuYWJsZWQnLCB0aGlzLl9kcmFnRW5hYmxlZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzID0gdGhpcy5kcm9wWm9uZXM7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdzdGFydC5hbGxvd2VkRHJvcFpvbmVzJywgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdTdGFydENhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnRW5kKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzID0gW107XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uZHJhZ2VuZC5hbGxvd2VkRHJvcFpvbmVzJywgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMpO1xyXG4gICAgICAgIHRoaXMuX29uRHJhZ0VuZENhbGxiYWNrKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyoqKiogRHJvcCBDYWxsYmFja3MgKioqKi8vXHJcbiAgICBfb25EcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHsgfVxyXG4gICAgX29uRHJhZ092ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHsgfVxyXG4gICAgX29uRHJhZ0xlYXZlQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7IH1cclxuICAgIF9vbkRyb3BDYWxsYmFjayhldmVudDogRXZlbnQpIHsgfVxyXG5cclxuICAgIC8vKioqKiBEcmFnIENhbGxiYWNrcyAqKioqLy9cclxuICAgIF9vbkRyYWdTdGFydENhbGxiYWNrKGV2ZW50OiBFdmVudCkgeyB9XHJcbiAgICBfb25EcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0SGFuZGxlQ29tcG9uZW50IHtcclxuICAgIF9lbGVtOiBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBfZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIHB1YmxpYyBfY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgICBwcml2YXRlIF9Db21wb25lbnQ6IEFic3RyYWN0Q29tcG9uZW50LCBwcml2YXRlIF9jZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbSA9IGVsZW1SZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0aGlzLl9Db21wb25lbnQuc2V0RHJhZ0hhbmRsZSh0aGlzLl9lbGVtKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxOCBTZXJnZXkgQWtvcGtva2h5YW50c1xyXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXHJcblxyXG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0Q29tcG9uZW50LCBBYnN0cmFjdEhhbmRsZUNvbXBvbmVudH0gZnJvbSAnLi9hYnN0cmFjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnLCBEcmFnSW1hZ2V9IGZyb20gJy4vZG5kLmNvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlLCBEcmFnRHJvcERhdGF9IGZyb20gJy4vZG5kLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2RuZC1kcmFnZ2FibGVdJyB9KVxyXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dChcImRyYWdFbmFibGVkXCIpIHNldCBkcmFnZ2FibGUodmFsdWU6Ym9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSAhIXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGRyYWcgYWN0aW9ucyBoYXBwZW5lZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG4gICAgQE91dHB1dCgpIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBkYXRhIHRoYXQgaGFzIHRvIGJlIGRyYWdnZWQuIEl0IGNhbiBiZSBhbnkgSlMgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGRyYWdEYXRhOiBhbnk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgZHJhZyBhY3Rpb24gZW5kcyB3aXRoIGEgdmFsaWQgZHJvcCBhY3Rpb24uXHJcbiAgICAgKiBJdCBpcyBhY3RpdmF0ZWQgYWZ0ZXIgdGhlIG9uLWRyb3Atc3VjY2VzcyBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KFwib25EcmFnU3VjY2Vzc1wiKSBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gICAgQElucHV0KFwiZHJvcFpvbmVzXCIpIHNldCBkcm9wem9uZXModmFsdWU6QXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIGFsbG93ZWQgZWZmZWN0XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dChcImVmZmVjdEFsbG93ZWRcIikgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0QWxsb3dlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJhZyBlZmZlY3QgY3Vyc29yXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dChcImVmZmVjdEN1cnNvclwiKSBzZXQgZWZmZWN0Y3Vyc29yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVyZSBpcyB0aGUgcHJvcGVydHkgZHJhZ0ltYWdlIHlvdSBjYW4gdXNlOlxyXG4gICAgICogLSBUaGUgc3RyaW5nIHZhbHVlIGFzIHVybCB0byB0aGUgaW1hZ2VcclxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxyXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxyXG4gICAgICogICAgICAgIFtkcmFnSW1hZ2VdPVwiL2ltYWdlcy9zaW1wbGVyLnBuZ1wiPlxyXG4gICAgICogLi4uXHJcbiAgICAgKiAtIFRoZSBEcmFnSW1hZ2UgdmFsdWUgd2l0aCBJbWFnZSBhbmQgb2Zmc2V0IGJ5IHggYW5kIHk6XHJcbiAgICAgKiAgIGxldCBteURyYWdJbWFnZTogRHJhZ0ltYWdlID0gbmV3IERyYWdJbWFnZShcIi9pbWFnZXMvc2ltcGxlcjEucG5nXCIsIDAsIDApO1xyXG4gICAgICogLi4uXHJcbiAgICAgKiAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcclxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcclxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cIm15RHJhZ0ltYWdlXCI+XHJcbiAgICAgKiAuLi5cclxuICAgICAqIC0gVGhlIGN1c3RvbSBmdW5jdGlvbiB0byByZXR1cm4gdGhlIHZhbHVlIG9mIGRyYWdJbWFnZSBwcm9ncmFtbWF0aWNhbGx5OlxyXG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXHJcbiAgICAgKiAgICAgICAgZG5kLWRyYWdnYWJsZSBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXHJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCJnZXREcmFnSW1hZ2Uoc29tZURhdGEpXCI+XHJcbiAgICAgKiAuLi5cclxuICAgICAqICAgZ2V0RHJhZ0ltYWdlKHZhbHVlOmFueSk6IHN0cmluZyB7XHJcbiAgICAgKiAgICAgcmV0dXJuIHZhbHVlID8gXCIvaW1hZ2VzL3NpbXBsZXIxLnBuZ1wiIDogXCIvaW1hZ2VzL3NpbXBsZXIyLnBuZ1wiXHJcbiAgICAgKiAgIH1cclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgZHJhZ0ltYWdlOiBzdHJpbmcgfCBEcmFnSW1hZ2UgfCBGdW5jdGlvbjtcclxuXHJcbiAgICBcclxuICAgIEBJbnB1dCgpIGNsb25lSXRlbTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOkRyYWdEcm9wQ29uZmlnLFxyXG4gICAgICAgIGNkcjpDaGFuZ2VEZXRlY3RvclJlZikge1xyXG5cclxuICAgICAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgY2RyKTtcclxuICAgICAgICB0aGlzLl9kZWZhdWx0Q3Vyc29yID0gdGhpcy5fZWxlbS5zdHlsZS5jdXJzb3I7XHJcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgX29uRHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSB0aGlzLmRyYWdEYXRhO1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSB0aGlzLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLm9uRHJhZ1N0YXJ0Q2xhc3MpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5vbkRyYWdTdGFydC5lbWl0KHtkcmFnRGF0YTogdGhpcy5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25EcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLm9uRHJhZ1N0YXJ0Q2xhc3MpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5vbkRyYWdFbmQuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZG5kLWRyYWdnYWJsZS1oYW5kbGVdJyB9KVxyXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlSGFuZGxlQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RIYW5kbGVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzpEcmFnRHJvcENvbmZpZywgX0NvbXBvbmVudDogRHJhZ2dhYmxlQ29tcG9uZW50LFxyXG4gICAgICAgIGNkcjpDaGFuZ2VEZXRlY3RvclJlZikge1xyXG5cclxuICAgICAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgX0NvbXBvbmVudCwgY2RyKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxOCBTZXJnZXkgQWtvcGtva2h5YW50c1xyXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXHJcblxyXG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0Q29tcG9uZW50fSBmcm9tICcuL2Fic3RyYWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4vZG5kLmNvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlLCBEcmFnRHJvcERhdGF9IGZyb20gJy4vZG5kLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2RuZC1kcm9wcGFibGVdJyB9KVxyXG5leHBvcnQgY2xhc3MgRHJvcHBhYmxlQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dChcImRyb3BFbmFibGVkXCIpIHNldCBkcm9wcGFibGUodmFsdWU6Ym9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZHJvcEVuYWJsZWQgPSAhIXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGRyb3AgYWN0aW9uIGNvbXBsZXRlcyBjb3JyZWN0bHkuXHJcbiAgICAgKiBJdCBpcyBhY3RpdmF0ZWQgYmVmb3JlIHRoZSBvbi1kcmFnLXN1Y2Nlc3MgY2FsbGJhY2suXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRyb3BTdWNjZXNzOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG4gICAgQE91dHB1dCgpIG9uRHJhZ0VudGVyOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG4gICAgQE91dHB1dCgpIG9uRHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgICBAT3V0cHV0KCkgb25EcmFnTGVhdmU6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcblxyXG4gICAgQElucHV0KFwiYWxsb3dEcm9wXCIpIHNldCBhbGxvd2Ryb3AodmFsdWU6IChkcm9wRGF0YTogYW55KSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5hbGxvd0Ryb3AgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoXCJkcm9wWm9uZXNcIikgc2V0IGRyb3B6b25lcyh2YWx1ZTpBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5kcm9wWm9uZXMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYWcgYWxsb3dlZCBlZmZlY3RcclxuICAgICAqL1xyXG4gICAgQElucHV0KFwiZWZmZWN0QWxsb3dlZFwiKSBzZXQgZWZmZWN0YWxsb3dlZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIGVmZmVjdCBjdXJzb3JcclxuICAgICAqL1xyXG4gICAgQElucHV0KFwiZWZmZWN0Q3Vyc29yXCIpIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0Q3Vyc29yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzpEcmFnRHJvcENvbmZpZyxcclxuICAgICAgICBjZHI6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcblxyXG4gICAgICAgIHRoaXMuZHJvcEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5vbkRyYWdFbnRlckNsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdFbnRlci5lbWl0KHtkcmFnRGF0YTogdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfb25EcmFnT3ZlckNhbGxiYWNrIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcub25EcmFnT3ZlckNsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdPdmVyLmVtaXQoe2RyYWdEYXRhOiB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfb25EcmFnTGVhdmVDYWxsYmFjayAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLm9uRHJhZ092ZXJDbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcub25EcmFnRW50ZXJDbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnTGVhdmUuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9vbkRyb3BDYWxsYmFjayAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBsZXQgZGF0YVRyYW5zZmVyID0gKGV2ZW50IGFzIGFueSkuZGF0YVRyYW5zZmVyO1xyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkIHx8IChkYXRhVHJhbnNmZXIgJiYgZGF0YVRyYW5zZmVyLmZpbGVzKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJvcFN1Y2Nlc3MuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2suZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLm9uRHJhZ092ZXJDbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcub25EcmFnRW50ZXJDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE4IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcclxuXHJcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3RDb21wb25lbnQsIEFic3RyYWN0SGFuZGxlQ29tcG9uZW50fSBmcm9tICcuL2Fic3RyYWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4vZG5kLmNvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlLCBEcmFnRHJvcFNvcnRhYmxlU2VydmljZX0gZnJvbSAnLi9kbmQuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZG5kLXNvcnRhYmxlLWNvbnRhaW5lcl0nIH0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUNvbnRhaW5lciBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoXCJkcmFnRW5hYmxlZFwiKSBzZXQgZHJhZ2dhYmxlKHZhbHVlOmJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmRyYWdFbmFibGVkID0gISF2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zb3J0YWJsZURhdGE6IEFycmF5PGFueT58Rm9ybUFycmF5ID0gW107XHJcbiAgICBwcml2YXRlIHNvcnRhYmxlSGFuZGxlcjogU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyfFNvcnRhYmxlQXJyYXlIYW5kbGVyO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBzb3J0YWJsZURhdGEoc29ydGFibGVEYXRhOiBBcnJheTxhbnk+fEZvcm1BcnJheSkge1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YSA9IHNvcnRhYmxlRGF0YTtcclxuICAgICAgICBpZiAoc29ydGFibGVEYXRhIGluc3RhbmNlb2YgRm9ybUFycmF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydGFibGVIYW5kbGVyID0gbmV3IFNvcnRhYmxlRm9ybUFycmF5SGFuZGxlcigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydGFibGVIYW5kbGVyID0gbmV3IFNvcnRhYmxlQXJyYXlIYW5kbGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdGhpcy5fc29ydGFibGVEYXRhO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29sbGVjdGlvbiBpcyBjaGFuZ2VkLCBkcm9wIGVuYWJsZWQ6IFwiICsgdGhpcy5kcm9wRW5hYmxlZCk7XHJcbiAgICB9XHJcbiAgICBnZXQgc29ydGFibGVEYXRhKCk6IEFycmF5PGFueT58Rm9ybUFycmF5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydGFibGVEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dChcImRyb3Bab25lc1wiKSBzZXQgZHJvcHpvbmVzKHZhbHVlOkFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLmRyb3Bab25lcyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6RHJhZ0Ryb3BDb25maWcsIGNkcjpDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwcml2YXRlIF9zb3J0YWJsZURhdGFTZXJ2aWNlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSkge1xyXG5cclxuICAgICAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgY2RyKTtcclxuICAgICAgICB0aGlzLmRyYWdFbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX29uRHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtOmFueSA9IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpO1xyXG4gICAgICAgICAgICAvLyBDaGVjayBkb2VzIGVsZW1lbnQgZXhpc3QgaW4gc29ydGFibGVEYXRhIG9mIHRoaXMgQ29udGFpbmVyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMZXQncyBhZGQgaXRcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb250YWluZXIuX29uRHJhZ0VudGVyQ2FsbGJhY2suIGRyYWcgbm9kZSBbJyArIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgudG9TdHJpbmcoKSArICddIG92ZXIgcGFyZW50IG5vZGUnKTtcclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gcHJldmlvdXNlIGxpc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIucmVtb3ZlSXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuX3NvcnRhYmxlRGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEFkZCBpdGVtIHRvIG5ldyBsaXN0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc2VydEl0ZW1BdChpdGVtLCAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gUmVmcmVzaCBjaGFuZ2VzIGluIHByb3BlcnRpZXMgb2YgY29udGFpbmVyIGNvbXBvbmVudFxyXG4gICAgICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbUF0KGluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRhYmxlSGFuZGxlci5nZXRJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhLCBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5kZXhPZihpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRhYmxlSGFuZGxlci5pbmRleE9mKHRoaXMuX3NvcnRhYmxlRGF0YSwgaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSXRlbUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNvcnRhYmxlSGFuZGxlci5yZW1vdmVJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhLCBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0SXRlbUF0KGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc29ydGFibGVIYW5kbGVyLmluc2VydEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGEsIGl0ZW0sIGluZGV4KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU29ydGFibGVBcnJheUhhbmRsZXIge1xyXG4gICAgZ2V0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpbmRleDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICByZXR1cm4gc29ydGFibGVEYXRhW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBpbmRleE9mKHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBzb3J0YWJsZURhdGEuaW5kZXhPZihpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzb3J0YWJsZURhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHNvcnRhYmxlRGF0YS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTb3J0YWJsZUZvcm1BcnJheUhhbmRsZXIge1xyXG4gICAgZ2V0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpbmRleDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICByZXR1cm4gc29ydGFibGVEYXRhLmF0KGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBpbmRleE9mKHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBzb3J0YWJsZURhdGEuY29udHJvbHMuaW5kZXhPZihpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzb3J0YWJsZURhdGEucmVtb3ZlQXQoaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydEl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgc29ydGFibGVEYXRhLmluc2VydChpbmRleCwgaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkbmQtc29ydGFibGVdJyB9KVxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCdzb3J0YWJsZUluZGV4JykgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICBASW5wdXQoXCJkcmFnRW5hYmxlZFwiKSBzZXQgZHJhZ2dhYmxlKHZhbHVlOmJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmRyYWdFbmFibGVkID0gISF2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoXCJkcm9wRW5hYmxlZFwiKSBzZXQgZHJvcHBhYmxlKHZhbHVlOmJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmRyb3BFbmFibGVkID0gISF2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBkYXRhIHRoYXQgaGFzIHRvIGJlIGRyYWdnZWQuIEl0IGNhbiBiZSBhbnkgSlMgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGRyYWdEYXRhOiBhbnk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIGFsbG93ZWQgZWZmZWN0XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dChcImVmZmVjdEFsbG93ZWRcIikgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0QWxsb3dlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJhZyBlZmZlY3QgY3Vyc29yXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dChcImVmZmVjdEN1cnNvclwiKSBzZXQgZWZmZWN0Y3Vyc29yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGRyYWcgYWN0aW9uIGVuZHMgd2l0aCBhIHZhbGlkIGRyb3AgYWN0aW9uLlxyXG4gICAgICogSXQgaXMgYWN0aXZhdGVkIGFmdGVyIHRoZSBvbi1kcm9wLXN1Y2Nlc3MgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgQE91dHB1dChcIm9uRHJhZ1N1Y2Nlc3NcIikgb25EcmFnU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIEBPdXRwdXQoXCJvbkRyYWdTdGFydFwiKSBvbkRyYWdTdGFydENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dChcIm9uRHJhZ092ZXJcIikgb25EcmFnT3ZlckNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dChcIm9uRHJhZ0VuZFwiKSBvbkRyYWdFbmRDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoXCJvbkRyb3BTdWNjZXNzXCIpIG9uRHJvcFN1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOkRyYWdEcm9wQ29uZmlnLFxyXG4gICAgICAgIHByaXZhdGUgX3NvcnRhYmxlQ29udGFpbmVyOiBTb3J0YWJsZUNvbnRhaW5lcixcclxuICAgICAgICBwcml2YXRlIF9zb3J0YWJsZURhdGFTZXJ2aWNlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSxcclxuICAgICAgICBjZHI6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgY2RyKTtcclxuICAgICAgICB0aGlzLmRyb3Bab25lcyA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRyb3Bab25lcztcclxuICAgICAgICB0aGlzLmRyYWdFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfb25EcmFnU3RhcnRDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ1N0YXJ0Q2FsbGJhY2suIGRyYWdnaW5nIGVsZW0gd2l0aCBpbmRleCAnICsgdGhpcy5pbmRleCk7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gdGhpcy5pbmRleDtcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLm1hcmtTb3J0YWJsZSh0aGlzLl9lbGVtKTtcclxuICAgICAgICAvLyBBZGQgZHJhZ0RhdGFcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSB0aGlzLmRyYWdEYXRhO1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSB0aGlzLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMub25EcmFnU3RhcnRDYWxsYmFjay5lbWl0KHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uRHJhZ092ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQgJiYgdGhpcy5fZWxlbSAhPT0gdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5lbGVtKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdfb25EcmFnT3ZlckNhbGxiYWNrLiBkcmFnZ2luZyBlbGVtIHdpdGggaW5kZXggJyArIHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gdGhpcy5fc29ydGFibGVDb250YWluZXI7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSB0aGlzLmluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLm1hcmtTb3J0YWJsZSh0aGlzLl9lbGVtKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdPdmVyQ2FsbGJhY2suZW1pdCh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfb25EcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdFbmRDYWxsYmFjay4gZW5kIGRyYWdnaW5nIGVsZW0gd2l0aCBpbmRleCAnICsgdGhpcy5pbmRleCk7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLm1hcmtTb3J0YWJsZShudWxsKTtcclxuICAgICAgICAvLyBBZGQgZHJhZ0dhdGFcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMub25EcmFnRW5kQ2FsbGJhY2suZW1pdCh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLm1hcmtTb3J0YWJsZSh0aGlzLl9lbGVtKTtcclxuICAgICAgICAgICAgaWYgKCh0aGlzLmluZGV4ICE9PSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KSB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhICE9PSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5zb3J0YWJsZURhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQ29tcG9uZW50Ll9vbkRyYWdFbnRlckNhbGxiYWNrLiBkcmFnIG5vZGUgWycgKyB0aGlzLmluZGV4ICsgJ10gb3ZlciBub2RlIFsnICsgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCArICddJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgaXRlbVxyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW06YW55ID0gdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5nZXRJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgaXRlbSBmcm9tIHByZXZpb3VzZSBsaXN0XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEFkZCBpdGVtIHRvIG5ldyBsaXN0XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5pbnNlcnRJdGVtQXQoaXRlbSwgdGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfb25Ecm9wQ2FsbGJhY2sgKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25Ecm9wQ2FsbGJhY2sub25Ecm9wU3VjY2Vzc0NhbGxiYWNrLmRyYWdEYXRhJywgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyb3BTdWNjZXNzQ2FsbGJhY2suZW1pdCh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ29uRHJvcENhbGxiYWNrLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjay5kcmFnRGF0YScsIHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmVtaXQodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBSZWZyZXNoIGNoYW5nZXMgaW4gcHJvcGVydGllcyBvZiBjb250YWluZXIgY29tcG9uZW50XHJcbiAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkbmQtc29ydGFibGUtaGFuZGxlXScgfSlcclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlSGFuZGxlQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RIYW5kbGVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzpEcmFnRHJvcENvbmZpZywgX0NvbXBvbmVudDogU29ydGFibGVDb21wb25lbnQsXHJcbiAgICAgICAgY2RyOkNoYW5nZURldGVjdG9yUmVmKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBfQ29tcG9uZW50LCBjZHIpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE4IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4vZG5kLmNvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlLCBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSwgZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSwgZHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VGYWN0b3J5fSBmcm9tICcuL2RuZC5zZXJ2aWNlJztcclxuaW1wb3J0IHtEcmFnZ2FibGVDb21wb25lbnQsIERyYWdnYWJsZUhhbmRsZUNvbXBvbmVudH0gZnJvbSAnLi9kcmFnZ2FibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtEcm9wcGFibGVDb21wb25lbnR9IGZyb20gJy4vZHJvcHBhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U29ydGFibGVDb250YWluZXIsIFNvcnRhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUhhbmRsZUNvbXBvbmVudH0gZnJvbSAnLi9zb3J0YWJsZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9hYnN0cmFjdC5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RuZC5jb25maWcnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RuZC5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9kcmFnZ2FibGUuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9kcm9wcGFibGUuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9zb3J0YWJsZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGxldCBwcm92aWRlcnMgPSBbXHJcbiAgICBEcmFnRHJvcENvbmZpZyxcclxuICAgIHsgcHJvdmlkZTogRHJhZ0Ryb3BTZXJ2aWNlLCB1c2VGYWN0b3J5OiBkcmFnRHJvcFNlcnZpY2VGYWN0b3J5IH0sXHJcbiAgICB7IHByb3ZpZGU6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlLCB1c2VGYWN0b3J5OiBkcmFnRHJvcFNvcnRhYmxlU2VydmljZUZhY3RvcnksIGRlcHM6IFtEcmFnRHJvcENvbmZpZ10gfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtEcmFnZ2FibGVDb21wb25lbnQsIERyYWdnYWJsZUhhbmRsZUNvbXBvbmVudCwgRHJvcHBhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUNvbnRhaW5lciwgU29ydGFibGVDb21wb25lbnQsIFNvcnRhYmxlSGFuZGxlQ29tcG9uZW50XSxcclxuICBleHBvcnRzIDogW0RyYWdnYWJsZUNvbXBvbmVudCwgRHJhZ2dhYmxlSGFuZGxlQ29tcG9uZW50LCBEcm9wcGFibGVDb21wb25lbnQsIFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUNvbXBvbmVudCwgU29ydGFibGVIYW5kbGVDb21wb25lbnRdLFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIERuZE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IERuZE1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBwcm92aWRlcnNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiRWxlbWVudFJlZiIsIkNoYW5nZURldGVjdG9yUmVmIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJFdmVudEVtaXR0ZXIiLCJEaXJlY3RpdmUiLCJJbnB1dCIsIk91dHB1dCIsIkZvcm1BcnJheSIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFPQSxzQkFBeUIsR0FBTztRQUM1QixPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQztLQUNsQzs7Ozs7O0FBS0QsdUJBQTBCLEdBQVE7UUFDOUIsT0FBTyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUM7S0FDNUM7Ozs7OztBQUtELHdCQUEyQixHQUFRO1FBQy9CLE9BQU8sT0FBTyxHQUFHLEtBQUssVUFBVSxDQUFDO0tBQ3BDOzs7Ozs7QUFLRCx5QkFBNEIsR0FBVzs7UUFDbkMsSUFBSSxHQUFHLEdBQW9CLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUNsRCxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNkLE9BQU8sR0FBRyxDQUFDO0tBQ2Q7Ozs7OztBQUtELHFCQUF3QixHQUFhO1FBQ2pDLE9BQU8sR0FBRyxFQUFFLENBQUM7S0FDaEI7Ozs7Ozs7UUMxQkcsNEJBQW1CLElBQVk7WUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1NBQUs7a0NBTHRCLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDO2tDQUM5QixJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztrQ0FDOUIsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7a0NBQzlCLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDO2lDQVhoRDs7UUFnQkE7UUFDSSxtQkFDVyxjQUNBLFVBQ0E7Ozs7Ozs7WUFGQSxpQkFBWSxHQUFaLFlBQVk7WUFDWixhQUFRLEdBQVIsUUFBUTtZQUNSLGFBQVEsR0FBUixRQUFRO1lBQ1gsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFOztnQkFFN0IsSUFBSSxNQUFNLHFCQUFtQixJQUFJLENBQUMsWUFBWSxFQUFDO2dCQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztnQkFDM0MsbUJBQW1CLElBQUksQ0FBQyxZQUFZLEdBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQzthQUN0RDtTQUNKO3dCQTNCVDtRQTRCQyxDQUFBO0FBWkQsUUFjQTs7b0NBQ3NDLGdCQUFnQjtvQ0FDaEIsZ0JBQWdCO21DQUNqQixlQUFlO3VDQUNYLG1CQUFtQjs4QkFFaEIsa0JBQWtCLENBQUMsSUFBSTs4QkFDdkIsa0JBQWtCLENBQUMsSUFBSTs4QkFDbkMsTUFBTTtpQ0FFSCxTQUFTOzs2QkF4QzVDO1FBeUNDOzs7Ozs7UUMvQkQ7OzsyQkFWQTtRQWFDLENBQUE7QUFIRDs7O0FBS0E7UUFDSSxPQUFPLElBQUksZUFBZSxFQUFFLENBQUM7S0FDaEM7OztvQ0FJcUMsRUFBRTs7O29CQUZ2Q0EsZUFBVTs7OEJBbkJYOzs7Ozs7QUEyQkEsNENBQStDLE1BQXNCO1FBQ2pFLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5Qzs7UUFhRyxpQ0FBb0IsT0FBc0I7WUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtTQUFJOzhCQUpuQyx5Q0FBSTs7OztnQkFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7OztRQUt0Qiw4Q0FBWTs7OztZQUFaLFVBQWEsSUFBaUI7Z0JBQzFCLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztpQkFDakU7Z0JBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2lCQUM5RDthQUNKOztvQkFyQkpBLGVBQVU7Ozs7O3dCQXpCSCxjQUFjOzs7c0NBTnRCOzs7SUNBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBRUYsdUJBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzFCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdkMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7Ozs7Ozs7O1FDa0VHLDJCQUFZLE9BQW1CLEVBQVMsZ0JBQWlDLEVBQVMsT0FBdUIsRUFDN0Y7WUFEWixpQkE0RkM7WUE1RnVDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7WUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtZQUM3RixTQUFJLEdBQUosSUFBSTs7OztnQ0FwRWdCLEtBQUs7Ozs7K0JBWWQsS0FBSzs2QkEwQk4sRUFBRTs2QkEyQkgsS0FBSzs7WUFNdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7OztZQUk5QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxVQUFDLEtBQVk7Z0JBQ2xDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUIsQ0FBQztZQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFVBQUMsS0FBZ0I7Z0JBQ3JDLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7O2dCQUV4QixJQUFJLEtBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO29CQUM1QixLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7aUJBQ2hFO2dCQUVELE9BQU8sS0FBSyxDQUFDO2FBQ2hCLENBQUM7WUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxVQUFDLEtBQVk7Z0JBQ2xDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUIsQ0FBQztZQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFVBQUMsS0FBWTtnQkFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QixDQUFDOzs7O1lBSUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsVUFBQyxLQUFpQjtnQkFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQy9CLENBQUM7WUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxVQUFDLEtBQWdCO2dCQUN0QyxJQUFJLEtBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsbUJBQVUsS0FBSSxDQUFDLE9BQU8sRUFBQyxFQUFFO3dCQUNuRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ3ZCLE9BQU87cUJBQ1Y7aUJBQ0o7Z0JBRUQsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Z0JBRXpCLElBQUksS0FBSyxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7b0JBQzVCLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQzs7b0JBRXZDLEtBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxhQUFhLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDOztvQkFFdEYsSUFBSSxTQUFTLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO3dCQUMzQixJQUFJLFFBQVEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7NEJBQzFCLG1CQUFNLEtBQUssQ0FBQyxZQUFZLEdBQUUsWUFBWSxDQUFDLFdBQVcsbUJBQVMsS0FBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7eUJBQy9FOzZCQUFNLElBQUksVUFBVSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTs0QkFDbkMsbUJBQU0sS0FBSyxDQUFDLFlBQVksR0FBRSxZQUFZLENBQUMsT0FBTyxtQkFBVyxLQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQzt5QkFDN0U7NkJBQU07OzRCQUNILElBQUksR0FBRyxxQkFBeUIsS0FBSSxDQUFDLFNBQVMsRUFBQzs0QkFDL0MsbUJBQU0sS0FBSyxDQUFDLFlBQVksR0FBRSxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDeEY7cUJBQ0o7eUJBQU0sSUFBSSxTQUFTLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTs7d0JBQzFDLElBQUksU0FBUyxHQUFjLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO3dCQUNsRCxtQkFBTSxLQUFLLENBQUMsWUFBWSxHQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUMxRzt5QkFBTSxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ3ZCLEtBQUksQ0FBQyxXQUFXLHFCQUFnQixLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO3dCQUMzRCxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQ2hELEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7d0JBQzdDLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7d0JBQ25DLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7d0JBQ3hDLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3ZELG1CQUFNLEtBQUssQ0FBQyxZQUFZLEdBQUUsWUFBWSxDQUFDLEtBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQzFGOztvQkFHRCxJQUFJLFVBQVUsR0FBRyxDQUFDLEtBQUksQ0FBQyxXQUFXLElBQUksS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDO29CQUVwRSxJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUU7d0JBQ25CLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztxQkFDN0Y7eUJBQU07d0JBQ0gsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQztxQkFDakQ7aUJBQ0o7YUFDSixDQUFDO1lBRUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBQyxLQUFZO2dCQUNoQyxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLEtBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQzlDLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzFEOzs7Z0JBRUQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Z0JBRXZCLElBQUksVUFBVSxHQUFHLENBQUMsS0FBSSxDQUFDLFdBQVcsSUFBSSxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3BFLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUM7YUFDakQsQ0FBQztTQUNMO1FBOUpELHNCQUFJLDBDQUFXOzs7Z0JBSWY7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQzVCOzs7O2dCQU5ELFVBQWdCLE9BQWdCO2dCQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDNUM7OztXQUFBOzs7OztRQTZKTSx5Q0FBYTs7OztzQkFBQyxJQUFpQjtnQkFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7UUFJNUIseUNBQWE7Ozs7WUFBYjtnQkFBQSxpQkFPQzs7Z0JBTEcsVUFBVSxDQUFDO29CQUNQLElBQUssS0FBSSxDQUFDLElBQUksSUFBSSxDQUFDLG1CQUFDLEtBQUksQ0FBQyxJQUFlLEdBQUUsU0FBUyxFQUFHO3dCQUNsRCxLQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO3FCQUM3QjtpQkFDSixFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1g7Ozs7O1FBR08sd0NBQVk7Ozs7c0JBQUMsS0FBWTs7Z0JBRTdCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTs7b0JBRTVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDcEM7Ozs7OztRQUdHLHVDQUFXOzs7O3NCQUFDLEtBQVk7O2dCQUU1QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7O29CQUU1QixJQUFJLEtBQUssQ0FBQyxjQUFjLEVBQUU7O3dCQUV0QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7cUJBQzFCO29CQUVELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbkM7Ozs7OztRQUdHLHdDQUFZOzs7O3NCQUFDLEtBQVk7O2dCQUU3QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7O29CQUU1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3BDOzs7Ozs7UUFHRyxtQ0FBTzs7OztzQkFBQyxLQUFZOztnQkFFeEIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFOztvQkFFNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFNUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUN4Qjs7Ozs7O1FBR0csMENBQWM7Ozs7c0JBQUMsS0FBVTtnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7OztvQkFHM0csSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUN6RDs7b0JBR0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQ3BGLE9BQU8sSUFBSSxDQUFDO3FCQUNmO29CQUNELEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzt3QkFDNUUsSUFBSSxRQUFRLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOzRCQUN6QyxPQUFPLElBQUksQ0FBQzt5QkFDZjtxQkFDSjtpQkFDSjtnQkFDRCxPQUFPLEtBQUssQ0FBQzs7Ozs7O1FBR1QsMkNBQWU7Ozs7c0JBQUMsS0FBWTtnQkFDaEMsSUFBSSxLQUFLLENBQUMsY0FBYyxFQUFFO29CQUN0QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQzFCO2dCQUNELElBQUksS0FBSyxDQUFDLGVBQWUsRUFBRTtvQkFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2lCQUMzQjs7Ozs7O1FBS0csd0NBQVk7Ozs7c0JBQUMsS0FBWTs7Z0JBRTdCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7O29CQUV4RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3BDOzs7Ozs7UUFHRyxzQ0FBVTs7OztzQkFBQyxLQUFZO2dCQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDOztnQkFFNUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7O1FBSW5DLGdEQUFvQjs7OztZQUFwQixVQUFxQixLQUFZLEtBQUs7Ozs7O1FBQ3RDLCtDQUFtQjs7OztZQUFuQixVQUFvQixLQUFZLEtBQUs7Ozs7O1FBQ3JDLGdEQUFvQjs7OztZQUFwQixVQUFxQixLQUFZLEtBQUs7Ozs7O1FBQ3RDLDJDQUFlOzs7O1lBQWYsVUFBZ0IsS0FBWSxLQUFLOzs7Ozs7UUFHakMsZ0RBQW9COzs7O1lBQXBCLFVBQXFCLEtBQVksS0FBSzs7Ozs7UUFDdEMsOENBQWtCOzs7O1lBQWxCLFVBQW1CLEtBQVksS0FBSzs7b0JBaFN2Q0EsZUFBVTs7Ozs7d0JBTkhDLGVBQVU7d0JBR1QsZUFBZTt3QkFEZixjQUFjO3dCQUhIQyxzQkFBaUI7OztnQ0FKckM7O1FBOFNBO1FBRUksaUNBQVksT0FBbUIsRUFBUyxnQkFBaUMsRUFBUyxPQUF1QixFQUM3RixZQUF1QyxJQUF1QjtZQURsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1lBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7WUFDN0YsZUFBVSxHQUFWLFVBQVU7WUFBNkIsU0FBSSxHQUFKLElBQUksQ0FBbUI7WUFDdEUsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztzQ0FwVEw7UUFxVEM7Ozs7Ozs7UUN6U3VDQyxzQ0FBaUI7UUFxRXJELDRCQUFZLE9BQW1CLEVBQUUsZUFBZ0MsRUFBRSxNQUFxQixFQUNwRixHQUFxQjtZQUR6QixZQUdJLGtCQUFNLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxTQUcvQzs7OztnQ0FsRW1ELElBQUlDLGlCQUFZLEVBQWdCOzhCQUNsQyxJQUFJQSxpQkFBWSxFQUFnQjs7Ozs7MENBV2QsSUFBSUEsaUJBQVksRUFBTztZQW9EdkYsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDOUMsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7O1NBQzNCO1FBekVELHNCQUEwQix5Q0FBUzs7OztnQkFBbkMsVUFBb0MsS0FBYTtnQkFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQzlCOzs7V0FBQTtRQW1CRCxzQkFBd0IseUNBQVM7Ozs7Z0JBQWpDLFVBQWtDLEtBQW1CO2dCQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUMxQjs7O1dBQUE7UUFLRCxzQkFBNEIsNkNBQWE7Ozs7Ozs7O2dCQUF6QyxVQUEwQyxLQUFhO2dCQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzthQUM5Qjs7O1dBQUE7UUFLRCxzQkFBMkIsNENBQVk7Ozs7Ozs7O2dCQUF2QyxVQUF3QyxLQUFhO2dCQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUM3Qjs7O1dBQUE7Ozs7O1FBc0NELGlEQUFvQjs7OztZQUFwQixVQUFxQixLQUFpQjtnQkFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztnQkFDekUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7Z0JBRXhELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7YUFDdkU7Ozs7O1FBRUQsK0NBQWtCOzs7O1lBQWxCLFVBQW1CLEtBQWlCO2dCQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7O2dCQUUzRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO2FBQ3JFOztvQkE5RkpDLGNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTs7Ozs7d0JBTk1KLGVBQVU7d0JBSWxELGVBQWU7d0JBRGYsY0FBYzt3QkFKZEMsc0JBQWlCOzs7O2dDQVVwQkksVUFBSyxTQUFDLGFBQWE7a0NBT25CQyxXQUFNO2dDQUNOQSxXQUFNOytCQUtORCxVQUFLOzRDQU1MQyxXQUFNLFNBQUMsZUFBZTtnQ0FFdEJELFVBQUssU0FBQyxXQUFXO29DQU9qQkEsVUFBSyxTQUFDLGVBQWU7bUNBT3JCQSxVQUFLLFNBQUMsY0FBYztnQ0EyQnBCQSxVQUFLO2dDQUdMQSxVQUFLOztpQ0EvRVY7TUFZd0MsaUJBQWlCOztRQWtHWEgsNENBQXVCO1FBQ2pFLGtDQUFZLE9BQW1CLEVBQUUsZUFBZ0MsRUFBRSxNQUFxQixFQUFFLFVBQThCLEVBQ3BILEdBQXFCO21CQUVyQixrQkFBTSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDO1NBQzNEOztvQkFOSkUsY0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFOzs7Ozt3QkF4R0RKLGVBQVU7d0JBSWxELGVBQWU7d0JBRGYsY0FBYzt3QkF1R29GLGtCQUFrQjt3QkEzR3BIQyxzQkFBaUI7Ozt1Q0FKekI7TUE4RzhDLHVCQUF1Qjs7Ozs7OztRQ2xHN0JDLHNDQUFpQjtRQXFDckQsNEJBQVksT0FBbUIsRUFBRSxlQUFnQyxFQUFFLE1BQXFCLEVBQ3BGLEdBQXFCO1lBRHpCLFlBR0ksa0JBQU0sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLFNBRy9DOzs7OztrQ0FqQ3FELElBQUlDLGlCQUFZLEVBQWdCO2dDQUNsQyxJQUFJQSxpQkFBWSxFQUFnQjsrQkFDakMsSUFBSUEsaUJBQVksRUFBZ0I7Z0NBQy9CLElBQUlBLGlCQUFZLEVBQWdCO1lBNkJoRixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7U0FDM0I7UUF6Q0Qsc0JBQTBCLHlDQUFTOzs7O2dCQUFuQyxVQUFvQyxLQUFhO2dCQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDOUI7OztXQUFBO1FBV0Qsc0JBQXdCLHlDQUFTOzs7O2dCQUFqQyxVQUFrQyxLQUFpQztnQkFDL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDMUI7OztXQUFBO1FBRUQsc0JBQXdCLHlDQUFTOzs7O2dCQUFqQyxVQUFrQyxLQUFtQjtnQkFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDMUI7OztXQUFBO1FBS0Qsc0JBQTRCLDZDQUFhOzs7Ozs7OztnQkFBekMsVUFBMEMsS0FBYTtnQkFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7YUFDOUI7OztXQUFBO1FBS0Qsc0JBQTJCLDRDQUFZOzs7Ozs7OztnQkFBdkMsVUFBd0MsS0FBYTtnQkFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDN0I7OztXQUFBOzs7OztRQVVELGlEQUFvQjs7OztZQUFwQixVQUFxQixLQUFpQjtnQkFDbEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFO29CQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO2lCQUN4RjthQUNKOzs7OztRQUVELGdEQUFtQjs7OztZQUFuQixVQUFxQixLQUFpQjtnQkFDbEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFO29CQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztpQkFDdkY7YUFDSjs7Ozs7UUFFRCxpREFBb0I7Ozs7WUFBcEIsVUFBc0IsS0FBaUI7Z0JBQ25DLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRTtvQkFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQzNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7aUJBQ3hGO2FBQ0o7Ozs7O1FBRUQsNENBQWU7Ozs7WUFBZixVQUFpQixLQUFpQjs7Z0JBQzlCLElBQUksWUFBWSxHQUFHLG1CQUFDLEtBQVksR0FBRSxZQUFZLENBQUM7Z0JBQy9DLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsS0FBSyxZQUFZLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN6RSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO29CQUN2RixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRTt3QkFDN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO3FCQUNuSDtvQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDOUQ7YUFDSjs7b0JBOUVKQyxjQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7Ozs7O3dCQU5NSixlQUFVO3dCQUlsRCxlQUFlO3dCQURmLGNBQWM7d0JBSmRDLHNCQUFpQjs7OztnQ0FVcEJJLFVBQUssU0FBQyxhQUFhO29DQVFuQkMsV0FBTTtrQ0FDTkEsV0FBTTtpQ0FDTkEsV0FBTTtrQ0FDTkEsV0FBTTtnQ0FFTkQsVUFBSyxTQUFDLFdBQVc7Z0NBSWpCQSxVQUFLLFNBQUMsV0FBVztvQ0FPakJBLFVBQUssU0FBQyxlQUFlO21DQU9yQkEsVUFBSyxTQUFDLGNBQWM7O2lDQTdDekI7TUFZd0MsaUJBQWlCOzs7Ozs7O1FDQ2xCSCxxQ0FBaUI7UUE0QnBELDJCQUFZLE9BQW1CLEVBQUUsZUFBZ0MsRUFBRSxNQUFxQixFQUFFLEdBQXFCLEVBQ25HO1lBRFosWUFHSSxrQkFBTSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsU0FFL0M7WUFKVywwQkFBb0IsR0FBcEIsb0JBQW9CO2tDQXZCYyxFQUFFO1lBMEI1QyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzs7U0FDNUI7UUEvQkQsc0JBQTBCLHdDQUFTOzs7O2dCQUFuQyxVQUFvQyxLQUFhO2dCQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDOUI7OztXQUFBO1FBS0Qsc0JBQWEsMkNBQVk7OztnQkFXekI7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQzdCOzs7O2dCQWJELFVBQTBCLFlBQWtDO2dCQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztnQkFDbEMsSUFBSSxZQUFZLFlBQVlLLGVBQVMsRUFBRTtvQkFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLHdCQUF3QixFQUFFLENBQUM7aUJBQ3pEO3FCQUFNO29CQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO2lCQUNyRDs7Z0JBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7YUFFM0M7OztXQUFBO1FBS0Qsc0JBQXdCLHdDQUFTOzs7O2dCQUFqQyxVQUFrQyxLQUFtQjtnQkFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDMUI7OztXQUFBOzs7OztRQVNELGdEQUFvQjs7OztZQUFwQixVQUFxQixLQUFZO2dCQUM3QixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUU7O29CQUNyQyxJQUFJLElBQUksR0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7b0JBRXRHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7Ozt3QkFJM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzFGLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOzRCQUN4RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzt5QkFDbEU7O3dCQUVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO3dCQUNuRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztxQkFDdkM7O29CQUVELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDeEI7YUFDSjs7Ozs7UUFFRCxxQ0FBUzs7OztZQUFULFVBQVUsS0FBYTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3BFOzs7OztRQUVELG1DQUFPOzs7O1lBQVAsVUFBUSxJQUFTO2dCQUNiLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNqRTs7Ozs7UUFFRCx3Q0FBWTs7OztZQUFaLFVBQWEsS0FBYTtnQkFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNoRTs7Ozs7O1FBRUQsd0NBQVk7Ozs7O1lBQVosVUFBYSxJQUFTLEVBQUUsS0FBYTtnQkFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdEU7O29CQXhFSkgsY0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFOzs7Ozt3QkFQSEosZUFBVTt3QkFLbEQsZUFBZTt3QkFEZixjQUFjO3dCQUxkQyxzQkFBaUI7d0JBTUEsdUJBQXVCOzs7O2dDQUszQ0ksVUFBSyxTQUFDLGFBQWE7bUNBT25CQSxVQUFLO2dDQWVMQSxVQUFLLFNBQUMsV0FBVzs7Z0NBckN0QjtNQWF1QyxpQkFBaUI7SUEwRXhELElBQUE7Ozs7Ozs7O1FBQ0ksd0NBQVM7Ozs7O1lBQVQsVUFBVSxZQUFpQixFQUFFLEtBQWE7Z0JBQ3RDLE9BQU8sWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzlCOzs7Ozs7UUFFRCxzQ0FBTzs7Ozs7WUFBUCxVQUFRLFlBQWlCLEVBQUUsSUFBUztnQkFDaEMsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JDOzs7Ozs7UUFFRCwyQ0FBWTs7Ozs7WUFBWixVQUFhLFlBQWlCLEVBQUUsS0FBYTtnQkFDekMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDakM7Ozs7Ozs7UUFFRCwyQ0FBWTs7Ozs7O1lBQVosVUFBYSxZQUFpQixFQUFFLElBQVMsRUFBRSxLQUFhO2dCQUNwRCxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDdkM7bUNBdEdMO1FBdUdDLENBQUE7SUFFRCxJQUFBOzs7Ozs7OztRQUNJLDRDQUFTOzs7OztZQUFULFVBQVUsWUFBaUIsRUFBRSxLQUFhO2dCQUN0QyxPQUFPLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakM7Ozs7OztRQUVELDBDQUFPOzs7OztZQUFQLFVBQVEsWUFBaUIsRUFBRSxJQUFTO2dCQUNoQyxPQUFPLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlDOzs7Ozs7UUFFRCwrQ0FBWTs7Ozs7WUFBWixVQUFhLFlBQWlCLEVBQUUsS0FBYTtnQkFDekMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQzs7Ozs7OztRQUVELCtDQUFZOzs7Ozs7WUFBWixVQUFhLFlBQWlCLEVBQUUsSUFBUyxFQUFFLEtBQWE7Z0JBQ3BELFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3BDO3VDQXhITDtRQXlIQyxDQUFBOztRQUdzQ0gscUNBQWlCO1FBMENwRCwyQkFBWSxPQUFtQixFQUFFLGVBQWdDLEVBQUUsTUFBcUIsRUFDNUUsb0JBQ0Esc0JBQ1IsR0FBcUI7WUFIekIsWUFJSSxrQkFBTSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsU0FJL0M7WUFQVyx3QkFBa0IsR0FBbEIsa0JBQWtCO1lBQ2xCLDBCQUFvQixHQUFwQixvQkFBb0I7Ozs7OzBDQVRvQyxJQUFJQyxpQkFBWSxFQUFPO3dDQUUzQixJQUFJQSxpQkFBWSxFQUFPO3VDQUN6QixJQUFJQSxpQkFBWSxFQUFPO3NDQUN6QixJQUFJQSxpQkFBWSxFQUFPOzBDQUNmLElBQUlBLGlCQUFZLEVBQU87WUFPdkYsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDOztTQUMzQjtRQTlDRCxzQkFBMEIsd0NBQVM7Ozs7Z0JBQW5DLFVBQW9DLEtBQWE7Z0JBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUM5Qjs7O1dBQUE7UUFFRCxzQkFBMEIsd0NBQVM7Ozs7Z0JBQW5DLFVBQW9DLEtBQWE7Z0JBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUM5Qjs7O1dBQUE7UUFVRCxzQkFBNEIsNENBQWE7Ozs7Ozs7O2dCQUF6QyxVQUEwQyxLQUFhO2dCQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzthQUM5Qjs7O1dBQUE7UUFLRCxzQkFBMkIsMkNBQVk7Ozs7Ozs7O2dCQUF2QyxVQUF3QyxLQUFhO2dCQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUM3Qjs7O1dBQUE7Ozs7O1FBdUJELGdEQUFvQjs7OztZQUFwQixVQUFxQixLQUFZOztnQkFFN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3RFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDN0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O2dCQUVuRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDOztnQkFFekUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakU7Ozs7O1FBRUQsK0NBQW1COzs7O1lBQW5CLFVBQW9CLEtBQVk7Z0JBQzVCLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUU7O29CQUV0RixJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO29CQUN0RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQzdDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDaEU7YUFDSjs7Ozs7UUFFRCw4Q0FBa0I7Ozs7WUFBbEIsVUFBbUIsS0FBWTs7Z0JBRTNCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDdkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Z0JBRTdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQzs7Z0JBRW5ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9EOzs7OztRQUVELGdEQUFvQjs7OztZQUFwQixVQUFxQixLQUFZO2dCQUM3QixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSzt5QkFDOUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEVBQUU7O3dCQUdyRyxJQUFJLElBQUksR0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7d0JBRXRHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMxRixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTs0QkFDdkUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7eUJBQ2xFOzt3QkFFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3ZELElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRTs0QkFDckMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7eUJBQy9DO3dCQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7d0JBQ3RFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO3FCQUN4QjtpQkFDSjthQUNKOzs7OztRQUVELDJDQUFlOzs7O1lBQWYsVUFBaUIsS0FBWTtnQkFDekIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFOztvQkFFckMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hFLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFOzt3QkFFN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ3BGOztvQkFFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQzNDO2FBQ0o7O29CQS9ISkMsY0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFOzs7Ozt3QkF0SE9KLGVBQVU7d0JBS2xELGVBQWU7d0JBRGYsY0FBYzt3QkE4SmMsaUJBQWlCO3dCQTdKNUIsdUJBQXVCO3dCQU54Q0Msc0JBQWlCOzs7OzRCQTBIcEJJLFVBQUssU0FBQyxlQUFlO2dDQUVyQkEsVUFBSyxTQUFDLGFBQWE7Z0NBSW5CQSxVQUFLLFNBQUMsYUFBYTsrQkFPbkJBLFVBQUs7b0NBS0xBLFVBQUssU0FBQyxlQUFlO21DQU9yQkEsVUFBSyxTQUFDLGNBQWM7NENBUXBCQyxXQUFNLFNBQUMsZUFBZTswQ0FFdEJBLFdBQU0sU0FBQyxhQUFhO3lDQUNwQkEsV0FBTSxTQUFDLFlBQVk7d0NBQ25CQSxXQUFNLFNBQUMsV0FBVzs0Q0FDbEJBLFdBQU0sU0FBQyxlQUFlOztnQ0FwSzNCO01BNEh1QyxpQkFBaUI7O1FBa0lYSiwyQ0FBdUI7UUFDaEUsaUNBQVksT0FBbUIsRUFBRSxlQUFnQyxFQUFFLE1BQXFCLEVBQUUsVUFBNkIsRUFDbkgsR0FBcUI7bUJBRXJCLGtCQUFNLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUM7U0FDM0Q7O29CQU5KRSxjQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUU7Ozs7O3dCQXhQQUosZUFBVTt3QkFLbEQsZUFBZTt3QkFEZixjQUFjO3dCQXNQb0YsaUJBQWlCO3dCQTNQbkhDLHNCQUFpQjs7O3NDQUp6QjtNQThQNkMsdUJBQXVCOzs7Ozs7O0FDM09wRSxRQUFXLFNBQVMsR0FBRztRQUNuQixjQUFjO1FBQ2QsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxzQkFBc0IsRUFBRTtRQUNoRSxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsOEJBQThCLEVBQUUsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUU7S0FDM0csQ0FBQzs7Ozs7OztRQVFPLGlCQUFPOzs7WUFBZDtnQkFDTSxPQUFPO29CQUNILFFBQVEsRUFBRSxTQUFTO29CQUNuQixTQUFTLEVBQUUsU0FBUztpQkFDdkIsQ0FBQzthQUNMOztvQkFYSk8sYUFBUSxTQUFDO3dCQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLHdCQUF3QixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixDQUFDO3dCQUMvSSxPQUFPLEVBQUcsQ0FBQyxrQkFBa0IsRUFBRSx3QkFBd0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsQ0FBQztxQkFFNUk7O3dCQTdCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==