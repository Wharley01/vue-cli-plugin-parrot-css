const chalk = require("chalk");

//vue-cli-service generate-routes
module.exports = api => {
    api.extendPackage({
        dependencies: {
            "chalk": "^2.4.2",
        }
    });

    api.render("../template");
    api.exitLog("parrot css successfully installed \n","done");

    api.onCreateComplete(() => {
        console.log(chalk.blue.bold("\n\n >> include ./src/assets/parrot/styles.css in your app.vue \n"));
    })



};
