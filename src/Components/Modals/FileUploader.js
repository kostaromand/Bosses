import React, { Component } from 'react'

export default class FileUploader extends Component {
    constructor(props) {
        super(props);
        this.fileInput = null;
    }

    handleClick = (e) => {
        e.preventDefault();
        this.fileInput.click()
    }

    render() {
        return (
            <>
                <button
                    className="boss-button boss-button_role_file boss-add-avatar__action"
                    onClick={this.handleClick}
                >
                    Choose File
                </button>
                <input
                    type="file"
                    {...this.props.input}
                    ref={(input) => { this.fileInput = input }}
                    style={{ display: "none" }}
                />
            </>
        )
    }
}
