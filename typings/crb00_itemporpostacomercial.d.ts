/// <reference path="../node_modules/@types/xrm/index.d.ts" />
declare namespace Crb00_itemporpostacomercialEnum {
    const enum statuscode {
        AtivoA = 1,
        InativoA = 2,
    }

    const enum crb00_disciplinaitemdecontrato {
        Arquitetura = 100000000,
        Estruturas = 100000001,
        Mecanica = 100000002,
        Sistemas = 100000003,
        Eletrica = 100000004,
        Intergracao = 100000005,
        Civil = 100000006,
        Telecomunicacoes = 100000007,
        Processos = 100000008,
        Planejamento = 100000009,
    }

    const enum crb00_unidadeitemdecontrato {
        A0 = 0,
        A1 = 1,
        A2 = 2,
        A3 = 3,
        A4 = 4,
        _10a4 = 5,
        Hh = 6,
        Vb = 7,
        Un = 8,
    }

    const enum new_disciplina {
        Arquitetura = 100000000,
        Estruturas = 100000001,
        Mecanica = 100000002,
        Sistemas = 100000003,
        Eletrica = 100000004,
        Intergracao = 100000005,
        Civil = 100000006,
        Telecomunicacoes = 100000007,
        Processos = 100000008,
        Planejamento = 100000009,
    }

    const enum new_unidade {
        A0 = 0,
        A1 = 1,
        A2 = 2,
        A3 = 3,
        A4 = 4,
        _10a4 = 5,
        Hh = 6,
        Vb = 7,
        Un = 8,
    }

    const enum statecode {
        AtivoA = 0,
        InativoA = 1,
    }

}

declare namespace Xrm {
    type Crb00_itemporpostacomercial = Omit<FormContext, 'getAttribute'> & Omit<FormContext, 'getControl'> & Crb00_itemporpostacomercialAttributes;

    interface EventContext {
        getFormContext(): Crb00_itemporpostacomercial;
    }

    interface Crb00_itemporpostacomercialAttributes {
        getAttribute(name: "crb00_area"): Attributes.StringAttribute;
        getAttribute(name: "crb00_areacontrato"): Attributes.LookupAttribute;
        getAttribute(name: "crb00_areacontratoname"): Attributes.StringAttribute;
        getAttribute(name: "crb00_descricao"): Attributes.StringAttribute;
        getAttribute(name: "crb00_disciplinaitemdecontrato"): Attributes.OptionSetAttribute;
        getAttribute(name: "crb00_equipamentoousubarea"): Attributes.LookupAttribute;
        getAttribute(name: "crb00_equipamentoousubareaname"): Attributes.StringAttribute;
        getAttribute(name: "crb00_equivalentea1"): Attributes.NumberAttribute;
        getAttribute(name: "crb00_equivalentea4"): Attributes.NumberAttribute;
        getAttribute(name: "crb00_itemdecontrato"): Attributes.LookupAttribute;
        getAttribute(name: "crb00_itemdecontratoname"): Attributes.StringAttribute;
        getAttribute(name: "crb00_itemporpostacomercialid"): Attributes.StringAttribute;
        getAttribute(name: "crb00_percentual"): Attributes.NumberAttribute;
        getAttribute(name: "crb00_proposta"): Attributes.LookupAttribute;
        getAttribute(name: "crb00_propostaname"): Attributes.StringAttribute;
        getAttribute(name: "crb00_quantidade"): Attributes.NumberAttribute;
        getAttribute(name: "crb00_tipodedocumento"): Attributes.LookupAttribute;
        getAttribute(name: "crb00_tipodedocumentoname"): Attributes.StringAttribute;
        getAttribute(name: "crb00_total"): Attributes.NumberAttribute;
        getAttribute(name: "crb00_unidadeitemdecontrato"): Attributes.OptionSetAttribute;
        getAttribute(name: "crb00_valor"): Attributes.NumberAttribute;
        getAttribute(name: "crb00_valoritemdecontrato"): Attributes.NumberAttribute;
        getAttribute(name: "createdby"): Attributes.LookupAttribute;
        getAttribute(name: "createdbyname"): Attributes.StringAttribute;
        getAttribute(name: "createdbyyominame"): Attributes.StringAttribute;
        getAttribute(name: "createdon"): Attributes.DateAttribute;
        getAttribute(name: "createdonbehalfby"): Attributes.LookupAttribute;
        getAttribute(name: "createdonbehalfbyname"): Attributes.StringAttribute;
        getAttribute(name: "createdonbehalfbyyominame"): Attributes.StringAttribute;
        getAttribute(name: "exchangerate"): Attributes.NumberAttribute;
        getAttribute(name: "importsequencenumber"): Attributes.NumberAttribute;
        getAttribute(name: "modifiedby"): Attributes.LookupAttribute;
        getAttribute(name: "modifiedbyname"): Attributes.StringAttribute;
        getAttribute(name: "modifiedbyyominame"): Attributes.StringAttribute;
        getAttribute(name: "modifiedon"): Attributes.DateAttribute;
        getAttribute(name: "modifiedonbehalfby"): Attributes.LookupAttribute;
        getAttribute(name: "modifiedonbehalfbyname"): Attributes.StringAttribute;
        getAttribute(name: "modifiedonbehalfbyyominame"): Attributes.StringAttribute;
        getAttribute(name: "new_contrato"): Attributes.LookupAttribute;
        getAttribute(name: "new_contratoname"): Attributes.StringAttribute;
        getAttribute(name: "new_disciplina"): Attributes.OptionSetAttribute;
        getAttribute(name: "new_unidade"): Attributes.OptionSetAttribute;
        getAttribute(name: "new_valoritemdecontrato"): Attributes.NumberAttribute;
        getAttribute(name: "overriddencreatedon"): Attributes.DateAttribute;
        getAttribute(name: "ownerid"): Attributes.LookupAttribute;
        getAttribute(name: "owneridname"): Attributes.StringAttribute;
        getAttribute(name: "owneridtype"): Attributes.Attribute;
        getAttribute(name: "owneridyominame"): Attributes.StringAttribute;
        getAttribute(name: "owningbusinessunit"): Attributes.LookupAttribute;
        getAttribute(name: "owningbusinessunitname"): Attributes.StringAttribute;
        getAttribute(name: "owningteam"): Attributes.LookupAttribute;
        getAttribute(name: "owninguser"): Attributes.LookupAttribute;
        getAttribute(name: "statecode"): Attributes.OptionSetAttribute;
        getAttribute(name: "statuscode"): Attributes.OptionSetAttribute;
        getAttribute(name: "timezoneruleversionnumber"): Attributes.NumberAttribute;
        getAttribute(name: "transactioncurrencyid"): Attributes.LookupAttribute;
        getAttribute(name: "transactioncurrencyidname"): Attributes.StringAttribute;
        getAttribute(name: "utcconversiontimezonecode"): Attributes.NumberAttribute;
        getAttribute(name: "versionnumber"): Attributes.NumberAttribute;
        getControl(name: "crb00_area"): Controls.StringControl;
        getControl(name: "crb00_areacontrato"): Controls.LookupControl;
        getControl(name: "crb00_areacontratoname"): Controls.StringControl;
        getControl(name: "crb00_descricao"): Controls.StringControl;
        getControl(name: "crb00_disciplinaitemdecontrato"): Controls.OptionSetControl;
        getControl(name: "crb00_equipamentoousubarea"): Controls.LookupControl;
        getControl(name: "crb00_equipamentoousubareaname"): Controls.StringControl;
        getControl(name: "crb00_equivalentea1"): Controls.NumberControl;
        getControl(name: "crb00_equivalentea4"): Controls.NumberControl;
        getControl(name: "crb00_itemdecontrato"): Controls.LookupControl;
        getControl(name: "crb00_itemdecontratoname"): Controls.StringControl;
        getControl(name: "crb00_itemporpostacomercialid"): Controls.StringControl;
        getControl(name: "crb00_percentual"): Controls.NumberControl;
        getControl(name: "crb00_proposta"): Controls.LookupControl;
        getControl(name: "crb00_propostaname"): Controls.StringControl;
        getControl(name: "crb00_quantidade"): Controls.NumberControl;
        getControl(name: "crb00_tipodedocumento"): Controls.LookupControl;
        getControl(name: "crb00_tipodedocumentoname"): Controls.StringControl;
        getControl(name: "crb00_total"): Controls.NumberControl;
        getControl(name: "crb00_unidadeitemdecontrato"): Controls.OptionSetControl;
        getControl(name: "crb00_valor"): Controls.NumberControl;
        getControl(name: "crb00_valoritemdecontrato"): Controls.NumberControl;
        getControl(name: "createdby"): Controls.LookupControl;
        getControl(name: "createdbyname"): Controls.StringControl;
        getControl(name: "createdbyyominame"): Controls.StringControl;
        getControl(name: "createdon"): Controls.DateControl;
        getControl(name: "createdonbehalfby"): Controls.LookupControl;
        getControl(name: "createdonbehalfbyname"): Controls.StringControl;
        getControl(name: "createdonbehalfbyyominame"): Controls.StringControl;
        getControl(name: "exchangerate"): Controls.NumberControl;
        getControl(name: "importsequencenumber"): Controls.NumberControl;
        getControl(name: "modifiedby"): Controls.LookupControl;
        getControl(name: "modifiedbyname"): Controls.StringControl;
        getControl(name: "modifiedbyyominame"): Controls.StringControl;
        getControl(name: "modifiedon"): Controls.DateControl;
        getControl(name: "modifiedonbehalfby"): Controls.LookupControl;
        getControl(name: "modifiedonbehalfbyname"): Controls.StringControl;
        getControl(name: "modifiedonbehalfbyyominame"): Controls.StringControl;
        getControl(name: "new_contrato"): Controls.LookupControl;
        getControl(name: "new_contratoname"): Controls.StringControl;
        getControl(name: "new_disciplina"): Controls.OptionSetControl;
        getControl(name: "new_unidade"): Controls.OptionSetControl;
        getControl(name: "new_valoritemdecontrato"): Controls.NumberControl;
        getControl(name: "overriddencreatedon"): Controls.DateControl;
        getControl(name: "ownerid"): Controls.LookupControl;
        getControl(name: "owneridname"): Controls.StringControl;
        getControl(name: "owneridtype"): Controls.Control;
        getControl(name: "owneridyominame"): Controls.StringControl;
        getControl(name: "owningbusinessunit"): Controls.LookupControl;
        getControl(name: "owningbusinessunitname"): Controls.StringControl;
        getControl(name: "owningteam"): Controls.LookupControl;
        getControl(name: "owninguser"): Controls.LookupControl;
        getControl(name: "statecode"): Controls.OptionSetControl;
        getControl(name: "statuscode"): Controls.OptionSetControl;
        getControl(name: "timezoneruleversionnumber"): Controls.NumberControl;
        getControl(name: "transactioncurrencyid"): Controls.LookupControl;
        getControl(name: "transactioncurrencyidname"): Controls.StringControl;
        getControl(name: "utcconversiontimezonecode"): Controls.NumberControl;
        getControl(name: "versionnumber"): Controls.NumberControl;
    }

}

