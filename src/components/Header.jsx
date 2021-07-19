import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {makeStyles} from '@material-ui/styles'


const useStyles = makeStyles(
    (theme)=>({
    appBarPlaceHolder:{
        ...theme.mixins.toolbar,
        marginBottom:20
    }
})
)

const Header = ({setDark,dark}) => {
    const classes=useStyles()
  return (<>
    <AppBar position="fixed">
      <Toolbar >
        <Typography component={Button} >Think Smart Development</Typography>
        <FormControlLabel control={<Switch checked={dark} onChange={()=>setDark(!dark)}/>} label="Mode" />
        <Button variant='contained'>Login</Button>
      </Toolbar>
    </AppBar>
    <div className={classes.appBarPlaceHolder}></div>
    </>
  );
};

export default Header;
