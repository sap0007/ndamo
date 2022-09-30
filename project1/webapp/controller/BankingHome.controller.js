sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("nd.kp.com.project1.controller.BankingHome", {
            onInit: function () {

            },
            onPress : function(){
                alert("ok done");
            }
        });
    });
