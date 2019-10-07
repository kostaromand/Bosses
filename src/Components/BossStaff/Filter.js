import React from 'react'
import FilterContent from './FilterContent'
import { connect } from "react-redux"
import { getFilterState } from "../../redux/selectors"
import { toggleFilter } from "../../redux/reducers/filter/actions"
import { bindActionCreators } from 'redux'

        
const Filter = ({filterState, toggleFilter}) => {
    const filterStateClass = "boss-dropdown__switch_state_opened";
        return (
        <div className="boss-page-dashboard__filter">
            <div className="boss-dropdown">
                <div className="boss-dropdown__header">
                    <a href="#"
                        onClick={toggleFilter}
                        className={
                            "boss-dropdown__switch boss-dropdown__switch_role_filter " +
                            (filterState && filterStateClass)

                        }>
                        Filter
                  </a>
                </div>
                <FilterContent opened={filterState}/>
            </div>
        </div>
        )
    }
    
const mapStateToProps = (state) => {
    return {
            filterState: getFilterState(state)
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
            toggleFilter
        },
            dispatch
        );
    
    
    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(Filter);
