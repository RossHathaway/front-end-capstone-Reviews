import React from 'react'

class Pictures extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
      return (<div>
        <h3>Customer Images</h3>
        <div>
          {this.props.pics ?  
            this.props.pics.map((pic, i) => (<img src={pic.picUrl} key={i} alt="customer image"></img>)) : null
          }
        </div>
        <p style={{color: 'blue'}}>See all customer images</p>
      </div>)
  }
}

export default Pictures