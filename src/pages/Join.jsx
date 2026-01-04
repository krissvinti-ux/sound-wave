import { Link } from 'react-router-dom';
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
        > <div className="container-fluid p-5">
                <div className="row align-items-center justify-content-evenly">
                    <div className=" fs-1 col-3 fw-bolder">
                        <p className="text-white">Join the <span style={{ color: "#C6037C" }}>fun.</span></p>
                    </div>
                    <div className="bg-dark col-4 p-4 border rounded-4 border border-dark">
                        <form>
                            <label for="exampleInputEmail1" className="form-label text-white ">Name:</label>
                            <input type="email" className="form-control bg-dark border-secondary" />
                            <div className="mb-3">
                                <label for="exampleInputEmail1 " className="form-label text-white ">Email:</label>
                                <input type="email" className="form-control bg-dark border-secondary" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" className="form-label text-white">Password:</label>
                                <input type="password" className="form-control bg-dark border-secondary" />
                            </div>
                            <div class="mb-3 form-check">
                            </div>
                            <button type="submit" className="btn btn-primary col-md-12">Join Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >

    );
};


export default Join;