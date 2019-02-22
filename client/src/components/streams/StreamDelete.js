import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStream } from '../../actions/index';
import Modal from '../../Modal';
import history from '../../history';

export class StreamDelete extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </>
    )
  }

  renderContent() {
    if (!this.props.stream) {
      return (<div>Are yuo sure you want to delete this stream?</div>)
    }
    return (<div></div>)
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}



export default connect(mapStateToProps, { fetchStream })(StreamDelete)
