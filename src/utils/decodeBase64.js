/**
 * Decode and return params
 * @param {String} base64Text
 * @param {Object} paramsSearch
 *
 * @return {Object}
 */
const getParamsFromBase64 = (base64Text, paramsSearch = {}) => {
    const decodeString = atob(base64Text)
    const params = decodeString.split('&')

    params.forEach(elem => {
        const [key, value] = elem.split('=')

        if (paramsSearch.hasOwnProperty(key)) {
            paramsSearch[key] = value || paramsSearch[key]
        }
    })

    return paramsSearch
}

/**
 * Get params from url
 */
export default (base64Params) => {
    return getParamsFromBase64(base64Params, { endDate: new Date(), initDate: new Date(), timezone: 'Europe/Berlin' })
}
