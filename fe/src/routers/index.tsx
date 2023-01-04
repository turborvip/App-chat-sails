import React from "react";

// Layout
import { LayoutOther } from "../components/Layout";

// Page
const Home = React.lazy(() => import("../page/Home"));
const Test = React.lazy(() => import("../page/Test"));
const TodoList = React.lazy(() => import("../page/TodoList"));
const Login = React.lazy(() => import("../components/Login/Login"));
const SignUp = React.lazy(() => import("../components/SignUp"));
const Chat = React.lazy(() => import("../page/Chat"));

interface Router {
  path: string;
  name: string;
  component: any;
  exact?: boolean;
  layout?: any;
}

interface Routes {
  publicRouters: Router[];
  privateRouters: Router[];
}

let routes: Routes;

let publicRouters: Router[] = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login, layout: null },
  { path: "/sign-up", name: "Sign Up", component: SignUp, layout: null },
  {
    path: "/testLayout",
    name: "Test Layout",
    component: Test,
    layout: LayoutOther,
  },
];

let privateRouters: Router[] = [
  { path: "/todo", name: "To Do List", component: TodoList },
  { path: "/chat", name: "Chat", component: Chat },

];

routes = {
  publicRouters,
  privateRouters,
};

export default routes;
