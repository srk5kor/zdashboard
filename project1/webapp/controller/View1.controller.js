sap.ui.define([    
    "sap/ui/core/mvc/Controller",
    "../utils/Formatter",
    // 'sap/ui/model/json/JSONModel',
    // 'sap/m/library',
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Formatter) {
        "use strict";
        
        return Controller.extend("project1.controller.View1", {
            Formatter:Formatter,
            onInit: function () {
                
                var sServiceUrl = "/sap/opu/odata/sap/EPM_REF_APpS_PROD_MAN_SRV/"

                var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl)

                this.getView().setModel(oModel)

                var oCRMModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products('HT-1066')?$expand=Supplier&$format=json")
                // new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APpS_PROD_MAN_SRV/Products")

                this.getView().byId("crmcontainer").setModel(oCRMModel, "oCRMModel")

            },

            onAfterRendering(){
                // ecc 
                var oECCModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APpS_PROD_MAN_SRV/Products")

                this.getView().byId("ecccontainer").setModel(oECCModel, "oECCModel")

            },
            onOpenAppDialog: function(oEvent){

                var oView = this.getView()
                var oDialog = oView.byId("ADialog")
                if(!oDialog){
                    oDialog = sap.ui.xmlfragment(oView.getId(), "project1.view.AppDialog", this)
                    oView.addDependent(oDialog);
                }

                oDialog.open()
                           
                var oModel = this.getView().byId('crmcontainer').getModel("oCRMModel")

                oModel.refresh()

                this.getView().setModel(oModel,"oModel");


            },
            onCloseAppDialog: function(){
                var oView = this.getView()
                var oDialog = oView.byId("ADialog")
                if(oDialog){             
                oDialog.close();
                }
            },
            onBeforeRendering(){
                // ecc 
                var oBTWModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APpS_PROD_MAN_SRV/Products")

                this.getView().byId("btwcontainer").setModel(oBTWModel, "oBTWModel")

            }
        });
    });
