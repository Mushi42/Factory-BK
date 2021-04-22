const { setResponse } = require("../helpers");
const { categoryService } = require("../services");

const create = async (req, res) => {
    try {
        console.log(req.bddy)
        // return
        const data = await categoryService.create(req);
        setResponse(res, data);
    } catch (error) {
        console.log(error);
        setResponse(res, { type: "serverError" });
    }
};

const findAll = async (req, res) => {
    try {
        const data = await categoryService.findAll(req);
        setResponse(res, data);
    } catch (error) {
        setResponse(res, { type: "serverError" });
    }
};

const findOne = async (req, res) => {
    try {
        const data = await categoryService.findOne(req);
        setResponse(res, data);
    } catch (error) {
        setResponse(res, { type: "serverError" });
    }
};

const update = async (req, res) => {
    try {
        const data = await categoryService.update(req);
        setResponse(res, data);
    } catch (error) {
        setResponse(res, { type: "serverError" });
    }
};

const purge = async (req, res) => {
    try {
        const data = await categoryService.purge(req);
        setResponse(res, data);
    } catch (error) {
        setResponse(res, { type: "serverError" });
    }
};

module.exports = {
    create,
    findAll,
    findOne,
    update,
    purge,
};
