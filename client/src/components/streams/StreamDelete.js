import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions/index';
import Modal from '../../Modal';
import { Link } from 'react-router-dom'
import history from '../../history';

export class StreamDelete extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </Fragment>
    )
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are yuo sure you want to delete this stream?"
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}



export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)
