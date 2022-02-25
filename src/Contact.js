import { faGithub, faGoogle } from "@fortawesome/fontawesome-free-brands";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SocialWrapper = styled.div`
  max-width: ${(props) => props.theme.size.defaultMaxWidth};
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  svg {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.3s;
    &:hover {
      opacity: 1;
    }
  }
`;

const Footer = styled.span`
  margin: 100px 0px 30px 0px;
  opacity: 0.2;
  text-align: center;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Contact() {
  return (
    <ContactContainer>
      <SocialWrapper>
        <FontAwesomeIcon icon={faGoogle} size="4x" />
        <FontAwesomeIcon icon={faGithub} size="4x" />
        <FontAwesomeIcon icon={faComments} size="4x" />
      </SocialWrapper>
      <Footer>© 2022. Sangmin. All rights reserved.</Footer>
    </ContactContainer>
  );
}

export default Contact;
