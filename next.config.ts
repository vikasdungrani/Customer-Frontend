import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // 🔥 exclude svg from default loader
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg")
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // ✅ enable SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
    },
  ],
},
//   images: {
//   remotePatterns: [
//     { protocol: "https", hostname: "drive.google.com" },
//     { protocol: "https", hostname: "m.media-amazon.com" },
//     { protocol: "https", hostname: "s.alicdn.com" },
//     { protocol: "https", hostname: "podushka.com.ua" },
//     { protocol: "https", hostname: "orvehogar.vtexassets.com" },
//     { protocol: "https", hostname: "siopen.balangankab.go.id" },
//     { protocol: "https", hostname: "genuineproduct247.com" },
//     { protocol: "https", hostname: "5.imimg.com" },
//     { protocol: "https", hostname: "images.meesho.com" },
//     { protocol: "https", hostname: "holidaywholesale.in" },
//     { protocol: "https", hostname: "down-my.img.susercontent.com" },
//     { protocol: "https", hostname: "i.ebayimg.com" },
//     { protocol: "https", hostname: "rukminim3.flixcart.com" },

//     // cleaned new
//     { protocol: "https", hostname: "api.globalstore.md" },
//     { protocol: "https", hostname: "gifthubmart.com" },
//     { protocol: "https", hostname: "simplyclean.me" },
//     { protocol: "https", hostname: "suvenir.bg" },
//     { protocol: "https", hostname: "img.myipadbox.com" },
//     { protocol: "https", hostname: "arifeaesthetics.co.in" },
//     { protocol: "https", hostname: "tezkarshop.com" },
//     { protocol: "https", hostname: "supersavings.lk" },
//     { protocol: "https", hostname: "cdn.domacipotreby.cz" },
//     { protocol: "https", hostname: "hindi.sweeping-brush.com" },
//     { protocol: "https", hostname: "strgimgr.umico.az" },
//     { protocol: "https", hostname: "static.wixstatic.com" },
//     { protocol: "https", hostname: "cdn.quicksell.co" },
//     { protocol: "https", hostname: "i5.walmartimages.com" },
//     { protocol: "https", hostname: "designhub.decorexpro.com" },
//     { protocol: "https", hostname: "images.indiafreestuff.in" },
//     { protocol: "https", hostname: "dearhome.me" },
//     { protocol: "https", hostname: "images.prom.ua" },
//     { protocol: "https", hostname: "sieuthihuydung.com" },
//     { protocol: "https", hostname: "wooshoppy.com" },
//     { protocol: "https", hostname: "img.alicdn.com" },
//     { protocol: "https", hostname: "arrtec.com.ar" },
//     { protocol: "https", hostname: "fbres.fivebelow.com" },
//     { protocol: "https", hostname: "aerofit.co" },
//     { protocol: "https", hostname: "cpimg.tistatic.com" },
//     { protocol: "https", hostname: "encrypted-tbn1.gstatic.com" },
//   ],
// },
};

export default nextConfig;