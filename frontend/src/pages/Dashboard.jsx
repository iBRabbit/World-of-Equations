import React from "react";
import Heading from "../components/headings/Heading";

function Dashboard() {
  return (
    <div className="container mx-auto px-4 mt-28">
      <div className="row">
        <div className="carousel w-full rounded-3xl my-5">
          <div id="item1" className="carousel-item w-full">
            <img src="assets/welcome.svg" className="w-full" alt="Welcome" />
          </div>
        </div>
      </div>

      <div className="row">
        <Heading level="h1" className="text-primary my-5">
          Our Features
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card bg-base-100 w-full shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Interactive Math Courses"
                className="w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body">
              <Heading level="h3" className="text-left">
                Interactive Math Courses
              </Heading>
              <p className={"text-left"}>Step-by-step math courses with interactive exercises to enhance your understanding</p>
              <div className="card-actions justify-end">
                <button className="btn bg-primary text-white">Explore Courses</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-xl">
            <figure>
              <img
                src="https://plus.unsplash.com/premium_photo-1679547202671-f9dbbf466db4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Community Forums"
                className="w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body">
              <Heading level="h3" className="text-left">
                Community Forums
              </Heading>
              <p className={"text-left"}>Join our community and discuss problems with fellow learners</p>
              <div className="card-actions justify-end">
                <button className="btn bg-primary text-white">Join Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Programming Challenges"
                className="w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body">
              <Heading level="h3" className="text-left">
                Programming Challenges
              </Heading>
              <p className={"text-left"}>Engage with real-world programming problems and improve your coding skills.</p>
              <div className="card-actions justify-end">
                <button className="btn bg-primary text-white">Start Coding</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-10">
        <Heading level="h1" className="text-primary mt-12">
          Frequently Asked Questions
        </Heading>
        <p className="font-bold">Here are some Frequently Asked Questions</p>

        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border mb-5 mt-5">
          <div className="collapse-title text-xl font-bold">What courses do you offer?</div>
          <div className="collapse-content">
            <p>We offer a variety of interactive math and programming courses suitable for all skill levels, from beginners to advanced learners.</p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border mb-5 mt-5">
          <div className="collapse-title text-xl font-bold">How much does it cost to join?</div>
          <div className="collapse-content">
            <p>Our basic courses are free, and we offer premium content for a small fee. You can explore our pricing plans on the pricing page.</p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border  mt-5">
          <div className="collapse-title text-xl font-bold">What if I need help while learning?</div>
          <div className="collapse-content">
            <p>We have a dedicated support team and community forums where you can ask questions and get assistance from fellow learners and instructors.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
