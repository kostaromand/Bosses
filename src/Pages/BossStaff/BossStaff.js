import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import BossDashboard from './BossDashboard/BossDashboard'
import BossTable from './BossTable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBosses } from '../../redux/reducers/bosses/actions'

class BossStaff extends React.Component {
    componentDidMount = () => {
        this.props.fetchBosses();
    }
    render = () => {
        return (
            <MainLayout
                Dashboard={BossDashboard}
                Content={() => <BossTable />}
            />
        )
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchBosses
    },
        dispatch
    )
)
export default connect(null, mapDispatchToProps)(BossStaff);