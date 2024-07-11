/// <reference path="../node_modules/@types/xrm/index.d.ts" />
declare namespace Crb00_newtable1Enum {
    const enum statecode {
        AtivoA = 0,
        InativoA = 1,
    }

    const enum statuscode {
        AtivoA = 1,
        InativoA = 2,
    }

}

declare namespace Xrm {
    type Crb00_newtable1 = Omit<FormContext, 'getAttribute'> & Omit<FormContext, 'getControl'> & Crb00_newtable1Attributes;

    interface EventContext {
        getFormContext(): Crb00_newtable1;
    }

    interface Crb00_newtable1Attributes {
        getAttribute(name: "crb00_avacofisico"): Attributes.NumberAttribute;
        getAttribute(name: "crb00_avancofinanceiro"): Attributes.NumberAttribute;
        getAttribute(name: "crb00_contrato"): Attributes.LookupAttribute;
        getAttribute(name: "crb00_contratoname"): Attributes.StringAttribute;
        getAttribute(name: "crb00_diasparadecursodeprazo"): Attributes.StringAttribute;
        getAttribute(name: "crb00_newtable1id"): Attributes.StringAttribute;
        getAttribute(name: "crb00_status"): Attributes.StringAttribute;
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
        getControl(name: "crb00_avacofisico"): Controls.NumberControl;
        getControl(name: "crb00_avancofinanceiro"): Controls.NumberControl;
        getControl(name: "crb00_contrato"): Controls.LookupControl;
        getControl(name: "crb00_contratoname"): Controls.StringControl;
        getControl(name: "crb00_diasparadecursodeprazo"): Controls.StringControl;
        getControl(name: "crb00_newtable1id"): Controls.StringControl;
        getControl(name: "crb00_status"): Controls.StringControl;
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

