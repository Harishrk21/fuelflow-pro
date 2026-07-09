import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/mobile-app")({
  beforeLoad: () => {
    throw redirect({ to: "/order" });
  },
  component: () => null,
});
