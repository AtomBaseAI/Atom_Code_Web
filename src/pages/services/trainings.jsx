import Link from 'next/link'
import { Target,BookOpen,Monitor,Award,Codesandbox,Coffee, CheckCircle,Star } from 'react-feather'
export default function Trainings() {
  return (
<>
      <div>
         
        <section className="bg-half bg-light d-table w-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="page-next-level">
                  <h4 className="title">Training Programs</h4>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item"><Link href="/">Atom Code</Link></li>
                        <li className="breadcrumb-item"><Link href="#">Services</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">In office trainings</li>
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
                  <p className="text-muted para-desc mx-auto mb-0">Unique features that makes <span className="text-indigo font-weight-bold">Atom Code</span>'s trainings highlighted.</p>
                </div>
              </div>  
            </div>  
            <div className="row">
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                      <Award className="fea icon-ex-md text-indigo"/>
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Professional Trainers</h4>
                  </div>
                </div>
              </div>  
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                      <BookOpen className="fea icon-ex-md text-indigo"/>
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Modern Courses</h4>
                  </div>
                </div>
              </div>  
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                      <Monitor className="fea icon-ex-md text-indigo"/>
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Hands on experience </h4>
                  </div>
                </div>
              </div>  
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                      <Target className="fea icon-ex-md text-indigo"/>
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Mentorship Guidance</h4>
                  </div>
                </div>
              </div>  
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                      <Codesandbox className="fea icon-ex-md text-indigo"/>
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Full Stack Dev Courses</h4>
                  </div>
                </div>
              </div>  
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="media key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle mr-3">
                      <Coffee className="fea icon-ex-md text-indigo"/>
                  </div>
                  <div className="media-body">
                    <h4 className="title mb-0">Internship Facility</h4>
                  </div>
                </div>
              </div>  
            </div>  
          </div>  
          <div className="container mt-100 mt-60 mb-0">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title mr-lg-5">
                  <h4 className="title mb-4">How we build highly skilled professional programmers ?</h4>
                  <p className="text-muted">We are providing high quality hands-on programing skills to freshers and college students. The trainings based on our working project model, so learners can directly absorb the knowledge from our professionals. This makes thir career easier while working on a projects.</p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-0 py-1"><span className="text-indigo h5 mr-2"><CheckCircle /></span>Learners can gather working experience</li>
                    <li className="mb-0 py-1"><span className="text-indigo h5 mr-2"><CheckCircle /></span>Modern and high-end programming languages</li>
                    <li className="mb-0 py-1"><span className="text-indigo h5 mr-2"><CheckCircle /></span>Certification for completion of course</li>
                    <li className="mb-0 py-1"><span className="text-indigo h5 mr-2"><CheckCircle /></span>Highly skilled mentors</li>
                    <li className="mb-0 py-1"><span className="text-indigo h5 mr-2"><CheckCircle /></span>Limited time internship for Students</li>
                  </ul>
                </div>
              </div>  
              <div className="col-lg-5 col-md-6 order-1 order-md-2">
                <img src="https://ik.imagekit.io/nodehive/hive/illustratorx/inbox-cleanup.svg" alt="hive" />
              </div>  
            </div>  
          </div>  
          <div className="container mt-100 mt-60">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="media align-items-center features">
                  <div className="icons m-0 rounded h2 text-indigo text-center px-3">
                    <Star />
                  </div>
                  <div className="content ml-3">
                    <h5 className="mb-1"><Link href="#" className="text-dark">LAMP STACK</Link></h5>
                    <p className="text-muted mb-0">LINUX-APACHE-MYSQLDB-PHP.</p>
                  </div>
                </div>
              </div>  
              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="media align-items-center features">
                  <div className="icons m-0 rounded h2 text-indigo text-center px-3">
                    <Star />
                  </div>
                  <div className="content ml-3">
                    <h5 className="mb-1"><Link href="#" className="text-dark">MEAN STACK</Link></h5>
                    <p className="text-muted mb-0">MONGODB-EXPRESS JS-ANGULAR-NODEJS.</p>
                  </div>
                </div>
              </div>  
              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="media align-items-center features">
                  <div className="icons m-0 rounded h2 text-indigo text-center px-3">
                    <Star />
                  </div>
                  <div className="content ml-3">
                    <h5 className="mb-1"><Link href="#" className="text-dark">MERN STACK</Link></h5>
                    <p className="text-muted mb-0">MONGODB-EXPRESS JS-REACTJS-NODEJS.</p>
                  </div>
                </div>
              </div>  
              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="media align-items-center features">
                  <div className="icons m-0 rounded h2 text-indigo text-center px-3">
                    <Star />
                  </div>
                  <div className="content ml-3">
                    <h5 className="mb-1"><Link href="#" className="text-dark">DevOps</Link></h5>
                    <p className="text-muted mb-0">GIT AWS GCP DOCKER </p>
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
