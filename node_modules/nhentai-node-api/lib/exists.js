const req = require('./api/request'),
      { RequestError } = require('request-promise/errors'),
      regex = require('./utils/regex')

module.exports = async (identifier) => {

    const id = identifier.toString().replace(regex.urlToId, '$2')

    const $ = await req(`https://nhentai.net/g/${id}/`)
    if (!$) throw new RequestError('Not found')

    return $ ? true : false

}