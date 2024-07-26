"use strict";
function SetValuesProposta(executionContext : Xrm.Events.EventContext) {
    var formContext = executionContext.getFormContext();
    var entityId = formContext.getAttribute("crb00_itemdecontrato").getValue()[0].id.slice(1, -1);
    if (entityId !== null) {
        Xrm.WebApi.retrieveRecord("crb00_itensdecontrato", entityId).then(function success(result) {
            if (result !== null) {
                console.log(result);
                formContext.getAttribute("new_unidade").setValue(result["new_unidade"]);
                formContext.getAttribute("new_disciplina").setValue(result["new_disciplina"]);
                formContext.getAttribute("new_valoritemdecontrato").setValue(result["crb00_valor"]);
                ConverterUnidade(executionContext);
            }
        }, function (error) {
            alert(error.message);
        });
    }
}
function SalvaPropostaServico(executionContext : Xrm.Events.EventContext) {
    var formContext = executionContext.getFormContext();
    var contrato = formContext.getAttribute("crb00_contrato").getValue();
    if (contrato !== null || contrato == "") {
        formContext.data.save();
    }
}
function ConverterUnidade(executionContext : Xrm.Events.EventContext) {
    var formContext = executionContext.getFormContext();
    var unidade = formContext.getAttribute("new_unidade").getValue();
    if (unidade === 0) {
        formContext.getAttribute("crb00_equivalentea1").setValue(2 * formContext.getAttribute("crb00_quantidade").getValue());
    }
    if (unidade === 1) {
        formContext.getAttribute("crb00_equivalentea1").setValue(1 * formContext.getAttribute("crb00_quantidade").getValue());
    }
    if (unidade === 2) {
        formContext.getAttribute("crb00_equivalentea1").setValue(0.5 * formContext.getAttribute("crb00_quantidade").getValue());
    }
    if (unidade === 3) {
        formContext.getAttribute("crb00_equivalentea1").setValue(0.25 * formContext.getAttribute("crb00_quantidade").getValue());
    }
    if (unidade === 4) {
        formContext.getAttribute("crb00_equivalentea1").setValue(0.125 * formContext.getAttribute("crb00_quantidade").getValue());
    }
    if (unidade === 5) {
        formContext.getAttribute("crb00_equivalentea1").setValue(1.250 * formContext.getAttribute("crb00_quantidade").getValue());
    }
}
function CriteriosPadrao(executionContext : Xrm.PageContext) {
    class entity {
        "crb00_Contrato@odata.bind" : string
        "crb00_status" : string
        "crb00_avacofisico" : number
        "crb00_avancofinanceiro" : number
        constructor(contrato : string, status : string, fisico: number, financeiro:number){
            this["crb00_Contrato@odata.bind"] = contrato;
            this.crb00_status = status;
            this.crb00_avancofinanceiro = financeiro;
            this.crb00_avacofisico = fisico;
        }
    }
    var criterios:entity[] = new Array()
    var rec = Xrm.Page.data.entity.getId();
    var record = rec.replace(/[{}]/g,"")
    criterios.push(new entity("/crb00_contratos("+record+")", "Não Iniciado",0,0))
    criterios.push(new entity("/crb00_contratos("+record+")", "Carteira da Disciplina",30,0))
    criterios.push(new entity("/crb00_contratos("+record+")", "Em Elaboração",50,0))
    criterios.push(new entity("/crb00_contratos("+record+")", "Em Verificção",60,0))
    criterios.push(new entity("/crb00_contratos("+record+")", "Emissão",65,0))
    criterios.push(new entity("/crb00_contratos("+record+")", "Aguardando Retorno",75,80))
    criterios.push(new entity("/crb00_contratos("+record+")", "Em revisão",80,80))
    criterios.push(new entity("/crb00_contratos("+record+")", "Aprovado",100,100))
    criterios.push(new entity("/crb00_contratos("+record+")", "Cancelado",0,0))
    criterios.push(new entity("/crb00_contratos("+record+")", "Reprovado",0,0))
    criterios.forEach(element => {
        Xrm.WebApi.createRecord("crb00_newtable1", element).then(
            function success(record) {
                Xrm.Utility.alertDialog("Criterios padrão FSE criados para o contrato", ()=>{});
            },
            function (error) {
                Xrm.Utility.alertDialog(error.message, ()=>{});
            }
        );
    });
}
function OpenTarefaquickCreate(id : string) {
    var parameters : any= {};  
   //Set the Parent Customer column value to "Contoso".  
   parameters["crb00_itemld"] = id.replace(/[{}]/g, "");
   Xrm.WebApi.retrieveRecord("crb00_fse_listadedocumentos", parameters["crb00_itemld"]).then(function(ld :any){
        var entityFormOptions : any = {};
        //_crb00_itemdaproposta_value
        parameters["crb00_itensdocontrato"] = ld["_crb00_itemdocontrato_value"];
        parameters["crb00_contrato"] = ld["_crb00_contrato_value"];
        parameters["crb00_hhacumulado"] = "0";
        entityFormOptions["entityName"] = "crb00_novatabela1";
        entityFormOptions["useQuickCreateForm"] = true;
    
        Xrm.Navigation.openForm(entityFormOptions,parameters).then(
            function (success) {
                console.log(success);
            },
            function (error) {
                console.log(error);
            });
   },function (error) {
        console.log(error);
    });
   //parameters["hsbc_customername"] = "Catalina Bedford";  
   //parameters["hsbc_customertype"] = "contact";  
   //parameters["hsbc_type"] = 768280000; 
  }
function CalculaHora(executionContext : Xrm.Events.EventContext) {
    var formContext = executionContext.getFormContext();
    formContext.getAttribute("crb00_tempo").setValue(Math.abs(formContext.getAttribute("crb00_horainicio").getValue() - formContext.getAttribute("crb00_horafim").getValue()) / 60000);
}
function CalcularPred(ids : Array<string>){
    ids.forEach(function(id){

    })
}
//# sourceMappingURL=fse.js.map