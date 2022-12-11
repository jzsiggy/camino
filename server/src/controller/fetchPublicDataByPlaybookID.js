const fetchPublicDataByPlaybookId = (request, response, next) => {
    return response.status(200).json({'msg': 'ok'})
}

module.exports = {
    fetchPublicDataByPlaybookId
}