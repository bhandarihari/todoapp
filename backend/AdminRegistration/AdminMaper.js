module.exports = async(modelName, reqData) => {
    const body = reqData.body;
    if (body.firstName)
        modelName.firstName = body.firstName
    if (body.lastName)
        modelName.lastName = body.lastName
    if (body.email)
        modelName.email = body.email
    if (body.password)
        modelName.password = body.password

}