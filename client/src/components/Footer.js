import { styled } from 'styled-components';

const StyledFooter = styled.footer`
  background-color: rgba(35, 38, 41, 1);
  background-image: none;
  background-position: top left;
  background-repeat: no-repeat;
  border-top: 0;
  background-size: auto;
  color: rgba(145, 153, 161, 1);
  padding-top: 0;
  padding-bottom: 0;
  box-sizing: border-box;
  display: block;
  font-size: 13px;

  .footer-container {
    max-width: 1264px;
    width: 100%;
    margin: 0 auto;
    padding: 32px 12px 12px 12px;
    display: flex;
    flex-flow: row wrap;
  }

  .footer-logo {
    flex: 0 0 64px;
    margin: -12px 0 32px 0;

    a {
      color: rgba(0, 116, 204, 1);
      text-decoration: none;
      cursor: pointer;
      user-select: auto;
    }

    img {
      vertical-align: bottom;
      width: 32px;
      height: 37px;
    }
  }

  .footer-nav {
    display: flex;
    flex: 2 1 auto;
    flex-wrap: wrap;
  }

  .footer-col {
    padding: 0 12 24 0;
    flex: 1 0 auto;
  }

  .footer-title {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 12px;
    color: rgba(186, 191, 196, 1);
    line-height: calc((13+4) / 13);
  }

  .footer-title-link {
    text-decoration: none;
    color: rgba(186, 191, 196, 1);
  }

  .footer-title-list {
    margin: 0;
    list-style: none;

    li {
      margin: 0;
      padding: 0;
    }
  }

  .footer-title-list-item {
    color: rgba(186, 191, 196, 1);
    padding: 4px 0;
    line-height: calc((13+4) / 13);
    display: inline-block;
    text-decoration: none;
  }

  .footer-copyright {
    flex: 1 1 150px;
    display: flex;
    flex-direction: column;
  }

  .sns-link-list {
    display: flex;
    list-style: none;
    margin-right: 0;
    padding: 0;
  }

  .sns-link-item {
    color: rgba(145, 153, 161, 1);
    padding: 4px 0;
    margin-right: 1.5em;
    line-height: calc((13+4) / 13);
    display: inline-block;
    text-decoration: none;
    font-size: 11px;
  }

  .copyright-p {
    margin-top: auto;
    margin-bottom: 24px;
    font-size: 11px;
  }

  .copyright-underline {
    text-decoration: underline;

    a {
      color: rgba(145, 153, 161, 1);
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="footer-logo">
          <a href="/">
            <img src="/small-logo.png" alt="logo-img" />
          </a>
        </div>
        <nav className="footer-nav">
          <div className="footer-col">
            <h5 className="footer-title">
              <a
                href="https://stackoverflow.com/"
                className="footer-title-link"
              >
                STACK OVERFLOW
              </a>
            </h5>
            <ul className="footer-title-list">
              <li>
                <a href="/questions" className="footer-title-list-item">
                  Questions
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/help"
                  className="footer-title-list-item"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5 className="footer-title">
              <a href="https://stackoverflow.co/" className="footer-title-link">
                Product
              </a>
            </h5>
            <ul className="footer-title-list">
              <li>
                <a
                  href="https://stackoverflow.co/teams/"
                  className="footer-title-list-item"
                >
                  Teams
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.co/advertising/"
                  className="footer-title-list-item"
                >
                  Advertising
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.co/collectives/"
                  className="footer-title-list-item"
                >
                  Collectives
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.co/talent/"
                  className="footer-title-list-item"
                >
                  Talent
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5 className="footer-title">
              <a href="https://stackoverflow.co/" className="footer-title-link">
                Company
              </a>
            </h5>
            <ul className="footer-title-list">
              <li>
                <a
                  href="https://stackoverflow.co/"
                  className="footer-title-list-item"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.co/company/press/"
                  className="footer-title-list-item"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.co/company/work-here/"
                  className="footer-title-list-item"
                >
                  Work Here
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/legal"
                  className="footer-title-list-item"
                >
                  Legal
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/legal/privacy-policy"
                  className="footer-title-list-item"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/legal/terms-of-service"
                  className="footer-title-list-item"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.co/company/contact/"
                  className="footer-title-list-item"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a className="footer-title-list-item" href={'modal'}>
                  Cookie Settings
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/legal/cookie-policy"
                  className="footer-title-list-item"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div>
              <h5 className="footer-title">
                <a href="https://stackexchange.com" className="footer-title">
                  Stack Exchange Network
                </a>
              </h5>
              <ul className="footer-title-list">
                <li>
                  <a
                    href="https://stackexchange.com/sites#technology"
                    className="footer-title-list-item"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackexchange.com/sites#culturerecreation"
                    className="footer-title-list-item"
                  >
                    Culture &amp; recreation
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackexchange.com/sites#lifearts"
                    className="footer-title-list-item"
                  >
                    Life &amp; arts
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackexchange.com/sites#science"
                    className="footer-title-list-item"
                  >
                    Science
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackexchange.com/sites#professional"
                    className="footer-title-list-item"
                  >
                    Professional
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackexchange.com/sites#business"
                    className="footer-title-list-item"
                  >
                    Business
                  </a>
                </li>

                <li className="mt16 md:mt0">
                  <a
                    href="https://api.stackexchange.com/"
                    className="footer-title-list-item"
                  >
                    API
                  </a>
                </li>

                <li>
                  <a
                    href="https://data.stackexchange.com/"
                    className="footer-title-list-item"
                  >
                    Data
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="footer-copyright">
          <ul className="sns-link-list">
            <li>
              <a href="/blog" className="sns-link-item">
                Blog
              </a>
            </li>
            <li>
              <a href="/Facebook" className="sns-link-item">
                Facebook
              </a>
            </li>
            <li>
              <a href="/Twitter" className="sns-link-item">
                Twitter
              </a>
            </li>
            <li>
              <a href="/LinkedIn" className="sns-link-item">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="/Instagram" className="sns-link-item">
                Instagram
              </a>
            </li>
          </ul>
          <p className="copyright-p">
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            licensed under{' '}
            <span className="copyright-underline">
              <a href="https://stackoverflow.com/help/licensing">CC BY-SA</a>
            </span>
            . <span id="svnrev">rev&nbsp;2023.8.10.43574</span>
          </p>
        </div>
      </div>
    </StyledFooter>
  );
}
