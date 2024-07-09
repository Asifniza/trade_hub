import { useEffect, useState } from "react";
import "./admineViewGuideline.css";
import axiosInstance from "../../../apis/axiosInstance";
import toast from "react-hot-toast";
export const AdmineViewGuideline = () => {
  const [state, setState] = useState("");
  useEffect(() => {
    axiosInstance
      .get("/viewGuideline")
      .then((res) => {
        if (res.data.status == 200) {
          console.log(res);
          setState(res.data.data)
        }
        else
        {

        }
      })
      .catch((err) => {
        toast.error(err.data.msg)
   });
  }, []);
  return (
    <div style={{ minHeight: "100vh" }} className="admineViewGuideline-body">
      <h1 className="admineViewGuideline-heading">{state.title}</h1>
      <h3>Content</h3>
      <p>
        {state.content}
      </p>
      <button className="adminViewGuideline-button ">update</button>

    </div>
  );
};
