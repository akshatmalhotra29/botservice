let HDI = {};

HDI.query = function (db, query, parameters) {
	return new Promise(function (resolve, reject) {
		db.prepare(query, function (prepareErr, statement) {
			if (prepareErr) {
				return reject(prepareErr);
			}
			statement.exec(parameters, function (statementErr, results) {
				if (statementErr) {
					return reject(statementErr);
				}
				return resolve(results);
			});
		});
	});
};

HDI.dbCheck = function (req, res) {
	HDI.query(req.db, "SELECT CURRENT_DATE FROM DUMMY", []).then(function (data) {
		res.status(200).send(data);
	}).catch(function (err) {
		res.status(500).send(err);
	});
};

module.exports = HDI;