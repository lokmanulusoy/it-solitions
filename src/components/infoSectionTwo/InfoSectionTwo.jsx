import styled from "styled-components";
import sectionImage1 from "../../images/laptopDark.jpg";

export const Container = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: ${({ Height }) => Height};
  background-image: url(${({ sectionImage }) => sectionImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* Telefon */
  @media only screen and (max-width: 600px) {
    background-size: 100% 100%;
    height: 40%;
  }
  /* Tablet */
  @media only screen and (min-width: 600px) {
    background-size: 100% 100%;
    height: 40%;
  }
  /* Pc */
  @media only screen and (min-width: 992px) {
    background-size: cover;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  padding: 2%;
`;

const Description = styled.p`
  color: white;
  width: 40%;
  font-weight: lighter;
  font-size: 25px;
  /* Telefon */
  @media only screen and (max-width: 600px) {
    width: 90%;
    font-size: 20px;
    text-align: center;
  }
  /* Tablet */
  @media only screen and (min-width: 600px) {
    width: 80%;
    text-align: center;
  }
  /* Pc */
  @media only screen and (min-width: 992px) {
    width: 40%;
  }
`;

const InfoSectionTwo = () => {
  return (
    <Container sectionImage={sectionImage1}>
      <TextWrapper>
        <Title> Her Yerde Çalışma Alanı!</Title>
        <Description>
          Sorunsuz sistem ile herhangi bir çalışanın her yerde, her zaman
          çalışmasını sağlayın.
        </Description>
        <Description>
          Her katmanda gerçek güvenlik için altyapınızı herhangi bir uygulamada,
          herhangi bir bulutta ve herhangi bir cihazda kullanın.
        </Description>
      </TextWrapper>
    </Container>
  );
};

export default InfoSectionTwo;
