const publish = require('../nodes/robot.js');

const getllm = async (req, res) => {
    if (req.params) console.log(req.params);
    const { outputResponse } = req.params;
    
    try {
        outputResponse = await outputResponse.getllm(outputResponse);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postLLM = async (req, res) => {
    const msg = req.body.msg;


    try {
        publish(msg);
        res.json({message:msg})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

module.exports = {
    postLLM,
};