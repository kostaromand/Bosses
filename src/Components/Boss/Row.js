import React, { Component } from 'react'
import Column from './Column'
import ColumnImage from './ColumnImage';
import Link from './Link';

export default class Row extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { image, name, accessories, modified, status, type, masterVenue, workVenues } = this.props.data;
        return (
            <div className="boss-table__row">
                <ColumnImage imagePath={image} />
                <Column>
                    <Link>{name}</Link>
                </Column>
                <Column>
                    {accessories}
                </Column>
                <Column>
                    {modified}
                </Column>
                <Column>
                    <button
                        className={
                            (status === "Enabled" ? "boss-button_role_enabled" : "boss-button_role_disabled")
                            + " boss-button boss-button_type_small boss-button_type_no-behavior"
                        }>
                        {status}
                    </button>
                </Column>
                <Column>
                    <Link>{type}</Link>
                </Column>
                <Column>
                    <Link>{masterVenue}</Link>
                </Column>
                <Column>
                    <Link>{workVenues}</Link>
                </Column>
            </div>
        )
    }
}
