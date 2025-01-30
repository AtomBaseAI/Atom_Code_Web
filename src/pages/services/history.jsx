import Link from 'next/link'


export default function History() {
    return (
        <>
            <div>

                <section className="bg-half bg-light d-table w-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 text-center">
                                <div className="page-next-level">
                                    <h4 className="title"> Company Story </h4>
                                    <div className="page-next">
                                        <nav aria-label="breadcrumb" className="d-inline-block">
                                            <ul className="breadcrumb bg-white rounded shadow mb-0">
                                                <li className="breadcrumb-item"><Link href="/">Atom Code</Link></li>
                                                <li className="breadcrumb-item"><Link href="#">Company</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">History</li>
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

                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="main-icon rounded-pill text-indigo text-center mt-4 pt-2">
                                    <i data-feather="star" className="fea icon-md-sm" />
                                </div>
                                <div className="timeline-page pt-2 position-relative">
                                    <div className="timeline-item mt-4">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="duration date-label-left border rounded p-2 px-4 position-relative shadow">2002</div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="card event event-description-right rounded shadow border-0 overflow-hidden float-left">
                                                    <img src="assets\images\blog\01.jpg" className="img-fluid" alt="hive" />
                                                    <div className="card-body">
                                                        <h5 className="mb-0 text-capitalize">Founding</h5>
                                                        <p className="mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/*end timeline item*/}
                                    <div className="timeline-item mt-4">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2">
                                                <div className="card event event-description-left rounded shadow border-0 overflow-hidden float-left">
                                                    <img src="assets\images\blog\02.jpg" className="img-fluid" alt="hive" />
                                                    <div className="card-body">
                                                        <h5 className="mb-0 text-capitalize">Partnership</h5>
                                                        <p className="mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                                <div className="duration duration-right rounded border p-2 px-4 position-relative shadow text-left">2006</div>
                                            </div>
                                        </div>
                                    </div>{/*end timeline item*/}
                                    <div className="timeline-item mt-4">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="duration date-label-left border rounded p-2 px-4 position-relative shadow">2012</div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="card event event-description-right rounded shadow border-0 overflow-hidden float-left">
                                                    <img src="assets\images\blog\03.jpg" className="img-fluid" alt="hive" />
                                                    <div className="card-body">
                                                        <h5 className="mb-0 text-capitalize">Secuirty</h5>
                                                        <p className="mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/*end timeline item*/}
                                    <div className="timeline-item mt-4">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2">
                                                <div className="card event event-description-left rounded shadow border-0 overflow-hidden float-left">
                                                    <img src="assets\images\blog\04.jpg" className="img-fluid" alt="hive" />
                                                    <div className="card-body">
                                                        <h5 className="mb-0 text-capitalize">Branch</h5>
                                                        <p className="mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                                <div className="duration duration-right rounded border p-2 px-4 position-relative shadow text-left">2013</div>
                                            </div>
                                        </div>
                                    </div>{/*end timeline item*/}
                                    <div className="timeline-item mt-4">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="duration date-label-left border rounded p-2 px-4 position-relative shadow">2016</div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="card event event-description-right rounded shadow border-0 overflow-hidden float-left">
                                                    <img src="assets\images\blog\05.jpg" className="img-fluid" alt="hive" />
                                                    <div className="card-body">
                                                        <h5 className="mb-0 text-capitalize">Global</h5>
                                                        <p className="mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/*end timeline item*/}
                                    <div className="timeline-item mt-4">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2">
                                                <div className="card event event-description-left rounded shadow border-0 overflow-hidden float-left">
                                                    <img src="assets\images\blog\06.jpg" className="img-fluid" alt="hive" />
                                                    <div className="card-body">
                                                        <h5 className="mb-0 text-capitalize">Branches</h5>
                                                        <p className="mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                                <div className="duration duration-right rounded border p-2 px-4 position-relative shadow text-left">2018</div>
                                            </div>
                                        </div>
                                    </div>{/*end timeline item*/}
                                </div>{/*end timeline page*/}
                                {/* TIMELINE END */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
