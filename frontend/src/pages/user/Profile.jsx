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
    email: "",
    profile_picture: "" // Tambahkan state untuk foto profil
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState(null); // State untuk file gambar

  useEffect(() => {
    if (data) {
      setProfileData({
        name: data.user.name || "",
        phone_number: data.user.phone_number || "",
        email: data.user.email || "",
        profile_picture: data.user.profile_picture || "assets/woe_logo.png" // Default ke logo jika belum ada gambar profil
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setIsSubmitting(true);
    const selectedFile = e.target.files[0];
    const formData = new FormData();
    formData.append('file', selectedFile);
    handleUploadProfilePicture(formData);
  };

  const handleUploadProfilePicture = async (formData) => {
    
    console.log(formData);
    try {
      const response = await axiosInstance.post('/auth/upload-profile-picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: `${localStorage.getItem("token")}`
        }
      });
      setProfileData({
        ...profileData,
        profile_picture: response.data.profile_picture 
      });
      setMessage('Profile picture updated successfully');
      setSuccess(true);
    } catch (e) {
      setMessage(`Error uploading profile picture : ${e.message}`);
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="col-span-4 bg-gray-300 p-4 ">
        <img src={profileData.profile_picture} alt="Profile" className="rounded-full w-64 h-64 object-cover m-auto" />
        <label htmlFor="file" className="btn btn-primary mt-5 text-white">Upload</label>
        <input id="file" type="file"
                  className="hidden file-input file-input-bordered file-input-primary w-full max-w-xs mt-10" onChange={handleFileChange}/>

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
