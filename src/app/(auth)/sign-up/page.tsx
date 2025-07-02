import React from "react";
import SignUpPage from "@/modules/auth/views/sign-up-view";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const SignUp = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/");
  }

  return <SignUpPage />;
};

export default SignUp;
