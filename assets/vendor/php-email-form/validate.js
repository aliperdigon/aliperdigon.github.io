/**
* PHP Email Form Validation - v3.9
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  const forms = document.querySelectorAll('.php-email-form');

  /**
   * Helper: obtiene el botón de submit (button o input[type=submit])
   */
  function getSubmitBtn(form) {
    return form.querySelector('button[type="submit"], input[type="submit"]');
  }

  /**
   * Helper: obtiene/establece el texto visible del botón
   */
  function getBtnText(btn) {
    if (!btn) return '';
    return btn.tagName.toLowerCase() === 'button' ? btn.textContent : (btn.value ?? '');
  }
  function setBtnText(btn, text) {
    if (!btn) return;
    if (btn.tagName.toLowerCase() === 'button') btn.textContent = text;
    else btn.value = text;
  }

  /**
   * Helper: manejar estado del botón (deshabilitar/habilitar + texto)
   * - Guarda en data-original-text el texto original para poder restaurarlo
   */
  function setSubmitState(form, { disabled, text }) {
    const btn = getSubmitBtn(form);
    if (!btn) return;

    if (!btn.dataset.originalText) {
      btn.dataset.originalText = getBtnText(btn);
    }

    if (typeof text === 'string') {
      setBtnText(btn, text);
    } else if (disabled === false) {
      // Restaurar texto solo cuando re-habilitamos y haya original guardado
      if (btn.dataset.originalText) {
        setBtnText(btn, btn.dataset.originalText);
      }
    }

    btn.disabled = !!disabled;
    // Clase utilitaria por si quieres estilizar además del atributo disabled
    btn.classList.toggle('disabled', !!disabled);
  }

  forms.forEach(function (e) {
    e.addEventListener('submit', function (event) {
      event.preventDefault();

      const thisForm = this;
      const action = thisForm.getAttribute('action');
      const recaptcha = thisForm.getAttribute('data-recaptcha-site-key');

      if (!action) {
        displayError(thisForm, 'The form action property is not set!');
        return;
      }

      // Mostrar loading y limpiar mensajes
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      setSubmitState(thisForm, { disabled: true, text: 'Enviando…' });

      const formData = new FormData(thisForm);

      if (recaptcha) {
        if (typeof grecaptcha !== "undefined") {
          grecaptcha.ready(function () {
            try {
              grecaptcha.execute(recaptcha, { action: 'php_email_form_submit' })
                .then(token => {
                  formData.set('recaptcha-response', token);
                  php_email_form_submit(thisForm, action, formData);
                })
                .catch(err => {
                  displayError(thisForm, err);
                });
            } catch (error) {
              displayError(thisForm, error);
            }
          });
        } else {
          displayError(thisForm, 'The reCaptcha javascript API url is not loaded!');
        }
      } else {
        php_email_form_submit(thisForm, action, formData);
      }
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(`${response.status} ${response.statusText} ${response.url}`);
        }
      })
      .then(data => {
        thisForm.querySelector('.loading').classList.remove('d-block');

        if (data.trim() === 'OK') {
          // Éxito: mostrar mensaje, resetear campos y dejar botón deshabilitado permanentemente
          thisForm.querySelector('.sent-message').classList.add('d-block');
          thisForm.reset();

          setSubmitState(thisForm, { disabled: true, text: 'Enviado ✓' });
        } else {
          // Forzar manejo de error en catch para re-habilitar el botón
          throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action);
        }
      })
      .catch((error) => {
        displayError(thisForm, error);
      });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');

    setSubmitState(thisForm, { disabled: false });
  }

})();
