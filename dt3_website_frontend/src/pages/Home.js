import React from "react";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Home page for DT3 marketing website.
 */
export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container heroInner">
          <div className="heroCopy">
            <div className="pill" role="note">
              Elegant • Interactive • Responsive
            </div>
            <h1 className="heroTitle">
              DT3 delivers <span className="accent">interactive</span> experiences with a refined, modern feel.
            </h1>
            <p className="heroSubtitle">
              Soft pastels, gentle gradients, and polished components—built to keep your users engaged and your brand elevated.
            </p>

            <div className="heroActions">
              <Link to="/contact" className="btn btnPrimary">
                Contact Us
              </Link>
              <Link to="/about" className="btn btnGhost">
                Learn More
              </Link>
            </div>

            <div className="heroMeta">
              <div className="metaCard">
                <div className="metaTitle">Fast</div>
                <div className="metaText">Lightweight UI, minimal dependencies</div>
              </div>
              <div className="metaCard">
                <div className="metaTitle">Elegant</div>
                <div className="metaText">Rounded, clean, accessible components</div>
              </div>
              <div className="metaCard">
                <div className="metaTitle">Flexible</div>
                <div className="metaText">Ready for API integration when configured</div>
              </div>
            </div>
          </div>

          <div className="heroVisual" aria-hidden="true">
            <div className="glassCard">
              <div className="glassHeader">
                <span className="dot dotPrimary" />
                <span className="dot dotSecondary" />
                <span className="dot dotNeutral" />
              </div>
              <div className="glassBody">
                <div className="sparkLine" />
                <div className="sparkLine alt" />
                <div className="sparkLine short" />
                <div className="miniGrid">
                  <div className="miniTile" />
                  <div className="miniTile" />
                  <div className="miniTile" />
                  <div className="miniTile" />
                </div>
              </div>
            </div>
            <div className="glow glowPrimary" />
            <div className="glow glowSecondary" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">What you get</h2>
          <p className="sectionSubtitle">
            A clean, elegant baseline site that can grow into a full interactive platform.
          </p>

          <div className="featureGrid">
            <div className="featureCard">
              <div className="featureTitle">Client-side routing</div>
              <div className="featureText">Smooth navigation across Home, About, and Contact.</div>
            </div>
            <div className="featureCard">
              <div className="featureTitle">Shared layout</div>
              <div className="featureText">Consistent header, footer, and main content wrapper.</div>
            </div>
            <div className="featureCard">
              <div className="featureTitle">Contact form</div>
              <div className="featureText">Posts to a backend when configured; otherwise offers a mailto fallback.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
