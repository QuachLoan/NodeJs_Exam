const {addTreeService,getAllTreeService,resetTreeService} = require("../services/tree.service");


exports.addTree = async (req, res) => {
    try {
        const data = req.body;

        const tree = await addTreeService(data);

        res.status(201).json({
            message: "Add tree successfully",
            data: tree
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


exports.getAllTree = async (req, res) => {
    try {
        const trees = await getAllTreeService();

        res.status(200).json(trees);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


exports.resetTree = async (req, res) => {
    try {
        await resetTreeService();

        res.status(200).json({
            message: "Reset successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};