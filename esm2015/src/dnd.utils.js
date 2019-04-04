/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Check and return true if an object is type of string
 * @param {?} obj
 * @return {?}
 */
export function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object not undefined or null
 * @param {?} obj
 * @return {?}
 */
export function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
/**
 * Check and return true if an object is type of Function
 * @param {?} obj
 * @return {?}
 */
export function isFunction(obj) {
    return typeof obj === "function";
}
/**
 * Create Image element with specified url string
 * @param {?} src
 * @return {?}
 */
export function createImage(src) {
    /** @type {?} */
    let img = new HTMLImageElement();
    img.src = src;
    return img;
}
/**
 * Call the function
 * @param {?} fun
 * @return {?}
 */
export function callFun(fun) {
    return fun();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLnV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0aW5lc2VlZC9uZzItZG5kLyIsInNvdXJjZXMiOlsic3JjL2RuZC51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQSxNQUFNLG1CQUFtQixHQUFPO0lBQzVCLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDO0NBQ2xDOzs7Ozs7QUFLRCxNQUFNLG9CQUFvQixHQUFRO0lBQzlCLE9BQU8sR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDO0NBQzVDOzs7Ozs7QUFLRCxNQUFNLHFCQUFxQixHQUFRO0lBQy9CLE9BQU8sT0FBTyxHQUFHLEtBQUssVUFBVSxDQUFDO0NBQ3BDOzs7Ozs7QUFLRCxNQUFNLHNCQUFzQixHQUFXOztJQUNuQyxJQUFJLEdBQUcsR0FBb0IsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2xELEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2QsT0FBTyxHQUFHLENBQUM7Q0FDZDs7Ozs7O0FBS0QsTUFBTSxrQkFBa0IsR0FBYTtJQUNqQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0NBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTggU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhvYmo6YW55KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIjtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3Qgbm90IHVuZGVmaW5lZCBvciBudWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQcmVzZW50KG9iajogYW55KSB7XHJcbiAgICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBpcyB0eXBlIG9mIEZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihvYmo6IGFueSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIjtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBJbWFnZSBlbGVtZW50IHdpdGggc3BlY2lmaWVkIHVybCBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZShzcmM6IHN0cmluZykge1xyXG4gICAgbGV0IGltZzpIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEhUTUxJbWFnZUVsZW1lbnQoKTtcclxuICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICByZXR1cm4gaW1nO1xyXG59XHJcblxyXG4vKipcclxuICogQ2FsbCB0aGUgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxsRnVuKGZ1bjogRnVuY3Rpb24pIHtcclxuICAgIHJldHVybiBmdW4oKTtcclxufSJdfQ==