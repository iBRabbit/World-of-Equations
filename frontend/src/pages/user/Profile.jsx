import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosConfig";
import useFetchData from "../../hooks/useFetchData";
import Alert from "../../components/alerts/Alert";
import Loading from "../../components/loaders/Loading";

function Profile() {
  const { data, loading, error } = useFetchData(`/auth/profile/`, localStorage.getItem("token"));

  const [profileData, setProfileData] = useState({
    name: "",
    phone_number: "",
    email: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (data) {
      setProfileData({
        name: data.user.name || "",
        phone_number: data.user.phone_number || "",
        email: data.user.email || ""
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleEditMainProfile = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.put(`/auth/profile/`, profileData, {
        headers: {
          token: `${localStorage.getItem("token")}`
        }
      });
      
      if (response.status === 200) {
        setSuccess(true);
        setMessage("Profile updated successfully");
      }
    } catch (e) {
      console.error("Error editing profile", e);
      setSuccess(false);
      setMessage("Error editing profile");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4 mt-28 mx-20">
      <div className="col-span-4 bg-gray-300 p-4">
        <img src="assets/woe_logo.png" alt="Logo" />
      </div>
      <div className="col-span-8 bg-gray-200 p-4">
        <div role="tablist" className="tabs tabs-lifted">
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Main Profile" defaultChecked />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            {loading ? (
              <Loading/> 
            ) : (
              <>
                {isSubmitting ? <Loading message="Updating profile..."/> : ""}
                {message && <Alert type={success ? "success" : "error"} message={message} className="mb-5" />}
                <form onSubmit={handleEditMainProfile}>
                  <label className="input input-bordered flex items-center gap-2 mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Email" value={profileData.email} disabled />
                  </label>

                  <label className="input input-bordered flex items-center gap-2 mb-5">
                    Name:
                    <input
                      type="text"
                      className="grow"
                      name="name"
                      placeholder="Your name here"
                      value={profileData.name}
                      onChange={handleChange}
                    />
                  </label>

                  <label className="input input-bordered flex items-center gap-2">
                    Phone Number
                    <input
                      type="number"
                      className="grow"
                      name="phone_number"
                      placeholder="0812345678"
                      value={profileData.phone_number}
                      onChange={handleChange}
                    />
                  </label>

                  <button type="submit" className="btn btn-primary text-white mt-5">
                    Update Profile
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Tab 2 */}
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            Tab content 2
          </div>

          {/* Tab 3 */}
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            Tab content 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
