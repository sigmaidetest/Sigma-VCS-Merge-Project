exports.handler = function(event, context, callback) {
    console.log("test");
    callback(null, {"message": "Successfully executed!"});
}