import { createContext, useContext, useState } from "react";

const themeContext = createContext("");

const CLR = {
    black: "black",
    white: "#ffff",
    grey: "grey",
    dark1: "#212529",
    dark2: "rgba(29 ,29, 29, .8)",
    dark3: "rgb(24 24 29)",

    blue1: "#F6F8FA",
    blue2: "#f1f2f6",
    blue3: "#c8d6e5",
    blue4: "#8490ff",
    blue5: "#5138ee",
    blue6: "rgb(98 84 243)",
    blue7: "rgba(98, 84, 243, 0.5)",
    blue8: "rgb(98 189 252)",
    blue9: "#0a1435",
}

const light_theme = {
    colors: {
      heading: CLR.dark3,
      text: CLR.dark2,
      white: CLR.white,
      black: CLR.dark1,
      nav_links: CLR.dark1,
      nav_bg_clr: CLR.blue1,
      helper: CLR.blue4,
      full_bg_clr: CLR.white,
      cart_total_icon_clr: CLR.black,
      home_services_bg_clr: CLR.blue1, 
      trusted_company_bg_clr: "none",
      intro_data_clr: CLR.blue5,
      input_select_bg_clr: CLR.white,
      feature_products_bg_clr: CLR.white,
      
      footer_bg_clr: CLR.blue9,
      footer_get_started: CLR.blue1,
      btn: CLR.blue6,
      border: CLR.blue7,
      hr: CLR.white,
      gradient:
        `linear-gradient(0deg, ${CLR.blue4} 0%, ${CLR.blue8} 100%)`,
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
};


const dark_theme = {
    colors: {
        h1: CLR.black,
        h2: CLR.black,
        h3: CLR.black,
        h4: CLR.black,
        text: CLR.black,
        white: CLR.white,
        black: CLR.dark1,
        nav_links: CLR.white,
        helper: CLR.blue4,
        main_bg_clr: CLR.grey,
        nav_bg_clr: CLR.dark1,
        cart_total_icon_clr: CLR.white,
        home_services_bg_clr: CLR.blue3,
        trusted_company_bg_clr: CLR.blue3,
        category_bg_clr: CLR.blue3,
        intro_data_clr: CLR.blue8,
        input_select_bg_clr: CLR.blue2,
        feature_products_bg_clr: CLR.blue2,
        
        footer_bg_clr: CLR.black, 
        footer_get_started: CLR.blue3,
        btn: CLR.blue6,
        border: CLR.blue7,
        hr: CLR.white,
        gradient:
        `linear-gradient(0deg, ${CLR.blue4} 0%, ${CLR.blue8} 100%)`,
        shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
        shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
        mobile: "768px",
        tab: "998px",
    },
};



const ThemeChanger = ({ children }) => {
    const [currTheme, setCurrTheme] = useState(light_theme);

    return(
        <themeContext.Provider value={{currTheme, setCurrTheme, light_theme, dark_theme}}>
            { children }
        </themeContext.Provider>
    )
}

const useThemeContext = () => {
    return useContext(themeContext);
}

export {ThemeChanger, useThemeContext };