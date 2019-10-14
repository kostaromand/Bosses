import IsleButton from "./IsleButton";
import React from 'react';

const TextComponent = ({ content }) => {
    return <>{content} </>
}

const ImageComponent = ({ content }) => {
    const { alt, src } = content;
    return (
        <img src={src} alt={alt} />
    )
}

const ButtonComponent = ({ content }) => {
    const { role, text } = content;
    return (
        <IsleButton role={role} text={text} />
    )
}

const TextWithTooltipComponent = ({ content }) => {
    const { text, tooltipText } = content;
    return (
        <>
            {text}
            <span className="boss-tooltip boss-tooltip_position_bottom">
                <span className="boss-tooltip__icon"></span>
                <span className="boss-tooltip__content">
                    <span className="boss-tooltip__text">{tooltipText}</span>
                </span>
            </span>
        </>
    )
}

const AppComponent = ({ content }) => {
    return (
        <a href="#" className="boss-details__value-action">{content}</a>
    )
}

const componentDictionary = {
    "text": TextComponent,
    "app": AppComponent,
    "textWithTooltip": TextWithTooltipComponent,
    "image": ImageComponent,
    "button": ButtonComponent
}

const getItemValueComponent = (value) => {
    if (typeof value === "undefined") {
        return () => (
            <IsleButton text="View History" role="boss-button_role_view-history" />
        )
    }
    if (value.length === 1) {
        const Component = componentDictionary[value[0].type];
        return () => (
            <p className="boss-details__value">
                <Component content={value[0].content} />
            </p>
        )
    }
    else {
        return () => (
            <p className="boss-details__value">
                {
                    value.map((elem, id) => {
                        const Component = componentDictionary[elem.type];
                        return (
                            <span key={id} className="boss-details__value-line">
                                <Component content={elem.content} />
                            </span>
                        )
                    })
                }
            </p>
        )
    }
}

export default getItemValueComponent;