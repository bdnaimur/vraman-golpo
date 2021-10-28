import emailjs from 'emailjs-com';
import React from 'react';
import toast from 'react-hot-toast';
import Fade from 'react-reveal/Fade';
import swal from 'sweetalert';
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const loading = toast.loading('Please wait...!');
        emailjs.sendForm('service_7ykjwk9',
            'contact_form',
            e.target,
            'user_9atVolFDF0CeY22Zu9QcB')
            .then(res => {
                toast.dismiss(loading);
                if (res.text === "OK") {
                    swal("Thank you!", "Your message was sent successfully.", "success");
                }else{
                    swal("Sorry!", "Something went wrong. Please try again later", "error");
                }
            }, (err) => {
                toast.dismiss(loading);
                swal("Sorry!", "Something went wrong. Please try again later", "error")
            });
        e.target.reset();
    }

    return (
        <div className="container fluid m-5 bg-dark p-3">
            <div className="row">
            <Fade top duration={2500} distance="40px">
                <h3 className="text-white text-center">Contact Us</h3>
                <div className="offset-md-3 col-md-6">
                    <form onSubmit={handleSubmit} className="">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Message</label>
                            <textarea name='message' class="form-control" id="exampleInputPassword1" placeholder="Message" rows="4" />
                        </div>
                        <br />
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                </Fade>
            </div>
        </div>
    );
};

export default Contact;