const router = require("express").Router();
//const auth = require("../lib/auth");
const dbHelper = require("../lib/db");
const botResponse = require("../lib/botresponse");

// Base Authorization check to use app
//router.use(auth.checkScope("USER"));

// Auth check
//router.get("/auth", auth.getInfo);

// DB check
router.get("/db", dbHelper.dbCheck);

// Un-Scoped APIs
router.post("/totsales", (req, res) => {
	let entities=req.body.nlp.entities;
	let kpi = entities.kpi[0].raw;
	if(kpi==="sales"){
	kpi="netwr";
	}
	else if(kpi==="quantity"){
	kpi="ntgew";
	}
	let query = "select sum("+kpi+")"+" as \"sales\"" +" from \"SalesBot.db.data::zsales\"";
	dbHelper.query(req.db, query, []).then(data => {
		botResponse.sendTextReply(res,"Total sales is: "+data[0].sales);
	}).catch(err => {
		res.status(500).send({
			error: err
		});
	});
});


// Scoped API Routes
//router.use("/customer", auth.checkScope("CUSTOMER"), require("./Customer"));
//router.use("/vendor", auth.checkScope("VENDOR"), require("./Vendor"));
//router.use("/admin", auth.checkScope("ADMIN"), require("./Admin"));

// Global Error handler
router.use((error, req, res, next) => {
	if (error) {
		return res.status(500).send({
			message: "Internal Server Error",
			error: error
		});
	} else {
		return res.status(404).send("Not Found.");
	}
});

module.exports = router;