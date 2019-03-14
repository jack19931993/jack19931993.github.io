//Cabin emnu
var CabinType = {
    Economy: "Economy",
    PremiumEco: "Premium Eco",
    Business: "Business",
    First: "First",
    All: "All"
};

//FlightType emnu
var FlightTypeEmnu = {
    RoundTrip: "RoundTrip",
    OneWay: "OneWay",
    MultiCity: "MultiCity"
};

//search condition object
var SearchCondition = {
    departureFrom: null,
    departureTo: null,
    returnFrom: null,
    returnTo: null,
    departureDate: null,
    returnDate: null,
    flightType: FlightTypeEmnu.RoundTrip,
    adultNum: 1,
    childNum: 0,
    lenghtOfStay: '',
    airlineCodes: null,
    cabin: CabinType.All,
    gds: null,
    Flexible: "Exact",
    depFlexible: 3,
    rtnFlexible: 3,
    multiCityLeg0: null,
    multiCityLeg1: null,
    multiCityLeg2: null,
    multiCityLeg3: null,
    multiCityLeg4: null,
    multiCityLeg5: null,


    init: function () {
        var self = this;
        self.departureFrom = '';
        self.departureTo = '';
        self.returnFrom = '';
        self.returnTo = '';
        self.departureDate = getdate(new Date(), 14);
        self.returnDate = getdate(new Date(), 21);
        self.airlineCodes = '';
        self.flightType = FlightTypeEmnu.RoundTrip;
        self.cabin = CabinType.All;
        self.adultNum = 1;
        self.childNum = 0;
        self.lenghtOfStay = '7';
        self.gds = '';
        self.Flexible = "Exact";
        self.depFlexible = 3;
        self.rtnFlexible = 3;
        self.multiCityLeg0 = new Array('', '', getdate(new Date(), 14));
        self.multiCityLeg1 = new Array('', '', getdate(new Date(), 15));
        self.multiCityLeg2 = new Array('', '', getdate(new Date(), 16));
        self.multiCityLeg3 = new Array('', '', getdate(new Date(), 17));
        self.multiCityLeg4 = new Array('', '', getdate(new Date(), 18));
        self.multiCityLeg5 = new Array('', '', getdate(new Date(), 19));
    },

    valid: function () {
        var self = this;

        if (self.flightType != FlightTypeEmnu.MultiCity) {
            if (self.departureFrom == "") {
                alert("Please input the depature airport.");
                return false;
            }

            if (self.departureFrom != "" && getByteLen(self.departureFrom) < 2) {
                alert("Departure airport must more than 2 words.");
                return false;
            }

            if (self.departureTo == "") {
                alert("Please input the destination airport.");
                return false;
            }

            if (self.departureTo != "" && getByteLen(self.departureTo) < 2) {
                alert("Destination airport must more than 2 words.");
                return false;
            }

            if (format(self.departureDate) == false) {
                alert("Departure date format is incorrect, please re-enter");
                return false;
            }

            if (self.flightType == FlightTypeEmnu.OpenJaw) {
                if (self.returnFrom == "") {
                    alert("Please input the depature airport of flight2.");
                    return false;
                }

                if (self.returnFrom != "" && getByteLen(self.returnFrom) < 2) {
                    alert("departure airport of flight2 must more than 2 words.");
                    return false;
                }

                if (self.returnTo == "") {
                    alert("Please input the destination airport of flight2.");
                    return false;
                }

                if (self.returnTo != "" && getByteLen(self.returnTo) < 2) {
                    alert("destination airport of flight2 must more than 2 words!");
                    return false;
                }
            }

            if (self.flightType != FlightTypeEmnu.OneWay) {
                if (format(self.returnDate) == false) {
                    alert("Return date format is incorrect, please re-enter");
                    return false;
                }
            }
        }
        else {
            if (self.multiCityLeg0 == null) {
                alert("Pls check the flight1 depature or destination or date.");
                return false;
            }
            else {
                if (getByteLen(self.multiCityLeg0[0]) < 2) {
                    alert("Flight1 departure airport must more than 2 words.");
                    return false;
                }

                if (getByteLen(self.multiCityLeg0[1]) < 2) {
                    alert("Flight1 destination airport must more than 2 words.");
                    return false;
                }

                if (format(self.multiCityLeg0[2]) == false) {
                    alert("Flight1 departure date format is incorrect, please re-enter");
                    return false;
                }
            }

            for (var i = 1; i < 6; i++) {
                var multiCityLeg = null;
                switch (i) {
                    case 1:
                        multiCityLeg = self.multiCityLeg1;
                        break;
                    case 2:
                        multiCityLeg = self.multiCityLeg2;
                        break;
                    case 3:
                        multiCityLeg = self.multiCityLeg3;
                        break;
                    case 4:
                        multiCityLeg = self.multiCityLeg4;
                        break;
                    case 5:
                        multiCityLeg = self.multiCityLeg5;
                        break;
                }

                var isVaild = VaildMultiCity(multiCityLeg, i + 1);
                if (!isVaild) {
                    return false;
                }

            }
        }

        var air = self.airlineCodes
        air = air.replace(/\s+/g, "");
        if (!checkReg(air)) {
            alert("Invalid Airline.");
            return false;
        }

        if (/(\w[^,]+(?=(,|$))).*?(\1(?=,)|\1$)/.test(air)) {
            alert("duplicated Airline.");
            return false;
        }

        if ((parseInt(self.adultNum) + parseInt(self.childNum)) > 9) {
            alert("Passengers must less than 10");
            return false;
        }


        if (self.gds.length == 0) {
            alert("Choose one GDS at least");
            return false;
        }

        return true;
    }
};

//search condition controller object
var SearchConditionController = {
    spanRT: "#spRT",
    spanOW: "#spOW",
    spanMC: "#spMC",
    AdultNum: "#adultNum",
    ChildNum: "#childNum",
    DayLength: "#txtDayLen",
    AirlineCode: "#txtAir",
    divReturnDate: "#divReturnDate",
    Cabin: "raCabin",
    GDS: "ckbGds",
    FlightType: "#hdflightType",
    /*-----OW & RT-----*/
    DepDate: "#depDate1",
    ReturnDate: "#reDate1",
    Departure: "#txtDep",
    Destination: "#txtDes",
    /*-----OJ-----*/
    //    OJDepDate: "#depDate2",
    //    OJReturnDate: "#reDate2",
    //    OJDep1: "#txtOJDep1",
    //    OJDes1: "#txtOJDes1",
    //    OJDep2: "#txtOJDep2",
    //    OJDes2: "#txtOJDes2",

    /*-----MC-----*/
    multiCityLeg0: "#multiCityLeg0",
    multiCityLeg1: "#multiCityLeg1",
    multiCityLeg2: "#multiCityLeg2",
    multiCityLeg3: "#multiCityLeg3",
    multiCityLeg4: "#multiCityLeg4",
    multiCityLeg5: "#multiCityLeg5",

    flight0From: "#txtFrom0",
    flight1From: "#txtFrom1",
    flight2From: "#txtFrom2",
    flight3From: "#txtFrom3",
    flight4From: "#txtFrom4",
    flight5From: "#txtFrom5",

    flight0To: "#txtTo0",
    flight1To: "#txtTo1",
    flight2To: "#txtTo2",
    flight3To: "#txtTo3",
    flight4To: "#txtTo4",
    flight5To: "#txtTo5",

    flight0Date: "#txtDate0",
    flight1Date: "#txtDate1",
    flight2Date: "#txtDate2",
    flight3Date: "#txtDate3",
    flight4Date: "#txtDate4",
    flight5Date: "#txtDate5",

    removeLeg1: "#removeLeg1",
    removeLeg2: "#removeLeg2",
    removeLeg3: "#removeLeg3",
    removeLeg4: "#removeLeg4",
    removeLeg5: "#removeLeg5",


    addLeg: "#addLeg",
    addLegSpan: "#addLegSpan",
    multiCityLegALL: ".multiCityLeg",
    flightFromALL: "input[name$='txtFrom']",

    /*-----Css-----*/
    inputRT: ".engine_content-from-300",
    inputMC: ".engine_content-from-230",
    divRTright: ".engine_content-right",
    divRTleft: ".engine_content-left",
    divMC: ".engine_content-middle-2",
    divDayLen: ".engine_content-middle-5",

    /*-----flexible-----*/
    Flexible: "raFlexible",
    FlexDaysDep: "#dvFlexDaysDep",
    FlexDaysRtn: "#dvFlexDaysRtn",
    FlexTab: "#dvFlexTab",
    FlexMsg: "#flexibelMsg",

    depFlexible: "#selDepFlexible",
    rtnFlexible: "#selRtnFlexible",

    pageInit: function (sc) {
        var self = this;
        self.dateuiInit(SearchCondition);
        self.autocomplete();
        //select roundtrip tab



        $(self.spanRT).click(function () {
            $(self.spanMC).removeClass("engine_bn-on").addClass("engine_bn-off");
            $(self.spanOW).removeClass("engine_bn-on").addClass("engine_bn-off");
            $(self.spanRT).removeClass("engine_bn-off").addClass("engine_bn-on");
            $(self.FlexTab).show();
            self.unassign(sc);
            sc.flightType = FlightTypeEmnu.RoundTrip;
            self.assign(sc);
            self.setLenDay('dep', sc);
            $("#compreh1").show();
            $("#divCompare").hide();
            $("input[name='showcompare']").attr("checked", false);
            $(self.divRTleft).show();
            $(self.divRTright).show();
            $(self.divMC).hide();
            $(self.divReturnDate).show();
            $(self.divDayLen).show();
            $(self.FlightType).val(FlightTypeEmnu.RoundTrip);
            //            judgeOriginCounrty($(self.Departure).val());
            $("input[name='ckbGds']").eq(6).attr("disabled", false);
            $("#amadeusText").attr("style", "color:#000000");
            $("#uapiText").attr("style", "color:#000000");
            if ($("#SearchEngine1_HideAccountCode").val() != "ADMIN"
                && $("#SearchEngine1_HideAccountCode").val().length != 2) {
                $("#ckbTS").attr("disabled", true); 
                $("#travelskyText").attr("style", "color:#DCDCDC");
            }
        });

        //select multi city tab
        $(self.spanMC).click(function () {
            $(self.spanRT).removeClass("engine_bn-on").addClass("engine_bn-off");
            $(self.spanOW).removeClass("engine_bn-on").addClass("engine_bn-off");
            $(self.spanMC).removeClass("engine_bn-off").addClass("engine_bn-on");
            $(self.FlexTab).hide();
            self.unassign(sc);
            sc.flightType = FlightTypeEmnu.MultiCity;
            self.assign(sc);
            //            self.setLenDay('dep', sc);
            $("#compreh1").hide();
            $("#divCompare").hide();
            $("input[name='showcompare']").attr("checked", false);
            $(self.divRTleft).hide();
            $(self.divRTright).hide();
            $(self.divMC).show();
            $(self.divDayLen).hide();
            $(self.FlightType).val(FlightTypeEmnu.MultiCity);
            //            judgeOriginCounrty($(self.flight0From).val());
            $("input[name='ckbGds']").eq(6).prop("checked", false);
            $("input[name='ckbGds']").eq(6).attr("disabled", true);
            $("input[name='ckbGds']").eq(5).prop("checked", false);
            $("input[name='ckbGds']").eq(5).attr("disabled", true);
            $("input[name='ckbGds']").eq(2).prop("checked", false);
            $("input[name='ckbGds']").eq(2).attr("disabled", true);
//            $("input[name='ckbGds']").eq(2).prop("checked", false);
//            $("input[name='ckbGds']").eq(2).attr("disabled", true);
            $("#travelskyText").attr("style", "color:#DCDCDC");
            $("#ckbTS").attr("disabled", true);
            $("#amadeusText").attr("style", "color:#DCDCDC");
            $("#uapiText").attr("style", "color:#DCDCDC");
        });

        //select oneway tab
        $(self.spanOW).click(function () {
            $(self.spanRT).removeClass("engine_bn-on").addClass("engine_bn-off");
            $(self.spanMC).removeClass("engine_bn-on").addClass("engine_bn-off");
            $(self.spanOW).removeClass("engine_bn-off").addClass("engine_bn-on");
            $(self.FlexTab).show();
            self.unassign(sc);
            sc.flightType = FlightTypeEmnu.OneWay;
            self.assign(sc);
            $("#compreh1").show();
            $("#divCompare").hide();
            $("input[name='showcompare']").attr("checked", false);
            $(self.divRTleft).show();
            $(self.divRTright).show();
            $(self.divMC).hide();
            $(self.divReturnDate).hide();
            $(self.divDayLen).hide();
            $(self.FlightType).val(FlightTypeEmnu.OneWay);
            judgeOriginCounrty($(self.Departure).val());
            $("input[name='ckbGds']").eq(6).attr("disabled", false);
            $("#amadeusText").attr("style", "color:#000000");
            $("#uapiText").attr("style", "color:#000000");
            if ($("#SearchEngine1_HideAccountCode").val() != "ADMIN"
                && $("#SearchEngine1_HideAccountCode").val().length != 2) {
                $("#travelskyText").attr("style", "color:#DCDCDC");
                $("#ckbTS").attr("disabled", true); 
            }
        });

        //check airline code
        $(self.AirlineCode).blur(function () {
            var air = $(self.AirlineCode).val();
            air = air.replace(/\s+/g, "");
            if (!checkReg(air)) {
                alert("Invalid Airline.");
                $(self.AirlineCode).select(); return;
            }
            if (/(\w[^,]+(?=(,|$))).*?(\1(?=,)|\1$)/.test(air)) {
                alert("duplicated Airline.");
                $(self.AirlineCode).select(); return;
            }
        });

        $(self.inputRT).blur(function () {
            toUpper($(this));
        });

        $(self.inputMC).blur(function () {
            toUpper($(this));
        });

        $(self.removeLeg1).click(function () {
            RemoveLeg(1);
            if ($(self.addLegSpan).css("display") == "none") {
                $(self.addLegSpan).css("display", "block");
            }
        });

        $(self.removeLeg2).click(function () {
            RemoveLeg(2);
            if ($(self.addLegSpan).css("display") == "none") {
                $(self.addLegSpan).css("display", "block");
            }
        });

        $(self.removeLeg3).click(function () {
            RemoveLeg(3);
            if ($(self.addLegSpan).css("display") == "none") {
                $(self.addLegSpan).css("display", "block");
            }
        });

        $(self.removeLeg4).click(function () {
            RemoveLeg(4);
            if ($(self.addLegSpan).css("display") == "none") {
                $(self.addLegSpan).css("display", "block");
            }
        });

        $(self.removeLeg5).click(function () {
            RemoveLeg(5);
            if ($(self.addLegSpan).css("display") == "none") {
                $(self.addLegSpan).css("display", "block");
            }
        });

        $(self.addLeg).click(function () {
            var iCount = 1;
            $(self.multiCityLegALL).each(function () {
                if ($(this).css("display") == "none") {
                    return;
                }
                iCount++;
            });
            switch (iCount) {
                case 2:
                    $(self.multiCityLeg1).css("display", "block");
                    ReSetDate($(self.flight0Date), $(self.flight1Date));
                    break;
                case 3:
                    $(self.multiCityLeg2).css("display", "block");
                    ReSetDate($(self.flight1Date), $(self.flight2Date));
                    break;
                case 4:
                    $(self.multiCityLeg3).css("display", "block");
                    ReSetDate($(self.flight2Date), $(self.flight3Date));
                    break;
                case 5:
                    $(self.multiCityLeg4).css("display", "block");
                    ReSetDate($(self.flight3Date), $(self.flight4Date));
                    break;
                case 6:
                    $(self.multiCityLeg5).css("display", "block");
                    ReSetDate($(self.flight4Date), $(self.flight5Date));
                    $(self.addLegSpan).css("display", "none");
                    break;
            }
        });


        $(self.flight1From).focus(function () {
            if ($(self.flight1From).val() == "") {
                $(self.flight1From).val($(self.flight0To).val());
            }
        });

        $(self.flight2From).focus(function () {
            if ($(self.flight2From).val() == "") {
                $(self.flight2From).val($(self.flight1To).val());
            }
        });

        $(self.flight3From).focus(function () {
            if ($(self.flight3From).val() == "") {
                $(self.flight3From).val($(self.flight2To).val());
            }
        });

        $(self.flight4From).focus(function () {
            if ($(self.flight4From).val() == "") {
                $(self.flight4From).val($(self.flight3To).val());
            }
        });

        $(self.flight5From).focus(function () {
            if ($(self.flight5From).val() == "") {
                $(self.flight5From).val($(self.flight4To).val());
            }
        });




        switch ($(self.FlightType).val()) {
            case FlightTypeEmnu.OneWay:
                $(self.spanOW).click();
                judgeOriginCounrty($(self.Departure).val());
                break;
            case FlightTypeEmnu.MultiCity:
                $(self.spanMC).click();
                judgeOriginCounrty($(self.flight0From).val());
                break;
            default:
                $(self.spanRT).click();
                judgeOriginCounrty($(self.Departure).val());
                break;

        }
        $(self.Departure).change(function () { judgeOriginCounrty($(this).val()); });
        $(self.flight0From).change(function () { judgeOriginCounrty($(this).val()); });

        var raFlexName = self.FlexTab + " :radio";
        $(raFlexName).click(function () {
            SetFlexible(self);
        });
        SetFlexible(self);
    },

    //取值，将SearchCondition中的值赋给页面控件
    assign: function (sc) {
        var self = this;
        if (sc.flightType == FlightTypeEmnu.RoundTrip || sc.flightType == FlightTypeEmnu.OneWay) {
            $(self.DepDate).val(sc.departureDate);
            $(self.ReturnDate).val(sc.returnDate);
            $(self.Departure).val(sc.departureFrom);
            $(self.Destination).val(sc.departureTo);
        }
        else {
            //multi city 0
            $(self.flight0From).val(sc.multiCityLeg0[0]);
            $(self.flight0To).val(sc.multiCityLeg0[1]);
            $(self.flight0Date).val(sc.multiCityLeg0[2]);

            //multi city 1
            $(self.flight1From).val(sc.multiCityLeg1[0]);
            $(self.flight1To).val(sc.multiCityLeg1[1]);
            $(self.flight1Date).val(sc.multiCityLeg1[2]);
            //            if (sc.multiCityLeg1[0] != "" && sc.multiCityLeg1[1] != "" && sc.multiCityLeg1[2] != "") {
            //                $(self.multiCityLeg1).css('display', 'block');
            //            }
            //            else {
            //                $(self.multiCityLeg1).css('display', 'none');
            //            }

            //multi city 2
            $(self.flight2From).val(sc.multiCityLeg2[0]);
            $(self.flight2To).val(sc.multiCityLeg2[1]);
            $(self.flight2Date).val(sc.multiCityLeg2[2]);
            //            if (sc.multiCityLeg2[0] != "" && sc.multiCityLeg2[1] != "" && sc.multiCityLeg2[2] != "") {
            //                $(self.multiCityLeg2).css('display', 'block');
            //            }
            //            else {
            //                $(self.multiCityLeg2).css('display', 'none');
            //            }

            //multi city 3 
            $(self.flight3From).val(sc.multiCityLeg3[0]);
            $(self.flight3To).val(sc.multiCityLeg3[1]);
            $(self.flight3Date).val(sc.multiCityLeg3[2]);
            //            if (sc.multiCityLeg3[0] != "" && sc.multiCityLeg3[1] != "" && sc.multiCityLeg3[2] != "") {
            //                $(self.multiCityLeg3).css('display', 'block');
            //            }
            //            else {
            //                $(self.multiCityLeg3).css('display', 'none');
            //            }

            //multi city 4            
            $(self.flight4From).val(sc.multiCityLeg4[0]);
            $(self.flight4To).val(sc.multiCityLeg4[1]);
            $(self.flight4Date).val(sc.multiCityLeg4[2]);
            if (sc.multiCityLeg4[0] != "" && sc.multiCityLeg4[1] != "" && sc.multiCityLeg4[2] != "") {
                $(self.multiCityLeg4).css('display', 'block');
            }
            else {
                $(self.multiCityLeg4).css('display', 'none');
            }

            //multi city 5             
            $(self.flight5From).val(sc.multiCityLeg5[0]);
            $(self.flight5To).val(sc.multiCityLeg5[1]);
            $(self.flight5Date).val(sc.multiCityLeg5[2]);
            if (sc.multiCityLeg5[0] != "" && sc.multiCityLeg5[1] != "" && sc.multiCityLeg5[2] != "") {
                $(self.multiCityLeg5).css('display', 'block');
            }
            else {
                $(self.multiCityLeg5).css('display', 'none');
            }
        }

        $(self.AdultNum).find("option").each(function () {
            if ($(this).text() == sc.adultNum) {
                $(this).attr("selected", true);
            }
        });

        $(self.ChildNum).find("option").each(function () {
            if ($(this).text() == sc.childNum) {
                $(this).attr("selected", true);
            }
        });

        $(self.AirlineCode).val(sc.airlineCodes);
        $(self.DayLength).val(sc.lenghtOfStay);

        var raCabinStr = "input[name='" + self.Cabin + "']";
        $(raCabinStr).each(function () {
            if ($(this).val().toUpperCase() == sc.cabin.toUpperCase()) {
                $(this).attr("checked", true);
            }
        });

        $(self.depFlexible).find("option").each(function () {
            if ($(this).val().indexOf(sc.depFlexible) != -1) {
                $(this).attr("selected", true);
            }
        });

        if (sc.flightType == FlightTypeEmnu.RoundTrip) {
            $(self.rtnFlexible).find("option").each(function () {
                if ($(this).val().indexOf(sc.rtnFlexible) != -1) {
                    $(this).attr("selected", true);
                }
            });
        }

        var raFlexible = "input[name='" + self.Flexible + "']";
        $(raFlexible).each(function () {
            if ($(this).val().toUpperCase() == sc.Flexible.toUpperCase()) {
                $(this).attr("checked", true);
            }
        });
    },

    //赋值，将页面控件的值赋给SearchCondition
    unassign: function (sc) {
        var self = this;
        if ($(self.FlightType).val() == "RoundTrip" || $(self.FlightType).val() == "OneWay") {
            sc.departureDate = $(self.DepDate).val();
            sc.departureFrom = $(self.Departure).val();
            sc.departureTo = $(self.Destination).val();
            if (sc.flightType == FlightTypeEmnu.RoundTrip) {
                sc.returnFrom = $(self.Destination).val();
                sc.returnTo = $(self.Departure).val();
                sc.returnDate = $(self.ReturnDate).val();
            }
        }
        else {
            //            sc.departureDate = $(self.OJDepDate).val();
            //            sc.returnDate = $(self.OJReturnDate).val();
            //            sc.departureFrom = $(self.OJDep1).val();
            //            sc.departureTo = $(self.OJDes1).val();
            //            sc.returnFrom = $(self.OJDep2).val();
            //            sc.returnTo = $(self.OJDes2).val();
            //            if ($(self.multiCityLeg0).is(":visible")) {
            sc.multiCityLeg0[0] = $(self.flight0From).val();
            sc.multiCityLeg0[1] = $(self.flight0To).val();
            if ($(self.flight0Date).val() != "") {
                sc.multiCityLeg0[2] = $(self.flight0Date).val();
            }
            //            }

            //            if ($(self.multiCityLeg1).is(":visible")) {
            sc.multiCityLeg1[0] = $(self.flight1From).val();
            sc.multiCityLeg1[1] = $(self.flight1To).val();
            if ($(self.flight1Date).val() != "") {
                sc.multiCityLeg1[2] = $(self.flight1Date).val();
            }
            //            }

            //            if ($(self.multiCityLeg2).is(":visible")) {
            sc.multiCityLeg2[0] = $(self.flight2From).val();
            sc.multiCityLeg2[1] = $(self.flight2To).val();
            if ($(self.flight2Date).val() != "") {
                sc.multiCityLeg2[2] = $(self.flight2Date).val();
            }
            //            }

            //            if ($(self.multiCityLeg3).is(":visible")) {
            sc.multiCityLeg3[0] = $(self.flight3From).val();
            sc.multiCityLeg3[1] = $(self.flight3To).val();
            if ($(self.flight3Date).val() != "") {
                sc.multiCityLeg3[2] = $(self.flight3Date).val();
            }
            //            }

            //            if ($(self.multiCityLeg4).is(":visible")) {
            sc.multiCityLeg4[0] = $(self.flight4From).val();
            sc.multiCityLeg4[1] = $(self.flight4To).val();
            if ($(self.flight4Date).val() != "") {
                sc.multiCityLeg4[2] = $(self.flight4Date).val();
            }
            //            }

            //            if ($(self.multiCityLeg5).is(":visible")) {
            sc.multiCityLeg5[0] = $(self.flight5From).val();
            sc.multiCityLeg5[1] = $(self.flight5To).val();
            if ($(self.flight5Date).val() != "") {
                sc.multiCityLeg5[2] = $(self.flight5Date).val();
            }
            //            }
        }

        sc.airlineCodes = $(self.AirlineCode).val();
        sc.lenghtOfStay = $(self.DayLength).val();
        sc.adultNum = $(self.AdultNum).find("option:selected").text();
        sc.childNum = $(self.ChildNum).find("option:selected").text();
        var raCabinStr = "input[name='" + self.Cabin + "']:checked";
        sc.cabin = $(raCabinStr).val();

        var allVals = [];
        $("input[name='ckbGds']:checked").each(function () {
            allVals.push($(this).val());
        });
        sc.gds = allVals.join(",");

        var isFlexible = "input[name='" + self.Flexible + "']:checked";
        var isFlexibleVal = $(isFlexible).val();
        sc.Flexible = isFlexibleVal;

        if (isFlexibleVal == "Flex") {
            sc.depFlexible = $(self.depFlexible).find("option:selected").val();
            if (sc.flightType == FlightTypeEmnu.RoundTrip) {
                sc.rtnFlexible = $(self.rtnFlexible).find("option:selected").val();
            }
        }
    },

    //根据出发日期和返程日期计算行程天数
    setLenDay: function (type, sc) {
        var self = this;
        if (sc.flightType == FlightTypeEmnu.RoundTrip || sc.flightType == FlightTypeEmnu.OneWay) {
            var depDate = $(self.DepDate);
            var returnDate = $(self.ReturnDate);
        }
        //        else {
        //            var depDate = $(self.OJDepDate);
        //            var returnDate = $(self.OJReturnDate);
        //        }

        if (depDate.val() == "") {
            alert('Departure date can not be null.');
            depDate.focus();
            return;
        }
        if (returnDate.val() == "") {
            alert('Return date can not be null.');
            returnDate.focus();
            return;
        }
        var stayLenValue = $(self.DayLength).val();
        if (type == "len") {
            if (stayLenValue.length == 0)
                return;
        }
        var depatureDateDT = new Date(Date.parse(depDate.val()));
        var returnDateDT = new Date(Date.parse(returnDate.val()));
        switch (type) {
            case "dep":
                stayLenValue = parseInt((returnDateDT - depatureDateDT) / 1000 / 60 / 60 / 24);
                $(self.DayLength).val(stayLenValue);
                break;
            case "rtn":
                stayLenValue = parseInt((returnDateDT - depatureDateDT) / 1000 / 60 / 60 / 24);
                $(self.DayLength).val(stayLenValue);
                break;
            case "len":
                var newDate = new Date(depatureDateDT.valueOf() + parseInt(stayLenValue) * 24 * 60 * 60 * 1000);
                var yy = newDate.getFullYear();
                var mm = newDate.getMonth() + 1;
                var dd = newDate.getDate();
                yy = yy.toString().substring(0, 4);
                if (mm < 10) {
                    mm = "0" + mm;
                }
                if (dd < 10) {
                    dd = "0" + dd;
                }
                var d = mm + "/" + dd + "/" + yy;
                returnDate.val(d);
                break;
        }
    },

    //日历控件(datepicker)初始化
    dateuiInit: function (sc) {
        var self = this;
        datepickerInit(self.DepDate, self.ReturnDate);
        //        datepickerInit(self.OJDepDate, self.OJReturnDate);
        datepickerInit2(self.flight0Date, self.flight1Date, self.flight2Date, self.flight3Date, self.flight4Date, self.flight5Date);
        //datepickerInit(self.flight0Date,self.flight1Date);
    },

    //文本框自动填充控件(用于自动填充备选的出发地，目的地)
    autocomplete: function () {
        var self = this;
        Autocomplete(self.inputRT);
        Autocomplete(self.inputMC);
        //        Autocomplete(self.OJDep1);
        //        Autocomplete(self.OJDep2);
        //        Autocomplete(self.OJDes1);
        //        Autocomplete(self.OJDes2);
    }
};

function SetFlexible(sc) {
    var raFlexibleValue = $("input[name='" + sc.Flexible + "']:checked").val();
    if (raFlexibleValue == "Flex") {
        $(sc.DepDate).removeClass("engine_content-from-270").addClass("engine_content-from-190");
        $(sc.ReturnDate).removeClass("engine_content-from-270").addClass("engine_content-from-190");
        $(sc.FlexDaysDep).show();
        $(sc.FlexDaysRtn).show();
        $(sc.FlexMsg).show();
    }
    else {
        $(sc.DepDate).removeClass("engine_content-from-190").addClass("engine_content-from-270");
        $(sc.ReturnDate).removeClass("engine_content-from-190").addClass("engine_content-from-270");
        $(sc.FlexDaysDep).hide();
        $(sc.FlexDaysRtn).hide();
        $(sc.FlexMsg).hide();
    }
}

//根据传递天数得到新的日期的方法
function getdate(nDate, n) {
    var day = n * 24 * 60 * 60 * 1000;
    nDate.setSeconds(nDate.getSeconds(), day);
    var y = nDate.getFullYear();
    var m = nDate.getMonth() + 1;
    var d = nDate.getDate();

    if (m < 10) {
        m = "0" + m;
    }

    if (d < 10) {
        d = "0" + d;
    }

    var newDate = m + "/" + d + "/" + y;
    return newDate;
}

function checkReg(str) {
    if (str.length >= 1 && str.length < 2) return false;
    if (/[^\w\d,]/.test(str) || /[\w\d]{3}/.test(str) || /^[\d\w]{0,1}\,/.test(str) || /\,\s[\d\w]{0,1}$/.test(str) || /\,[\d\w]\,/.test(str))
        return false;
    else
        return true;
}

function toUpper(obj) {
    if (obj.val().length == 3) {
        obj.val(obj.val().toUpperCase());
    }
}

function datepickerInit(date1, date2) {
    var cName = date1 + ", " + date2;
    var dates = $(cName).datepicker({
        maxDate: "+330D",
        closeText: 'X',
        numberOfMonths: 2,
        showOn: "both",
        buttonImage: "../images/cal.gif",
        buttonImageOnly: true,
        beforeShow: function (input, inst) {
            if (this.id == date1.substring(1)) {
                var minDate = getdate(new Date(), 1);
                var maxDate = getdate(new Date(), 330);
            }
            else {
                var minDate = dates.not(this).datepicker("getDate");
                minDate = getdate(minDate, 1);
                var maxDate = getdate(new Date(), 330);
            }

            if (minDate != undefined && maxDate != undefined) {
                $(this).datepicker("option", "minDate", minDate);
                $(this).datepicker("option", "maxDate", maxDate);
            }
            else {
                $(this).datepicker("option", "minDate", "+14d");
                $(this).datepicker("option", "maxDate", "+330d");
            }
        },

        onSelect: function (dateText, inst) {
            if (this.id == date1.substring(1)) {
                var depatureDateDT = new Date(Date.parse(dateText));
                var returnDateDT = new Date(Date.parse(dates.not(this).datepicker("getDate")));
                var result = parseInt((returnDateDT - depatureDateDT) / 1000 / 60 / 60 / 24);
                if (result <= 0) {
                    var day = 1 * 24 * 60 * 60 * 1000;
                    var newDate = new Date(Date.parse(dateText));
                    newDate.setSeconds(newDate.getSeconds(), day);
                    dates.not(this).datepicker("setDate", newDate);
                }

                SearchConditionController.setLenDay('dep', SearchCondition);
            }
            SearchConditionController.setLenDay('rtn', SearchCondition);
        }
    });
}

function datepickerInit2(date1, date2, date3, date4, date5, date6) {
    var cName = date1 + ", " + date2 + ", " + date3 + ", " + date4 + ", " + date5 + ", " + date6;
    var dates = $(cName).datepicker({
        maxDate: "+330D",
        closeText: 'X',
        numberOfMonths: 2,
        showOn: "both",
        buttonImage: "../images/cal.gif",
        buttonImageOnly: true,
        beforeShow: function (input, inst) {
            switch (this.id) {
                case date1.substring(1):
                    var minDate = getdate(new Date(), 1);
                    var maxDate = getdate(new Date(), 330);
                    break;
                case date2.substring(1):
                    var minDate = $(dates[0]).datepicker("getDate");
                    minDate = getdate(minDate, 1);
                    var maxDate = getdate(new Date(), 330);
                    break;
                case date3.substring(1):
                    var minDate = $(dates[1]).datepicker("getDate");
                    minDate = getdate(minDate, 1);
                    var maxDate = getdate(new Date(), 330);
                    break;
                case date4.substring(1):
                    var minDate = $(dates[2]).datepicker("getDate");
                    minDate = getdate(minDate, 1);
                    var maxDate = getdate(new Date(), 330);
                    break;
                case date5.substring(1):
                    var minDate = $(dates[3]).datepicker("getDate");
                    minDate = getdate(minDate, 1);
                    var maxDate = getdate(new Date(), 330);
                    break;
                case date6.substring(1):
                    var minDate = $(dates[4]).datepicker("getDate");
                    minDate = getdate(minDate, 1);
                    var maxDate = getdate(new Date(), 330);
                    break;
            }

            if (minDate != undefined && maxDate != undefined) {
                $(this).datepicker("option", "minDate", minDate);
                $(this).datepicker("option", "maxDate", maxDate);
            }
            else {
                $(this).datepicker("option", "minDate", "+14d");
                $(this).datepicker("option", "maxDate", "+330d");
            }
        },

        onSelect: function (dateText, inst) {
            var day = 1 * 24 * 60 * 60 * 1000;
            var iStart = 1;
            switch (this.id) {
                case date2.substring(1):
                    iStart = 2;
                    break;
                case date3.substring(1):
                    iStart = 3;
                    break;
                case date4.substring(1):
                    iStart = 4;
                    break;
                case date5.substring(1):
                    iStart = 5;
                    break;
                case date6.substring(1):
                    iStart = 6;
                    break;
            }
            var dateDT = new Date(Date.parse(dateText));
            var iCount = 1;
            if (iStart < dates.length) {
                for (var i = iStart; i <= dates.length; i++) {
                    var dateAfterDT = new Date(Date.parse($(dates[i]).datepicker("getDate")));
                    var resultAfter = parseInt((dateAfterDT - dateDT) / 1000 / 60 / 60 / 24);
                    if (resultAfter < 0) {
                        var newDate = new Date(Date.parse(dateText));
                        newDate.setSeconds(newDate.getSeconds(), day * iCount);
                        $(dates[i]).datepicker("setDate", newDate);
                        iCount++;
                    }
                }
            }
        }
    });
}

//文本框自动填充控件(用于自动填充备选的出发地，目的地)
function Autocomplete(name) {
    $(name).autocomplete({
        minLength: 2,
        source: function (request, response) {
            $obj = $(this.element);
            var canfly = $obj.hasClass("allcanfly") == true ? 'true' : 'false';
            $.ajax({
                type: "get",
                url: "../AjaxHandler.aspx",
                data: "act=searchairport&where=" + request.term + "&t=a&canfly=" + canfly,
                success: function (data) {
                    //查询成功，显示结果
                    var obj = $.parseJSON(data);
                    if (obj.item.length > 0) {
                        response(obj.item);
                    }
                    else {
                        $(".ui-autocomplete-loading").removeClass("ui-autocomplete-loading"); response([]);
                    }

                }
            });
        },
        open: function (event, ui) {
            var reg = new RegExp("(\s\S)*" + $(this).val() + "(\s\S)*", "gi");
            for (var i = 0; i < $(".ui-menu-item").size(); i++) {
                var waitText = $(".ui-menu-item").eq(i).children("a").text();

                waitText = waitText.replace(/Airport/g, "#3");
                var r = waitText.match(reg);
                if (r != null) {
                    for (var j = 0; j < r.length; j++) {
                        waitText = waitText.replace(r[j], "#" + j);

                    }
                    for (var j = 0; j < r.length; j++) {
                        waitText = waitText.replace("#" + j, "<font class=\"MatchText\">" + r[j] + "</font>");
                    }


                    waitText = waitText.replace(/#3/g, "Airport");

                    $(".ui-menu-item").eq(i).children("a").empty();
                    $(".ui-menu-item").eq(i).children("a").append(waitText);
                }

            }
        },
        select: function (event, ui) {
//            if ($.browser.msie && parseInt($.browser.version, 10) >= 6 && window.XDomainRequest) {
//                $(name).focus();
//            }
//            else {
//                event.target.blur();
            //            }
            $(name).focus();
        },
        close: function (event, ui) {
            $(".ui-menu-item").remove();
        }
    })
}

//根据JSON字符串给Search Condition赋值
function SetSearchCondition(jsonstr) {
    var oJson;

    try {
        oJson = eval('(' + jsonstr + ')');

        SearchCondition.adultNum = oJson.adultNum;
        SearchCondition.airlineCodes = oJson.airlineCodes;
        SearchCondition.childNum = oJson.childNum;
        SearchCondition.departureDate = oJson.departureDate;
        SearchCondition.departureFrom = oJson.departureFrom;
        SearchCondition.departureTo = oJson.departureTo;
        SearchCondition.lenghtOfStay = oJson.lenghtOfStay;
        SearchCondition.returnDate = oJson.returnDate;
        SearchCondition.returnFrom = oJson.returnFrom;
        SearchCondition.returnTo = oJson.returnTo;

        if (oJson.flightType == "OneWay") { SearchCondition.flightType = FlightTypeEmnu.OneWay; }
        else if (oJson.flightType == "MultiCity") { SearchCondition.flightType = FlightTypeEmnu.MultiCity; }
        else { SearchCondition.flightType = FlightTypeEmnu.RoundTrip; }

        SearchCondition.cabin = oJson.cabin;
    } catch (e) {

    }
}

function getArgs() {
    var args = new Object();
    var query = location.search.substring(1);     // Get query string
    var pairs = query.split("&");                 // Break at ampersand
    for (var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('=');          // Look for "name=value"
        if (pos == -1) continue;                  // If not found, skip
        var argname = pairs[i].substring(0, pos);  // Extract the name
        var value = pairs[i].substring(pos + 1);    // Extract the value
        value = decodeURIComponent(value);        // Decode it, if needed
        args[argname] = value;                    // Store as a property
    }
    return args;                                  // Return the object
}

function checkDateTime(str) {
    var r = str.match(/^(\d{1,2})(-|\/)(\d{1,2})\2(\d{1,4})$/);
    if (r == null) return false;
    var d = new Date(r[4], r[1] - 1, r[3]);
    return (d.getFullYear() == r[4] && (d.getMonth() + 1) == r[1] && d.getDate() == r[3]);
}

function format(obj) {
    var str = obj;
    if (str.length == 10) {
        if (checkDateTime(str)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}


function getXMLHTTPRequest() {
    var xRequest = null;
    xRequest = new ActiveXObject("Microsoft.XMLHTTP");
    return xRequest;
}
function ControlDisplay() {
    if ($("input[name='showcompare']").attr("checked") == "checked") {
        $("#divCompare").show();
        $('#txtDep').blur();
        $('#txtDes').blur();
    }
    else {
        $("#divCompare").hide();
    }
}

function SetLenDay(type) {
    SearchConditionController.setLenDay(type, SearchCondition);
}

//查询Flight
function searchFlight() {
    SearchConditionController.unassign(SearchCondition);
    var where = "";
    if (SearchCondition.flightType != FlightTypeEmnu.MultiCity) {
        where = SearchCondition.departureFrom + "|" + SearchCondition.departureTo;
    }
    else {
        where += SearchCondition.multiCityLeg0[0] + "|" + SearchCondition.multiCityLeg0[1];
        if (jointAirport(SearchCondition.multiCityLeg1) != "")
            where += "|" + jointAirport(SearchCondition.multiCityLeg1);
        if (jointAirport(SearchCondition.multiCityLeg2) != "")
            where += "|" + jointAirport(SearchCondition.multiCityLeg2);
        if (jointAirport(SearchCondition.multiCityLeg3) != "")
            where += "|" + jointAirport(SearchCondition.multiCityLeg3);
        if (jointAirport(SearchCondition.multiCityLeg4) != "")
            where += "|" + jointAirport(SearchCondition.multiCityLeg4);
        if (jointAirport(SearchCondition.multiCityLeg5) != "")
            where += "|" + jointAirport(SearchCondition.multiCityLeg5);
    }

//    $.ajax({
//        type: "get",
//        url: "../AjaxHandler.aspx",
//        data: "act=searchairport2&where=" + where + "&t=a&canfly=" + true,
//        success: function (data) {
//            //查询成功，显示结果
//            var obj = $.parseJSON(data);
//            var isContinue = true;
//            var msg = "";

//            $.each(obj.item, function (i) {
//                if (this == "") {
//                    if (where.split('|')[i].substring(0, 1) != "(") {
//                        isContinue = false;
//                        return false;
//                    }
//                }
//            });

//            if (isContinue) {
//                
//            }
//            else {
//                msg = "Unrecognized airport, please check and re-enter.";
//                alert(msg);
//            }
//        }
    //    });

    if (SearchCondition.valid() == true) {
        url = "type=" + SearchCondition.flightType + "&";
        url += "cabin=" + SearchCondition.cabin + "&";
        if (SearchCondition.flightType != FlightTypeEmnu.MultiCity) {
            url += "origin1=" + SearchCondition.departureFrom + "&";
            url += "destination1=" + SearchCondition.departureTo + "&";
            url += "date1=" + SearchCondition.departureDate + "&";
            url += "origin2=" + SearchCondition.returnFrom + "&";
            url += "destination2=" + SearchCondition.returnTo + "&";
            url += "date2=" + SearchCondition.returnDate + "&";
        }
        else {
            url += "multicityleg0=" + SearchCondition.multiCityLeg0[0] + "_" + SearchCondition.multiCityLeg0[1] + "_" + SearchCondition.multiCityLeg0[2] + "&";
            url += "multicityleg1=" + SearchCondition.multiCityLeg1[0] + "_" + SearchCondition.multiCityLeg1[1] + "_" + SearchCondition.multiCityLeg1[2] + "&";
            url += "multicityleg2=" + SearchCondition.multiCityLeg2[0] + "_" + SearchCondition.multiCityLeg2[1] + "_" + SearchCondition.multiCityLeg2[2] + "&";
            url += "multicityleg3=" + SearchCondition.multiCityLeg3[0] + "_" + SearchCondition.multiCityLeg3[1] + "_" + SearchCondition.multiCityLeg3[2] + "&";
            url += "multicityleg4=" + SearchCondition.multiCityLeg4[0] + "_" + SearchCondition.multiCityLeg4[1] + "_" + SearchCondition.multiCityLeg4[2] + "&";
            url += "multicityleg5=" + SearchCondition.multiCityLeg5[0] + "_" + SearchCondition.multiCityLeg5[1] + "_" + SearchCondition.multiCityLeg5[2] + "&";
        }
        url += "adt=" + SearchCondition.adultNum + "&";
        url += "chd=" + SearchCondition.childNum + "&";
        url += "airline=" + SearchCondition.airlineCodes.toUpperCase() + "&";
        url += "gds=" + SearchCondition.gds;


        var isFlexTrue = true;
        if (SearchCondition.Flexible == "Flex") {
            if (SearchCondition.flightType == FlightTypeEmnu.RoundTrip && SearchCondition.depFlexible == "0" && SearchCondition.rtnFlexible == "0") {
                isFlexTrue = false;
            }

            if (SearchCondition.flightType == FlightTypeEmnu.OneWay && SearchCondition.depFlexible == "0") {
                isFlexTrue = false;
            }
        }
        else {
            var isFlexTrue = false;
        }

        //                    var pageSouce = document.URL;
        //                    if (pageSouce.indexOf('SearchFlight.aspx') >= 0) {
        //                        url += "&pagesource=sf";
        //                    }
        //                    else {
        //                        url += "&pagesource=s1";
        //                    }

        if (isFlexTrue) {
            url += "&originFlex=" + SearchCondition.depFlexible;
            if (SearchCondition.flightType == FlightTypeEmnu.RoundTrip) {
                url += "&returnFlex=" + SearchCondition.rtnFlexible;
            }

            url = url.replace(SearchCondition.cabin, SearchCondition.cabin.substring(0, 1));

            window.location.href = "SearchFlexible.aspx?" + url;
        }
        else {
            window.location.href = "Step1.aspx?" + url;
        }
    }
}


var comp = compare({
    'sid': '21994',
    'origin': 'txtDep',
    'destination': 'txtDes',
    'depDate': 'depDate1',
    'retDate': 'reDate1',
    'adults': 'adultNum',
    'children': 'childNum',
    'search': 'btnSearch',
    'div': 'compare_boxes',
    'Msg': '<p><span class="head">Select sites for fare comparison</span> (opens new window)</p>',
    'style': 'img',
    'cols': 5,
    'max': 10
});

function Cookies() {
    this.get = function (key) {
        var cookie = document.cookie;
        var cookieArray = cookie.split(';');
        var val = "";
        for (var i = 0; i < cookieArray.length; i++) {
            if ($.trim(cookieArray[i]).substr(0, key.length) == key) {
                val = $.trim(cookieArray[i]).substr(key.length + 1);
                break;
            }
        }
        return unescape(val);
    };
    this.getChild = function (key, childKey) {
        var child = this.get(key);
        var childs = child.split('&');
        var val = "";

        for (var i = 0; i < childs.length; i++) {
            if ($.trim(childs[i]).substr(0, childKey.length) == childKey) {
                val = $.trim(childs[i]).substr(childKey.length + 1);
                break;
            }
        }
        return val;
    };
    this.set = function (key, value) {
        var cookie = "";
        if (!!key && !!value)
            cookie += key + "=" + escape(value) + ";";
        if (!!arguments[2])
            cookie += "expires=" + arguments[2].toGMTString() + ";";
        if (!!arguments[3])
            cookie += "path=" + arguments[3] + ";";
        if (!!arguments[4])
            cookie += "domain=" + arguments[4] + ";";
        document.cookie = cookie;
    };
    this.remove = function (key) {
        var date = new Date();
        date.setFullYear(date.getFullYear() - 1);
        var cookie = " " + key + "=;expires=" + date + ";"
        document.cookie = cookie;
    }
}

function SetNewValue(cookie, longCookie, shortCookie) {

    var ld = new Date();
    ld.setFullYear(ld.getFullYear() + 10);

    var long_id_value = new Array();
    for (i = 0; i < longCookie.length; i++) {
        if (longCookie[i].val() != "")
            if (longCookie[i].attr("type") == "radio") {
                long_id_value.push(longCookie[i].attr("name") + "=" + $("input:checked[name=" + longCookie[i].attr("name") + "]").val());
                cookie.set("type", $("input:checked[name=" + longCookie[i].attr("name") + "]").val(), ld, "/");
            }
            else
                long_id_value.push(longCookie[i].attr("name") + "=" + longCookie[i].val());
    }
    cookie.set("gttlsc", long_id_value.join("&"), ld, "/");


    var sd = new Date();
    sd.setTime(sd.getTime() + 1000 * 60 * 60 * 24 * 7);

    var short_id_value = new Array();
    for (i = 0; i < shortCookie.length; i++) {
        if (shortCookie[i].val() != "")
            if (shortCookie[i].attr("type") == "radio") {
                short_id_value.push(shortCookie[i].attr("name") + "=" + $("input:checked[name=" + shortCookie[i].attr("name") + "]").val());
                cookie.set("type", $("input:checked[name=" + shortCookie[i].attr("name") + "]").val(), sd, "/");
            }
            else if (shortCookie[i].attr("type") == "checkbox") {
                var allVals = [];
                $('input[name=' + shortCookie[i].attr("name") + ']:checked').each(function () {
                    allVals.push($(this).val());
                });
                short_id_value.push(shortCookie[i].attr("name") + "=" + allVals.join(","));
            }
            else
                short_id_value.push(shortCookie[i].attr("name") + "=" + shortCookie[i].val());
    }
    cookie.set("gttssc", short_id_value.join("&"), sd, "/");

}

function SetCookie() {
    var cookie = new Cookies();
    var existLongCookieName = new Array();
    var existShortCookieName = new Array();
    var longCookie = new Array();
    var shortCookie = new Array();
    $("input[class*=longCookie]").each(function (i) {
        if (jQuery.inArray($(this).attr("name"), existLongCookieName) == -1) {
            existLongCookieName.push($(this).attr("name"));
            longCookie.push($(this));
        }
    })

    $("input[class*=shortCookie]").each(function (i) {
        if (jQuery.inArray($(this).attr("name"), existShortCookieName) == -1) {
            existShortCookieName.push($(this).attr("name"));
            shortCookie.push($(this));
        }
    })



    $("select[class*=longCookie]").each(function (i) { longCookie.push($(this)) });
    $("select[class*=shortCookie]").each(function (i) { shortCookie.push($(this)) });

    $('.btnSearch').click(function () { SetNewValue(cookie, longCookie, shortCookie); })


}

function GetValueFromCookie() {

    var cookie = new Cookies();
    $("input[class*=longCookie]").each(function () {
        if (cookie.getChild("gttlsc", $(this).attr("name")))
            if ($(this).attr("type") != "radio")
                $(this).val(cookie.getChild("gttlsc", $(this).attr("name")));
    });

    $("input[class*=shortCookie]").each(function () {
        var value = cookie.getChild("gttssc", $(this).attr("name"));
        if (value) {
            if ($(this).attr("type") == "radio") {
                $('input[name=' + $(this).attr("name") + ']:radio').each(function () {
                    if ($(this).val() == value)
                        $(this).prop("checked", true);
                    else
                        $(this).prop("checked", false);
                })
            }
            else if ($(this).attr("type") == "checkbox") {
                $('input[name=' + $(this).attr("name") + ']:checkbox').each(function () {
                    if (jQuery.inArray($(this).val(), value) != -1)
                        $(this).prop("checked", true);
                    else
                        $(this).prop("checked", false);
                })
            }
            else

                $(this).val(cookie.getChild("gttssc", $(this).attr("name")));
        }
    });

    $("select[class*=longCookie]").each(function () {
        var value = cookie.getChild("gttssc", $(this).attr("name"));
        if (cookie.getChild("gttlsc", $(this).attr("name")))
            $('select[name=' + $(this).attr("name") + '] option[value=' + value + ']').attr("selected", true);
        //$(this).attr("value", cookie.getChild("gttlsc", $(this).attr("name")));
    });

    $("select[class*=shortCookie]").each(function () {
        var value = cookie.getChild("gttssc", $(this).attr("name"));
        if (cookie.getChild("gttssc", $(this).attr("name")))
            $('select[name=' + $(this).attr("name") + '] option[value=' + value + ']').attr("selected", true);
        //$(this).attr("value", cookie.getChild("gttssc", $(this).attr("name")));
    });
}

function getByteLen(val) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);
        if (a.match(/[^\x00-\xff]/ig) != null) {
            len += 2;
        }
        else {
            len += 1;
        }
    }
    return len;
}

function judgeOriginCounrty(apc) {
    if (apc == null) {
        return;
    }

    if ($("#SearchEngine1_HideAccountCode").val() != "ADMIN"
        && $("#SearchEngine1_HideAccountCode").val().length != 2) {
        return;
    }

    if (getByteLen(apc) > 2) {
        if (getByteLen(apc) > 5) {
            if (apc.substring(0, 1) == "(") {
                apc = apc.substring(1, 4);
            }
        }

        

        $.ajax({
            type: "get",
            url: "../AjaxHandler.aspx",
            data: "act=searchairport&where=" + apc + "&t=a&canfly=" + true,
            success: function (data) {
                //查询成功，显示结果
                var obj = $.parseJSON(data);
                if (obj.item.length > 0) {
                    var temp = obj.item[0].split(",");
                    if (temp.length > 0) {
                        var Country = $.trim(temp[temp.length - 1]).toUpperCase();

                        if (Country == "CHINA") {

                            $("input[name='ckbGds']").eq(4).attr("disabled", false);
                            $("input[name='ckbGds']").eq(4).attr("checked", true);
                            $("#travelskyText").attr("style", "color:#000000");
                            $("#ckbTS").attr("disabled", false); 
                        }
                        else {
                            var code = temp[0].substring(1, 4);
                            if (code == "BJS" || code == "HKG") {
                                $("input[name='ckbGds']").eq(4).attr("disabled", false);
                                $("input[name='ckbGds']").eq(4).attr("checked", true);
                                $("#travelskyText").attr("style", "color:#000000");
                                $("#ckbTS").attr("disabled", false); 
                            }
                            else {
                                $("input[name='ckbGds']").eq(4).prop("checked", false);
                                $("input[name='ckbGds']").eq(4).attr("disabled", true);
                                $("#travelskyText").attr("style", "color:#DCDCDC");
                                $("#ckbTS").attr("disabled", true); 
                            }

                        }
                    }
                }
            }
        });

    }
    else {
        $("input[name='ckbGds']").eq(4).prop("checked", false);
        $("input[name='ckbGds']").eq(4).attr("disabled", true);
        $("#travelskyText").attr("style", "color:#DCDCDC");
        $("#ckbTS").attr("disabled", true); 
    }
}


function RemoveLeg(num) {
    for (var i = 1; i < 6; i++) {
        if (i > num) {
            $("#txtFrom" + num).val($("#txtFrom" + i).val());
            $("#txtTo" + num).val($("#txtTo" + i).val());
            $("#txtDate" + num).val($("#txtDate" + i).val());
            num++;
        }
    }
    var iCount = 0;
    $(".multiCityLeg").each(function () {
        if ($(this).css("display") == "none") {
            return;
        }
        iCount++;
    });

    iCount = iCount - 1;
    $("#txtFrom" + iCount).val("");
    $("#txtTo" + iCount).val("");
    $("#multiCityLeg" + iCount).css("display", "none");
}

function ReSetDate(date1, date2) {
    var day = 1 * 24 * 60 * 60 * 1000;
    var newDate = new Date(Date.parse(date1.val()));
    newDate.setSeconds(newDate.getSeconds(), day);
    date2.datepicker("setDate", newDate);
}

function VaildMultiCity(multiCityLeg, num) {
    if (multiCityLeg != null) {
        if (multiCityLeg[0] != "" && multiCityLeg[1] != "") {
            if (getByteLen(multiCityLeg[0]) < 3) {
                alert("Flight" + num + " departure airport must more than 2 words.");
                return false;
            }
            if (getByteLen(multiCityLeg[1]) < 3) {
                alert("Flight" + num + " destination airport must more than 2 words.");
                return false;
            }
            if (format(multiCityLeg[2]) == false) {
                alert("Flight" + num + " departure date format is incorrect, please re-enter");
                return false;
            }
        }
        else if (multiCityLeg[0] == "" && multiCityLeg[1] != "") {
            alert("Please input the flight" + num + " depature airport.");
            return false;
        }
        else if (multiCityLeg[0] != "" && multiCityLeg[1] == "") {
            alert("Please input the flight" + num + " destination airport.");
            return false;
        }

        return true;
    }
    else {
        return true;
    }
}

function jointAirport(multiCityLeg) {
    var where = "";
    var from = "";
    var to = "";
    if (multiCityLeg != null) {
        if (multiCityLeg[0] != "") {
            from = multiCityLeg[0];
        }
        if (multiCityLeg[1] != "") {
            to = multiCityLeg[1];
        }
    }

    if (from != "" && to != "") {
        where = from + "|" + to;
    }
    else {
        where = from + to;
    }
    return where;
}

function SwitchWorldspanAPI(num) {
    //$("input[name='ckbGds']").eq(num).prop("checked", true);
    if (num == 0) {
        if ($("input[name='ckbGds']").eq(num + 1).is(':checked')) {
            $("input[name='ckbGds']").eq(num + 1).prop("checked", false);
        }
    } else {
        if ($("input[name='ckbGds']").eq(num - 1).is(':checked')) {
            $("input[name='ckbGds']").eq(num - 1).prop("checked", false);
        }
    }
}

function getByteLen(val) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);
        if (a.match(/[^\x00-\xff]/ig) != null) {
            len += 2;
        }
        else {
            len += 1;
        }
    }
    return len;
};

//jQuery.post(url, [data], [callback], [type])
//url,[data],[callback],[type]
//url:发送请求地址。
//data:待发送 Key/value 参数。
//callback:发送成功时回调函数。
//type:返回内容格式，xml, html, script, json, text, _default。
// 
//$.post("test.aspx", { name: "John", time: "2pm" }, function() { window.location.href = "test.aspx"; });
