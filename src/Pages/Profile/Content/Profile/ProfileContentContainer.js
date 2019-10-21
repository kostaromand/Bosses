import React from 'react'
import { connect } from 'react-redux'
import { getProfileData } from '../../../../redux/selectors'
import { isEmpty } from "lodash";
import ProfileContent from './ProfileContent';

const ProfilePageContainer = ({ profileData }) => {
    return (
        <>
            {
                isEmpty(profileData) ?
                    <div>Loading</div>
                    :
                    <ProfileContent profileData={profileData} />
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
