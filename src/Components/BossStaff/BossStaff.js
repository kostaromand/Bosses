import React, { Component } from 'react'
import Main from '../Main'
import BossDashboard from './BossDashboard/BossDashboard'
import BossTable from './BossTable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBossesThunk as fetchBosses } from '../../redux/reducers/bosses/actions'
import { getBossesData } from '../../redux/selectors'

class BossStaff extends Component {
    componentDidMount = () => {
        this.props.fetchBosses();
    }

    render = () => {
        const { bossesData } = this.props;
        return (
            <Main
                Dashboard={BossDashboard}
                Content={() => <BossTable bossesData={bossesData} />}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bossesData: getBossesData(state)
    }
}

const maDispatchToProps = (dispatch) => (
    bindActionCreators({
        fetchBosses
    },
        dispatch
    )
)

export default connect(mapStateToProps, maDispatchToProps)(BossStaff)
