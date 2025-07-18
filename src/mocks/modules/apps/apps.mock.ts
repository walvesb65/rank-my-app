import type { MockMethod } from "vite-plugin-mock";

export const appMocks: MockMethod[] = [
  {
    url: "/api/apps",
    method: "get",
    response: () => ({
      code: 200,
      data: [
        {
          id: "1",
          name: "SocialApp",
          category: "social",
          platform: "android",
          url: "https://willapptest.com",
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
];
