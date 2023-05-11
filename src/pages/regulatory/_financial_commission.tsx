import React from 'react'
import styled from 'styled-components'
import { Text, LinkText } from 'components/elements'
import { deriv_app_url } from 'common/constants'
import { useLivechat } from 'components/hooks/use-livechat'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

const TextLink = styled(LinkText).attrs({ as: 'span' })``

const FinancialCommission = () => {
    const { is_eu, is_row } = useRegion()
    const [is_livechat_interactive, LC_API] = useLivechat()

    return (
        <>
            {is_livechat_interactive && (
                <div>
                    {is_eu && (
                        <Text mt="2rem" max_width="58.8rem">
                            <Localize
                                translate_text="_t_For fair resolution of any complaints, please <0>chat</0> with us. To learn more, see our <1>complaint policy</1>._t_"
                                components={[
                                    <TextLink
                                        key={0}
                                        color="red"
                                        className="gtm-deriv-livechat"
                                        onClick={() => {
                                            LC_API.open_chat_window()
                                        }}
                                    />,
                                    <LinkText
                                        key={0}
                                        color="red"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={`${deriv_app_url}/complaints-policy`}
                                    />,
                                ]}
                            />
                        </Text>
                    )}
                    {is_row && (
                        <Text mt="2rem" max_width="58.8rem">
                            <Localize
                                translate_text="_t_For fair resolution of any complaints, please <0>chat</0> with us._t_"
                                components={[
                                    <TextLink
                                        key={0}
                                        color="red"
                                        onClick={() => {
                                            LC_API.open_chat_window()
                                        }}
                                    />,
                                ]}
                            />
                        </Text>
                    )}
                </div>
            )}
        </>
    )
}

export default FinancialCommission
