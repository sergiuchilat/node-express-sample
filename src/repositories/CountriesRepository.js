const Country = require('../database/models').Country

class CountriesRepository {
    async getAll(fields = undefined) {
        return await Country.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Country.findByPk(id)
    }

    async create(country) {
        return await Country.create(country)
    }

    async update(id, country) {
        const existingCountry = await Country.findByPk(id)
        if (existingCountry) {
            return await existingCountry.update(country);
        }
        return null;
    }

    async delete(id) {
        const deletedCountry = await Country.destroy({
            where: { id: id }
        })
        if (deletedCountry) {
            return {};
        }
        return null;
    }
}

module.exports = new CountriesRepository()