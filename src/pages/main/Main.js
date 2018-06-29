import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import {
    HeaderBar,
    CenteredContent,
    FAQDescription,
    FAQTitle,
} from '../../components';
import { faqQA } from './faqQA';
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
                </CenteredContent>
            </React.Fragment>
        );
    }
}

const Main = hot(module)(MainPageComponent);

export { Main };
