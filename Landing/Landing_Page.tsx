import Link from 'next/link';
import classnames from './Landing_Page.module.css';

const Landing_Page = () => {
    return <body className={classnames.body_name}>
        <header className={classnames.header}>
            <div className={`${classnames.overlay} ${classnames.has_fade}`}></div>
            <nav className={`${classnames.container} ${classnames.container__pall} ${classnames.flex} ${classnames.flex_jc_sb}  ${classnames.flex_ai_c}`}>
                <Link href="/"><a className={`${classnames.alpa}  ${classnames.header__logo}`}>
                    <img src="https://odax-master.v4.uat.opendax.app/api/storage/v1/object/public/logos/light_logo" alt="GIX" />
                </a>
                </Link>
                <a id="btnHamburger" href="#" className={`${classnames.header__toggle} ${classnames.hide_for_desktop}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <div className={`${classnames.header__links} ${classnames.hide_for_mobile}`}>
                    <Link href='/'><a className={classnames.alpa}>Home</a></Link>
                    <Link href='/'><a className={classnames.alpa}>About</a></Link>
                    <Link href='/'><a className={classnames.alpa}>Trading</a></Link>
                    <Link href='/'><a className={classnames.alpa}>Learn Trading</a></Link>
                </div>
                <Link href='/trading'>
                    <a className={`${classnames.button} ${classnames.header__cta} ${classnames.hide_for_mobile}`}>Start Trading</a>
                </Link>
            </nav>
            <div className={`${classnames.header} ${classnames.has_fade}`}>
                <Link href='/'><a className={classnames.alpa}>Home</a></Link>
                <Link href='/'><a className={classnames.alpa}>About</a></Link>
                <Link href='/'><a className={classnames.alpa}>Trading</a></Link>
                <Link href='/'><a className={classnames.alpa}>Learn Trading</a></Link>
            </div>
        </header>
        <main>
            <section className={classnames.hero}>
                <div className={classnames.container}>
                    <div className={classnames.hero__image}></div>
                    <div className={`${classnames.hero__text} ${classnames.container__pall}`}>
                        <h1 className={classnames.head1}>The Future of Trading Starts With GIX</h1>
                        <p className={classnames.para}>
                            The Great Indian Exchange takes you one step closer to achieving the financial freedom you want. It is a lightning-fast, high-liquidity exchange built using state-channel technology
                        </p>
                        <Link href="/trading"><a className={`${classnames.button} ${classnames.hero__cta}`}>Trading Panel</a></Link>
                    </div>
                </div>
            </section>

            <section className={classnames.feature}>
                <div className={`${classnames.feature__content} ${classnames.container} ${classnames.container__pall}`}>
                    <div className={classnames.feature__intro}>
                        <h2 className={classnames.head2}>Why GIX?</h2>
                        <p className={classnames.para}>
                            Powered by Yellow & OpenDAX, GIX is a completely decentralized crypto exchange with deep order book liquidity and high-frequency trading.
                        </p>
                    </div>

                    <div className={classnames.feature__grid}>
                        <div className={classnames.feature__item}>
                            <div className={classnames.feature__icon}>
                                <img src="/images/icon-online.svg" />
                            </div>
                            <div className={classnames.feature__title}>High Frequency Trading</div>
                            <div className={classnames.feature__description}>
                                Deep liquidity and state channel technology bring GIX on par with real world transactions and enable high-frequency trading.
                            </div>
                        </div>

                        <div className={classnames.feature__item}>
                            <div className={classnames.feature__icon}>
                                <img src="/images/icon-budgeting.svg" />
                            </div>
                            <div className={classnames.feature__title}>Zero Slippage</div>
                            <div className={classnames.feature__description}>
                                Say goodbye to inaccurate order executions, deep liquidity and HFT reduce slippage to zero. You never have to worry about inaccuracies again.
                            </div>
                        </div>



                        <div className={classnames.feature__item}>
                            <div className={classnames.feature__icon}>
                                <img src="/images/icon-api.svg" /></div>
                            <div className={classnames.feature__title}>Low Trading Fee</div>
                            <div className={classnames.feature__description}>
                                We charge the lowest trading fee on any platform, join us and maximize your profits today.
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>

        <footer className={classnames.footer}>
            <div className={classnames.container}>
                <a className={classnames.footer__logo} href="#">
                    <img src="/images/light_logo.svg" />
                </a>

                <div className={classnames.footer__social}>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                            <title>Facebook</title>
                            <path fill="#FFF"
                                d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" />
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
                            <title>YouTube</title>
                            <path fill="#FFF"
                                d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z" />
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18">
                            <title>Twitter</title>
                            <path fill="#FFF"
                                d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z" />
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
                            <title>Instagram</title>
                            <path fill="#FFF"
                                d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z" />
                        </svg>
                    </a>
                </div>

                <div className={`${classnames.footer__links} ${classnames.col1}`}>
                    <a href="#">OpenDAX</a>
                    <a href="#">Yellow Network</a>
                    <a href="#">FAQs</a>
                </div>



                <div className={classnames.footer__cta}>
                    <a href="#" className={classnames.button}>Careers At GIX</a>
                </div>

                <div className={classnames.footer__copyright}>
                    &copy; GIX All Rights Reserved.
                </div>
            </div>
        </footer>
    </body>
}

export default Landing_Page;