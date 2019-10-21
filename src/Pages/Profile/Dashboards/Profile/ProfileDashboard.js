import React from 'react'
import Dashboard from '../../../../Components/Dashboard'
import TabContainer from './TabContainer'
import DashboardGroup from '../../../../Components/Dashboard/DashboardGroup'
import UserSummary from './UserSummary'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { getUserSummary } from '../../../../redux/selectors'
import { isEmpty } from "lodash";

const ProfileDashboard = ({ userData }) => {
    if (isEmpty(userData)) {
        return <div>Loading</div>
    }
    const {
        isDisabled,
        id
    } = userData;
    return (
        <Dashboard classes="boss-page-dashboard_page_profile">
            <DashboardGroup>
                <UserSummary userData={userData} />
                <div className="boss-page-dashboard__buttons-group">
                    {
                        isDisabled ?
                            <Link
                                to="#"
                                className="boss-button boss-button_role_unblock boss-page-dashboard__button">
                                Enable Staff Member
                            </Link>
                            : (
                                <>
                                    <Link
                                        to={`/profile/${id}/edit`}
                                        className="boss-button boss-button_role_edit boss-page-dashboard__button"
                                    >
                                        Edit Profile
                                    </Link>
                                    <Link
                                        to="#"
                                        className="boss-button boss-button_role_block boss-page-dashboard__button"
                                    >
                                        Disable Staff Member
                                    </Link>
                                </>
                            )
                    }
                </div>
            </DashboardGroup>
            <TabContainer />
        </Dashboard>

    )
}

const mapStateToProps = (state) => {
    return {
        userData: getUserSummary(state)
    }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDashboard);