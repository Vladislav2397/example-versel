module.exports = function (fastify, options, done) {
  fastify.get('/api', (request, reply) => {
    reply.send({ hello: 'world' })
  })

  done()
}

