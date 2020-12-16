async function routes(fastify, options) {
    fastify.get('/', async(request, reply) => {
        await reply.send("hello all");
    })
    fastify.post('/signup', async(request, reply) => {
        await console.log(request.body);

        await reply.send(request.body.email)
    })
}

module.exports = routes