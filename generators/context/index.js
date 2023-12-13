const path = require("path");
const fs = require("fs");

const featuresDir = path.join(process.cwd(), "src/features");
const features = fs.readdirSync(featuresDir);

module.exports = {
    description: 'Create a context for the feature.',
    prompts: [
        {
            type: "list",
            name: "feature",
            message: "Which feature this context belong to?",
            choices: [...features]
        },
    ],
    actions: (answers) => {
        const componentGeneratePath = "src/features/{{feature}}/context";
        return [
            {
                type: "add",
                path: componentGeneratePath + "/index.tsx",
                templateFile: "generators/context/context.tsx.hbs",
            }
        ];
    }
}