module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define("Todo", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        pulished: {
            type: Sequelize.BOOLEAN
        }
    });

    return Todo;
};