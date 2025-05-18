import Link from "next/link";

export default function About() {
  return (
    <div className="fullpage-container contact-bg">
      <div className="contact-card fullpage-card">
        <div className="contact-info">
          <h2>About Us</h2>

          <div className="about-text">
            <p>
              We are a forward-thinking company dedicated to creating innovative
              solutions that make a difference.
            </p>
            <p>
              Founded in 2023, our mission is to combine cutting-edge technology
              with thoughtful design.
            </p>
          </div>

          <div className="about-values">
            <h3>Our Values</h3>
            <ul>
              <li>
                <CheckIcon />
                <span>Innovation</span>
              </li>
              <li>
                <CheckIcon />
                <span>Quality</span>
              </li>
              <li>
                <CheckIcon />
                <span>Integrity</span>
              </li>
              <li>
                <CheckIcon />
                <span>Collaboration</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact-form about-content">
          <h2>Our Story</h2>
          <p className="subtitle-small">
            Learn more about our journey and vision
          </p>

          <div className="about-story">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
              auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>

            <p>
              Ut in nulla enim. Phasellus molestie magna non est bibendum non
              venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
              Mauris iaculis porttitor posuere.
            </p>

            <p>
              Proin quis tortor orci. Etiam at risus et justo dignissim congue.
              Donec congue lacinia dui, a porttitor lectus condimentum laoreet.
            </p>

            <div className="contact-link">
              <Link href="/contact">
                Get in touch with us
                <ArrowRightIcon />
              </Link>
            </div>
          </div>

          <Link href="/" className="back-button">
            <BackIcon />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Icons
function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="arrow-icon"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}
