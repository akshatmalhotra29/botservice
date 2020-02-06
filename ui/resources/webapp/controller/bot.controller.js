sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.bot.ui.controller.bot", {
		onInit: function () {
			jQuery.ajax({
				url: "https://sapbpcbw.c.eu-nl-1.cloud.sap:51069",
				method: "POST",
				cache: false,
				headers:{
					"Access-Control-Allow-Origin":"*"
				},
				success: function(response) {

				},
				error: function(e) {

				}
			});
		}
	});
});