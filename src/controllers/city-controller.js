const { CityService } = require('../services/index')
const CityMaker = new CityService()
const create = async (req, res) => {
    try {
        const city = await CityMaker.createCity(req.body)
        return res.status(201).json({ data: city, success: true, message: 'Created City', err: {} })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create city',
            err: error
        })
    }
}
const destroy = async (req, res) => {
    try {
        const city = await CityMaker.deleteCity(req.params.id)
        return res.status(200).json({ data: city, success: true, message: 'Created City', err: {} })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete city',
            err: error
        })
    }
}

const get = async (req, res) => {
    try {
        const city = await CityMaker.getCity(req.params.id)
        return res.status(201).json({ data: city, success: true, message: 'Created City', err: {} })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get city',
            err: error
        })
    }
}
const update = async (req, res) => {
    try {
        const city = await CityMaker.updateCity(req.params.id,req.body)
        return res.status(201).json({ data: city, success: true, message: 'Created City', err: {} })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update city',
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
}