"use strict";

const { DataTypes, Sequelize, Model } = require("sequelize");

class Produce extends Model {}

async function initDatabase() {
	const { MYSQL_DB, MYSQL_USER, MYSQL_PW, MYSQL_HOST } = process.env;
	const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PW, {
		dialect: "mysql",
		host: MYSQL_HOST,
	});

	Produce.init(
		{
			name: DataTypes.STRING,
			color: DataTypes.STRING,
			type: DataTypes.STRING,
		},
		{
			sequelize,
		}
	);

	return sequelize;
}

module.exports = exports = { Produce, initDatabase };
