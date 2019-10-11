import React, { Component } from 'react'
import { DateRangePicker } from 'react-dates'

export default class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedInput: null,
            startDate: null,
            endDate: null
        }
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.setState({ startDate, endDate })
        if (startDate && endDate) {
            const value = startDate.toString() + " " + endDate.toString();
            this.props.input.onChange(value);
        }
    }

    onFocusChange = focusedInput => this.setState({ focusedInput })

    render() {
        const { startDate, endDate, focusedInput } = this.state;
        return (
            <div
                className="date-range-picker date-range-picker_type_interval-fluid date-range-picker_type_icon date-range-picker_no-label"
            >
                <DateRangePicker
                    startDate={startDate}
                    startDateId="startId"
                    endDate={endDate}
                    endDateId="endId"
                    onDatesChange={this.onDatesChange}
                    focusedInput={focusedInput}
                    onFocusChange={this.onFocusChange}
                />
            </div>
        )
    }
}
