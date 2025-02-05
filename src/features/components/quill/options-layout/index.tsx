import React, { ReactNode } from 'react'
import MainRowNavigation from '../../templates/navigation/main-nav'
import Layout from '../quill-layout'
import MainFooter from 'features/components/templates/footer'
import { TString } from 'types/generics'
import OptionsTopTab from 'features/components/organisms/options-top-tab'
import WhatAreDigitalOptions from 'features/components/organisms/what-are-digital-options/accumulator'

interface OptionsLayoutProps {
    children?: ReactNode
    heading: TString
    description: TString
    is_coming_soon?: boolean
    has_content_block?: boolean
}

const OptionsLayout = ({
    heading,
    description,
    children,
    is_coming_soon = false,
    has_content_block = false,
}: OptionsLayoutProps) => {
    return (
        <>
            <Layout>
                <MainRowNavigation />
                <OptionsTopTab />
                <WhatAreDigitalOptions
                    heading={heading}
                    description={description}
                    is_coming_soon={is_coming_soon}
                    has_content_block={has_content_block}
                />
                {children}
                <MainFooter />
            </Layout>
        </>
    )
}

export default OptionsLayout
