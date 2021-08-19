'use strict';

const mysql = require('Mysql');
const db = require('../config/db');

const connectionPool = {

    pool: null,

    init: function () {
        this.pool = mysql.createPool(db);
    },

    getPool: function () {
        return this.pool;
    }
}

module.exports = connectionPool;