import { auth } from "@/lib/auth";
import SignInPage from "@/modules/auth/views/sign-in-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/");
  }
  return <SignInPage />;
};

export default SignIn;
