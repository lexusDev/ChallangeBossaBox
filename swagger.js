const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: "Be The Hero",
        description: "API que fornece dados para sistema de ONG"
    },
    host: "localhost:3000",
    schemes: ['http']
}
 
const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/routes.js']
 
swaggerAutogen(outputFile, endpointsFiles, doc)
