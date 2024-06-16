
function Contact() {

    return (
        <>
            <div className="contact-container">
                <div className="contact-inner">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="email" className="input-form-name" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name:" />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="input-form-email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email:" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="input-form-message" id="exampleInputMessage" placeholder="Message:" />
                        </div>
                        <button type="submit" className="contact-button">Submit</button>
                    </form>
                </div>
            </div>
        </>

    );

}

export default Contact

