import Link from 'next/link'
import { Code,Smartphone,Shield,Zap,Cloud, CheckCircle, Star } from 'react-feather';

export default function Mobile() {
  return (
<>
      <div>
         
        <section className="bg-half bg-light d-table w-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="page-next-level">
                  <h4 className="title">Android/IOS</h4>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item"><Link href="/">Atom Code</Link></li>
                        <li className="breadcrumb-item"><Link href="#">Services</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Mobile Apps Development</li>
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
                  <p className="text-muted para-desc mx-auto mb-0">Unique features that makes <span className="text-indigo font-weight-bold">Atom Code</span>'s web services highlighted.</p>
                </div>
              </div>  
            </div>  
            <div className="row">
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                    <Smartphone className="fea icon-ex-md text-indigo"/>
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Native Apps Support</h4>
                  </div>
                </div>
              </div>  
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                    <Smartphone className="fea icon-ex-md text-indigo"/>
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Hybrid Apps Support</h4>
                  </div>
                </div>
              </div>  
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                    <Code className="fea icon-ex-md text-indigo"/>
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Clean Code</h4>
                  </div>
                </div>
              </div>  
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                    <Zap className="fea icon-ex-md text-indigo"/>
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Optimzed Performance</h4>
                  </div>
                </div>
              </div>  
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                    <Shield className="fea icon-ex-md text-indigo"/>
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Malware Protection</h4>
                  </div>
                </div>
              </div>  
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                    <Cloud className="fea icon-ex-md text-indigo"/>
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Modern Dev</h4>
                  </div>
                </div>
              </div>  
            </div>  
          </div>  
          <div className="container mt-100 mt-60 mb-0">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title mr-lg-5">
                  <h4 className="title mb-4">How we build the marvelous mobile applications ?</h4>
                  <p className="text-muted">Our Mobile Development team analyzie the requirment from clients, as per the requirment they choose the Platforms(Andriod/IOS or Both) and Development process with latest and Long Term Support version which gives the highly scalable performance and user experience.</p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-0 py-1"><span className="text-indigo h5 mr-2"><CheckCircle /></span>Interactive UX with Adobe XD and Sketch</li>
                    <li className="mb-0 py-1"><span className="text-indigo h5 mr-2"><CheckCircle /></span>Firebase Services (FCM) &amp; Analysis, GCC</li>
                    <li className="mb-0 py-1"><span className="text-indigo h5 mr-2"><CheckCircle /></span>Crashlytics Analysis &amp; Play console feedbacks</li>
                    <li className="mb-0 py-1"><span className="text-indigo h5 mr-2"><CheckCircle /></span>Native apps with Android Studio(Android) &amp; Swift 5(IOS)</li>
                    <li className="mb-0 py-1"><span className="text-indigo h5 mr-2"><CheckCircle /></span>Flutter/Ionic hybrid support</li>
                  </ul>
                </div>
              </div>  
              <div className="col-lg-5 col-md-6 order-1 order-md-2">
                <img src="https://ik.imagekit.io/atominc/ATOMCODE_Web/illustratorx/app.svg" alt="hive" />
              </div>  
            </div>  
          </div>  
          <div className="container mt-100 mt-60">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="media align-items-center features">
                  <div className="icons m-0 rounded h2 text-indigo text-center px-3">
                    <Star/>
                  </div>
                  <div className="content ml-3">
                    <h5 className="mb-1"><Link href="#" className="text-dark">Android - Native</Link></h5>
                    <p className="text-muted mb-0">Android Studio - JAVA</p>
                  </div>
                </div>
              </div>  
              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="media align-items-center features">
                  <div className="icons m-0 rounded h2 text-indigo text-center px-3">
                    <Star/>
                  </div>
                  <div className="content ml-3">
                    <h5 className="mb-1"><Link href="#" className="text-dark">IOS - Native</Link></h5>
                    <p className="text-muted mb-0">XCODE - SWIFT 5</p>
                  </div>
                </div>
              </div>  
              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="media align-items-center features">
                  <div className="icons m-0 rounded h2 text-indigo text-center px-3">
                    <Star/>
                  </div>
                  <div className="content ml-3">
                    <h5 className="mb-1"><Link href="#" className="text-dark">Flutter - Hybrid</Link></h5>
                    <p className="text-muted mb-0">Flutter Console - Dart.</p>
                  </div>
                </div>
              </div>  
              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="media align-items-center features">
                  <div className="icons m-0 rounded h2 text-indigo text-center px-3">
                    <Star/>
                  </div>
                  <div className="content ml-3">
                    <h5 className="mb-1"><Link href="#" className="text-dark">Ionic 5 - Hybrid</Link></h5>
                    <p className="text-muted mb-0">ION Console - Angular.</p>
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
