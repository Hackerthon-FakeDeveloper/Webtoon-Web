import React, { useEffect } from "react";
import qs from "qs";

function Google(props) {
  const AUTHORIZE_URI = "http://5gradekgucapstone.xyz:8080/oauth2/authorization/google";

  const { clientID } = props;
  const redirectURL = "https://localhost:3000/";
  const loginQuery = qs.stringify({
    client_id: clientID,
    redirectURL,
    response_type: "code",
    scope: "https://www.googleapis.com/auth/userinfo.email",
  });

  useEffect(() => {
    (async () => {
      if (window.location.search.split("?").length > 1) {
        console.log(window.location.search.split("?")[1]);
        const { code, scope } = qs.parse(window.location.search.split("?")[1]);

        console.log(code);
        console.log(scope);
      } else if (window.location.search.split("#").length) {
      }
    })();
  }, []);

  return {
    loginUrl: AUTHORIZE_URI + "?" + loginQuery,
  };
}

export default Google;
