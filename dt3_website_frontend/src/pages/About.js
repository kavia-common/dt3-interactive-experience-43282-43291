import React from "react";

/**
 * PUBLIC_INTERFACE
 * About page for DT3 marketing website.
 */
export default function About() {
  return (
    <div className="page">
      <section className="section sectionTightTop">
        <div className="container">
          <h1 className="pageTitle">About DT3</h1>
          <p className="pageLead">
            DT3 is built around the idea that “interactive” doesn’t have to mean “busy.” We focus on clarity, polish, and
            responsiveness—so the experience feels effortless.
          </p>

          <div className="twoCol">
            <div className="card">
              <h2 className="cardTitle">Our mission</h2>
              <p className="cardText">
                Deliver engaging, modern web experiences with an elegant design language: soft pastel color, gentle
                gradients, and refined rounded components.
              </p>
            </div>

            <div className="card">
              <h2 className="cardTitle">What we value</h2>
              <ul className="list">
                <li>Accessible UI patterns (focus states, semantics, readable contrast)</li>
                <li>Mobile-first responsive layout</li>
                <li>Clear information architecture</li>
                <li>Integration-ready architecture</li>
              </ul>
            </div>
          </div>

          <div className="section">
            <h2 className="sectionTitle">Core features</h2>
            <div className="featureGrid">
              <div className="featureCard">
                <div className="featureTitle">Elegant theme system</div>
                <div className="featureText">
                  Built on the provided style guide colors with subtle gradients and a light background.
                </div>
              </div>
              <div className="featureCard">
                <div className="featureTitle">Reusable layout</div>
                <div className="featureText">Consistent header/nav/footer across all pages.</div>
              </div>
              <div className="featureCard">
                <div className="featureTitle">Backend-aware contact</div>
                <div className="featureText">Gracefully handles missing API env vars with a mailto fallback.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
