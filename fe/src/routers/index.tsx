import React from "react";

//--------------- Layout-------------------//
import { LayoutOther } from "../components/Layout";

//---------------- Page--------------------//
const Welcome = React.lazy(() => import("../page/Welcome"));
const Login = React.lazy(() => import("../components/Login/Login"));
const SignUp = React.lazy(() => import("../components/SignUp"));
const Test = React.lazy(() => import("../page/Test"));

// admin page
const Admin = React.lazy(() => import("../page/Admin"));
const TodoList = React.lazy(() => import("../page/Admin/TodoList"));

// chat page
const Chat = React.lazy(() => import("../page/Chat/Chat"));

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
  { path: "/welcome", name: "Home", component: Welcome },
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
  // admin router
  { path: "/admin", name: "Admin", component: Admin },
  { path: "/admin/todo", name: "To Do List", component: TodoList },
  // chat router
  { path: "/chat", name: "Chat", component: Chat },

];

routes = {
  publicRouters,
  privateRouters,
};

export default routes;
