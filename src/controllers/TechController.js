const User = require('../models/User');
const Techs = require('../models/Techs');

module.exports = {
    async index(req, res) {
    },
    async store(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if (!user_id) {
            return res.status(400).json({ erro: 'User not found' });
        } else if (user_id) {
            const [tech] = await Techs.findOrCreate({
                where: { name }
            });

            await user.addTechs(tech);

            return res.json(tech);
        }
    },
};