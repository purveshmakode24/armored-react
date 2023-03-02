const path = require("path");
const fs = require("fs");

const featuresDir = path.join(process.cwd(), "src/features");
const features = fs.readdirSync(featuresDir);

module.exports = {
    description: 'Create a reusable component [Without CSS]',
    prompts: [
        {
            type: "input",
            name: "name",
            message: "What is this component's name?"
        },
        {
            type: "list",
            name: "feature",
            message: "Which feature this component belong to?",
            choices: ["ROOT", ...features]
        },
    ],
    actions: (answers) => {
        const componentGeneratePath = answers.feature == "ROOT"
            ? "src/components"
            : "src/features/{{feature}}/components";
        return [
            {
                type: "add",
                path: componentGeneratePath + "/{{properCase name}}.tsx",
                templateFile: "generators/component_type_two/Component.tsx.hbs",
            }
        ];
    }
}