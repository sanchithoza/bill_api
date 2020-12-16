const fastify = require('fastify')({
    logger: false
})

fastify.register(require('fastify-cors'), {
        origin: true
    })
    //database connection
    //routes
fastify.register(require('./routes/user'));

const start = async() => {
    try {
        await fastify.listen(3000)
        console.log("Listining on port 3000");
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()