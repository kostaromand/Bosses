import React from 'react'
import BossAlias from './BossAlias'

const QuickAccessGroup = ({ title, styles, group }) => {
    return (
        <div className="boss-quick-access__group">
            <div className="boss-quick-access__group-header">
                <h4 className="boss-quick-access__group-title">{title}</h4>
            </div>
            <div className="boss-quick-access__aliases">
                {
                    group.map((alias, id) => (
                        <BossAlias key={id}
                            {...styles}
                            {...alias}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default QuickAccessGroup