const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: "Challenge",
        description: "API que fornece dados de ferramentas das tecnologias cadastradas"
    },
    host: "localhost:3000",
    schemes: ['http']
}
 
const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/routes.js']
 
swaggerAutogen(outputFile, endpointsFiles, doc)
