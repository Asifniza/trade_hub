import "./productRequest.css";
import ModeratorSidebar from "../moderatorSidebar/moderatorSidebar";
import productImg from "../../../assets/images/productImg.jpeg";
import { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseURL";
function ProductRequest() {
  const data = [
    {
      productname: "Airpod",
      category: "Electronics",
      description:
        "Airpods with 35 hrs Playback,13mm Drivess, bluetooth headset",
      condition: "Minor Scratches",
    },
    {
      productname: "Airpod",
      category: "Electronics",
      description:
        "Airpods with 35 hrs Playback,13mm Drivess, bluetooth headset",
      condition: "Minor Scratches",
    },
    {
      productname: "Airpod",
      category: "Electronics",
      description:
        "Airpods with 35 hrs Playback,13mm Drivess, bluetooth headset",
      condition: "Minor Scratches",
    },
    {
      productname: "Airpod",
      category: "Electronics",
      description:
        "Airpods with 35 hrs Playback,13mm Drivess, bluetooth headset",
      condition: "Minor Scratches",
    },
  ];
  const [pendingItems, setPendingItems] = useState([]);

  useEffect(() => {
    getPendingItems();
  }, []);
  const getPendingItems = (id) => {
    axiosInstance
      .get(`viewAllItemsPendingItems`)
      .then((res) => {
        if (res.status === 200) {
          console.log("respo", res);
          let data = res?.data?.data || [];
          data.reverse();
          setPendingItems(data);
        } else {
          console.log("view user by id", res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="productrequest-main">
        <div className="productrequest-head">
          <h2>Product Request</h2>
        </div>
        <div
          className="container"
          style={{ overflowY: "scroll", height: "80vh" }}
        >
          <div className="row">
            {data.map((e) => {
              const filename = e.itemPhoto?.filename || "";
              let pic;
              if (filename) {
                pic = `${BASE_URL}${filename}`;
              }
              return (
                <div className="productrequest-box col-md-5 mt-5">
                  <div className="productImg">
                    <img style={{ width: "100%" }} src={pic} alt="product" />
                  </div>
                  <div className="productDetails">
                    <table>
                      <tr>
                        <td>Item name</td>
                        <td>:</td>
                        <td>{e.name}</td>
                      </tr>
                      <tr>
                        <td>Category</td>
                        <td>:</td>
                        <td>{e.category}</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>:</td>
                        <td>{e.description}</td>
                      </tr>
                      <tr>
                        <td>Conditon</td>
                        <td>:</td>
                        <td>{e.condition}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRequest;
