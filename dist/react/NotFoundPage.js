import React from 'react';
import { FormattedMessage } from '../i18n';
function NotFoundPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "container-fluid d-flex py-5 justify-content-center align-items-start text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "my-0 py-5 text-muted mw-32em"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "error.notfound.message",
    defaultMessage: "The page you're looking for is unavailable or there's an error in the URL. Please check the URL and try again.",
    description: "error message when a page does not exist"
  })));
}
export default NotFoundPage;
