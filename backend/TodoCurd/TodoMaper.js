const { model } = require("mongoose");

module.exports = (modelName, req) => {
    const body = req.body;
    if (body.todo)
        modelName.todo = body.todo
    if (body.checked === "true")
        modelName.checked = true
    if (body.checked === "false")
        modelName.checked = false


}