import bgJoin from "../images/background-circles.png";

const Join = () => {
  return (
    <div
      className="min-vh-100"
      style={{
        backgroundImage: `url(${bgJoin})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center justify-content-center gy-4">
          <div className="col-12 col-lg-4 text-center text-lg-start">
            <p className="text-white fw-bolder display-5 mb-0">
              Join the <span style={{ color: "#C6037C" }}>fun.</span>
            </p>
          </div>

          <div className="col-12 col-md-8 col-lg-5">
            <div className="bg-dark p-4 border rounded-4 border-dark">
              <form>
                <label htmlFor="name" className="form-label text-white">Name:</label>
                <input id="name" type="text" className="form-control bg-dark border-secondary text-white" />

                <div className="mb-3 mt-3">
                  <label htmlFor="email" className="form-label text-white">Email:</label>
                  <input id="email" type="email" className="form-control bg-dark border-secondary text-white" />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-white">Password:</label>
                  <input id="password" type="password" className="form-control bg-dark border-secondary text-white" />
                </div>

                <button type="submit" className="btn btn-primary w-100">Join Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
