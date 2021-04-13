sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    'use strict';
    //controla widoku
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onInit: function () {
            //set the data model on the view

            let oData = {
                recipient: {
                    name: "UI5"
                }
            }
            let oModel = new JSONModel(oData)
            this.getView().setModel(oModel)
        },
        onShowHello: function () {
            console.log(this)
            MessageToast.show('hello there')
        }
    });
});