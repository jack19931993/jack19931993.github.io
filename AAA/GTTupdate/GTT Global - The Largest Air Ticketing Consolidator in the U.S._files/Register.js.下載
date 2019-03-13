var websiteAbsolutlyPath = "";

function ShowUrlConn(tag, obj, menuindex, path, usertype, fullpath) {

    var temp = Header.SetMENUIndex(menuindex);

    //    if (tag == "6") {
    //        alert("Under Construction!!  Come up SOON!!");
    //        return;
    //    } else

    if (tag == "7" && usertype != "GTT") {
        var confirmInfo = "(1)GTT will charge $10 Service Fee for each Ticket and 4% Credit Card fee.  Pls include this in your Selling Price.\n";
        confirmInfo = confirmInfo + "(2) Pls click 'Order' link on upper right corner and you will be linked to China Flight Search/Booking webpages ALL in English (it may tak 30-50 sec, pls wait...).\n";
        confirmInfo = confirmInfo + "(3) Once order is completed with Order Number, pls click the 'China Flight Order Mgmt'(under GttGlboal Booking Tab) and enter Credit Card Payment info to issue Ticket.  Pls order ticket in 24 hours to avoid price change.";
        if (!confirm(confirmInfo))
            return;
    }

    var AccountCodeNo = "";
    var EanTemp2 = "";
    var agentCode = "";
    var agentName = "";
    var branch = "";
    var userID = "";
    var userName = "";
    try {
        SaveItemClickRecord(tag);
        if (document.getElementById("ctl00_Header1_HideAccountCode") != null)
            AccountCodeNo = document.getElementById("ctl00_Header1_HideAccountCode").value;
        else if (document.getElementById("Header1_HideAccountCode") != null)
            AccountCodeNo = document.getElementById("Header1_HideAccountCode").value;

        if (document.getElementById("ctl00_Header1_HideEanTemp2") != null)
            EanTemp2 = document.getElementById("ctl00_Header1_HideEanTemp2").value;
        else if (document.getElementById("Header1_HideEanTemp2") != null)
            EanTemp2 = document.getElementById("Header1_HideEanTemp2").value;

        if (document.getElementById("ctl00_Header1_HidAgentCode") != null)
            agentCode = document.getElementById("ctl00_Header1_HidAgentCode").value;
        else if (document.getElementById("Header1_HidAgentCode") != null)
            agentCode = document.getElementById("Header1_HidAgentCode").value;

        if (document.getElementById("ctl00_Header1_HidAgentName") != null)
            agentName = document.getElementById("ctl00_Header1_HidAgentName").value;
        else if (document.getElementById("Header1_HidAgentName") != null)
            agentName = document.getElementById("Header1_HidAgentName").value;

        if (document.getElementById("ctl00_Header1_HidBranch") != null)
            branch = document.getElementById("ctl00_Header1_HidBranch").value;
        else if (document.getElementById("Header1_HidBranch") != null)
            branch = document.getElementById("Header1_HidBranch").value;

        if (document.getElementById("ctl00_Header1_HidUserID") != null)
            userID = document.getElementById("ctl00_Header1_HidUserID").value;
        else if (document.getElementById("Header1_HidUserID") != null)
            userID = document.getElementById("Header1_HidUserID").value;

        if (document.getElementById("ctl00_Header1_HidUserName") != null)
            userName = document.getElementById("ctl00_Header1_HidUserName").value;
        else if (document.getElementById("Header1_HidUserName") != null)
            userName = document.getElementById("Header1_HidUserName").value;

        if (tag != "14" && tag != "0" && tag != "100" && tag != "105" && tag != "107" && tag != "108" && tag != "104" && tag != "110" && tag != "116" && tag != "118") {
            if (AccountCodeNo == "") {
                alert("Welcome to GTT Global's Demo booking program.\nThis program allows you to see live availability and pricing but you cannot complete\na reservation until you have been set up with an account code. To get an account.\ncode, please send a request to sales@gttglobal.com.")
                //return;
            }
        }
    }
    catch (e) { }


    if (tag == "100") {
        obj.href = path + "Index.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "101") {
        obj.href = path + "SearchFare/searchFare.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "102") {
        obj.href = path + "BasePage/Upload.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "103") {
        obj.href = path + "BasePage/GTTReport.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "104") {
        obj.href = path + "BasePage/TermsConditions.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "105") {
        obj.href = path + "BasePage/UserInfo.aspx";
        obj.target = "_top";
        obj.click();
    }
    //        else if (tag == "106") {
    //            obj.href = "#";
    //            obj.target = "_top";
    //            obj.click();
    //        }
    else if (tag == "107") {
        obj.href = path + "BasePage/AboutUs.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "108") {
        obj.href = path + "BasePage/branch.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "109") {
        obj.href = "/BookingManage/OrderInfo.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "198") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "199") {
        obj.href = path + "BookingManage/TravelSkyOrderInfo.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "110") {
        obj.href = path + "BasePage/Register.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "111") {
        obj.href = path + "BasePage/Office.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "112") {
        obj.href = path + "BasePage/UserInfo02.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "113") {
        obj.href = path + "BasePage/UserInfo03.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "114") {
        obj.href = path + "BasePage/MistakeReport.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "115") {
        obj.href = path + "BasePage/ForgotPassword.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "116") {
        obj.href = path + "BasePage/Careers.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "117") {
        obj.href = path + "File/US CUSTOMIZED TOURS - AGENT GUIDE (NOVA2USA).pdf";
        obj.target = "_blank";
        obj.click();
    }
    else if (tag == "118") {
        obj.href = path + "BasePage/Careers.aspx"
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "119") {
        obj.href = "http://45.40.135.37:7005/ContractList.aspx?username=" + userName;
        obj.target = "_blank";
        obj.click();
    }
    else if (tag == "120") {
        obj.href = path + "BasePage/ChangePassword.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "9999") {
        obj.href = fullpath;
        obj.target = "_self";
        obj.click();
    }
    else if (tag == "1") {
        obj.href = "../Sabre/SearchFlight.aspx";
        obj.target = "_self";
        obj.click();
    } else if (tag == "2") {
        //        obj.href = "../Default.aspx?type=" + tag;
        obj.href = fullpath;
        obj.target = "_blank";
        obj.click();
    } else if (tag == "24") {
        //        obj.href = "../Default.aspx?type=" + tag;
        obj.href = fullpath;
        obj.target = "_blank";
        //obj.click();
    }
    else if (tag == "25") {
        //        obj.href = "../Default.aspx?type=" + tag;
        obj.href = fullpath;
        obj.target = "_blank";
        obj.click();
    }
    else if (tag == "3") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    } else if (tag == "4") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    } else if (tag == "5") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    } else if (tag == "6") {
        obj.href = "//acct.gttglobal.com/invoice/login.aspx";
        obj.click();
        obj.target = "_blank";
    } else if (tag == "7") {
        createFormAndSubmit();
    } else if (tag == "8") {
        //        obj.href = "../Default.aspx?type=" + tag;
        obj.href = fullpath;
        obj.target = "_blank";
        obj.click();
    } else if (tag == "9") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    } else if (tag == "10") {
        //        obj.href = "../Default.aspx?type=" + tag;
        obj.href = fullpath;
        obj.target = "_blank";
        //obj.click();
    } else if (tag == "11") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    } else if (tag == "12") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    } else if (tag == "13") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    } else if (tag == "14") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    } else if (tag == "15") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    } else if (tag == "16") {
        obj.href = path + "AgencyForm/Forms.aspx";
        obj.target = "_top";
        obj.click();
    } else if (tag == "17") {
        obj.href = "../SearchFare/searchTourFare.aspx?MJV=T";
        obj.target = "_top";
        obj.click();
    } else if (tag == "18") {
        //        obj.href = "../Default.aspx?type=" + tag;
        obj.href = fullpath.replace("TYPE=T", "TYPE=I");
        obj.target = "_blank";
        obj.click();
    } else if (tag == "19") {
        obj.href = "../Worldspan/SearchFlight.aspx";
        obj.target = "_self";
        obj.click();
    } else if (tag == "20") {
        obj.href = "../AgencyForm/AgentInfo.aspx";
        obj.target = "_top";
        obj.click();
    } else if (tag == "21") {
        obj.href = "../Worldspan/SearchFlight.aspx?BookingType=3";
        obj.target = "_self";
        obj.click();
    } else if (tag == "22") {
        obj.href = "../TravelSky/SearchFlight.aspx?BookingType=4";
        obj.target = "_self";
        obj.click();
    } else if (tag == "23") {
        //        //        obj.href = '../Ean/EanFrame.aspx';
        //obj.href = "https://book.hotelzon.com/portallogin?" + fullpath;
        //password=Test123!
        var splitPath = fullpath.split("password=")[1];
        var passwordText = splitPath.split("&")[0];
        var newPassword = compile(passwordText);
        fullpath = fullpath.replace(passwordText, newPassword);

        obj.href = "../BasePage/GTTHotelTransferPage.aspx?param=" + fullpath;
        obj.target = "_blank";
        //obj.click();
    }
    else if (tag == "26") {
        obj.href = "../SearchFare/searchTSFare.aspx?MJV=TS";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "27") {
        obj.href = "../BasePage/UserUpdate.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "28") {
        obj.href = "../BasePage/AgentCommisionSheet.aspx";
        obj.target = "_top";
        obj.click();
    }
    else if (tag == "29") {
        obj.href = "../MultiGds/SearchFlight.aspx";
        obj.target = "_self";
        obj.click();
    }
    else if (tag == "30") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "31") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "32") {
        obj.href = "../BasePage/TourFlyer.aspx"
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "33") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "34") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "35") {
        obj.href = "//tkt.gttglobal.com/sabreAutoTkt/GalbalLogin.aspx?MerchantCode=GTT&AgentCode=" + agentCode + "&AgentName=" + agentName + "&Branch=" + branch + "&UserID=" + userID;
        obj.click();
        obj.target = "_blank";
    }
    else if (tag == "36") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "37") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "38") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "39") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "40") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "41") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "42") {
        //obj.href = "http://ec2-184-169-214-190.us-west-1.compute.amazonaws.com:8080/Sabrehx/";
        //obj.href = "http://ec2-184-169-214-190.us-west-1.compute.amazonaws.com:8080/Sabrehx/Travel/login/";
        obj.href = "//hx.gttglobal.com/Sabrehx/";
        obj.click();
        obj.target = "_blank";
    }
    else if (tag == "43") {
        obj.href = "//ticketsys.gttglobal.com/AmadeusTickets.aspx";
        //obj.click();
        obj.target = "_blank";
    }
    else if (tag == "44") {
        obj.href = "../Car/CarBooking.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "45") {
        obj.href = "../BasePage/AirHotelFlyer.aspx"
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "46") {
        obj.href = "../Promo/AppleVacations.aspx"
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "47") {
        obj.href = "../Promo/ENewsFlyer.aspx"
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "48") {
        obj.href = "../HotelPackage/SearchHotel.aspx";
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "49") {
        obj.href = "//ticketsys.gttglobal.com/SabreTicketList.aspx"
        //obj.click();
        obj.target = "_blank";
    }
    else if (tag == "50") {
        obj.href = "../Promo/GOEUGOTravel.aspx"
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "51") {
        //obj.href = "http://test.terms.majestic-vacations.com/Page/NewOrder/NewTour/CounterfeitTour.aspx"
        obj.href = fullpath;
        //obj.click();
        obj.target = "_blank";
    }
    else if (tag == "52") {
        obj.href = "https://www.groundlink.com/gttglobal";
        //obj.click();
        obj.target = "_blank";
    }
    else if (tag == "53") {
        obj.href = "//ticketsys.gttglobal.com/WorldSpanTickets.aspx";
        //obj.click();
        obj.target = "_blank";
    }
    else if (tag == "54") {
        obj.href = "//tkt.gttglobal.com/deposit/login.aspx";
        //obj.click();
        obj.target = "_blank";
    }
    else if (tag == "55") {
        obj.href = "//www.majestic-vacations.com/Brochures.aspx?tab=BR";
        obj.click();
        obj.target = "_blank";
    }
    else if (tag == "56") {
        obj.href = "../Promo/FestivalTravel.aspx"
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "57") {
//        var filename = window.location.href;
//        filename = filename.substr(filename.lastIndexOf("/") + 1);
//        if (filename == "Index.aspx") {
//            $("#divBackGround").show();
//            var top = ($("#divBackGround").height() - $("#insurance_booking").height()) / 4;
//            var left = ($("#divBackGround").width() - $("#insurance_booking").width()) / 2;
//            var scrollTop = $(document).scrollTop();
//            var scrollLeft = $(document).scrollLeft();
//            $("#divBackGround").css({ "top": scrollTop, "left": scrollLeft });
//            $("#insurance_booking").css({ "top": top + scrollTop, "left": left + scrollLeft });
//            $("#insurance_booking").show('silp');
//        }
//        else {
//            alert("Please go to Home page and click TRAVEL INSURANCE again.");
//            obj.href = "../Index.aspx";            
//            obj.target = "_self";
//        }
        //obj.href = "../Default.aspx?type=" + tag;
        obj.href = "https://www.travelguard.com/agentlink.asp?ta_arc=125162&pcode=";
        obj.click();
        obj.target = "_blank";
    }
    else if (tag == "80") {
        obj.href = "http://gtt.trawickinternational.com/?" + fullpath;
        obj.click();
        obj.target = "_blank";
    }
    else if (tag == "58") {
        obj.href = fullpath;
        obj.click();
        obj.target = "_blank";
    }
    else if (tag == "59") {
        obj.href = "//ticketsys.gttglobal.com/ApolloTickets.aspx"
        //obj.click();
        obj.target = "_blank";
    }
    else if (tag == "60") {
        //        obj.href = '../Ean/EanFrame.aspx';
        obj.href = "//www.travelnow.com/templates/364538?currency=USD&lang=EN&temp1=" + AccountCodeNo + "&temp2=" + EanTemp2;
        obj.target = "_blank";
        obj.click();
    }
    else if (tag == "61") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "62") {
        obj.href = fullpath;
        obj.target = "_blank";
//        obj.click();
    }
    else if (tag == "63") {
        obj.href = fullpath;
        obj.target = "_blank";
        obj.click();
    }
    else if (tag == "64") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "70") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "71") {
        obj.href = "../MultiGds/SearchFlightForMultiPcc.aspx";
        obj.click();
        obj.target = "_self";
    }
    else if (tag == "72") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "8838") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "75") {
        obj.href = "https://v2.zopim.com/widget/livechat.html?api_calls=%5B%5D&hostname=gttglobal.com&key=4wRGcxpBPPXyA2VXI6dIkEPpgWu7feqJ&lang=en&";
        //obj.click();
	obj.target = "_blank";
    }
    else if (tag == "76") {
        obj.href = "../Promo/CruiseRequest.aspx";
        obj.target = "_self";
        obj.click();
    }
    else if (tag == "77") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    }
    else if (tag == "81") {
        obj.href = fullpath;
        obj.click();
        obj.target = "_blank";
    }
    else if (tag == "82") {
        obj.href = "../Default.aspx?type=" + tag;
        obj.click();
        obj.target = "_top";
    } 
    else if (tag == "99") {
        obj.href = "../Hotel/HotelPage.aspx";
        obj.target = "_self";
        obj.click();
    }
}

function ShowAirportTransportation() {
    //    window.location = "../Default.aspx?type=999";
    var atUrl = "https://api.mozio.com/api/v1/travel-agents/create/?api_key=491557044e684296afbb0b75a0eaf28d&agent_type=1&company_code=7724861547&";
    var user = "";
    if (document.getElementById("ctl00_Header1_HidAT") != null)
        user = document.getElementById("ctl00_Header1_HidAT").value;
    else if (document.getElementById("Header1_HidAT") != null)
        user = document.getElementById("Header1_HidAT").value;
    atUrl = atUrl + user;
    if (user == "") {
        window.location = "//www.gttglobal.com/";
        return;
    }
    else {
        var w = window.open("https://www.mozio.com/?utm_source=gttglobal.com&utm_medium=Partnership&utm_campaign=GTT#/GTT");
        $.ajax({
            type: "Get",
            url: atUrl,
            dataType: "json",
            async: false,
            success: function (data) {
                if (data != null && data.error) {
                    if (data.error.error_message == "none"
                    && data.error.error_code == "0") {
                        //window.location = "../Default.aspx?type=999";
                        //window.open('https://www.mozio.com/#/GTT');
                        w.location = "https://www.mozio.com/?utm_source=gttglobal.com&utm_medium=Partnership&utm_campaign=GTT#/GTT";
                    }
                    else {
                        w.close();
                        $.ajax({
                            type: "Post",
                            url: "../AjaxHandler.aspx",
                            async: false,
                            data: "error_message=" + data.error.error_message + "&error_code=" + data.error.error_code,
                            success: function (data) {
                                alert("User info error, please try again or contact the site.");
                            },
                            error: function (err) {
                            }
                        });
                    }
                }
                else {
                    alert("User info error, please try again or contact the site.");
                }
            }
        });
    }
}

function createCitsSubmit() {
    var submitForm = getNewSubmitForm();
    submitForm.action = "http://10.227.52.12:12345";
    createNewFormElement(submitForm, "UserID", '<%=UserID %>');
    createNewFormElement(submitForm, "Type", '<%=UserType %>');
    submitForm.target = "_blank";
    submitForm.submit();
}

function getNewSubmitForm() {
    var submitForm = document.createElement("FORM");
    document.body.appendChild(submitForm);
    submitForm.method = "POST";
    return submitForm;
}

function createNewFormElement(inputForm, elementName, elementValue) {
    var newElement = document.createElement("input");
    newElement.type = "hidden";
    newElement.name = elementName;
    inputForm.appendChild(newElement);
    newElement.value = elementValue;
    return newElement;
}

function createFormAndSubmit() {
    var submitForm = getNewSubmitForm();
    submitForm.action = "//b2b.cits.com.cn/citsonlineWeb/online/gttLogin.jsp";
    createNewFormElement(submitForm, "UserName", "GTT-CITS");
    createNewFormElement(submitForm, "Password", "cits85118522@");
    createNewFormElement(submitForm, "UserID", '<%=UserID %>');
    createNewFormElement(submitForm, "AgentName", '<%=AgentName %>');
    createNewFormElement(submitForm, "AgentCode", '<%=UserNo %>');
    createNewFormElement(submitForm, "Telephone", '<%=Telephone %>');
    createNewFormElement(submitForm, "Email", '<%=EmailAddress %>');
    createNewFormElement(submitForm, "Branch", '<%=BranchOffice %>');
    createNewFormElement(submitForm, "ExchangeRate", '<%=CitisRmbRate %>');
    submitForm.target = "_blank";
    submitForm.submit();
}

function SubmitToCITS(uid, agentName, uno, tel, email, branch, citisRmbRate) {
    var submitForm = getNewSubmitForm();
    submitForm.action = "//b2b.cits.com.cn/citsonlineWeb/online/gttLogin.jsp";
    createNewFormElement(submitForm, "UserName", "GTT-CITS");
    createNewFormElement(submitForm, "Password", "cits85118522@");
    createNewFormElement(submitForm, "UserID", uid);
    createNewFormElement(submitForm, "AgentName", agentName);
    createNewFormElement(submitForm, "AgentCode", uno);
    createNewFormElement(submitForm, "Telephone", tel);
    createNewFormElement(submitForm, "Email", email);
    createNewFormElement(submitForm, "Branch", branch);
    createNewFormElement(submitForm, "ExchangeRate", citisRmbRate);
    submitForm.target = "_blank";
    submitForm.submit();
}

function sessionTimeout() {
    try {
        var timeleft = $("#lblTime").val();
        timeleft = timeleft - 1;
        $("#lblTime").val(timeleft);

        if (timeleft <= 0) {
            window.clearInterval(sessionTimeout);

            var dialogContent = "<div id='popTimeOut' class='search_frame'><div class='search_top'><div class='search_pic'><img src='" + websiteAbsolutlyPath + "images/popup_timeout.jpg' alt='' /></div><div class='search_bold'>Timeout Notification</div><div class='popup_txt'>Your session has timed out after 60 minutes of inactivity.</div><div class='popup_txt'>Please click OK to login again.</div><div class='popup_txt'><span class='popup_btn'><a href='javascript:void(0)' onclick='Timeout_Logout();'>OK</a></span></div></div><div class='search_bot'></div></div>";

            var timeoutDialog = $.dialog({
                id: 'searching',
                content: dialogContent,
                lock: true,
                opacity: 0,
                drag: false,
                esc: false,
                cancel: false,
                cancelVal: null,
                title: null,
                resize: false
            });
        }
    } catch (e) { }
}

function Timeout_Logout() {
    top.document.location.href = websiteAbsolutlyPath + "BasePage/Logout.aspx";
}

self.setInterval("sessionTimeout()", 60000);

function SaveItemClickRecord(tag) {
    switch (tag) {
        case "19":
            Header.SaveItemClickRecord("WorldSpanBooking");
            break;
        case "1":
            Header.SaveItemClickRecord("EVABooking");
            break;
        case "3":
            Header.SaveItemClickRecord("In-House Credit Card Charge");
            break;
        case "2":
            Header.SaveItemClickRecord("Hotel & Tour Booking");
            break;
        case "7":
            Header.SaveItemClickRecord("China Flight Booking");
            break;
        case "8":
            Header.SaveItemClickRecord("Tour Booking");
            break;
        case "9":
            Header.SaveItemClickRecord("China Flight Order Mgmt");
            break;
        case "10":
            Header.SaveItemClickRecord("GTA Hotel");
            break;
    }
}

function compile(code) {
    var c = String.fromCharCode(code.charCodeAt(0) + code.length);
    for (var i = 1; i < code.length; i++) {
        c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
    }
    return escape(c);
}


function uncompile(code) {
    code = unescape(code);
    var c = String.fromCharCode(code.charCodeAt(0) - code.length);
    for (var i = 1; i < code.length; i++) {
        c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
    }
    return c;
}  