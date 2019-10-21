import React  from 'react'
import NavTab from './NavTab';

const navTabs = [
    {form: "employment", text: "Employment Details" },
    {form: "personal", text: "Personal Details" },
    {form: "contact", text: "Contact Details" }
]

const Navigation = ({ form }) => {
    return (
        <aside className="boss-content-switcher__side">
            <nav className="boss-content-switcher__nav">
                {
                    navTabs.map(tab => (
                        <NavTab
                            key={tab.form}
                            tab={tab}
                            isActive={form === tab.form}
                        />
                    ))
                }
            </nav>
        </aside>
    )
}

export default Navigation;