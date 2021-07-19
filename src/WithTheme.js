import React, { useState } from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import purple from "@material-ui/core/colors/purple";
import lightBlue from "@material-ui/core/colors/lightBlue";

const themeLight = createMuiTheme({
  palette: {
    type: "light",
    primary: purple,
    secondary: lightBlue,
  },
});

const themeDark = createMuiTheme({
  palette: {
    type: "dark",
    common:{
        black:'#231F20',
        white:'#F2F2F2'
    },
    primary: green,
    secondary: red,
  },
  typography: {
    
    fontFamily: "Itim",
    fontSize: "1rem",
    body2: {
      "@media(min-width:600px)": {
        fontSize: "1.1rem",
        fontFamily: "Times New Roman",
      },
      "@media(min-width:900px)": {
        fontSize: "1.1rem",
        fontFamily: "Itim",
      },
    },
  },

  shape:{
      borderRadius:30
  },
  overrides:{
      MuiButton:{
          root:{
            //   textTransform:'none',
            //   padding:15,
          },
          sizeSmall:{
              width:'10rem'
          },
          containedPrimary:{
              backgroundColor:'#231F20',
              '&:hover': {
                  backgroundColor:'red'
              },
              color:'#909090'
          },
          

      }
  },
  props:{
      MuiButton:{
          variant:'contained',
          disableRipple:true,
          color:'primary'
          
      }
  }

});

const Theme = (props) => {
  const { children, dark } = props;
  const selectedTheme = dark ? themeDark : themeLight;
  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

const withCustomTheme = (Component) => {
  return (props) => {
    const [dark, setDark] = useState(false);
    return (
      <Theme dark={dark}>
        <Component {...props} dark={dark} setDark={setDark} />
      </Theme>
    );
  };
};

export default withCustomTheme;
