const components = require('../../database/db.components');

const getComponents = async (req, res) => {
    if (req.params) console.log(req.params);
    const { component } = req.params;
    
    try {
        const response = await components.getComponents(component);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postComponents = async (req, res) => {
    console.log(req.body);
    const { component, description, quantity } = req.body;
    
    try {
        const response = await components.postComponents(component, description, quantity);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateComponents = async (req, res) => {
    console.log(req.body);
    const { component, new_description, new_quantity } = req.body;
    
    try {
        const response = await components.updateComponents(component, new_description, new_quantity);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getComponents,
    postComponents,
    updateComponents
};