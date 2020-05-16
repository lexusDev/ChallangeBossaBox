const Tool = require('../models/Tool');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        try {
            const tools = await Tool.find();

            return res.json(tools);
        } catch (e) {
            return res.status(500).send({
                message: 'Falha ao processar sua requisição!'
            });
        }
    },

    async show(req, res) {
        try {
            const { tag } = req.query;

            if (!tag) {
                return res.status(400).send({ message: 'Parametros de query não preenchidos!' });
            } else {
                const tagsArray = parseStringAsArray(tag);

                const tools = await Tool.find({ tags: { $in: tagsArray } });

                return res.json(tools);
            }
        } catch (e) {
            return res.status(500).send({
                message: 'Falha ao processar sua requisição!'
            });
        }
    },

    async store(req, res) {
        try {
            const tools = await Tool.create(req.body);

            if (!tools) {
                return res.status(400).send({ message: 'Payload não preenchido!' });
            } else {
                return res.status(201).send({
                    title: tools.title,
                    link: tools.link,
                    description: tools.description,
                    tags: tools.tags,
                    id: tools._id
                });
            }
        } catch (e) {
            return res.status(500).send({
                message: 'Falha ao processar sua requisição!'
            });
        }
    },

    async delete(req, res) {
        try {
            const tools = await Tool.findById(req.params.id);

            if (!tools) {
                return res.status(404).send({ message: 'Recurso não encontrado' });
            } else {
                await Tool.findByIdAndRemove(req.params.id);
                return res.status(204).send();
            }
        } catch (e) {
            return res.status(500).send({
                message: 'Falha ao processar sua requisição!'
            });
        }
    },
};