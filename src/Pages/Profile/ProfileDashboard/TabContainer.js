import React from 'react'
import Tab from './Tab'
import { connect } from "react-redux"
import { getTabs, getActiveTab } from '../../../redux/selectors'
import { changeActiveTab } from '../../../redux/reducers/tabs/actions'
import { bindActionCreators } from 'redux'

const TabContainer = ({ tabs, activeTab, changeActiveTab }) => {
    return (
        <div className="boss-page-dashboard__switches">
            {
                tabs.map(tab => (
                    <Tab
                        key={tab.id}
                        {...tab}
                        onClick={() => { changeActiveTab(tab.id) }}
                        isActive = {activeTab === tab.id}
                        />
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tabs: getTabs(state),
        activeTab:getActiveTab(state)
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            changeActiveTab
        },
        dispatch
    )
)

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);
