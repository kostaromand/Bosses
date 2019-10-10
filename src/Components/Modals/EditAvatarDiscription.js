import React from 'react'

class EditAvatarDiscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetailsOpened: false
        }
    }

    openDetails = () => {
        this.setState((prevState) => ({ isDetailsOpened: !prevState.isDetailsOpened }))
    }

    render = () => {
        const { isDetailsOpened } = this.state;
        return (
            <div className="boss-message boss-message_role_photo-requirements boss-message_type_accent">
                <h2 className="boss-message__title boss-message__title_accent">Photos Must:</h2>
                <ul className="boss-message__list">
                    <li className="boss-message__list-item">Be a close-up of your full head and upper shoulders</li>
                    <li className="boss-message__list-item">Taken against plain cream background</li>
                    <li className="boss-message__list-item">Contain no other objects or people</li>
                    <li className="boss-message__list-item">Unaltered by computer software</li>
                </ul>
                <div className="boss-message__details">
                    <div className="boss-message__details-header" onClick={this.openDetails}>
                        <p
                            className={`boss-message__details-switch ${!isDetailsOpened && "boss-message__details-switch_state_closed"}`}>
                            {
                                isDetailsOpened ? "Show less" : "Show More"
                            }
                        </p>
                    </div>
                    <div
                        className={`boss-message__details-content ${!isDetailsOpened && "boss-message__details-content_state_closed"}`}
                        style={{ display: "block" }}
                    >
                        {
                            isDetailsOpened &&
                            (
                                <div className="boss-message__details-inner">
                                    <p className="boss-message__text boss-message__text_marked boss-message__text_role_block">
                                        <span className="boss-message__text-line">Pictures copied from Social media are not acceptable</span>
                                        <span className="boss-message__text-line">Pictures should be taken by a member of management team</span>
                                        <span className="boss-message__text-line">Pictures should be taken in your workplace</span>
                                    </p>

                                    <h2 className="boss-message__title boss-message__title_accent">In your photo, you must:</h2>
                                    <ul className="boss-message__list">
                                        <li className="boss-message__list-item">Be facing forward and looking straight at the camera</li>
                                        <li className="boss-message__list-item">Have a neutral expression and your mouth closed</li>
                                        <li className="boss-message__list-item">Have your eyes open, visible and free from reflection or glare from glasses</li>
                                        <li className="boss-message__list-item">Not have hair in front of your eyes</li>
                                        <li className="boss-message__list-item">Not have a head covering (unless it’s for religious or medical reasons)</li>
                                        <li className="boss-message__list-item">Not have anything covering your face</li>
                                        <li className="boss-message__list-item">Not have any ‘red eye’</li>
                                        <li className="boss-message__list-item">Not have any shadows on your face or behind you</li>
                                    </ul>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        )
    }
}
export default EditAvatarDiscription
