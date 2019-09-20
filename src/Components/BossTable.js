import React, { Component } from 'react'
import Row from './Boss/Row'
import data from "../data";
export default class BossTable extends Component {
    render() {
        return (
            <div className = "boss-table boss-table_page_staff-members-index">
                <div className="boss-table__row">
                    <div className="boss-table__cell boss-table__cell_role_header"></div>
                    <div className="boss-table__cell boss-table__cell_role_header">Name</div>
                    <div className="boss-table__cell boss-table__cell_role_header">Accessories</div>
                    <div className="boss-table__cell boss-table__cell_role_header">Modified</div>
                    <div className="boss-table__cell boss-table__cell_role_header">Status</div>
                    <div className="boss-table__cell boss-table__cell_role_header">Type</div>
                    <div className="boss-table__cell boss-table__cell_role_header">Master Venue</div>
                    <div className="boss-table__cell boss-table__cell_role_header">Work Venues</div>
                </div>
                { data.map((element,id) => 
                <Row key = {id} data = {element}/>
                )}
            </div>
        )
    }
}
