/* ============================================================
   QUANTRIX — SHARED COMPONENTS (header + footer injection)
   ============================================================ */

const AIRTABLE_URL = 'https://airtable.com/app600HJRzNCD6K1Q/pagP4Qf8fPA8zbu8m/form';

const headerHTML = `
<header id="header">
  <div class="header-inner">
    <a href="index.html" class="logo logo-img">
      <img src="assets/images/logo-horizontal.jpeg" alt="Quantrix Outsourcing" class="logo-img-el" />
    </a>
    <nav class="nav">
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="services.html">Services</a>
      <a href="blog.html">Blogs</a>
      <a href="careers.html">Careers</a>
      <a href="contact.html">Contact</a>
    </nav>
    <a href="${AIRTABLE_URL}" target="_blank" class="btn btn-primary header-cta">Get Started</a>
    <button class="nav-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`;

const footerHTML = `
<div class="divider"></div>
<footer id="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <a href="index.html" class="logo logo-img">
            <img src="assets/images/logo-horizontal.jpeg" alt="Quantrix Outsourcing" class="logo-img-el logo-img-footer" />
          </a>
        </div>
        <p class="footer-desc">
          We help startups, entrepreneurs, and growing businesses scale efficiently by providing skilled remote professionals for every operational need.
        </p>
        <div class="footer-socials">
          <a href="https://www.linkedin.com/company/quantrixoutsourcing/?viewAsMember=true" target="_blank" class="social-btn" aria-label="LinkedIn">in</a>
          <a href="#" class="social-btn" aria-label="Twitter">𝕏</a>
          <a href="https://www.facebook.com/profile.php?id=61583913330948" target="_blank" class="social-btn" aria-label="Facebook">f</a>
          <a href="#" class="social-btn" aria-label="Instagram">ig</a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="careers.html">Careers</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <ul>
          <li><a href="service-virtual-assistant.html">Virtual Assistance</a></li>
          <li><a href="service-admin-support.html">Admin Support</a></li>
          <li><a href="service-social-media.html">Social Media</a></li>
          <li><a href="service-content-creation.html">Content Creation</a></li>
          <li><a href="service-graphic-design.html">Graphic Design</a></li>
          <li><a href="service-customer-support.html">Customer Support</a></li>
          <li><a href="service-lead-generation.html">Lead Generation</a></li>
          <li><a href="service-data-entry.html">Data Entry</a></li>
          <li><a href="service-appointment-setting.html">Appointment Setting</a></li>
          <li><a href="service-executive-assistant.html">Executive Assistance</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <ul>
          <li><a href="mailto:hello@quantrixoutsourcing.com">hello@quantrixoutsourcing.com</a></li>
          <li><a href="contact.html">Send an Inquiry</a></li>
          <li><a href="${AIRTABLE_URL}" target="_blank">Book a Consultation</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">&copy; 2025 Quantrix Outsourcing. All rights reserved.</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) headerPlaceholder.outerHTML = headerHTML;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;
});
