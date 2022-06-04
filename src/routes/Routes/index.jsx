import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import Profile from "../../pages/Profile";
import NotFound from "../../pages/NotFound";
import useAuth from "../../hooks/useAuth";
import PrivateRoute from "../components/PrivateRoute";
import GuestRoute from "../components/GuestRoute";
// import Layout from "../../pages/Admin/Layout";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import {CreateTest} from "../../pages/Admin/CreateTest";
import {CreateUser} from "../../pages/Admin/CreateUser";
import {CreateGroup} from "../../pages/Admin/CreateGroup";
import CreateSpeciality from "../../pages/Admin/CreateSpec";
import Specialites from "../../pages/Admin/Specialites";
import Users from "../../pages/Admin/Users";
import Main from "../../pages/Admin/Main";
import {
  CircularProgress,
  makeStyles,
  Container,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function AppRoutes() {
  const classes = useStyles();
  const auth = useAuth();

  return auth.isLoaded ? (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />


          <Route path="users" element={<Users />} />
          <Route path="TestCreate" element={<CreateTest />} />
          <Route path="UserCreate" element={<CreateUser />} />
          <Route path="GroupCreate" element={<CreateGroup />} />
          <Route path="SpecialityCreate" element={<CreateSpeciality />} />
          <Route path="Specialities" element={<Specialites />} />


      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path="/registration"
        element={
          <GuestRoute>
            <Registration />
          </GuestRoute>
        }
      />

      <Route path="/not-found-404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found-404" />} />
    </Routes>
  ) : (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item>
          <CircularProgress color="inherit" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AppRoutes;
