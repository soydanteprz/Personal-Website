import { Container, Row, Col } from "react-bootstrap";
import {
    faGithub,
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a
                                href="https://www.facebook.com/soydanteprz/"
                                alt="Facebook Logo"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    color="#FFFFFF"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/soydanteprz/"
                                alt="Instagram Logo"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    color="#FFFFFF"
                                />
                            </a>
                            <a
                                href="https://github.com/soydanteprz"
                                alt="GitHub Logo"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#FFFFFF"
                                />
                            </a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
