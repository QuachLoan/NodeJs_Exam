const Tree = require("../models/tree.model");

exports.addTreeService = async (data) => {
    const tree = await Tree.create(data);
    return tree;
};

exports.getAllTreeService = async () => {
    const trees = await Tree.find();

    return trees;
};

exports.resetTreeService = async () => {
    await Tree.deleteMany({});
    return true;
};

