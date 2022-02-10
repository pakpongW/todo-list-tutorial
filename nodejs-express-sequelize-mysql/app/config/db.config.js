module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "ryu0816198903",
    DB: "tododb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};