
var bookingbuddy = null;

BookingBuddy = function(params){
    
    return {
	getFlightPartners:function(o, d){
	    var url = "//www.onetime.com/partnerlistapi?sid=";
	    url += params.sid;
	    url += "&clientIP=auto&format=json&target=flight&from=";
	    url += o;
	    url += "&to=";
	    url += d;
	    url += "&callback=bookingbuddy.flightCallBack";
	    if ( params.debug ) {
		url += "&test=1";
	    }
	    $.getScript(url);
	},
	getLocationPartners:function(l){
	    var url = "//www.onetime.com/partnerlistapi?sid=";
	    url += params.sid;
	    url += "&clientIP=auto&format=json&target=location&city=";
	    url += l;
	    url += "&callback=bookingbuddy.locationCallBack";
	    if ( params.debug ) {
		url += "&test=1";
	    }
	    $.getScript(url);
	},
	parseFlightData: function(d){
	    if( d && d.flights && d.flights[0] && d.flights[0].partners )
	    {
		var v = [],
		pars = d.flights[0].partners;
		
		for( var p = 0; p < pars.length; p++)
		{
		    if( pars[p].partnerLabel.toLowerCase().indexOf("esoon") == -1 )
		    {
			v.push({checked: pars[p].checked,
				img:     pars[p].partnerImage.large,
				url:     pars[p].landingURL,
				label:   pars[p].partnerLabel
			       });
		    }
		}
		return v;
	    }
	    return null;
	},
	parseLocationData: function(d){
	    if( d && d.locations && d.locations[0] && d.locations[0].partners )
	    {
		var v = [],
		pars = d.locations[0].partners;
		
		for( var p = 0; p < pars.length; p++)
		{
		    if( pars[p].partnerLabel.toLowerCase().indexOf("esoon") == -1 )
		    {
			v.push({checked: pars[p].checked,
				img:     pars[p].partnerImage.large,
				url:     pars[p].landingURL,
				label:   pars[p].partnerLabel
			       });
		    }
		}
		return v;
	    }
	    return null;
	},
	flightCallBack:function(d){
	    var partners = this.parseFlightData(d);
	    if (partners){
		params.flightCallBack(partners);			    
	    }
	},
	locationCallBack:function(d){
	    var partners = this.parseLocationData(d);
	    if (partners){
		params.locationCallBack(partners);			    
	    }
	}

    };
}


compare = function (params) {

    if (typeof params != "object") {
        return {};
    };
    var dataSource;
    var o, d, oo, od, oDest;
    var partners = { 'flights': null, 'locations': null };
    var my = {
        getPartners: function () {
            return partners.flights;
        },
        getLocationPartners: function () {
            return partners.locations;
        },
        setPartners: function (p) {
            partners.flights = p;
        },
        setLocationPartners: function (p) {
            partners.locations = p;
        },
        extractString: function (startSym, endSym, width, target) {
            var from = target.indexOf(startSym),
	    to = target.indexOf(endSym, from);

            if (from >= 0 && to > 0 && from + 1 + width == to) {
                return target.substring(from + 1, to);
            }

            return null;
        },
        stripAPC: function (user_string) {
            if (typeof user_string == "string") {
                if (user_string.length == 3) {
                    return user_string;
                } else {
                    var hop2, esoon;
                    if (hop2 = my.extractString('(', ')', 3, user_string)) {
                        return hop2;
                    }
                    else if (esoon = my.extractString('-', ',', 5, user_string)) {
                        return esoon.trim();
                    }
                }
            }

            return null;
        },
        toHtml: function (pl, params, pre) {
            if (pl) {
                if (!pre) pre = "";
                var str = "<div class='comparebox_top'></div><div id='" + pre + "compare_wrapper'>"
                if (params[pre + 'Msg']) {
                    str += params[pre + 'Msg'];
                }
                if (params.compareAll && params.compareAbove) {
                    str += "<a href='#Compare All' id='" + pre + "compare_select_all'>Compare All</a>";
                }
                str += "<table class='compare_table' id='" + pre + "compare_table'>",
		    cols = 1,
		    max = 100,
		    style = 'text';

                if (params) {
                    if (params.cols) cols = params.cols;
                    if (params.max) max = params.max;
                    if (params.style) style = params.style;
                }
                for (var p = 0; p < pl.length && p < max; p++) {
                    var checked = "";
                    if (pl[p].checked) {
                        checked = "checked";
                    }

                    if (p % cols == 0) {
                        if (p > 0) {
                            str += "</tr>";
                        }
                        str += "<tr class='" + pre + "compare_row'>";
                    }
                    str += "<td class='compare_item' id='" + pre + "compare_" + p + "'><input " + checked + " type='checkbox' id='" + pre + "compare_checkbox_" + p +
			    "' name='" + pl[p].label + "' class='compare_checkbox'/>";
                    if (style == 'text') {
                        str += "<span class='compare_label' id='" + pre + "compare_label_" + p + "'>" + pl[p].label + "</span>";
                    }
                    else {
                        str += "<img src='" + pl[p].img + "' border='1' class='compare_image' id='" + pre + "compare_image_" + p + "'>";
                    }
                    str += "</td>";
                }
                str += "</tr></table>"
                if (params.compareAll && !params.compareAbove) {
                    str += "<a href='#Compare All' id='" + pre + "compare_select_all'>Compare All</a>";
                }
                str += "</div><div class='comparebox_bot'></div>";
                return str;
            }

            return null;
        },
        checkOD: function () {
            if (o && d) {
                if (oo != o || od != d) {
                    dataSource.getFlightPartners(o, d);
                    oo = o;
                    od = d;
                }
            }
            else {
                if (params.divMsg) {
                    str = $("#" + params.divMsg).html().replace("compare_wrapper_message", "compare_wrapper");
                    $('#' + params.div).html(str);
                    $('#' + params.div).slideDown(150);
                    $('#' + params.div).fadeIn(150);
                } else {
                    $('#' + params.div).slideUp(200);
                    $('#' + params.div).fadeOut(0);
                    $('#' + params.div).html("");
                }

                my.setPartners(null);
            }
        },
        setOrigin: function (ori) {
            o = my.stripAPC(ori);
            my.checkOD();
        },
        setDestination: function (dest) {
            d = my.stripAPC(dest);
            my.checkOD();
        },
        setLocation: function (dest) {
            if (dest) {
                if (oDest != dest) {
                    dataSource.getLocationPartners(dest);
                    oDest = dest;
                }
            }
            else {
                if (params.divHotelMsg) {
                    str = $("#" + params.divHotelMsg).html().replace("compare_wrapper_message", "compare_wrapper");
                    $('#' + params.locationDiv).html(str);
                    $('#' + params.locationDiv).slideDown(150);
                    $('#' + params.locationDiv).fadeIn(150);
                } else {
                    $('#' + params.locationDiv).slideUp(200);
                    $('#' + params.locationDiv).fadeOut(0);
                    $('#' + params.locationDiv).html("");
                }


                my.setLocationPartners(null);
            }
        },
        windowWidth: function (number, myScreen) {
            var w = 400;
            if (!myScreen) myScreen = screen;
            if (myScreen && myScreen.width) {
                w = Math.max(400, screen.width / number);
            }
            return Math.min(w, 800);
        },
        windowHeight: function (number, myScreen) {
            var h = 682;
            if (!myScreen) myScreen = screen;
            if (myScreen && myScreen.height) {
                h = (myScreen.height * 2) / 3
            }
            return Math.max(h, 400);
        },
        windowX: function (i, number, myScreen) {
            if (!myScreen) myScreen = screen;
            if (myScreen && myScreen.width && i && i >= 0 && number && number > 0) {
                return myScreen.width / number * i;
            } else {
                return i * 200;
            }
        },
        windowY: function (i, number, myScreen) {
            if (!myScreen) myScreen = screen;
            if (myScreen && myScreen.height) {
                return myScreen.height - my.windowHeight(number, myScreen);
            }
            return 0;
        },
        openWindows: function (checkboxesF, urlAddF, data) {
            return function () {
                var checkboxes = checkboxesF();
                var urlAdd = urlAddF();

                var settings = {
                    height: 600, // sets the height in pixels of the window.
                    width: 600, // sets the width in pixels of the window.
                    toolbar: 0, // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
                    scrollbars: 1, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
                    status: 0, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
                    resizable: 1, // whether the window can be resized {1 (YES) or 0 (NO)}. Can also be overloaded using resizable.
                    left: 0, // left position when the window appears.
                    top: 0, // top position when the window appears.
                    center: 0, // should we center the window? {1 (YES) or 0 (NO)}. overrides top and left
                    createnew: 1, // should we create a new window for each occurance {1 (YES) or 0 (NO)}.
                    location: 1, // determines whether the address bar is displayed {1 (YES) or 0 (NO)}.
                    menubar: 0, // determines whether the menu bar is displayed {1 (YES) or 0 (NO)}.
                    onUnload: null // function to call when the window is closed
                };
                settings.width = my.windowWidth(checkboxes.length);
                settings.height = my.windowHeight(checkboxes.length);
                //settings.height = window.screen.availHeight; 

                if ($("input[name='showcompare']").attr("checked") == "checked") {
                    for (var i = 0; i < checkboxes.length; i++) {
                        var box = checkboxes[i];
                        var id = box.id.substring(box.id.lastIndexOf('_') + 1);
                        settings.left = my.windowX(i, checkboxes.length);
                        settings.top = my.windowY(i, checkboxes.length);
                        var winName = new Date().getTime() + "Win";


                        var parameters = "location=" + settings.location + ",menubar=" + settings.menubar + ",height=" + settings.height + ",width=" + settings.width + ",toolbar=" + settings.toolbar + ",scrollbars=" + settings.scrollbars + ",status=" + settings.status + ",resizable=" + settings.resizable + ",left=" + settings.left + ",screenX=" + settings.left + ",top=" + settings.top + ",screenY=" + settings.top;
                        var url = data()[id].url;
                        var winObj = window.open(url + '' + urlAdd, winName, parameters);
                        if (winObj) {
                            if (params && params.popunder) {
                                winObj.blur();
                                window.focus();
                            } else {
                                winObj.focus();
                            }
                        } else {
                            break;
                        }
                    }
                }
            };
        }
    }


    // Setup the event handling
    if (params.origin) {
        $('#' + params.origin).blur(function () {
            my.setOrigin($('#' + params.origin).val());
        });

        $('#' + params.destination).blur(function () {
            my.setDestination($('#' + params.destination).val());
        });

        $('#' + params.location).blur(function () {
            var city;
            var citys = $('#' + params.location).val().split(/[\-]/);
            if (citys.length > 2)
                city = citys[citys.length - 1];
            else
                city = $('#' + params.location).val();
            my.setLocation(city);
        });

    }

    myFlightCallBack = function (data) {
        my.setPartners(data);
        if (params.div) {
            $('#' + params.div).slideUp(150);
            $('#' + params.div).fadeOut(100);
            $('#' + params.div).html(my.toHtml(data, params));
            $('#' + params.div).slideDown(150);
            $('#' + params.div).fadeIn(150);
        }
    }
    myLocationCallBack = function (data) {
        my.setLocationPartners(data);
        if (params.locationDiv) {
            $('#' + params.locationDiv).slideUp(150);
            $('#' + params.locationDiv).fadeOut(100);
            $('#' + params.locationDiv).html(my.toHtml(data, params, "loc_"));
            $('#' + params.locationDiv).slideDown(150);
            $('#' + params.locationDiv).fadeIn(150);
        }
    }

    $('#' + params.div).delegate('.compare_label', 'click', function () {
        var n = this.id.substring(this.id.lastIndexOf('_') + 1);
        var e = $('#compare_checkbox_' + n);
        e.attr('checked', !e.attr('checked'));
    });

    $('#' + params.div).delegate('.compare_image', 'click', function () {
        var n = this.id.substring(this.id.lastIndexOf('_') + 1);
        var e = $('#compare_checkbox_' + n);
        e.attr('checked', !e.attr('checked'));
    });

    $('#' + params.div).delegate('#compare_select_all', 'click', function () {
        $('.compare_checkbox', $('#' + params.div)).attr('checked', true);
    });

    $('#' + params.locationDiv).delegate('.compare_label', 'click', function () {
        var n = this.id.substring(this.id.lastIndexOf('_') + 1);
        var e = $('#loc_compare_checkbox_' + n);
        e.attr('checked', !e.attr('checked'));
    });

    $('#' + params.locationDiv).delegate('.compare_image', 'click', function () {
        var n = this.id.substring(this.id.lastIndexOf('_') + 1);
        var e = $('#loc_compare_checkbox_' + n);
        e.attr('checked', !e.attr('checked'));
    });

    $('#' + params.locationDiv).delegate('#loc_compare_select_all', 'click', function () {
        $('.compare_checkbox', $('#' + params.locationDiv)).attr('checked', true);
    });

    $('#' + params.search).bind('click', function () {
        var checkboxesF = function () { return $('#' + params.div).find('.compare_checkbox:checked'); };
        var urlAddF = function () {
            var depDate = $('#' + params.depDate).val();
            var retDate = $('#' + params.retDate).val();
            var adults = parseInt($('#' + params.adults).val()) + parseInt($('#' + params.children).val());
            return "&inDate=" + depDate + "&outDate=" + retDate + "&guests=" + adults;
        };

        return my.openWindows(checkboxesF, urlAddF, my.getPartners);

    } ());

    $('#' + params.locationSearch).bind('click', function () {
        var checkboxesF = function () { return $('#' + params.locationDiv).find('.compare_checkbox:checked'); };
        var urlAddF = function () {
            var depDate = $('#' + params.checkIn).val();
            var retDate = $('#' + params.checkOut).val();
            var rooms = parseInt($('#' + params.rooms).val());
            var adults = 0;
            for (var i = 0; i < params.guests.length && i < (rooms * 2); i++) {
                adults += parseInt($('#' + params.guests[i]).val());
            };
            return "&inDate=" + depDate + "&outDate=" + retDate + "&guests=" + adults + "&rooms=" +
		rooms;
        };

        return my.openWindows(checkboxesF, urlAddF, my.getLocationPartners);
    } ());

    dataSource = BookingBuddy({ sid: params.sid, debug: params.debug, flightCallBack: myFlightCallBack, locationCallBack: myLocationCallBack });
    bookingbuddy = dataSource;

    var test = null, ds = null;
    if (params && params.debug) {
        test = my;
        ds = dataSource;
    }

    // Check if the o or d have a value
    var chk = null;
    if (params.origin) {
        chk = $('#' + params.origin).val();
        if (chk) {
            my.setOrigin(chk);
        }
        chk = null;
    }

    if (params.destination) {
        chk = $('#' + params.destination).val();
        if (chk) {
            my.setDestination(chk);
        }
        chk = null;
    }

    if (params.location) {
        chk = $('#' + params.location).val();
        if (chk) {
            my.setLocation(chk);
        }
        chk = null;
    }

    // Return the object, will be empty unless testing.
    return {
        test: test,
        dataSource: ds
    }
};