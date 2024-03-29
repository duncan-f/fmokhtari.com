import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: any) => ({
      color: mode("#1045A8", "#52B1FF")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: lora.style.fontFamily,
};

const colors = {
  grassTeal: "#88ccca",
  primary: "#3d52ed",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
