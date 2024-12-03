import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import { useNavigate } from 'react-router-dom';
import { checkAuthAndRedirect } from './../authUtils';
import { useState, useEffect } from "react";

const BaseLayout = () => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(checkAuthAndRedirect(navigate));
  }, []);

  return open ? (
    <main className="page-wrapper">
   
      <Sidebar />
     
      <div className="content-wrapper">
        <Outlet />
      </div>
    </main>
  ) : null;
};

export default BaseLayout;
