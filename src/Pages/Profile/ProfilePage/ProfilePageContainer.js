import React from 'react'
import { connect } from 'react-redux'
import { getProfileData } from '../../../redux/selectors'
import { isEmpty } from "lodash";
import ProfilePage from './ProfilePage';

const ProfilePageContainer = ({ profileData }) => {
    return (
        <>
            {
                isEmpty(profileData) ?
                    <div>Loading</div>
                    :
                    <ProfilePage profileData={profileData} />
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        profileData: getProfileData(state)
    }
}

const maDispatchToProps = null

export default connect(mapStateToProps, maDispatchToProps)(ProfilePageContainer);
