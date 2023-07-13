import { json, redirect } from "react-router-dom";

import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  // Check if ether on log in or sign up request should be sent
  // useSearch won't work because we are not in a component
  // But we can use the built in URL constructer provided by the browser
  // by passing in the request.url to then access the searchParams
  // object on that URL object
  const searchParams = new URL(request.url).searchParams;
  // If undefined use login as default
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  // Gives data object received from request
  const data = await request.formData();
  const authData = {
    // Get object exists in request
    email: data.get("email"),
    password: data.get("password"),
  };

  // Use browsers default fetch function
  const response = await fetch("https://cwpmv5-3000.csb.app/" + mode, {
    method: "POST",
    headers: {
      // Define content type so that on the backend sent data would be
      // extracted correctly
      "Content-Type": "application/json",
    },
    // Convert data to json format
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    // Return response to route component so that
    // to the auth form at the end it can be returned
    // This works with react-router
    return response;

    if (!response.ok) {
      throw json({ message: "Could not authenticate user." }, { status: 500 });
    }

    // soon: manage that token
    return redirect("/");
  }
}
