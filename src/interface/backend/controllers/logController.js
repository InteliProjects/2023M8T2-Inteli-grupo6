const logging = require('../../logger/logging');

const postlog = async (req, res) => {
    const { log } = req.body;
    console.log(req.body);
    
    try {
        const response = await logging.postlog(log);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    postlog
};