
sap.ui.define([
"sap/ui/core/mvc/XMLView"
], function (XMLView){
  'use strict';


  //tworzenie widoku XML
  XMLView.create({ 
    viewName: "sap.ui.demo.walkthrough.view.App"  //wskazuje który XML wyświetlić
  }).then(function (oView) {
    oView.placeAt("content") //gdzie umieścić
  });
})  
