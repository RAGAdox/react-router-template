import { type RouteConfig, index } from "@react-router/dev/routes";

import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/share-target", "routes/share-target.tsx"),
] satisfies RouteConfig;

