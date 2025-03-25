import { createRootRoute } from "@tanstack/react-router";
import LayoutSite from "@ui/LayoutSite";

const rootRoute = createRootRoute({
  component: () => <LayoutSite />,
  head: () => ({
    meta: [
      {
        title: "Multiplusgroup Website",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/Site_Favicon.png",
      },
    ],
    scripts: [
      {
        src: "https://www.google-analytics.com/analytics.js",
      },
    ],
  }),
});

export default rootRoute;
