import CustomInputs from "@/components/customInputs";
import {
  addDataToFireStore,
  getDataFromFireBase,
} from "@/helpers/fireBaseHelper";
import { INITIAL_USER_DETAILS_STATE, USER_DETAILS } from "@/utility/constants";
import { useState, useEffect } from "react";

export default function Home() {
  const [userDetails, setUserDetails] = useState({
    ...INITIAL_USER_DETAILS_STATE,
  });
  const [userData, setUserData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFireStore(
      userDetails.name,
      userDetails.email,
      userDetails.message
    );
    if (added) {
      setUserDetails({ ...INITIAL_USER_DETAILS_STATE });
      fetchUserDataFromFireBase();
      alert("Data added to Firebase");
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const temp = {};
    temp[name] = value;
    setUserDetails((prev) => ({ ...prev, ...temp }));
  };

  const fetchUserDataFromFireBase = async () => {
    const data = await getDataFromFireBase();
    setUserData(data);
  };

  useEffect(() => {
    fetchUserDataFromFireBase();
  }, []);
  return (
    <>
      <h1>User Details</h1>
      <div>
        <form onSubmit={handleSubmit} method="POST">
          {USER_DETAILS.map((userDetailConst) => (
            <CustomInputs
              type={userDetailConst.type}
              id={userDetailConst.id}
              onChange={onChange}
              value={userDetails?.[userDetailConst.name] || ""}
              key={userDetailConst.id}
              name={userDetailConst.name}
              placeHolder={userDetailConst.placeHolder}
            />
          ))}
          <div style={{ padding: "20px" }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div>
        <h2>User List</h2>
        <div>
          {userData?.map((user) => (
            <div
              key={user.id}
              style={{ marginBottom: "10px", padding: "12px" }}
            >
              <p>
                <b>name</b> : {user.name}
              </p>
              <p>
                <b>email</b> : {user.email}
              </p>
              <p>
                <b>message</b> : {user.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
