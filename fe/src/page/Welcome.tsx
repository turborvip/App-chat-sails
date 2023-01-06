import { Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import localStorage from "../utils/localStorage";
import { useAppDispatch } from "../redux/store";
import { logout } from "../redux/userSlice";
function Welcome() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("../login");
  };

  return (
    <div className="home">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nemo
      aperiam sint corporis accusamus! Inventore corrupti reiciendis natus optio
      iure quo facere aspernatur, nisi qui quas quod, explicabo, recusandae
      consequatur.
      <div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}

export default Welcome;
