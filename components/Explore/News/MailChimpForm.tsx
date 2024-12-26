import React from 'react'
import Script from 'next/script'
import './mailchimp.css' // Adjust the path if the CSS file is placed elsewhere

export default function MailchimpForm() {
  // change to Pravins mailchimp
  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form
          action="https://bluewater-studios.us17.list-manage.com/subscribe/post?u=a23157a3ec7acfa777db561e5&amp;id=7ff19df7c5&amp;f_id=00eee1e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe to Our Newsletter</h2>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name</label>
              <input type="text" name="FNAME" className="text" id="mce-FNAME" />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '-5000px' }}
            >
              {/* Prevent bot signups */}
              <input
                type="text"
                name="b_a23157a3ec7acfa777db561e5_7ff19df7c5"
                tabIndex={-1}
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                  style={{ backgroundColor: '#70CB34' }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Asynchronous MailChimp validation script */}
      <Script
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        strategy="lazyOnload"
      />
      <Script id="mc-validate-init" strategy="lazyOnload">{`
        (function($) {
          window.fnames = new Array();
          window.ftypes = new Array();
          fnames[0]='EMAIL'; ftypes[0]='email';
          fnames[1]='FNAME'; ftypes[1]='text';
          fnames[2]='LNAME'; ftypes[2]='text';
          fnames[3]='ADDRESS'; ftypes[3]='address';
          fnames[4]='PHONE'; ftypes[4]='phone';
          fnames[5]='BIRTHDAY'; ftypes[5]='birthday';
          fnames[6]='COMPANY'; ftypes[6]='text';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);
      `}</Script>
    </div>
  )
}
