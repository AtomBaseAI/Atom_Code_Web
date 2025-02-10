import Link from "next/link";
import { Tab } from '@headlessui/react'
import { Smartphone, PieChart, Shield, Zap, Clock, MessageSquare, Award, BarChart, BarChart2, Hexagon, Cloud, Code } from 'react-feather';
export default function Home() {
  return (
    <>
      <section className="bg-half-170  d-table w-100" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-7">
              <div className="title-heading mt-4">
                <h1 className="heading mb-3">Welcome to <span className="text-indigo">Atom Code </span>Dev </h1>
                <p className="para-desc text-muted">
                  A AI enabled next generation platform to Supercharge the engineering career.
                  </p>
                <div className="mt-4">
                  <Link href="#getstarted" className="btn btn-primary mt-2 mr-2">Get Started <i className="mdi mdi-chevron-right" /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <img src="https://ik.imagekit.io/atominc/ATOMCODE_Web/illustratorx/Startup_SVG_css.svg" alt="hive" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="getstarted">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Our Highlights</h4>
                <p className="text-muted para-desc mb-0 mx-auto">We provide highly scalable &amp; more efficient technical services to upgrade your<span className="text-indigo font-weight-bold"> business</span> in online world </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 mt-4 pt-2">
              <div className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-indigo">
                  <PieChart size={40} />
                </span>
                <div className="card-body p-0 content">
                  <h5>Top Programming Languages</h5>
                </div>
                <span className="big-icon text-center">
                  <PieChart size={130} />
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 pt-2">
              <div className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-indigo">
                  <Shield size={40} />
                </span>
                <div className="card-body p-0 content">
                  <h5>Most Secured Workspace</h5>
                </div>
                <span className="big-icon text-center">
                  <Shield size={130} />
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 pt-2">
              <div className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-indigo">
                  <Zap size={40} />
                </span>
                <div className="card-body p-0 content">
                  <h5>AI based Practices & Security</h5>
                </div>
                <span className="big-icon text-center">
                  <Zap size={130} />
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 pt-2">
              <div className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-indigo">
                  <BarChart2 size={40} />
                </span>
                <div className="card-body p-0 content">
                  <h5>Extensive Analysis</h5>
                </div>
                <span className="big-icon text-center">
                  <BarChart2 size={130} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Our Platform Features</h4>
                <p className="text-muted para-desc mb-0 mx-auto">Quick view of <span className="text-indigo font-weight-bold">Atom Code</span>'s technicial services.</p>
              </div>
            </div>
          </div>
          <Tab.Group>
            <div className="row align-items-center">
              <div className="col-md-5 mt-4 pt-2">
                <Tab.List className="nav nav-pills bg-white nav-justified flex-column mb-0">
                  <Tab className="nav-item bg-light rounded-md tab-componentx">
                    <div className="nav-link rounded-md">
                      <div className="p-3 text-left">
                        <h5 className="title text-indigo">Websites &amp; Web Applications</h5>
                        <p className="text-muted tab-para mb-0">We build websites/webapps on PHP, Wordpress, Angularjs, Reactjs as per the requirment</p>
                      </div>
                    </div>
                  </Tab>
                  <Tab className="nav-item bg-light rounded-md tab-componentx">
                    <div className="nav-link rounded-md">
                      <div className="p-3 text-left">
                        <h5 className="title text-indigo">Native &amp; Hybrid Mobile Applications</h5>
                        <p className="text-muted tab-para mb-0">We build Native Android/IOS &amp; hybrid (IONIC 4, FLUTTER) as per the requirment</p>
                      </div>
                    </div>
                  </Tab>
                  <Tab className="nav-item bg-light rounded-md tab-componentx">
                    <div className="nav-link rounded-md">
                      <div className="p-3 text-left">
                        <h5 className="title text-indigo">SEO &amp; Digital Marketings</h5>
                        <p className="text-muted tab-para mb-0">We provides digital marketing on social media &amp; search consoles , site ranking tools, Sitemappers for SEO.</p>
                      </div>
                    </div>
                  </Tab>
                  <Tab className="nav-item bg-light rounded-md tab-componentx">
                    <div className="nav-link rounded-md">
                      <div className="p-3 text-left">
                        <h5 className="title text-indigo">In-office Trainings</h5>
                        <p className="text-muted tab-para mb-0">We provides technical training for freshers &amp; students on LAMP, MEAN &amp; MERN STACK platforms.</p>
                      </div>
                    </div>
                  </Tab>
                </Tab.List>
              </div>
              <div className="col-md-7 col-12 mt-4 pt-2">
                <Tab.Panels className="tab-content ml-lg-4">
                  <Tab.Panel>
                    <img src="https://ik.imagekit.io/atominc/ATOMCODE_Web/illustratorx/webx.svg" className="img-fluid mx-auto rounded-md shadow-lg d-block" alt="hive" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <img src="https://ik.imagekit.io/atominc/ATOMCODE_Web/illustratorx/Mobile.svg" className="img-fluid mx-auto rounded-md shadow-lg d-block" alt="hive" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <img src="https://ik.imagekit.io/atominc/ATOMCODE_Web/task/3.jpg" className="img-fluid mx-auto rounded-md shadow-lg d-block" alt="hive" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <img src="https://ik.imagekit.io/atominc/ATOMCODE_Web/task/4.jpg" className="img-fluid mx-auto rounded-md shadow-lg d-block" alt="hive" />
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </div>
          </Tab.Group>
        </div>
      </section>
      {/* Start */}
      <section className="section pt-0">
        <div className="container">
          <div className="row mt-4 pt-2 position-relative" id="counter" style={{ zIndex: 1 }}>
            <div className="col-md-3 col-6 mt-4 pt-2">
              <div className="counter-box text-center">
                <img src="https://ik.imagekit.io/atominc/ATOMCODE_Web/HomeAsstes/Asset190.svg" className="avatar avatar-small" alt="hive" />
                <h2 className="mb-0 mt-4"><span className="counter-value" data-count={50}>50</span>+</h2>
                <h6 className="counter-head text-muted">Happy Client</h6>
              </div>
            </div>
            <div className="col-md-3 col-6 mt-4 pt-2">
              <div className="counter-box text-center">
                <img src="https://ik.imagekit.io/atominc/ATOMCODE_Web/HomeAsstes/Asset189.svg" className="avatar avatar-small" alt="hive" />
                <h2 className="mb-0 mt-4"><span className="counter-value" data-count={100}>100</span>%</h2>
                <h6 className="counter-head text-muted">Client Retention Rate</h6>
              </div>
            </div>
            <div className="col-md-3 col-6 mt-4 pt-2">
              <div className="counter-box text-center">
                <img src="https://ik.imagekit.io/atominc/ATOMCODE_Web/HomeAsstes/Asset192.svg" className="avatar avatar-small" alt="hive" />
                <h2 className="mb-0 mt-4"><span className="counter-value" data-count={2}>2k</span>+</h2>
                <h6 className="counter-head text-muted">Monthly Active Users</h6>
              </div>
            </div>
            <div className="col-md-3 col-6 mt-4 pt-2">
              <div className="counter-box text-center">
                <img src="https://ik.imagekit.io/atominc/ATOMCODE_Web/HomeAsstes/Asset187.svg" className="avatar avatar-small" alt="hive" />
                <h2 className="mb-0 mt-4"><span className="counter-value" data-count={50}>50</span>+</h2>
                <h6 className="counter-head text-muted">Team size</h6>
              </div>
            </div>
          </div>
          <div className="feature-posts-placeholder bg-light" />
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">How do we works ?</h4>
                <p className="text-muted para-desc mx-auto mb-0">Our Technicial team follows AGILE methodology for application development, This method makes work process easier and perfect.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4 pt-2">
              <div className="card features work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons rounded h1 text-center text-indigo px-3">
                  <Hexagon size={40} />
                </div>
                <div className="card-body">
                  <h4 className="title text-dark">Planning &amp; Discussion</h4>
                  <p className="text-muted mb-0">Planning creating Architecture of webapp/mobileapp is our first move with requirments. </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-md-5 pt-md-3 mt-4 pt-2">
              <div className="card features work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons rounded h1 text-center text-indigo px-3">
                  <Code size={40} />
                </div>
                <div className="card-body">
                  <h4 className="title text-dark">Development &amp; Testing</h4>
                  <p className="text-muted mb-0">Development, Deployment are the next important steps which are done by our NODEHIVE technicians.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
              <div className="card features work-process bg-transparent d-none-arrow border-0 text-center">
                <div className="icons rounded h1 text-center text-indigo px-3">
                  <Cloud size={40} />
                </div>
                <div className="card-body">
                  <h4 className="title text-dark">Feedbacks &amp; Update</h4>
                  <p className="text-muted mb-0">Customers feedbacks are the important part which helps to improve the applications via new update.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="mt-1 mb-5 p-4 justify-content-center">
        <div className=" text-center">
          <div className="section-title">
            <h4 className="title mb-4">Have Question ? Get in touch!</h4>
            <p className="text-muted para-desc mx-auto">Start your bussiness's digital services with<span className="text-indigo font-weight-bold"> NODEHIVE</span>'s technicial experts. Contact us to get more detials about our services and pricings</p>
            <Link href="/contact" className="btn btn-primary mt-4"><i className="mdi mdi-phone" /> Contact us</Link>
          </div>
        </div>
      </div>
    </>
  )
}
