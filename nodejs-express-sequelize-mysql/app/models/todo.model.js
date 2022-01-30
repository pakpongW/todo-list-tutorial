module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define("Todo", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return Todo;
};