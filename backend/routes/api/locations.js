const express = require('express');
const asyncHandler = require('express-async-handler');
const {Location, Keystock} = require('../../db/models')
const router = express.Router();

router.get('/', asyncHandler(async(req,res) => {
    const locations = await Location.findAl()
    return res.json(locations)
}))

router.post('/', asyncHandler(async(req,res) => {
    const location = await Location.create(req.body)

    return res.json(location)
}))

router.delete('/:location_id(\\d+)', asyncHandler(async(req,res) => {
    const {locationId} = req.params;
    const location = await Location.findByPk(locationId)
    await location.destroy()
    return res.json({message: "Success"})
}))

module.exports = router