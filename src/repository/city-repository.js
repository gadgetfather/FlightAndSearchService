const { City } = require('../models/index')


class CityRepository {
    async createCity({ name }) {
        try {
            const city = City.create({ name })
            return city;
        } catch (error) {
            throw { error }
        }
    }
    async deleteCity(cityId) {
        try {
            await City.destroy({ where: { id: cityId } })
            return true
        } catch (error) {
            throw { error }
        }
    }
    async updateCity(cityId, data) {
        try {
            // This approach also works but it does not returns updated object
            // const city = await City.update(data, { where: { id: cityId } })
            const city = await City.findByPk(cityId)
            city.name = data.name
            await city.save()
            return city
        } catch (error) {
            throw { error }
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findOne({ where: {id: cityId } });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer get");
            throw {error};
        }
    }
    async getAllCity() {
        try {
            const city = await City.findAll();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer get");
            throw {error};
        }
    }
}


module.exports = CityRepository