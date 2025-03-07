import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { contextData } from "../services/Context";

const Layout = () => {
  const { openSidebar } = useContext(contextData);
  return (
    <>
      <Helmet>
        <script type="module" src="/src/main.jsx"></script>
        <script src="/assets/js/plugins/apexcharts.min.js"></script>
        <script src="/assets/js/plugins/jsvectormap.min.js"></script>
        <script src="/assets/js/plugins/world.js"></script>
        <script src="/assets/js/plugins/world-merc.js"></script>
        <script src="/assets/js/pages/dashboard-default.js"></script>
        <script src="/assets/js/plugins/popper.min.js"></script>
        <script src="/assets/js/plugins/simplebar.min.js"></script>
        <script src="/assets/js/plugins/bootstrap.min.js"></script>
        <script src="/assets/js/fonts/custom-font.js"></script>
        <script src="/assets/js/pcoded.js"></script>
        <script src="/assets/js/plugins/feather.min.js"></script>

        <script src="/assets/js/plugins/apexcharts.min.js"></script>
        <script src="/assets/js/plugins/jsvectormap.min.js"></script>
        <script src="/assets/js/plugins/world.js"></script>
        <script src="/assets/js/plugins/world-merc.js"></script>
        <script src="/assets/js/pages/dashboard-default.js"></script>
        <script src="/assets/js/plugins/popper.min.js"></script>
        <script src="/assets/js/plugins/simplebar.min.js"></script>
        <script src="/assets/js/plugins/bootstrap.min.js"></script>
        <script src="/assets/js/fonts/custom-font.js"></script>
        <script src="/assets/js/pcoded.js"></script>
        <script src="/assets/js/plugins/feather.min.js"></script>

        <script>layout_change('light');</script>

        <script>layout_sidebar_change('light');</script>

        <script>change_box_container('false');</script>

        <script>layout_caption_change('true');</script>

        <script>layout_rtl_change('false');</script>

        <script>preset_change('preset-1');</script>
      </Helmet>
      <div>
        <div className="loader-bg">
          <div className="loader-track">
            <div className="loader-fill" />
          </div>
        </div>
        <Sidebar />
        <Header />
        <div onClick={() => openSidebar()} className="pc-container">
          <div className="pc-content">
            <Outlet />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
