import React, {Component} from 'react'

class Error extends Component {
  render(){
    const msg = this.props.msg && this.props.msg !== '' ? 
                this.props.msg :
                '';
    const divMsg = <div>{msg}</div>
    return(
      <div>
        An error occurred:
        {divMsg}
      </div>
    );
  }
}

export default Error;