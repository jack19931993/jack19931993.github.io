function checkFields(){var e=!0;$(".req-input").each(function(){""==$(this).val()&&(e=!1)}),!0===e?$("#ContactSubmit").prop("disabled",!1):$("#ContactSubmit").prop("disabled",!0)}$(document).ready(function(){checkFields(),$(".req-input").change(checkFields),$("#Message").on("input",checkFields)});