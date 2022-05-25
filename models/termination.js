const moment = require("moment");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const { intersection } = require("lodash");
const coreModel = require("./../core/models");

module.exports = (sequelize, DataTypes) => {
  const Termination = sequelize.define(
    "termination",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      termination_message: DataTypes.STRING,
      termination_counter: DataTypes.INTEGER,
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "termination",
    },
    {
      underscoredAll: false,
      underscored: false,
    }
  );

  coreModel.call(this, Termination);

  Termination._preCreateProcessing = function (data) {
    return data;
  };
  Termination._postCreateProcessing = function (data) {
    return data;
  };
  Termination._customCountingConditions = function (data) {
    return data;
  };

  Termination._filterAllowKeys = function (data) {
    let cleanData = {};
    let allowedFields = Termination.allowFields();
    allowedFields.push(Termination._primaryKey());

    for (const key in data) {
      if (allowedFields.includes(key)) {
        cleanData[key] = data[key];
      }
    }
    return cleanData;
  };

  Termination.timeDefaultMapping = function () {
    let results = [];
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 60; j++) {
        let hour = i < 10 ? "0".i : i;
        let min = j < 10 ? "0".j : j;
        results[i * 60 + j] = `${hour}:${min}`;
      }
    }
    return results;
  };
  Termination.associate = function (models) {};

  Termination.allowFields = function () {
    return ["id", "termination_message", "termination_counter"];
  };
  Termination.labels = function () {
    return ["ID", "Termination Message", "Termination Counter"];
  };
  Termination.validationRules = function () {
    return [
      ["id", "ID", ""],
      ["termination_message", "Termination Message", ""],
      ["termination_counter", "Termination Counter", ""],
    ];
  };

  Termination.validationEditRules = function () {
    return [
      ["id", "ID", ""],
      ["termination_message", "Termination Message", ""],
      ["termination_counter", "Termination Counter", ""],
    ];
  };

  // ex
  Termination.intersection = function (fields) {
    if (fields) {
      return intersection(
        ["id", "termination_message", "termination_counter"],
        Object.keys(fields)
      );
    } else return [];
  };

  return Termination;
};
