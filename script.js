// Triggering Pop over function
var popoverTriggerElements = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
for (var i = 0; i < popoverTriggerElements.length; i++) {
  new bootstrap.Popover(popoverTriggerElements[i]);
}

// Time setter
$(function () {
  $("#picker").datepicker({
    dateFormat: "dd-mm-yy",
  });
});
