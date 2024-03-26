var Webflow = Webflow || [];
Webflow.push(function() {  
  // unbind webflow form handling (keep this if you only want to affect specific forms)
  $(document).off('submit');

  /* Any form on the page */
  $('form').submit(function(e) {
    e.preventDefault();

    const $form = $(this); // The submitted form
    const $submit = $('[type=submit]', $form); // Submit button of form
    const buttonText = $submit.val(); // Original button text
    const buttonWaitingText = $submit.attr('data-wait'); // Waiting button text value
    const formMethod = $form.attr('method'); // Form method (where it submits to)
    const formAction = $form.attr('action'); // Form action (GET/POST)
    const formRedirect = $form.attr('data-redirect'); // Form redirect location
    let formData = $form.serialize(); // Form data

    // Extracting UTM parameters from URL
    const currentPageURL = window.location.href.split('?')[0]; // Get URL without parameters
    const urlParams = new URLSearchParams(currentPageURL);
    const utmSource = urlParams.getAll('utm_source').filter((value, index, self) => self.indexOf(value) === index).join(',');
    const utmMedium = urlParams.getAll('utm_medium').filter((value, index, self) => self.indexOf(value) === index).join(',');
    const utmCampaign = urlParams.getAll('utm_campaign').filter((value, index, self) => self.indexOf(value) === index).join(',');
    const utmContent = urlParams.getAll('utm_content').filter((value, index, self) => self.indexOf(value) === index).join(',');
    const utmTerm = urlParams.getAll('utm_term').filter((value, index, self) => self.indexOf(value) === index).join(',');

    // Adding UTM parameters to form data
    formData += `&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_content=${utmContent}&utm_term=${utmTerm}`;

    // Adding form name to form data
    const formDataName = $form.attr('data-name');
    formData += `&formName=${formDataName}`;

    // Adding current page URL to form data
    formData += `&pageURL=${currentPageURL}`;

    // Set waiting text
    if (buttonWaitingText) {
      $submit.val(buttonWaitingText); 
    }
    
    $.ajax(formAction, {
      data: formData,
      method: formMethod
    })
    .done((res) => {
      // If form redirect setting set, then use this and prevent any other actions
      if (formRedirect) { window.location = formRedirect; return; }

      $form
        .hide() // optional hiding of form
        .siblings('.w-form-done').show() // Show success
        .siblings('.w-form-fail').hide(); // Hide failure
    })
    .fail((res) => {
      $form
        .siblings('.w-form-done').hide() // Hide success
        .siblings('.w-form-fail').show(); // show failure
    })
    .always(() => {
      // Reset text
      $submit.val(buttonText);
    });
  });
});
