import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import {
    HeaderBar,
    CenteredContent,
    NarrowContentWithImage,
    CalloutTitle,
    CalloutSubtitle,
    CalloutDescription,
    RaisedCard,
    TextInput,
    SelectDropdown,
    FormButton,
    QAGroup,
} from '../../components';
import { getImage } from '../../assets/images';
import {
    faqQA,
    calloutText,
    alamoLocations,
    deviceTypes,
} from './MainPageText';
import styles from './Main.css';


const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const isValidEmailAddress = emailString => emailRegex.test(emailString);

class MainPageComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            firstNameText: '',
            lastNameText: '',
            emailAddress: '',
            deviceType: '',
            alamoLocation: '',
            showingModalBool: false,
            showingModalClass: '',
            formButtonDisabledBool: true,
        };
        this.toggleModalHandler = this.toggleModalHandler.bind(this);
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
        this.updateEmailAddress = this.updateEmailAddress.bind(this);
        this.updateDeviceType = this.updateDeviceType.bind(this);
        this.updateAlamoLocation = this.updateAlamoLocation.bind(this);
    }

    updateStateFromFormField = stateFieldString => (event) => {
        this.setState({ [stateFieldString]: event.target.value });
    }

    updateFirstName = this.updateStateFromFormField('firstNameText');

    updateLastName = this.updateStateFromFormField('lastNameText');

    updateEmailAddress = this.updateStateFromFormField('emailAddress');

    updateDeviceType = this.updateStateFromFormField('deviceType');

    updateAlamoLocation = this.updateStateFromFormField('alamoLocation');

    toggleModalHandler = () => {
        this.setState((previousState) => {
            const newShowingModalClass = !previousState.showingModalBool
                ? 'is-active'
                : '';

            return {
                showingModalBool: !previousState.showingModalBool,
                showingModalClass: newShowingModalClass,
            };
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const isFormValid = (!!this.state.firstNameText
        && !!this.state.lastNameText
        && isValidEmailAddress(this.state.emailAddress)
        && !!this.state.deviceType
        && !!this.state.alamoLocation);

        // Update state only if the form validation has changed
        if (isFormValid !== !prevState.formButtonDisabledBool) {
            this.setState({
                formButtonDisabledBool: !isFormValid,
            });
        }
    }

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
                <CenteredContent
                    id="waitlist"
                    backgroundClass={styles['waitlist-section-background']}
                >
                    <NarrowContentWithImage
                        sectionImage='tabs.waitlist'
                        sectionImageAltText='waitlist-section-icon'
                    >
                        <RaisedCard>
                            <TextInput
                                labelText='First Name'
                                onChange={this.updateFirstName}
                            />
                            <TextInput
                                labelText='Last Name'
                                onChange={this.updateLastName}
                            />
                            <TextInput
                                labelText='Victory Email Address'
                                onChange={this.updateEmailAddress}
                            />
                            <SelectDropdown
                                labelText='Your Local Alamo'
                                selectOptions={alamoLocations}
                                selectValue={this.state.alamoLocation}
                                onChange={this.updateAlamoLocation}
                            />
                            <SelectDropdown
                                labelText='Mobile Phone Type'
                                selectOptions={deviceTypes}
                                selectValue={this.state.deviceType}
                                onChange={this.updateDeviceType}
                            />
                            <div className={styles['form-button-container']}>
                                <FormButton
                                    onClick={this.toggleModalHandler}
                                    isDisabled={this.state.formButtonDisabledBool}
                                >
                                    join waitlist
                                </FormButton>
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
                        <QAGroup qaObject={faqQA[0]} />
                        <QAGroup qaObject={faqQA[1]} />
                        <QAGroup qaObject={faqQA[2]} />
                    </ NarrowContentWithImage>
                </CenteredContent>
                <div className={`modal ${this.state.showingModalClass}`}>
                    <div className="modal-background" onClick={this.toggleModalHandler} />
                    <div className="modal-content">
                        <RaisedCard>
                            <div className={`${styles['hero-content-image-container']} ${styles['no-margin']}`}>
                                <img
                                    src={getImage('rewardsCard')}
                                    className={styles['rewards-card']}
                                    alt="Rewards Card"
                                />
                            </div>
                            <div className={`${styles['hero-content-text-container']}`}>
                                <h1>Thank you for joining the waitlist!</h1>
                                <h1>This demo has been brought to you by:</h1>
                                <h1>George Stipick</h1>
                            </div>
                        </RaisedCard>
                    </div>
                    <button
                        className="modal-close is-large"
                        onClick={this.toggleModalHandler}
                        aria-label="close"
                    />
                </div>
            </React.Fragment>
        );
    }
}

const Main = hot(module)(MainPageComponent);

export { Main };
