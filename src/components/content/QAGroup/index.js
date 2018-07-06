import React from 'react';
import { FAQTitle, FAQDescription } from '../..';
import styles from './index.css';


export const QAGroup = (props) => {
    if (!props.qaObject) {
        return null;
    }

    const faqAnswerParagraphs = props.qaObject.answer.map(((answer, index) => (
        <FAQDescription key={`${index}__${answer}`}>{answer}</FAQDescription>
    )));

    return (
        <div className={styles['faq-qa-group']}>
            <FAQTitle>
                {props.qaObject.question}
            </FAQTitle>
            {faqAnswerParagraphs}
        </div>
    );
};
