const { Op } = require('sequelize');
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
    async createManyCity(data) {
        console.log(data)
        try {
            const city = City.bulkCreate(data)
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
    async getAllCity(filter) {
        try {
            if(filter.name){
                const city = await City.findAll({
                    where:{
                        name:{[Op.startsWith]:filter.name}
                    }
                })
                return city
            }
            const city = await City.findAll();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer get");
            throw {error};
        }
    }
}


module.exports = CityRepository