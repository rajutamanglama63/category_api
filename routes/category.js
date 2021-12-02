const express = require("express");
const Category = require("../models/categorySchema");

const router = express.Router();

// post category
router.post("/post", async (req, res) => {
    try {
        const {name} = req.body;

        const newCategory = new Category({
            name : name
        });

        await newCategory.save();

        res.status(200).json(newCategory);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get all category
router.get("/", async (req, res) => {
    try {
        const allCategory = await Category.find();

        res.status(200).json(allCategory);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get individual category
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const individualCategory = await Category.findById(id);

        res.status(200).json(individualCategory);
    } catch (error) {
        res.status(500).json(error);
    }
});

// update category
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const {name} = req.body;

        const categoryToBeUpdated = {name};

        const updatedCategory = await Category.findByIdAndUpdate(id, categoryToBeUpdated, {new : true});

        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(200).json(error);
    }
});

// delete category
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const deletedCategory = await Category.findByIdAndDelete(id);

        res.status(200).json(deletedCategory);
    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router;