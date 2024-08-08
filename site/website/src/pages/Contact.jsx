import Breadcrumbs from "../components/Breadcrumbs";
import React from "react";
import Help from "../components/Help";

export default function Contact () {
    const breadcrumbs = [
        {label: 'Accueil', link: '/'},
        {label: 'Contact'}
    ]

    const info = {
        title: 'Nous contacter',
        subtitle: 'Cursus neque cursus curae ante scelerisque vehicula.'
    }

    return (
        <>
            <Breadcrumbs
                breadcrumbs={breadcrumbs}
                info={info}
            />

            <div className="container margin_60">
                <div className="row">
                    <div className="col-md-8">
                        <div className="form_title">
                            <h3><strong><i className="icon-pencil"></i></strong>Fill the form below</h3>
                            <p>
                                Mussum ipsum cacilds, vidis litro abertis.
                            </p>
                        </div>
                        <div className="step">

                            <div id="message-contact"></div>
                            <form method="post" action="http://www.ansonika.com/citytours/assets/contact.php"
                                  id="contactform">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input type="text" className="form-control" id="name_contact"
                                                   name="name_contact" placeholder="Enter Name"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input type="text" className="form-control" id="lastname_contact"
                                                   name="lastname_contact" placeholder="Enter Last Name"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" id="email_contact" name="email_contact"
                                                   className="form-control" placeholder="Enter Email"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input type="text" id="phone_contact" name="phone_contact"
                                                   className="form-control" placeholder="Enter Phone number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea rows="5" id="message_contact" name="message_contact"
                                                      className="form-control" placeholder="Write your message"
                                                      style={{ height:'200px'}}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>Human verification</label>
                                        <input type="text" id="verify_contact" className=" form-control add_bottom_30" placeholder="Are you human? 3 + 1 ="/>
                                        <input type="submit" value="Submit" className="btn_1" id="submit-contact" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="box_style_1">
                            <span className="tape"></span>
                            <h4>Address <span><i className="icon-pin pull-right"></i></span></h4>
                            <p>
                                Place Charles de Gaulle, 75008 Paris
                            </p>
                            <hr/>
                                <h4>Help center <span><i className="icon-help pull-right"></i></span></h4>
                                <p>
                                    Lorem ipsum dolor sit amet, vim id accusata sensibus, id ridens quaeque qui. Ne qui
                                    vocent ornatus molestie.
                                </p>
                                <ul id="contact-info">
                                    <li>+ 61 (2) 8093 3400 / + 61 (2) 8093 3402</li>
                                    <li><a href="#">info@domain.com</a></li>
                                </ul>
                        </div>
                        <Help />
                    </div>
                </div>
            </div>
        </>
    )
}