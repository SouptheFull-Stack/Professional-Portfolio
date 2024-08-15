import { useState } from 'react';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    }

    const handleSubmit = (e) => {   
        e.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container">
          <h2 className='is-size-2'>Get in Touch</h2>
          <form className="box is-flex is-flex-direction-column is-align-content-space-evenly" onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
            <div className="field mb-4">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="field mb-4">
              <div className="control">
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="field mb-4">
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-primary" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      );
}
    