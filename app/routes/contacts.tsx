import { Outlet } from "@remix-run/react";

export default function ContactsRoute() {
  return (
    <div>
      <h1>Layout contact Route</h1>
      <Outlet />
    </div>
  );
}
