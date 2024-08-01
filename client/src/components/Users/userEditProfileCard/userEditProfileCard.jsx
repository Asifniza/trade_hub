import { Profiler, useEffect, useState } from "react";
import img3 from "../../../assets/images/adminlogin.jpg";
import "./userEditProfileCard.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import toast from "react-hot-toast";
import { BASE_URL } from "../../../apis/baseURL";
import { FaRegEdit } from "react-icons/fa";
import { axiosMultipartInstance } from "../../../apis/axiosMultipartInstance";

export const UsereditProfileCard = ({ getNewData }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [profilePic, setProfilePic] = useState({});
  const [edit, setEdit] = useState({
    firstname: "",
    lastname: "",
    contact: "",
    email: "",
    profile: null,
  });
  const [userId, setUserId] = useState("");

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const getUserData = (id) => {
    axiosInstance
      .post(`/viewUserById/${id}`)
      .then((res) => {
        if (res.data?.status === 200) {
          const userData = res.data.data;
          setProfilePic(`${BASE_URL}${userData?.profile?.filename}`);
          setEdit({
            email: userData.email,
            contact: userData.contact,
            firstname: userData.firstname,
            lastname: userData.lastname,
            profile: userData.profile,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("photo", edit);
  };

  useEffect(() => {
    let id = localStorage.getItem("trade-hub-userId") || null;
    if (id) {
      getUserData(id);
      setUserId(id);
    } else {
      toast.error("Please login again.");
      navigate("/user/login");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };

  const handleFileChange = (e) => {
    setEdit({ ...edit, profile: e.target.files[0] });
  }
  const checkValidate = () => {
    const { firstname, lastname, email, contact } = edit;
    if (!firstname) {
      toast.error("First name field can't be empty");
      return false;
    }
    if (!lastname) {
      toast.error("Lastname name field can't be empty");
      return false;
    }
    if (!email) {
      toast.error("Email field can't be empty");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!contact) {
      toast.error("Contact field can't be empty");
      return false;
    }
    if (contact.length !== 10) {
      toast.error("Please enter a valid 10 digit contact number");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkValidate()) {
      return;
    }
    sendDataToServer();
  };

  const sendDataToServer = async () => {
    try {
      const res = await axiosMultipartInstance.post(
        `editUserById/${userId}`,
        edit
      );
      if (res.status === 200) {
        toast.success("Update successfull");
      }
    } catch (error) {
      const status = error?.response?.status;
      if (status === 404) {
        toast.error("Please login again");
      }else if (status === 409) {
        toast.error("Email already exists");
      } else {
        toast.error("Network error");
      }
    } finally {
      handleClose();
      getUserData(userId)
      getNewData(userId);
    }
  };
  
console.log("edit", edit)
  return (
    <div>
      <div className="d-flex w-100 justify-content-center">
        <Button
          variant="primary"
          onClick={handleShow}
          className="userEditProfile-base-button"
        >
          Edit
        </Button>
      </div>
      <div className="editProfile-card-body">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="userEditProfileCard-header">
            <Modal.Title className="EditProfileCard-heading d-flex">
              <FaArrowLeft
                className="userEditProfile-left-arrow"
                onClick={handleClose}
              />
              <p> Edit profile</p>
            </Modal.Title>
          </Modal.Header>

          <div className="d-flex justify-content-center align-item-center">
            <div className="userEditProfile-image-upload">
              <img
                src={profilePic}
                alt="profile"
                name="profile"
                onChange={handleChange}
              />
            
            </div>
          </div>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="editProfileCard-Label">
                  First name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your First name"
                  autoFocus
                  className="editProfileCard-input"
                  name="firstname"
                  value={edit.firstname}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="editProfileCard-Label">
                  Last name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your First name"
                  autoFocus
                  className="editProfileCard-input"
                  name="lastname"
                  value={edit.lastname}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="editProfileCard-Label">Email</Form.Label>
                <Form.Control
                  type="email"
                  className="editProfileCard-input"
                  placeholder="Enter your email"
                  name="email"
                  value={edit.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="editProfileCard-Label">
                  Phone Number
                </Form.Label>
                <Form.Control
                  type="number"
                  className="editProfileCard-input"
                  placeholder="Enter your phone number"
                  name="contact"
                  value={edit.contact}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="editProfileCard-Label">
                  Photo
                </Form.Label>
                <Form.Control
                  type="file"
                  className="editProfileCard-input"
                  placeholder="Enter your phone number"
                  name="profile"
                  onChange={handleFileChange}
                />
              </Form.Group>



              <Button type="submit" className="EditProfileCard-button">
                Update
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
