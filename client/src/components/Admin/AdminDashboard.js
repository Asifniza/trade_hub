import { AdminOverview } from "./adminOverview/adminOverview";
import { AdminSidebar } from "./adminSidebar/AdminSidebar";
import { AdminViewallUser } from "./viewAllUser/AdminViewallUser";
import { useState } from "react";
import { AdminViewallMods } from "./viewAllUserMods/AdminViewallMods";
import { AdminViewAllDelRequest } from "./deliveryAgentRequest/deliveryAgentReq";
import { AdminViewAllActiveDeliveryAgent } from "./deliveryAgentRequest/viewAllDeliveryAgent";
import { AdminViewAllModRequest } from "./viewAllUserMods/AdminViewAllModeRequest";
export const AdminDashboard = () => {
  const [selectedPage, setSelectedPage] = useState("overview");

  const changeSelectedPage = (value) => {
    setSelectedPage(value);
  };
  return (
    <div className="d-flex">
      <div>
        <AdminSidebar changeSelectedPage={changeSelectedPage} />
      </div>
      <div className=" w-100">
        {selectedPage === "overview" && <AdminOverview />}
        {selectedPage === "view-all-user" && <AdminViewallUser />}
        {selectedPage === "view-pending-DA" && <AdminViewAllDelRequest />}
        {selectedPage === "view-active-DA" && <AdminViewAllActiveDeliveryAgent />}
        {selectedPage === "view-pending-mod" && <AdminViewAllModRequest />}
        {selectedPage === "view-active-mod" && <AdminViewallMods />}
      </div>
    </div>
  );
};
