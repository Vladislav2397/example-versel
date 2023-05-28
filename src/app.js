module.exports = function (fastify, options, done) {
    fastify.get('/ping', () => {
        return 'pong'
    })
}
