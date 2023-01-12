const express = require('express');
const asyncHandler = require('express-async-handler');
const {
    Location,
    Keystock
} = require('../../db/models')
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const keystocks = await Keystock.findAl()
    return res.json(keystocks)
}))

router.post('/', asyncHandler(async (req, res) => {
    const keystock = await Keystock.create(req.body)

    return res.json(keystock)
}))

router.delete('/:keystockId(\\d+)', asyncHandler(async (req, res) => {
    const {
        keystockId
    } = req.params;
    const keystock = await Keystock.findByPk(keystockId)
    await Keystock.destroy()
    return res.json({
        message: "Success"
    })
}))

module.exports = router