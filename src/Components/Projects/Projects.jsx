import React from "react";

const Projects = () => {
  return (
    <div className="my-10">
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">My Recent Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 justify-items-center">
        {/* Projects no 01 */}
        <div className="card bg-base-100 w-80 shadow-sm">
          <figure>
            <img
              src="https://i.ibb.co.com/0p5S0kTP/Screenshot-2025-10-15-221609.jpg"
              alt="Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tap&Earn</h2>
            <p>
              Tap&Earn is a multitasking web application, where user can earn
              money by completing task
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://tap-and-earn-258dd.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Live Site</button>
              </a>
            </div>
          </div>
        </div>
        {/* Project no 02 */}
        <div className="card bg-base-100 w-80 shadow-sm">
          <figure>
            <img
              src="https://i.ibb.co.com/KzL9JSHz/Screenshot-2025-10-17-181528.jpg"
              alt="Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Artifacts Gallery</h2>
            <p>
              Artifacts Gallery is a web application where user can find
              Artifacts and explore them.Also a user can add artifacts there
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://artifacts-gallery.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Live Site</button>
              </a>
            </div>
          </div>
        </div>
        {/* Project no 03 */}
        <div className="card bg-base-100 w-80 shadow-sm">
          <figure>
            <img
              src="https://i.ibb.co.com/6c2ZBFH7/Screenshot-2025-10-17-181839.jpg"
              alt="Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Plant Care</h2>
            <p>
              Plant Care is a Web application based on Plant. User Can add plant
              here and maintain the palnts
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://plant-care-web.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Live Site</button>
              </a>
            </div>
          </div>
        </div>
        {/* Project no 04 */}
        <div className="card bg-base-100 w-80 shadow-sm">
          <figure>
            <img
              src="https://i.ibb.co.com/9kMZqhDg/Screenshot-2025-10-17-182216.jpg"
              alt="Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Event Explorer</h2>
            <p>Here User can explore events</p>
            <div className="card-actions justify-end">
              <a
                href="https://event-explorer-91189.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Live Site</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
