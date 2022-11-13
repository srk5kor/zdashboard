sap.ui.define([    
    "sap/ui/core/mvc/Controller",
    './Formatter',
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Formatter) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            Formatter:Formatter,
            onInit: function () {
                
                var sServiceUrl = "/sap/opu/odata/sap/EPM_REF_APpS_PO_APV_SRV/"

                var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl)

                this.getView().setModel(oModel)

                var oCRMModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APpS_PROD_MAN_SRV/Products")

                this.getView().byId("crmcontainer").setModel(oCRMModel, "oCRMModel")

            },

            onAfterRendering(){
                // ecc 
                var oECCModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APpS_PROD_MAN_SRV/Products")

                this.getView().byId("ecccontainer").setModel(oECCModel, "oECCModel")

            },
            onBeforeRendering(){
                // ecc 
                var oBTWModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APpS_PROD_MAN_SRV/Products")

                this.getView().byId("btwcontainer").setModel(oBTWModel, "oBTWModel")

            }
        });
    });
