import React from 'react';
import {Link} from 'react-scroll';
import Sticky from 'react-stickynode';
import {Container, Row, Col} from 'reactstrap';
import Select from 'react-select';
import Flash from 'react-reveal/Flash';
import Bounce from 'react-reveal/Bounce';
import {LayoutMain} from 'shared/components';
const styles = require('./index.module.scss');

const FeatureTemplate = ({children}: any) => {
    return <LayoutMain nav>{children}</LayoutMain>;
};

const FeatureSectionContent = ({children}: any) => {
    return (
        <Container fluid className="pt-5 pb-5">
            {children}
        </Container>
    );
};

interface StickyBarSectionProps {
    text: string;
    tab: number;
    options: any;
    onChange: (x: any) => void;
}

const StickyBarSections = ({text, onChange, options, tab}: StickyBarSectionProps) => {
    const [isSticky, setIsSticky] = React.useState(false);
    function handleStateChange(status: any) {
        if (status.status === Sticky.STATUS_FIXED) {
            setIsSticky(true);
        }
        if (status.status === Sticky.STATUS_ORIGINAL) {
            setIsSticky(false);
        }
    }
    return (
        <div className={styles.bottom_container_wrapper} id="section1">
            <Sticky onStateChange={handleStateChange} innerZ={1000} enabled={true} top={0} bottomBoundary={'#section1'}>
                <Row className={`${isSticky ? styles.active_sticky : ''} ${styles.select_topic_wrapper}`}>
                    <Col sm="12" md="2" className="d-flex justify-content-center">
                        <h2 className={`${styles.category_title} mt-1`}>{text}</h2>
                    </Col>
                    <Col sm="10" md="10" style={{paddingRight: 100}}>
                        <Select
                            onChange={onChange}
                            value={options.find((option: any) => option.value === tab)}
                            isOptionDisabled={(option) => option.disabled === 'yes'}
                            placeholder="Select a Topic..."
                            options={options}
                        />
                    </Col>
                </Row>
            </Sticky>
        </div>
    );
};

interface HeroSectionProps {
    title: string;
    quote: string;
    author: string;
}

const HeroSection = ({quote, author, title}: HeroSectionProps) => {
    return (
        <section className={styles.top_container_wrapper}>
            <div className={styles.title_wrapper}>
                <Bounce>
                    <h1 className={`text-light ${styles.title}`}>{title}</h1>
                    <p className={styles.title_caption}>{quote}</p>
                    <p className="text-center text-light">~{author}</p>
                </Bounce>
                <Link activeClass="active" to="section1" spy={true} smooth={true} offset={0} duration={800}>
                    <div className={styles.scroll_downs}>
                        <div className={styles.mousey}>
                            <div className={styles.scroller} />
                        </div>
                    </div>
                </Link>
                <Flash duration={3500} forever>
                    <p className={styles.explore_text}>EXPLORE</p>
                </Flash>
            </div>
        </section>
    );
};

FeatureTemplate.Hero = HeroSection;
FeatureTemplate.StickyBarSections = StickyBarSections;
FeatureTemplate.Content = FeatureSectionContent;

export default FeatureTemplate;
