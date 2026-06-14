/**
 * ContactForm – Kim Bondo
 * Simple contact form: name, phone, message.
 * Uses mailto: as the action so it works without a backend.
 * On submit, opens the user's email client pre-filled with the message.
 */

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Henvendelse fra ${form.name || "hjemmesiden"}`
    );
    const body = encodeURIComponent(
      `Navn: ${form.name}\nTelefon: ${form.phone}\n\nBesked:\n${form.message}`
    );
    window.location.href = `mailto:kim@bedemandkobenhavn.dk?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    fontSize: "15px",
    fontFamily: "'Open Sans', sans-serif",
    color: "#2F3E46",
    background: "#ffffff",
    border: "1.5px solid #d6d0c8",
    borderRadius: "3px",
    outline: "none",
    boxSizing: "border-box",
    marginBottom: "20px",
    transition: "border-color 0.15s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "#2F3E46",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "8px",
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "#eaf2eb",
          border: "1.5px solid #84A98C",
          borderRadius: "4px",
          padding: "36px 32px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 600,
            fontSize: "20px",
            color: "#2F3E46",
            marginBottom: "12px",
          }}
        >
          Tak for din besked
        </p>
        <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.7 }}>
          Din e-mail-klient er åbnet med beskeden klar til afsendelse. Kim
          vender tilbage hurtigst muligt.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label style={labelStyle} htmlFor="name">
        Navn
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Dit fulde navn"
        value={form.name}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <label style={labelStyle} htmlFor="phone">
        Telefon
      </label>
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="Dit telefonnummer"
        value={form.phone}
        onChange={handleChange}
        style={inputStyle}
      />

      <label style={labelStyle} htmlFor="message">
        Besked
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Skriv gerne kort, hvad det drejer sig om – der er ingen forkerte spørgsmål."
        value={form.message}
        onChange={handleChange}
        required
        rows={6}
        style={{
          ...inputStyle,
          resize: "vertical",
          lineHeight: 1.7,
        }}
      />

      <p
        style={{
          fontSize: "13px",
          color: "#7a8f99",
          lineHeight: 1.6,
          marginBottom: "28px",
          fontStyle: "italic",
        }}
      >
        Dine oplysninger deles ikke med tredjepart og bruges udelukkende til at
        besvare din henvendelse.
      </p>

      <button
        type="submit"
        style={{
          width: "100%",
          background: "#84A98C",
          color: "#ffffff",
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 700,
          fontSize: "15px",
          padding: "16px 24px",
          border: "none",
          borderRadius: "3px",
          letterSpacing: "0.05em",
          cursor: "pointer",
        }}
      >
        Send besked til Kim
      </button>
    </form>
  );
}
