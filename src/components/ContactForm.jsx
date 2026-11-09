import { useState } from "react";
import { profile } from "../data/profile.js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Returns an object of error messages. An empty object means the form is valid.
function validate({ name, email, message }) {
  const errors = {};
  if (name.trim().length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(email.trim())) errors.email = "Please enter a valid email address.";
  if (message.trim().length < 10) errors.message = "Please write at least 10 characters.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({}); // which fields the visitor has left
  const [submitted, setSubmitted] = useState(false);

  // Derived from state on every render, so it can never go out of date.
  const errors = validate(values);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((current) => ({ ...current, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errors).length > 0) return;

    // There is no server behind this site, so the form opens the visitor's own
    // email app with the message already written. Nothing is sent automatically.
    const subject = `Portfolio message from ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\nFrom: ${values.name.trim()} (${values.email.trim()})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const showError = (field) => touched[field] && errors[field];

  const fieldProps = (field) => ({
    id: field,
    name: field,
    value: values[field],
    onChange: handleChange,
    onBlur: handleBlur,
    className: "field",
    "aria-invalid": showError(field) ? "true" : "false",
    "aria-describedby": showError(field) ? `${field}-error` : undefined,
  });

  // A plain function that returns JSX (or nothing when the field is fine).
  const renderError = (field) =>
    showError(field) ? (
      <p id={`${field}-error`} role="alert" className="mt-2 text-sm text-[#e58a7a]">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div>
        <label htmlFor="name" className="eyebrow">
          Your name
        </label>
        <input type="text" autoComplete="name" placeholder="Eluwa Peace" {...fieldProps("name")} />
        {renderError("name")}
      </div>

      <div>
        <label htmlFor="email" className="eyebrow">
          Your email
        </label>
        <input
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          {...fieldProps("email")}
        />
        {renderError("email")}
      </div>

      <div>
        <label htmlFor="message" className="eyebrow">
          Message
        </label>
        <textarea
          rows={5}
          placeholder="Tell me about the role or project."
          {...fieldProps("message")}
        />
        {renderError("message")}
      </div>

      <div>
        <button type="submit" className="btn btn-solid">
          Write the email
        </button>
        {submitted && (
          <p role="status" className="mt-4 text-sm t-accent">
            Your email app should be open now. If nothing happened, write to {profile.email}{" "}
            directly.
          </p>
        )}
      </div>
    </form>
  );
}
