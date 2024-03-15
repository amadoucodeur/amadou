import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Votre e-mail</label>
          <input required name="email" id="email" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">Comment puis-je vous aider?</label>
          <textarea required cols={50} rows={10} id="textarea" name="textarea"></textarea>
        </div>
        <button type="submit" className="form-submit-btn">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
