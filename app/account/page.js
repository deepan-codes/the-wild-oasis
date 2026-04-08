import { auth } from "../_lib/auth";

export const metadata = {
  title: "account",
};
async function page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);
  return <div>{`Welcome ${firstName}`}</div>;
}

export default page;
