// isObject: checks if the given object is 'hash'
// https://stackoverflow.com/a/14706877
export const isObject = (obj) => (return obj === Object(obj))

// getIn: object value getter
export const getIn = (obj, arr) => (arr.reduce((data, key) => (data && data[key] || null), obj))

// setIn: object value setter
// jsfiddle: https://jsfiddle.net/anirudhsridhar/ybrepxto/3/
export const setIn = (obj, keys, value) => {
	let last = keys.length - 1
	let data = obj
	keys.forEach((key, i) => {
		data[key] = last === i ? value : data[key] || {}
		data = data[key]
	})
	return obj
}
