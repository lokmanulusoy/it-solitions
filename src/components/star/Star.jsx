import styled from "styled-components";
import starImage from "../../images/hero.png";
const Container = styled.div`
  display: flex;
  height: 90%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  padding-top: 10%;
  @media only screen and (max-width: 600px) {
    height: 60%;
  }
  @media only screen and (min-width: 600px) {
    height: 50%;
  }
  @media only screen and (min-width: 992px) {
    height: 80%;
  }
`;

const Left = styled.div`
  width: 60%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Telefon */
  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  /* Tablet */
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  /* Pc */
  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`;

const Title = styled.div`
  width: 60%;
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  /* Telefon */
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 30px;
  }
  /* Tablet */
  @media only screen and (min-width: 600px) {
    width: 85%;
    font-size: 30px;
  }
  /* Pc */
  @media only screen and (min-width: 992px) {
    width: 85%;
  }
`;

const Description = styled.p`
  width: 70%;
  font-size: 20px;
  margin-bottom: 2%;
  color: ${(props) => props.theme.colors.textDark};
  /* Telefon */
  @media only screen and (max-width: 600px) {
    width: 80%;
    text-align: center;
  }
  /* Tablet */
  @media only screen and (min-width: 600px) {
    width: 70%;
  }
  /* Pc */
  @media only screen and (min-width: 992px) {
    width: 70%;
  }
`;

const Right = styled.div`
  width: 40%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  align-items: center;
  /* Telefon */
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 500px;
  background-color: ${(props) => props.theme.colors.bgDefault};
  /* Tablet */
  @media only screen and (min-width: 600px) {
    width: 400px;
  }
  /* Pc */
  @media only screen and (min-width: 992px) {
    width: 500px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
`;
const Button = styled.button`
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.text};
  margin-left: 5px;
  padding: 15px 30px;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.bgLight} 50%,
    ${(props) => props.theme.colors.bgSecondary} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.bgPrimary};
    border: 2px solid ${(props) => props.theme.colors.primary};
    background-position: left bottom;
    cursor: pointer;
  }
  /* Telefon */
  @media only screen and (max-width: 600px) {
    padding: 10px 25px;
  }
  /* Tablet */
  @media only screen and (min-width: 600px) {
    padding: 10px 30px;
  }
  /* Pc */
  @media only screen and (min-width: 992px) {
    padding: 15px 30px;
  }
`;

const Star = () => {
  return (
    <Container>
      <Left>
        <Title>BT Yönetimi - Herkes için BT Desteği ve BT Hizmetleri!</Title>
        <Description>
          En iyi yaptığımız şeyde size yardım etmemize izin vererek ekibinizi en
          iyi yaptıkları şeylere odaklayın. Teknolojiyi biliyoruz ve
          ortaklarımızın işlerine odaklanmalarını kolaylaştıran BT desteğini
          nasıl sunacağımızı ve planlayacağımızı anlıyoruz. İşinizi nasıl
          yürüteceğinizi ve hizmetlerinizi nasıl satacağınızı biliyorsunuz, o
          halde önünüzdeki tüm engelleri kaldıralım. Yol boyunca, kârlılığınızı
          ve şirketinizdeki genel deneyiminizi geliştirmenize yardımcı olacağız.
        </Description>
        <ButtonsContainer>
          <Button>Hakkımızda</Button>
          <Button>Bize Ulaşın</Button>
        </ButtonsContainer>
      </Left>{" "}
      <Right>
        <Image src={starImage} />
      </Right>
    </Container>
  );
};

export default Star;
