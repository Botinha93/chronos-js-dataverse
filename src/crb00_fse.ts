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
        parameters["crb00_titulo"] = ld["crb00_titulodocumento"];
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
function addMinutes(date : Date, minutes : number) {
    return new Date(date.getTime() + minutes*60000);
}
async function CalcularPred(ids : Array<string>){
    Xrm.Utility.showProgressIndicator("Atualizando datas")
    var arrayPred = new Map<number,{valor : any, percorrido : boolean, update : any}>();
    for (let index = 0; index < ids.length; index++) {
        const id = ids[index];
        var pred : {valor : any, percorrido : boolean, update : any} = {valor : await Xrm.WebApi.retrieveRecord("crb00_newtable2", id), percorrido : false, update : {}}
        console.log(pred)
        Xrm.Utility.showProgressIndicator("Recuperando Predeceções")
        if(pred.valor["crb00_predecessao"] == null || pred.valor["crb00_predecessao"] === "" && pred.valor["crb00_datareal"] == null || pred.valor["crb00_datareal"] === ""){
            var ld = await Xrm.WebApi.retrieveRecord("crb00_fse_listadedocumentos", pred.valor["_crb00_itemdald_value"].replace(/[{}]/g, ""));
            var itemprop = await Xrm.WebApi.retrieveRecord("crb00_itemporpostacomercial", ld["_crb00_itemdaproposta_value"].replace(/[{}]/g, ""));
            var proposta = await Xrm.WebApi.retrieveRecord("crb00_propostacomercial", itemprop["_crb00_proposta_value"].replace(/[{}]/g, ""));
            pred.valor["crb00_datafim"] = addMinutes(new Date(proposta["crb00_datadeinicioestimada"]), pred.valor["crb00_duracao"]);
            pred.update["crb00_datafim"] = pred.valor["crb00_datafim"]
            pred.percorrido =true;
        }
        arrayPred.set(pred.valor["crb00_item"],pred);
    }
    Xrm.Utility.showProgressIndicator("Calculando estimativas de fim")
    arrayPred.forEach(function(value, key) {
        recursivePred(key,arrayPred);
        var ld = {"crb00_dataprevista" : value.valor["crb00_datafim"] } 
        Xrm.WebApi.updateRecord("crb00_fse_listadedocumentos", value.valor["_crb00_itemdald_value"].replace(/[{}]/g, ""), ld);
        Xrm.WebApi.updateRecord("crb00_newtable2", value.valor["crb00_newtable2id"].replace(/[{}]/g, ""), value.update);
    })
    Xrm.Utility.closeProgressIndicator()
    Xrm.Page.data.refresh(true)
}
function recursivePred(anterior : number, arrayPred : Map<number,{valor : any, percorrido : boolean, update : any}>){
    if(!arrayPred.get(anterior)!.percorrido){
        var predecessoes = (<string> arrayPred.get(anterior)!.valor["crb00_predecessao"]).split(',').map((item: string)=>item.replace(/\D/g,''));
        for (let index = 0; index < predecessoes.length; index++) {
            const pred = arrayPred.get(Number.parseInt(predecessoes[index]));
            if(pred != undefined){
                if(pred!.valor["crb00_predecessao"] != null || pred!.valor["crb00_predecessao"] !== ""){
                    recursivePred(pred!.valor["crb00_item"],arrayPred);
                }
                arrayPred.get(anterior)!.valor["crb00_datafim"] = addMinutes(new Date(pred!.valor["crb00_datafim"]), pred!.valor["crb00_duracao"]);
                arrayPred.get(anterior)!.update["crb00_datafim"] = arrayPred.get(anterior)!.valor["crb00_datafim"];
                console.log(arrayPred.get(anterior)!.valor["crb00_datafim"])
                arrayPred.get(anterior)!.percorrido = true;
            }
        }
    }
}
function updateAndamento(executionContext : Xrm.Events.EventContext) {
    var formContext = executionContext.getFormContext();
    Xrm.WebApi.retrieveRecord("crb00_tipodedocumentofse", formContext.getAttribute("crb00_documentofse").getValue()[0].id.replace(/[{}]/g, "")).then(function(fse :any){
        formContext.getAttribute("crb00_codigofse").setValue(fse["crb00_sigla"]);
        formContext.getAttribute("crb00_duracao").setValue(fse["crb00_duracao"]);
        formContext.getAttribute("crb00_nome").setValue(fse["crb00_nome"]);
    })
}
function documentoFSE(executionContext : Xrm.Events.EventContext) {
    var formContext = executionContext.getFormContext();
    Xrm.WebApi.retrieveRecord("crb00_tipodedocumentofse", formContext.getAttribute("crb00_documentofse").getValue()[0].id.replace(/[{}]/g, "")).then(function(fse :any){
        formContext.getAttribute("crb00_codigofse").setValue(fse["crb00_sigla"]);
        formContext.getAttribute("crb00_duracao").setValue(fse["crb00_duracao"]);
        formContext.getAttribute("crb00_nome").setValue(fse["crb00_nome"]);
    })
}
async function gerarBM(primaryControl :Xrm.FormContext) {
    var formContext = primaryControl;    
    var lds = await Xrm.WebApi.retrieveRecord("crb00_fse_listadedocumentos", pred.valor["_crb00_itemdald_value"].replace(/[{}]/g, ""));
    var itemprop = await Xrm.WebApi.retrieveRecord("crb00_itemporpostacomercial", ld["_crb00_itemdaproposta_value"].replace(/[{}]/g, ""));
    var proposta = await Xrm.WebApi.retrieveRecord("crb00_propostacomercial", itemprop["_crb00_proposta_value"].replace(/[{}]/g, ""));
}
//# sourceMappingURL=fse.js.map