import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/landing-page.tsx"),
    route("reports", "routes/reports.tsx"),
] satisfies RouteConfig;
