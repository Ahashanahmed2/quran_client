

import Classess from "../../css/index.module.css";
import { Outlet,} from "react-router-dom";

import AdminHeader from './AdminHeader'


  export default function Admin(){

  return (
    <>
    <AdminHeader />
      <div className={Classess.center1}>
        (<Outlet />
      </div>
    </>
  );
}
