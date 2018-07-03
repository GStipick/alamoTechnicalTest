import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import {
    HeaderBar,
    CenteredContent,
    FAQDescription,
    FAQTitle,
    CalloutTitle,
    CalloutSubtitle,
    CalloutDescription,
} from '../../components';
import { getImage } from '../../assets/images';
import { faqQA, calloutText } from './MainPageText';
import styles from './Main.css';


class MainPageComponent extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <CenteredContent
                    id="top"
                    backgroundClass={styles['header-section-background']}
                >
                    <HeaderBar />
                    <CalloutSubtitle>
                        welcome to the
                    </CalloutSubtitle>
                    <CalloutTitle>
                        Cupcake ipsum dolor
                    </CalloutTitle>
                    <section class="columns">
                        <div class="column">
                            <img
                                src={getImage('rewardsCard')}
                                class={styles['rewards-card']}
                                alt="Rewards Card"
                            />
                        </div>
                        <div class="column">
                            <CalloutDescription>
                                {calloutText.description[0]}
                            </CalloutDescription>
                            <CalloutDescription>
                                {calloutText.description[1]}
                            </CalloutDescription>
                        </div>
                    </section>
                </CenteredContent>
                <CenteredContent
                    id="waitlist"
                >
                    <HeaderBar />
                </CenteredContent>
                <CenteredContent
                    id="faq"
                    backgroundClass={styles['faq-section-background']}
                >
                    <section class="columns is-centered">
                        <div className="column is-narrow">
                            <img
                                src={getImage('tabs.faq')}
                                class={styles['section-image']}
                                alt="faq-section"
                            />
                        </div>
                        <div className="column">
                            <FAQTitle>
                                {faqQA[0].question}
                            </FAQTitle>
                            <FAQDescription>
                                {faqQA[0].answer[0]}
                            </FAQDescription>
                            <FAQDescription>
                                {faqQA[0].answer[1]}
                            </FAQDescription>
                            <FAQDescription>
                                {faqQA[0].answer[2]}
                            </FAQDescription>

                            <FAQTitle>
                                {faqQA[1].question}
                            </FAQTitle>
                            <FAQDescription>
                                {faqQA[1].answer[0]}
                            </FAQDescription>
                            <FAQDescription>
                                {faqQA[1].answer[1]}
                            </FAQDescription>
                            <FAQDescription>
                                {faqQA[1].answer[2]}
                            </FAQDescription>

                            <FAQTitle>
                                {faqQA[2].question}
                            </FAQTitle>
                            <FAQDescription>
                                {faqQA[2].answer[0]}
                            </FAQDescription>
                            <FAQDescription>
                                {faqQA[2].answer[1]}
                            </FAQDescription>
                            <FAQDescription>
                                {faqQA[2].answer[2]}
                            </FAQDescription>
                        </div>
                    </section>
                </CenteredContent>
            </React.Fragment>
        );
    }
}

const Main = hot(module)(MainPageComponent);

export { Main };
