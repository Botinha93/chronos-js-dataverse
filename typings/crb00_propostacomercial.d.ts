/// <reference path="../node_modules/@types/xrm/index.d.ts" />
declare namespace Crb00_propostacomercialEnum {
    const enum statuscode {
        AguardandoAprovaO = 1,
        Cancelado = 2,
        EmRevisO = 117070001,
        Aprovada = 117070003,
    }

    const enum statecode {
        AtivoA = 0,
        InativoA = 1,
    }

}

declare namespace Xrm {
    type Crb00_propostacomercial = Omit<FormContext, 'getAttribute'> & Omit<FormContext, 'getControl'> & Crb00_propostacomercialAttributes;

    interface EventContext {
        getFormContext(): Crb00_propostacomercial;
    }

    interface Crb00_propostacomercialAttributes {
        getAttribute(name: "crb00_aprovar"): Attributes.BooleanAttribute;
        getAttribute(name: "crb00_areafisica"): Attributes.LookupAttribute;
        getAttribute(name: "crb00_areafisicaname"): Attributes.StringAttribute;
        getAttribute(name: "crb00_cliente"): Attributes.LookupAttribute;
        getAttribute(name: "crb00_clienteidtype"): Attributes.Attribute;
        getAttribute(name: "crb00_clientename"): Attributes.StringAttribute;
        getAttribute(name: "crb00_clienteyominame"): Attributes.StringAttribute;
        getAttribute(name: "crb00_contrato"): Attributes.LookupAttribute;
        getAttribute(name: "crb00_contratoname"): Attributes.StringAttribute;
        getAttribute(name: "crb00_datadeinicioestimada"): Attributes.DateAttribute;
        getAttribute(name: "crb00_foradeescopo"): Attributes.StringAttribute;
        getAttribute(name: "crb00_propostacomercial"): Attributes.StringAttribute;
        getAttribute(name: "crb00_propostacomercialid"): Attributes.StringAttribute;
        getAttribute(name: "crb00_resumoescopo"): Attributes.StringAttribute;
        getAttribute(name: "crb00_titulo"): Attributes.StringAttribute;
        getAttribute(name: "crb00_total"): Attributes.NumberAttribute;
        getAttribute(name: "crb00_total_date"): Attributes.DateAttribute;
        getAttribute(name: "crb00_total_state"): Attributes.NumberAttribute;
        getAttribute(name: "crb00_unidadeoperacional"): Attributes.LookupAttribute;
        getAttribute(name: "crb00_unidadeoperacionalname"): Attributes.StringAttribute;
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
        getControl(name: "crb00_aprovar"): Controls.StandardControl;
        getControl(name: "crb00_areafisica"): Controls.LookupControl;
        getControl(name: "crb00_areafisicaname"): Controls.StringControl;
        getControl(name: "crb00_cliente"): Controls.LookupControl;
        getControl(name: "crb00_clienteidtype"): Controls.Control;
        getControl(name: "crb00_clientename"): Controls.StringControl;
        getControl(name: "crb00_clienteyominame"): Controls.StringControl;
        getControl(name: "crb00_contrato"): Controls.LookupControl;
        getControl(name: "crb00_contratoname"): Controls.StringControl;
        getControl(name: "crb00_datadeinicioestimada"): Controls.DateControl;
        getControl(name: "crb00_foradeescopo"): Controls.StringControl;
        getControl(name: "crb00_propostacomercial"): Controls.StringControl;
        getControl(name: "crb00_propostacomercialid"): Controls.StringControl;
        getControl(name: "crb00_resumoescopo"): Controls.StringControl;
        getControl(name: "crb00_titulo"): Controls.StringControl;
        getControl(name: "crb00_total"): Controls.NumberControl;
        getControl(name: "crb00_total_date"): Controls.DateControl;
        getControl(name: "crb00_total_state"): Controls.NumberControl;
        getControl(name: "crb00_unidadeoperacional"): Controls.LookupControl;
        getControl(name: "crb00_unidadeoperacionalname"): Controls.StringControl;
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

