import { appTitle } from '@openware/opendax-web-sdk'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC, useCallback, useEffect } from 'react'
import { useIntl } from 'react-intl'
import Landing_Page from 'components/Landing/Landing_Page';
const TopSection: FC<{}> = (): JSX.Element => {
    return <>
        <header>


        </header>
    </>
}



const Home: FC<{}> = (): JSX.Element => {
    const intl = useIntl()
    const router = useRouter()

    const translate = useCallback(
        (id: string) => intl.formatMessage({ id }),
        [],
    )
    /**
    useEffect(() => {
        router.push('/trading')
    }, [])
     */

    return (
        <>
            <Head>
                <title>{appTitle(translate('page.tab.header.home'))}</title>
            </Head>
            <body>

                <Landing_Page></Landing_Page>

            </body>
        </>
    )
}

export default Home
