import {React, useEffect, useState} from "react";

import axiosInstance from "../../api/axiosConfig";

function Profile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axiosInstance.post(`/auth/profile/`, {}, {
                    headers: {
                        'token' : `${localStorage.getItem('token')}`
                    }
                });
                
                setName(response.data.user.name);
                setEmail(response.data.user.email);
                setPhoneNumber(response.data.user.phone_number);

            } catch (error) {
                console.error("Error fetching profile", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleEditMainProfile = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.put(`/auth/profile/`, {
                name,
                email,
                phoneNumber
            }, {
                headers: {
                    'token' : `${localStorage.getItem('token')}`
                }
            });

            
            if(response.status === 200)
                alert('Success')

        } catch (e) {
            console.error("Error editing profile", e);
            alert('Error editing profile', e);
        } 
    }

  return (
    <div class="grid grid-cols-12 gap-4 mt-28 mx-20">
      <div class="col-span-4 bg-gray-300 p-4">
        <img src="assets/woe_logo.png" alt="" />
      </div>
      <div class="col-span-8 bg-gray-200 p-4">
        <div role="tablist" className="tabs tabs-lifted">
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Main Profile" defaultChecked />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <form action="/profile" method="put" onSubmit={handleEditMainProfile}>
            
              <label className="input input-bordered flex items-center gap-2 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" value={email} disabled/> 
              </label>

              <label className="input input-bordered flex items-center gap-2 mb-5" >
                Name:
                <input type="text" className="grow" placeholder="Your name here" value={name ? name : ""} onChange={(e) => setName(e.target.value)}  />
              </label>

              <label className="input input-bordered flex items-center gap-2"   >
                Phone Number 
                <input type="number" className="grow" placeholder="0812345678" value={phoneNumber ? phoneNumber : ""} onChange={(e) => setPhoneNumber(e.target.value)} />
              </label>

                <button type="submit" className="btn btn-primary text-white mt-5">Update Profile</button>
            </form>
          </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2"  />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            Tab content 2
          </div>

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
