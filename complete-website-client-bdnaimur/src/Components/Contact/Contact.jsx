import emailjs from 'emailjs';
import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7ykjwk9',
            'contact_form',
            e.target,
            'user_9atVolFDF0CeY22Zu9QcB')
            .then((result) => {
                if (result.text === "OK") {
                    alert("Succefully Message Sent")
                }
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className="container m-5">
            <div className="row">
                <h3 className="text-secondary text-center">Contact Us</h3>
                <div className="offset-md-3 col-md-6">
                    <form onSubmit={handleSubmit} className="contact-form">
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
            </div>
        </div>
    );
};

export default Contact;