import React, { useMemo, useState } from "react";

function getApiBase() {
  const raw = process.env.REACT_APP_API_BASE || process.env.REACT_APP_BACKEND_URL;
  return raw ? String(raw).replace(/\/+$/, "") : "";
}

/**
 * PUBLIC_INTERFACE
 * Contact page. If backend is configured via env vars, it POSTs JSON to /contact.
 * Otherwise it offers a mailto fallback so the user can still reach out.
 */
export default function Contact() {
  const apiBase = useMemo(() => getApiBase(), []);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" }); // idle|sending|success|error

  const canSubmit = Boolean(apiBase);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`DT3 Contact from ${form.name || "Website visitor"}`);
    const bodyLines = [
      `Name: ${form.name || ""}`,
      `Email: ${form.email || ""}`,
      "",
      form.message || "",
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    return `mailto:hello@dt3.example?subject=${subject}&body=${body}`;
  }, [form.email, form.message, form.name]);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "idle", message: "" });

    if (!canSubmit) {
      setStatus({
        state: "error",
        message:
          "Backend is not configured. Set REACT_APP_API_BASE or REACT_APP_BACKEND_URL to enable form submission.",
      });
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ state: "error", message: "Please fill out name, email, and message." });
      return;
    }

    try {
      setStatus({ state: "sending", message: "Sending message…" });

      const res = await fetch(`${apiBase}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        let detail = "";
        try {
          detail = await res.text();
        } catch {
          detail = "";
        }
        throw new Error(detail || `Request failed with status ${res.status}`);
      }

      setStatus({ state: "success", message: "Thanks! Your message has been sent." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        state: "error",
        message: `Could not send message. ${err instanceof Error ? err.message : "Unknown error."}`,
      });
    }
  }

  return (
    <div className="page">
      <section className="section sectionTightTop">
        <div className="container">
          <h1 className="pageTitle">Contact</h1>
          <p className="pageLead">
            Send us a message. If the backend isn’t configured yet, you can still reach us via email.
          </p>

          <div className="twoCol">
            <form className="card formCard" onSubmit={onSubmit} aria-describedby="contact-help">
              <div className="formRow">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  className="input"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  autoComplete="name"
                  placeholder="Your name"
                />
              </div>

              <div className="formRow">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="input"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="formRow">
                <label className="label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="textarea"
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="How can we help?"
                />
              </div>

              <div className="formActions">
                <button
                  className="btn btnPrimary"
                  type="submit"
                  disabled={!canSubmit || status.state === "sending"}
                  title={
                    canSubmit
                      ? "Send message"
                      : "Backend not configured: set REACT_APP_API_BASE or REACT_APP_BACKEND_URL"
                  }
                >
                  {status.state === "sending" ? "Sending…" : "Send Message"}
                </button>

                {!canSubmit && (
                  <a className="btn btnGhost" href={mailtoHref}>
                    Email instead
                  </a>
                )}
              </div>

              <div id="contact-help" className="helpText">
                {canSubmit ? (
                  <span>
                    Submits to: <code className="inlineCode">{apiBase}/contact</code>
                  </span>
                ) : (
                  <span>
                    Backend not configured. Set{" "}
                    <code className="inlineCode">REACT_APP_API_BASE</code> or{" "}
                    <code className="inlineCode">REACT_APP_BACKEND_URL</code> to enable submissions.
                  </span>
                )}
              </div>

              {status.state !== "idle" && (
                <div
                  className={`notice ${status.state === "success" ? "noticeSuccess" : ""} ${
                    status.state === "error" ? "noticeError" : ""
                  }`}
                  role={status.state === "error" ? "alert" : "status"}
                >
                  {status.message}
                </div>
              )}
            </form>

            <aside className="card sideCard">
              <h2 className="cardTitle">Other ways to reach us</h2>
              <p className="cardText">
                Prefer email? Use the button to generate a prefilled message, or email us directly.
              </p>

              <div className="sideActions">
                <a className="btn btnSecondary" href={mailtoHref}>
                  Open email draft
                </a>
              </div>

              <div className="divider" />

              <div className="sideMeta">
                <div className="sideMetaRow">
                  <span className="sideMetaLabel">Email</span>
                  <a className="sideMetaValue" href="mailto:hello@dt3.example">
                    hello@dt3.example
                  </a>
                </div>
                <div className="sideMetaRow">
                  <span className="sideMetaLabel">Response time</span>
                  <span className="sideMetaValue">Typically within 1–2 business days</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
