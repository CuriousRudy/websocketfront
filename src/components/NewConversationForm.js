import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

class NewConversationForm extends React.Component {
  state = {
    title: ''
  };

  updateForm = e => {
    console.log(e);
    // this.setState({
    //   title: e.target.value
    // });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(`${API_ROOT}/conversations`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ title: '' });
  };
  render() {
    console.log(this.state.title);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Conversation:</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.updateForm}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewConversationForm;
