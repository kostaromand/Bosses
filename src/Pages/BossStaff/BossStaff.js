import React, { useEffect } from 'react'
import MainLayout from '../../layouts/MainLayout'
import BossDashboard from './BossDashboard/BossDashboard'
import BossTable from './BossTable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBosses } from '../../redux/reducers/bosses/actions'

export const BossStaff = () => {
    useEffect(() => {
        this.props.fetchBosses();
    }, []);
    return (
        <MainLayout
            Dashboard={BossDashboard}
            Content={() => <BossTable />}
        />
    )
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchBosses
    },
        dispatch
    )
)
export default connect(null, mapDispatchToProps)(BossStaff);
