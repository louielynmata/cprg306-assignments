import Link from "next/link";
import { linkStyling, pageContainer, navContainer, h1Styling } from "./styles";
import PropTypes from "prop-types";

export default function RootPage() {
  return (
    <main className={pageContainer}>
      <header className="text-center">
        <h1 className={h1Styling}>CPRG 306: Web Development 2 - Assignments</h1>
        <nav className={navContainer}>
          <ul>
            <li>
              <Link className={linkStyling} href="/week-2">
                Go to Week 2 →
              </Link>
            </li>
            <li>
              <Link className={linkStyling} href="/week-3">
                Go to Week 3 →
              </Link>
            </li>
            <li>
              <Link className={linkStyling} href="/week-4">
                Go to Week 4 →
              </Link>
            </li>
            <li>
              <Link className={linkStyling} href="/week-5">
                Go to Week 5 →
              </Link>
            </li>
            <li>
              <Link className={linkStyling} href="/week-6">
                Go to Week 6 →
              </Link>
            </li>
            <li>
              <Link className={linkStyling} href="/week-7">
                Go to Week 7 →
              </Link>
            </li>
            <li>
              <Link className={linkStyling} href="/week-7">
                Go to Week 8 →
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}

// Props Validation
RootPage.propTypes = {
  linkStyling: PropTypes.string,
};
