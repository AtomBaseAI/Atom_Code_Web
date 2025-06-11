import Link from 'next/link'
import { Briefcase, CheckCircle, DollarSign, Navigation, Target, Umbrella, UserCheck, Zap } from 'react-feather'

export default function About() {
  return (
    <>
      <div>

        <section className="bg-half bg-light d-table w-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="page-next-level">
                  <h4 className="title"> About Atom Code Dev</h4>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item"><Link href="/">Atom Code</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Start */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                  <span className="h1 icon2 text-indigo">
                    <Briefcase size={40} />
                  </span>
                  <div className="card-body p-0 content">
                    <h5>Our Vision</h5>
                    <p className="para text-muted text-mutedx  mb-0">
                      To revolutionize tech education by integrating AI-powered learning, empowering the next generation of engineers to innovate, build, and thrive in a rapidly evolving digital world.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                  <span className="h1 icon2 text-indigo">
                    <Navigation size={40} />
                  </span>
                  <div className="card-body p-0 content">
                    <h5>Our Mission</h5>
                    <p className="para text-muted text-mutedx mb-0">
                      We aim to bridge the gap between education and real-world application by equipping learners with cutting-edge tools, expert mentorship, and a thriving community—fueling innovation, one coder at a time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                <div className="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                  <span className="h1 icon2 text-indigo">
                    <Target size={40} />
                  </span>
                  <div className="card-body p-0 content">
                    <h5>Our Goal</h5>
                    <p className="para text-muted text-mutedx mb-0">
                      Our goal is to empower aspiring engineers with AI-driven tools and hands-on coding experience, making programming education intuitive, accessible, and industry-relevant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About Start */}
          <div className="container mt-100 mt-60">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                      <div className="card-body p-0">
                        <img src="https://ik.imagekit.io/atominc/ATOMCODE_Web/about/ab01x.png" className="img-fluid" alt="work-image" />
                        <div className="overlay-work bg-dark" />
                        <div className="content">
                          <Link href="#" className="title text-white d-block font-weight-bold">Fundamentals</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-6">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                          <div className="card-body p-0">
                            <img src="https://ik.imagekit.io/atominc/ATOMCODE_Web/about/ab02x.png" className="img-fluid" alt="work-image" />
                            <div className="overlay-work bg-dark" />
                            <div className="content">
                              <Link href="#" className="title text-white d-block font-weight-bold">FullStack</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mt-4 pt-2">
                        <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                          <div className="card-body p-0">
                            <img src="https://ik.imagekit.io/atominc/ATOMCODE_Web/about/ab03x.png" className="img-fluid" alt="work-image" />
                            <div className="overlay-work bg-dark" />
                            <div className="content">
                              <Link href="#" className="title text-white d-block font-weight-bold">Cloud & DevOPS</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                <div className="ml-lg-4">
                  <div className="section-title mb-0 pb-2">
                    <h4 className="title mb-4">About Our Story</h4>
                    <p className="text-muted para-desc">AtomCode is a <span className="text-indigo font-weight-bold">EdTech Startup</span> founded on 2023. Powered by <span className="activex font-weight-bold"> Atom Labs</span></p>
                    <p className="text-muted para-desc ">
                      We are a team of passionate technologists, educators, and industry experts dedicated to bridging the gap between education and real-world applications.
                      Our AI-driven learning approach ensures that every learner gets a personalized experience, helping them grasp complex concepts faster and apply them in real-world scenarios.
                    </p>
                    <p className="text-muted para-desc mb-0">Our Highlights </p>
                  </div>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-0 py-1"><span className="text-indigo h4 mr-2"><CheckCircle /></span>Industrial Mentors</li>
                    <li className="mb-0 py-1"><span className="text-indigo h4 mr-2"><CheckCircle /></span>Real world Project based practices</li>
                    <li className="mb-0 py-1"><span className="text-indigo h4 mr-2"><CheckCircle /></span>AI-driven learning approach</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container-fluid mt-100 mt-60">
            <div className="rounded py-5" style={{ background: 'url("https://ik.imagekit.io/atominc/ATOMCODE_Web/about/cta.jpg") center center' }}>
              <div className="container py-md-5 py-3">
                <div className="row">
                  <div className="col-lg-6 col-md-7 col-12 offset-lg-6 offset-md-5">
                    <div className="card border-0">
                      <div className="card-body p-md-5 p-4 bg-white rounded">
                        <div className="section-title">
                          <h4 className="title mb-4">Features</h4>
                          <p className="text-muted para-desc mb-0">Start working with <span className="text-indigo font-weight-bold">Atom Code</span> to improve your business on digital world . Our unique features make your business easier.</p>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-12 mt-4">
                            <div className="media align-items-center">
                              <div className="icon text-center rounded-circle h4 text-indigo mr-2 mb-0">
                                <Zap/>
                              </div>
                              <div className="media-body">
                                <h6 className="title text-dark mb-0">Fast Process</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-12 mt-4">
                            <div className="media align-items-center">
                              <div className="icon text-center rounded-circle h4 text-indigo mr-2 mb-0">
                                <Umbrella/>
                              </div>
                              <div className="media-body">
                                <h6 className="title text-dark mb-0">Secured</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-12 mt-4">
                            <div className="media align-items-center">
                              <div className="icon text-center rounded-circle h4 text-indigo mr-2 mb-0">
                                <DollarSign/>
                              </div>
                              <div className="media-body">
                                <h6 className="title text-dark mb-0">Low cost</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-12 mt-4">
                            <div className="media align-items-center">
                              <div className="icon text-center rounded-circle h4 text-indigo mr-2 mb-0">
                                <UserCheck/>
                              </div>
                              <div className="media-body">
                                <h6 className="title text-dark mb-0">Customer Support</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Link href="/contact" className="btn btn-primary">Contact Us <i data-feather="arrow-right" className="fea icon-sm" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>
        <div className="mt-1 mb-5 p-5 justify-content-center">
          <div className="text-center">
            <div className="section-title">
              <h4 className="title mb-4">Have Question ? Get in touch!</h4>
              <p className="text-muted para-desc mx-auto">Start your bussiness's digital services with<span className="text-indigo font-weight-bold"> Atom Code</span>'s technicial experts. Contact us to get more detials about our services and pricings</p>
              <Link href="/contact" className="btn btn-primary mt-4"><i className="mdi mdi-phone" /> Contact us</Link>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
