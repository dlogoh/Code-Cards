import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className='contact'>
      <h2>Let's Get In Touch!</h2>
      <form name='contact' method='POST'>
        <input type='hidden' name='form-name' value='contact' />
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' required />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='example@email.com'
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='company'>Company</label>
          <input type='text' name='company' id='company' />
        </div>
        <div className='form-control'>
          <label htmlFor='message'>Message</label>
          <textarea name='message' id='message' rows='3' required />
        </div>
        <button type='submit' className='form-btn'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
