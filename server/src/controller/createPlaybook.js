const createPlaybook = async (request, response, next) => {
    // name, metrics, data (public, internal train, internal test)
    return response.status(200).json({'msg': 'ok'})
}

module.exports = {
    createPlaybook
};