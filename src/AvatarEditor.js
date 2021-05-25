import React from 'react'
import Avatar from 'react-avatar-edit'
import bckg from "./img/bckg.jpg"

class AvatarEditor extends React.Component {

  constructor(props) {
    super(props)
    const src = './img/bckg.jpg'
    this.state = {
      preview: bckg,
      src
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
  }
  
  onClose(preview) {
    this.setState({preview})
  }
  
  onCrop(preview) {
    this.setState({preview})
  }
  
  render () {
    return (
      <div>
        <Avatar
          width={390}
          height={295}
          onCrop={this.onCrop}
          onClose={this.onClose}
          src={this.state.src}
        />
        <img src={this.state.preview} alt="Preview" />
      </div>
    )
  }
}

export default AvatarEditor;