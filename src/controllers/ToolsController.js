const Tool = require('../models/Tool');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        const tools = await Tool.find();

        return res.json(tools);
    },

    async show(req, res) {
        const { tag } = req.query;

        const tagsArray = parseStringAsArray(tag);

        const tools = await Tool.find({ tags: { $in: tagsArray} });

        return res.json(tools);
    },

    async store(req, res) {
        const tools = await Tool.create(req.body);
        
        return res.status(201).send({
            title: tools.title,
            link: tools.link,
            description: tools.description,
            tags: tools.tags,
            id: tools._id
        });
    },

    async delete(req, res) {
        await Tool.findByIdAndRemove(req.params.id);

        return res.status(204);
    },
};