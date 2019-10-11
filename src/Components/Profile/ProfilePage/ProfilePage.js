import React from 'react'
import IsleContainer from './IsleContainer'
import { connect } from 'react-redux'
import { getProfileData } from '../../../redux/selectors'
import { bindActionCreators } from 'redux'

const ProfilePage = ({ profileData }) => {
    return (
        <div className="boss-page-main__flow">
            <IsleContainer profileData={profileData} />
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        profileData: getProfileData(state)
    }
}

const maDispatchToProps = null

export default connect(mapStateToProps, maDispatchToProps)(ProfilePage);
