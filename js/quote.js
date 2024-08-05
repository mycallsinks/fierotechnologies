  (function() {
    emailjs.init("WubvjL_oM6fI2e3yx"); // Initialize EmailJS with your public key

    function sendFormData(form, serviceType) {
      const formData = new FormData(form);
      const templateParams = {
        service_type: serviceType,
        client_name: formData.get("clientName"),
        client_email: formData.get("clientEmail"),
        client_phone: formData.get("clientPhone"),
        client_location: formData.get("clientLocation") || "",
        preferred_contact: formData.get("preferredContact") || "",
        project_timeline_deadline: formData.get("projectTimeline") || formData.get("projectDeadline") || "",
        budget: formData.get("budget"),
        
        // App Services
        app_type: formData.get("appType") || "",
        app_platform: formData.get("appPlatform") || "",
        app_purpose: formData.get("appPurpose") || "",
        app_features: formData.get("appFeatures") || "",
        
        // Web Services
        web_service_type: formData.get("serviceType") || "",
        website_purpose: formData.get("websitePurpose") || "",
        current_website: formData.get("currentWebsite") || "",
        project_description: formData.get("projectDescription") || "",
        
        // Design & Graphics
        design_type: formData.get("designType") || "",
        project_details: formData.get("projectDetails") || "",
        preferred_style: formData.get("preferredStyle") || "",
        color_scheme: formData.get("colorScheme") || "",
        
        // iDevice Repairs
        device_type: formData.get("deviceType") || "",
        device_model: formData.get("deviceModel") || "",
        problem_type: formData.get("problemType") || "",
        problem_description: formData.get("problemDescription") || "",
        
        message: formData.get("message") || "",
        image: formData.get("image") || ""
      };


      const submitButton = form.querySelector("button[type='submit']");
      submitButton.textContent = "Sending...";

      emailjs.send("service_ss1fufl", "template_c8idzek", templateParams)
        .then(function(response) {
          console.log("SUCCESS!", response.status, response.text);
          submitButton.textContent = "Message Sent Successfully";
          setTimeout(() => {
            submitButton.textContent = "Send Again";
          }, 3000);
        }, function(error) {
          console.log("FAILED...", error);
          submitButton.textContent = "Something went wrong";
          setTimeout(() => {
            submitButton.textContent = "Send Message";
          }, 3000);
        });
    }

    document.querySelectorAll("form").forEach(form => {
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        const serviceType = form.closest("section").classList[0].replace("-form", "").replace("-", " ");
        sendFormData(form, serviceType);
      });
    });
  })();