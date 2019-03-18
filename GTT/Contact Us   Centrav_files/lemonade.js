$(document).ready(function(){$(".easter-egg").click(function(e){e.ctrlKey&&vaporwave()}),$(":input").each(function(){$(this).hasClass("clearable")&&""!==$(this).val()&&$(this).addClass("x")}),$(".clearable").focusin(function(){$(this).select()});var e=$(".airport-autocomplete");0<e.length&&e.airportAutocomplete(),$(".toggle-filter").click(function(){$(this).find(".filter-chevron").hasClass("fa-chevron-right")?($(this).siblings(".toggle-sibling").removeClass("hidden"),$(this).find(".filter-chevron").removeClass("fa-chevron-right"),$(this).find(".filter-chevron").addClass("fa-chevron-down")):($(this).siblings(".toggle-sibling").addClass("hidden"),$(this).find(".filter-chevron").removeClass("fa-chevron-down"),$(this).find(".filter-chevron").addClass("fa-chevron-right"))}),$(".datepicker").focusout(function(){$(this).val(formatDate($(this).val()))})});var consumer=!1;function checkHeight(){var e=$("#Slideshow"),t=$(".flexslider"),a=$(".slider-overlay").height();426<a?(e.css("height",a+124),t.css("height",a+124)):(e.css("height",550),t.css("height",550)),$(window).trigger("resize")}function toggleState(e,t,a){var i=$("#"+t),n=$("#"+a);"US"!==e?(i.hide(),i.find("select").prop("disabled",!0),"CA"===e?(n.find("select").prop("disabled",!1),n.show()):(n.find("select").prop("disabled",!0),n.hide())):(i.show(),i.find("select").prop("disabled",!1),n.hide(),n.find("select").prop("disabled",!0))}function switchSecurityTab(e){null!=document.getElementById("SecurityContainer")&&("Register"==e||"Search"==e?$("#SecurityContainer").addClass("container"):$("#SecurityContainer").removeClass("container")),null!=document.getElementById("AffiliateTab")&&("Search"==e||"Builder"==e||"Groups"==e?$("#AffiliateTab").removeClass("hidden"):$("#AffiliateTab").addClass("hidden")),$(".auth-tab:not(#"+e+"Tab)").each(function(){$(this).removeClass("ui-tabs-active"),$(this).removeClass("ui-state-active")}),$(".tab-content:not(#"+e+"Form)").each(function(){$(this).addClass("hidden")}),$("#"+e+"Tab").addClass("ui-tabs-active"),$("#"+e+"Tab").addClass("ui-state-active"),$("#"+e+"Form").removeClass("hidden"),checkHeight()}function formatCurrency(e){if(null!=e){e=e.toString().replace(/\$|\,/g,""),isNaN(e)&&(e="0"),sign=e==(e=Math.abs(e)),e=Math.floor(100*e+.50000000001),cents=e%100,e=Math.floor(e/100).toString(),cents<10&&(cents="0"+cents);for(var t=0;t<Math.floor((e.length-(1+t))/3);t++)e=e.substring(0,e.length-(4*t+3))+","+e.substring(e.length-(4*t+3));return(sign?"":"-")+"$"+e+"."+cents}}function formatDate(e){if(""==e||!/\d/.test(e))return e;var t=moment().get("year"),a=moment(e);return a.isValid()||(a=moment(e+" "+t)),a.isValid()||(a=moment(e+","+t)),a.isValid()||(a=moment(e+"/"+t)),a.isValid()||(a=moment(e+t,"DDMMMYYYY")),a.isValid()?(a.isBefore(moment().startOf("day").subtract("1","days"))&&(a=a.year(moment().get("year"))).isBefore(moment().startOf("day"))&&(a=a.add(1,"years")),a.format("MM/DD/YYYY")):e}function showLoading(e){var t=$(e);t.append('<i class="fa fa-spin fa-circle-o-notch space-left"></i>'),t.prop("disabled",!0)}function getBrowser(){var e,t=navigator.userAgent,a=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(a[1])?{name:"IE",version:(e=/\brv[ :]+(\d+)/g.exec(t)||[])[1]||""}:"Chrome"===a[1]&&null!=(e=t.match(/\bOPR|Edge\/(\d+)/))?{name:"Opera",version:e[1]}:(a=a[2]?[a[1],a[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=t.match(/version\/(\d+)/i))&&a.splice(1,1,e[1]),{name:a[0],version:a[1]})}function stopLoading(e){var t=$(e);t.prop("disabled",!1),t.find(".fa").remove()}function showMoreFareDetails(e){var t=$("#Fare"+e);return t.find(".fewer-details-only").hide(),t.find(".more-details-only").show(),!1}function showFewerFareDetails(e){var t=$("#Fare"+e);return t.find(".more-details-only").hide(),t.find(".fewer-details-only").show(),!1}function vaporwave(){var e=document.createElement("audio");!1===consumer?(e.setAttribute("src","../img/vaporwave.mp3"),e.addEventListener("ended",function(){this.play()},!1),e.play(),$("#footer").css("background-color","#f200a1"),$("#header-wrap").css("background-image","url(../img/bust.jpg)"),consumer=!0):e.pause(),$("#HeaderLogo").attr("src","https://centrav.clientlemonade.blizzard/img/200w_d.gif"),$(".form-control").css({"background-color":"teal",color:"cyan"}),$("button").css({"background-color":"pink",color:"limegreen"}),$("#SearchForm").css({"background-color":"yellow"}),$("#travel-slider-overlay").addClass("vaporwave"),$("body").css({"letter-spacing":"6px"})}jQuery(function(t){function a(e){return e?"addClass":"removeClass"}t(document).on("input",".clearable",function(){t(this)[a(this.value)]("x")}).on("mousemove",".x",function(e){t(this)[a(this.offsetWidth-18<e.clientX-this.getBoundingClientRect().left)]("onX")}).on("touchstart click",".onX",function(e){e.preventDefault(),t(this).removeClass("x onX").val("").change(),t(this).typeahead&&t(this).typeahead("val","")})});