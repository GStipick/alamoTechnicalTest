import logo from './alamoLogo.svg';
import rewardsCard from './card.svg';
import faqTab from './faqTab.svg';
import waitlistTab from './waitlistTab.svg';


export function getImage(names = '') {
    const images = {
        logo: logo,
        rewardsCard: rewardsCard,
        tabs: {
            faq: faqTab,
            waitlist: waitlistTab,
        },
    };

    let image = images;
    names.split('.').forEach((name) => { image = image[name]; });
    return image;
}
