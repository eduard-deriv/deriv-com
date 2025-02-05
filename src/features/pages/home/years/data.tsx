import React from 'react'
import { CardContent } from '@deriv-com/components'
import { Localize } from 'components/localization'

export const cards: CardContent[] = [
    {
        id: 1,
        header: <Localize translate_text="_t_Dependable_t_" />,
        description: (
            <Localize translate_text="_t_Our 99.97% uptime ensures your uninterrupted access to the markets._t_" />
        ),
        size: 'md',
        color: 'gray',
        align: 'center',
        icon: (
            <img
                src="/new-homepage/LightDependableIcon.svg"
                width={120}
                height={145}
                alt="Dependable platform"
                loading="lazy"
            />
        ),
        className: 'h-full',
    },
    {
        id: 2,
        header: <Localize translate_text="_t_Safe and secure_t_" />,
        description: <Localize translate_text="_t_We keep your personal data and funds safe._t_" />,
        size: 'md',
        color: 'gray',
        align: 'center',
        icon: (
            <img
                src="/new-homepage/LightSafeAndSecureIcon.svg"
                width={120}
                height={145}
                alt="Safe and secure platform"
                loading="lazy"
            />
        ),
        className: 'h-full',
    },
    {
        id: 3,
        header: <Localize translate_text="_t_Regulated_t_" />,
        description: (
            <Localize translate_text="_t_We’re regulated and licensed by global financial authorities._t_" />
        ),
        size: 'md',
        color: 'gray',
        align: 'center',
        icon: (
            <img
                src="/new-homepage/LightRegulatedIcon.svg"
                width={120}
                height={145}
                alt="Regulated and licenced broker"
                loading="lazy"
            />
        ),
        className: 'h-full',
    },
    {
        id: 4,
        header: <Localize translate_text="_t_24/7 support_t_" />,
        description: (
            <Localize translate_text="_t_Our professional multilingual team is here for you anytime._t_" />
        ),
        size: 'md',
        color: 'gray',
        align: 'center',
        icon: (
            <img
                src="/new-homepage/LightTwentyFourSevenSupportIcon.svg"
                width={120}
                height={145}
                alt="24-hour chat support"
                loading="lazy"
            />
        ),
        className: 'h-full',
    },
]
