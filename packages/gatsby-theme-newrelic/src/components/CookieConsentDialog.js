import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { css } from '@emotion/core';
import ExternalLink from './ExternalLink';
import Button from './Button';

const CookieConsentDialog = ({
  cookieName,
  handleCookieConsent
}) => {
  const [isCookieSet, setIsCookieSet] = useState(
    Cookies.get(cookieName)
  );

  const writeCookie = (answer) => {
    handleCookieConsent(answer)
    setIsCookieSet(true);
  }

  if (isCookieSet) {
    return null;
  }
  return (
    <div
      css={css`
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 10000;
        background-color: rgba(28, 42, 47, 0.92);
        box-shadow: 0px -0.249053px 4.26158px rgba(12, 48, 57, 0.0421718),
          0px -0.598509px 10.2412px rgba(12, 48, 57, 0.0605839),
          0px -1.12694px 19.2832px rgba(12, 48, 57, 0.075),
          0px -2.01027px 34.3 979px rgba(12, 48, 57, 0.0894161),
          0px -3.75998px 64.3375px rgba(12, 48, 57, 0.107828),
          0px -9px 154px rgba(12, 48, 57, 0.15);
        backdrop-filter: blur(5px);
        .dark-mode & {
          background-color: rgba(15, 25, 28, 0.92);
          box-shadow: 0 -1px 0 rgba(55, 72, 78, 0.4);
        }
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 1180px;
          margin: 0 auto;
          box-sizing: border-box;
          padding: 1.125rem 0;
          @media screen and (max-width: 1200px) {
            width: 100%;
            padding: 1.125rem 1.75rem;
          }
          @media screen and (max-width: 480px) {
            flex-direction: column;
            align-items: flex-start;
          }
        `}
      >
        <div>
          <h4
            css={css`
              color: #fff;
              margin-top: 0;
              margin-bottom: 2px;
              line-height: 21px;
              @media screen and (max-width: 1200px) {
                margin-bottom: 0.375rem;
              }
            `}
          >
            This site uses cookies{' '}
            <span role="img" aria-label="Cookie emoji">
              🍪
            </span>
          </h4>
          <p
            css={css`
              margin: 0 0 0px;
              font-size: 13px;
              line-height: 21px;
              color: var(--accent-text-color);
              @media screen and (max-width: 1200px) {
                line-height: 19px;
              }
              @media screen and (max-width: 1200px) {
                margin-bottom: 1rem;
              }
            `}
          >
            We use cookies and other similar technologies ("Cookies") on our
            websites and services to enhance your experience and to provide you
            with relevant content. By using our websites and services you are
            agreeing to the use of cookies. You can read more{' '}
            <ExternalLink href="https://newrelic.com/termsandconditions/cookie-policy">
              here
            </ExternalLink>
            . If you consent to our cookies, please click <strong>Yes</strong>.
          </p>
        </div>
        <div
          css={css`
            margin-left: 1rem;
            flex-shrink: 0;
          `}
        >
          <Button
            css={css`
              margin-right: 10px;
              padding: 0.625rem 1.75rem;
              @media screen and (max-width: 480px) {
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
              }
            `}
            variant={Button.VARIANT.PRIMARY}
            onClick={() => writeCookie(true)}
          >
            Yes
          </Button>
          <Button
            css={css`
              padding: 0.625rem 1rem;
              @media screen and (max-width: 480px) {
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
              }
            `}
            variant={Button.VARIANT.NORMAL}
            onClick={() => writeCookie(false)}
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

CookieConsentDialog.propTypes = {
  setCookieConsent: PropTypes.func.isRequired,
  cookieName: PropTypes.string.isRequired,
};

export default CookieConsentDialog;
