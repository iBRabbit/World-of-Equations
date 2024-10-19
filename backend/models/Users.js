module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name : {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone_number : {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        is_admin : {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        profile_picture : {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return Users;
};