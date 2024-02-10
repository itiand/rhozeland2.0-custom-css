window.onload = function () {
  var formId = "brxe-xovndt";

  var formElement = document.getElementById(formId);

  if (formElement) {
    var newFormHTML = `
      <div class="form-row">
        <div class="form-group">
          <label for="form-field-8896d4">Hi I am</label>
          <input id="form-field-8896d4" name="form-field-49cf47" aria-label="Hi I am" type="text" placeholder="John Smith" required>
        </div>
      </div>
      <div id="email-phone-row" class="form-row">
        <div class="form-group">
          <label for="form-field-fd1cb5">My email is</label>
          <input id="form-field-fd1cb5" name="form-field-59d9c7" aria-label="My Email Is" type="email" placeholder="email@domain.com" required>
        </div>
        <div class="form-group">
          <label for="form-field-4af9ff">and my phone is</label>
          <input id="form-field-4af9ff" class="phone-input" name="form-field-sauqkj" aria-label="and my phone is" type="tel" placeholder="123-456-7891">
        </div>
      </div>
      <div id="message-row" class="form-row">
        <div class="form-group">
          <label for="form-field-eee3af">My message is:</label>
          <textarea id="form-field-eee3af" name="form-field-e10ea7" aria-label="my message is:" placeholder="Your Message" required></textarea>
        </div>
      </div>
      <div class="form-group submit-button-wrapper">
        <button type="submit" class="bricks-button bricks-background-primary">
          <span class="text">Send</span>
        </button>
      </div>
    `;

    formElement.innerHTML = newFormHTML;

    // reattach any event listeners or initialization code here, if necessary
  }
};
