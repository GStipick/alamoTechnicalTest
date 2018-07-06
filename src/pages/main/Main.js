import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import {
    HeaderBar,
    CenteredContent,
    NarrowContentWithImage,
    FAQDescription,
    FAQTitle,
    CalloutTitle,
    CalloutSubtitle,
    CalloutDescription,
    RaisedCard,
    TextInput,
    SelectDropdown,
} from '../../components';
import { getImage } from '../../assets/images';
import {
    faqQA,
    calloutText,
    alamoLocations,
    deviceTypes,
} from './MainPageText';
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
                    <section className="columns is-desktop is-centered">
                        <div className={`column is-narrow ${styles['hero-content-image-container']}`}>
                            <img
                                src={getImage('rewardsCard')}
                                className={styles['rewards-card']}
                                alt="Rewards Card"
                            />
                        </div>
                        <div className={`column is-narrow ${styles['hero-content-text-container']}`}>
                            <CalloutDescription>
                                {calloutText.description[0]}
                            </CalloutDescription>
                            <br />
                            <CalloutDescription>
                                {calloutText.description[1]}
                            </CalloutDescription>
                        </div>
                    </section>
                </CenteredContent>
                <CenteredContent id="waitlist">
                    <NarrowContentWithImage
                        sectionImage='tabs.waitlist'
                        sectionImageAltText='waitlist-section-icon'
                    >
                        <RaisedCard styleClasses={styles['narrow-content']}>
                            <TextInput
                                labelText='First Name'
                            />
                            <TextInput
                                labelText='Last Name'
                            />
                            <TextInput
                                labelText='Victory Email Address'
                            />
                            <SelectDropdown
                                labelText='Your Local Alamo'
                                selectOptions={alamoLocations}
                            />
                            <SelectDropdown
                                labelText='Mobile Phone Type'
                                selectOptions={deviceTypes}
                            />
                            <div className={styles['form-button-container']}>
                                <button className={styles['form-button']}>join waitlist</button>
                            </div>
                        </RaisedCard>
                    </ NarrowContentWithImage>
                </CenteredContent>
                <CenteredContent
                    id="faq"
                    backgroundClass={styles['faq-section-background']}
                >
                    <NarrowContentWithImage
                        sectionImage='tabs.faq'
                        sectionImageAltText='faq-section-icon'
                    >
                        <div className={styles['faq-qa-group']}>
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
                        </div>

                        <div className={styles['faq-qa-group']}>
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
                        </div>

                        <div className={styles['faq-qa-group']}>
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
                    </ NarrowContentWithImage>
                </CenteredContent>
            </React.Fragment>
        );
    }
}

const Main = hot(module)(MainPageComponent);

export { Main };
