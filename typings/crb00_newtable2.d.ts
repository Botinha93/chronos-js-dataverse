/// <reference path="../node_modules/@types/xrm/index.d.ts" />
declare namespace Crb00_newtable2Enum {
    const enum statuscode {
        AtivoA = 1,
        InativoA = 2,
    }

    const enum statecode {
        AtivoA = 0,
        InativoA = 1,
    }

}

declare namespace Xrm {
    type Crb00_newtable2 = Omit<FormContext, 'getAttribute'> & Omit<FormContext, 'getControl'> & Crb00_newtable2Attributes;

    interface EventContext {
        getFormContext(): Crb00_newtable2;
    }

    interface Crb00_newtable2Attributes {
        getAttribute(name: "crb00_datafim"): Attributes.DateAttribute;
        getAttribute(name: "crb00_datareal"): Attributes.StringAttribute;
        getAttribute(name: "crb00_duracao"): Attributes.StringAttribute;
        getAttribute(name: "crb00_item"): Attributes.NumberAttribute;
        getAttribute(name: "crb00_itemdald"): Attributes.LookupAttribute;
        getAttribute(name: "crb00_itemdaldname"): Attributes.StringAttribute;
        getAttribute(name: "crb00_newtable2id"): Attributes.StringAttribute;
        getAttribute(name: "crb00_plano"): Attributes.LookupAttribute;
        getAttribute(name: "crb00_planoname"): Attributes.StringAttribute;
        getAttribute(name: "crb00_precede"): Attributes.LookupAttribute;
        getAttribute(name: "crb00_precedename"): Attributes.StringAttribute;
        getAttribute(name: "crb00_predecessao"): Attributes.StringAttribute;
        getAttribute(name: "crb00_projeto"): Attributes.LookupAttribute;
        getAttribute(name: "crb00_projetoname"): Attributes.StringAttribute;
        getAttribute(name: "crb00_tipodedocumento"): Attributes.LookupAttribute;
        getAttribute(name: "crb00_tipodedocumentoname"): Attributes.StringAttribute;
        getAttribute(name: "createdby"): Attributes.LookupAttribute;
        getAttribute(name: "createdbyname"): Attributes.StringAttribute;
        getAttribute(name: "createdbyyominame"): Attributes.StringAttribute;
        getAttribute(name: "createdon"): Attributes.DateAttribute;
        getAttribute(name: "createdonbehalfby"): Attributes.LookupAttribute;
        getAttribute(name: "createdonbehalfbyname"): Attributes.StringAttribute;
        getAttribute(name: "createdonbehalfbyyominame"): Attributes.StringAttribute;
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
        getAttribute(name: "utcconversiontimezonecode"): Attributes.NumberAttribute;
        getAttribute(name: "versionnumber"): Attributes.NumberAttribute;
        getControl(name: "crb00_datafim"): Controls.DateControl;
        getControl(name: "crb00_datareal"): Controls.StringControl;
        getControl(name: "crb00_duracao"): Controls.StringControl;
        getControl(name: "crb00_item"): Controls.NumberControl;
        getControl(name: "crb00_itemdald"): Controls.LookupControl;
        getControl(name: "crb00_itemdaldname"): Controls.StringControl;
        getControl(name: "crb00_newtable2id"): Controls.StringControl;
        getControl(name: "crb00_plano"): Controls.LookupControl;
        getControl(name: "crb00_planoname"): Controls.StringControl;
        getControl(name: "crb00_precede"): Controls.LookupControl;
        getControl(name: "crb00_precedename"): Controls.StringControl;
        getControl(name: "crb00_predecessao"): Controls.StringControl;
        getControl(name: "crb00_projeto"): Controls.LookupControl;
        getControl(name: "crb00_projetoname"): Controls.StringControl;
        getControl(name: "crb00_tipodedocumento"): Controls.LookupControl;
        getControl(name: "crb00_tipodedocumentoname"): Controls.StringControl;
        getControl(name: "createdby"): Controls.LookupControl;
        getControl(name: "createdbyname"): Controls.StringControl;
        getControl(name: "createdbyyominame"): Controls.StringControl;
        getControl(name: "createdon"): Controls.DateControl;
        getControl(name: "createdonbehalfby"): Controls.LookupControl;
        getControl(name: "createdonbehalfbyname"): Controls.StringControl;
        getControl(name: "createdonbehalfbyyominame"): Controls.StringControl;
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
        getControl(name: "utcconversiontimezonecode"): Controls.NumberControl;
        getControl(name: "versionnumber"): Controls.NumberControl;
    }

}

