/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      sm: "700px",
      lg: "900px",
    },
    letterSpacing: {
      wide: "0.3em",
      meh: "0.2em",
    },
    colors: {
      SoftRed: "hsl(7, 99%, 70%)",
      Yellow: "hsl(51, 100%, 49%)",
      softYellow: "hsl(51, 100%, 80%)",
      DarkCyan: "hsl(167, 40%, 24%)",
      DarkBlue: "hsl(198, 62%, 26%)",
      cyan: "hsl(168, 34%, 41%)",
      moderateCyan: "#90D4C5",

      // Neutral
      VeryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
      VeryDarkGrayishBlue: "hsl(213, 9%, 39%)",
      DarkGrayishBlue: "hsl(232, 10%, 55%)",
      GrayishBlue: "hsl(210, 4%, 67%)",
      White: "hsl(0, 0%, 100%)",
    },
    backgroundImage: {
      // Desktop
      hero: "url('./images/desktop/image-header.jpg')",
      egg: "url('./images/desktop/image-transform.jpg')",
      cup: "url('./images/desktop/image-stand-out.jpg')",
      cherry: "url('./images/desktop/image-graphic-design.jpg')",
      orange: "url('./images/desktop/image-photography.jpg')",
      cone: "url('./images/desktop/image-gallery-cone.jpg')",
      milkBottles: "url('./images/desktop/image-gallery-milkbottles.jpg')",
      orangeSlice: "url('./images/desktop/image-gallery-orange.jpg')",
      sugarCubes: "url('./images/desktop/image-gallery-sugarcubes.jpg')",
      // Mobile
      heroMobile: "url('./images/mobile/image-header.jpg')",
      eggMobile: "url('./images/mobile/image-transform.jpg')",
      cupMobile: "url('./images/mobile/image-stand-out.jpg')",
      cherryMobile: "url('./images/mobile/image-graphic-design.jpg')",
      orangeMobile: "url('./images/mobile/image-photography.jpg')",
      coneMobile: "url('./images/mobile/image-gallery-cone.jpg')",
      milkBottlesMobile: "url('./images/mobile/image-gallery-milkbottles.jpg')",
      orangeSliceMobile: "url('./images/mobile/image-gallery-orange.jpg')",
      sugarCubesMobile: "url('./images/mobile/image-gallery-sugar-cubes.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
