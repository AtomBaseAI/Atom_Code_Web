import Link from 'next/link'
import { Code, Smartphone, Chrome, Zap, Lock, Codepen, CheckCircle, Star } from 'react-feather';

export default function Web() {
  return (
    <>

      <div>

        <section className="bg-half bg-light d-table w-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="page-next-level">
                  <h4 className="title">Online Portal</h4>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item"><Link href="/">Atom Code</Link></li>
                        <li className="breadcrumb-item"><Link href="#">Services</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Web Platform</li>
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

        <section className="section pb-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Key Features</h4>
                  <p className="text-muted para-desc mx-auto mb-0">Unique features that makes <span className="text-indigo font-weight-bold">Atom Code</span>'s web platform highlighted.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                    <Smartphone className="fea icon-ex-md text-indigo" />
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Fully Responsive</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                    <Chrome className="fea icon-ex-md text-indigo" />
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Browser Compatibility</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                    <Code className="fea icon-ex-md text-indigo" />
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Clean Workspace</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                    <Zap className="fea icon-ex-md text-indigo" />
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">AI Powered</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                    <Lock className="fea icon-ex-md text-indigo" />
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Highly Secured</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                    <Codepen className="fea icon-ex-md text-indigo" />
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Modern Frameworks</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-100 mt-60 mb-0">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title mr-lg-5">
                  <h4 className="title mb-4">Our Portla's important modules & Highlights ?</h4>
                  <p className="text-muted">Our Portal offers students the one of the state of the art learning and practice expericnce with following highlights also it provides the extensive & detialed analaysis for educators (Staffs) & Placement Cell.</p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-0 py-1"><span className="text-indigo h5 mr-2"><CheckCircle /></span>Student Learning Panel with AI integrated IDE & Workspace for Pracetise</li>
                    <li className="mb-0 py-1"><span className="text-indigo h5 mr-2"><CheckCircle /></span>Assessment Panel with Best Proctoring and tabswitch monitering</li>
                    <li className="mb-0 py-1"><span className="text-indigo h5 mr-2"><CheckCircle /></span>Optimized DB performance with MYSQL(sql)/MONGO DB(nosql)</li>
                    <li className="mb-0 py-1"><span className="text-indigo h5 mr-2"><CheckCircle /></span>Powerfull Servers with GODADDY shared SSD(websites) &amp; AWS (Apps)</li>
                    <li className="mb-0 py-1"><span className="text-indigo h5 mr-2"><CheckCircle /></span>SSL &amp; DDOS Secured with CLOUDFLARE</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 order-1 order-md-2">
                <img src="https://ik.imagekit.io/atominc/ATOMCODE_Web/illustratorx/app_development_SVG.svg" alt="hive" />
              </div>
            </div>
          </div>
          <div className="container mt-100 mt-60">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="media align-items-center features">
                  <div className="icons m-0 rounded h2 text-indigo text-center px-3">
                    <Star />
                  </div>
                  <div className="content ml-3">
                    <h5 className="mb-1"><Link href="#" className="text-dark">JAVA</Link></h5>
                    <p className="text-muted mb-0">OOPS with JAVA & DSA</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="media align-items-center features">
                  <div className="icons m-0 rounded h2 text-indigo text-center px-3">
                    <Star />
                  </div>
                  <div className="content ml-3">
                    <h5 className="mb-1"><Link href="#" className="text-dark">PYTHON</Link></h5>
                    <p className="text-muted mb-0">OOPS with Python & DSA</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="media align-items-center features">
                  <div className="icons m-0 rounded h2 text-indigo text-center px-3">
                    <Star />
                  </div>
                  <div className="content ml-3">
                    <h5 className="mb-1"><Link href="#" className="text-dark">C </Link></h5>
                    <p className="text-muted mb-0">Core C & DSA</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="media align-items-center features">
                  <div className="icons m-0 rounded h2 text-indigo text-center px-3">
                    <Star />
                  </div>
                  <div className="content ml-3">
                    <h5 className="mb-1"><Link href="#" className="text-dark">CPP</Link></h5>
                    <p className="text-muted mb-0">OOPS with CPP & DSA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


    </>
  )
}
