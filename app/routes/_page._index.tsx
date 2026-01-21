import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";

import { ProfileModule } from "~/modules/ProfileModule";
import { ProfileAction } from "~/modules/ProfileModule/action";
import { ProfileLoader } from "~/modules/ProfileModule/loader";

export default function ProfilePage() {
  return <ProfileModule />;
}

export async function clientLoader(args: LoaderFunctionArgs) {
  return ProfileLoader(args);
}

export async function clientAction(args: ActionFunctionArgs) {
  return ProfileAction(args);
}
