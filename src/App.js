import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "./App.css";
import Routes from "./routes/Routes";
import useAuth from "./hooks/useAuth";
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { Admin } from "../src/pages/Admin/Admin"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rightToolbar: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const auth = useAuth();
  const navigate = useNavigate();

  const onLogOut = () => {
    auth.logOut();
    navigate("/login");
  };

  const [isDrawerOpen, SetIsDrawerOpen] = useState(false);


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Тестирование online
          </Typography>
          <div className={classes.rightToolbar}>
            <Button color="inherit" component={Link} to="/">
              Главная
            </Button>
          </div>
          {auth.isLoaded &&
            (auth.user ? (
              <>

                <Button onClick={SetIsDrawerOpen} color="secondary" variant='contained' mr={2}>Администрирование</Button>
                <NavLink to="/profile" style={{paddingLeft: 13, textDecoration: 'none'}}>
                  <Avatar alt={auth.user.firstName} src="src" />
                </NavLink>
                <Button color="inherit" onClick={onLogOut}>
                  Выйти
                </Button>

                <Admin
                  isDrawerOpen={isDrawerOpen}
                  CloseDrawer={() => SetIsDrawerOpen(false)}
                />
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/login">
                  Логин
                </Button>
                <Button color="inherit" component={Link} to="/registration">
                  Регистрация
                </Button>
              </>
            ))}
        </Toolbar>
      </AppBar>

      <Routes />
    </div>
  );
}

export default App;
