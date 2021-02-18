import baseAssignValue from './baseAssignValue.js'
import eq from '../eq.js'

/** Used to check objects for own properties. 
 *  是否含有指定的属性
 */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  const objValue = object[key]

  // 没有指定属性同时原值与新值相等
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value))) {
    // 新值不为0
    if (value !== 0 || (1 / value) === (1 / objValue)) {
      // object[key] = value
      baseAssignValue(object, key, value)
    }
    // 新值为undefined
  } else if (value === undefined && !(key in object)) {
    baseAssignValue(object, key, value)
  }
}

export default assignValue
