import { faGithub } from "@fortawesome/fontawesome-free-brands";
import { faComments, faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
  const emailCopy = () => {
    navigator.clipboard.writeText("sangminyn@gmail.com").then(() => {
      alert("메일 주소가 복사됐습니다.");
    });
  };

  return (
    <ContactContainer>
      <SocialWrapper>
        <FontAwesomeIcon onClick={emailCopy} icon={faEnvelope} size="3x" />
        <FontAwesomeIcon
          onClick={() => window.open("https://github.com/sangmin-yoon")}
          icon={faGithub}
          size="3x"
        />
        <FontAwesomeIcon
          onClick={() => window.open("https://open.kakao.com/o/soGVJ72d")}
          icon={faComments}
          size="3x"
        />
      </SocialWrapper>
      <Footer>© 2022. Sangmin. All rights reserved.</Footer>
    </ContactContainer>
  );
}

export default Contact;
