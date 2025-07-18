import type { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/apps",
    method: "get",
    timeout: 1000,
    response: () => ({
      status: 200,
      data: [
        {
          id: "1",
          name: "SocialApp",
          category: "social",
          platform: "android",
          url: "https://socialapp.com",
          metrics: {
            downloads: 15000,
            rating: 4.5,
            keywords: ["social", "friends"],
            conversionRate: 0.15,
          },
        },
      ],
    }),
  },
] as MockMethod[];
