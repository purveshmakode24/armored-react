const componentGenerator1 = require("./generators/component_type_one");
const componentGenerator2 = require("./generators/component_type_two");
const contextGenerator = require("./generators/context");

module.exports = (plop) => {
    plop.setGenerator("component_type_one", componentGenerator1);
    plop.setGenerator("component_type_two", componentGenerator2);
    plop.setGenerator("context", contextGenerator);
}