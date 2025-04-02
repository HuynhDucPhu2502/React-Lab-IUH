import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { SideMenu } from "../components/SideMenu";

const RootPage = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-5/6 my-12 border-2 border-gray-300 rounded-lg">
        <div className="grid grid-cols-6">
          <SideMenu />
          <div className="col-span-5">
            <Header />
            <div className="flex-grow ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RootPage;
