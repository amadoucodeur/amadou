import React from 'react';

export default function ContactForm(){
  return (
    <div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="email">Votre e-mail</label>
          <input required="" name="email" id="email" type="text"/>
        </div>
        <div class="form-group">
          <label for="textarea">Comment je peut vous aider?</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
        </div>
        <button type="submit" class="form-submit-btn">Submit</button>
      </form>
    </div>
  )
}
