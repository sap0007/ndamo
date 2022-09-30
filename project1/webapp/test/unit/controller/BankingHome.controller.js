/*global QUnit*/

sap.ui.define([
	"ndkpcom/project1/controller/BankingHome.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BankingHome Controller");

	QUnit.test("I should test the BankingHome controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
