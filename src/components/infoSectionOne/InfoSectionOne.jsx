import sectionOneImage from "../../images/section1.png";
import {
  Container,
  Description,
  Header,
  Image,
  Left,
  List,
  ListItem,
  Right,
  Title,
  Wrapper,
} from "../styles/styled.Section";

const InfoSectionOne = () => {
  return (
    <Container>
      <Wrapper direction={"row"}>
        <Right>
          <Image src={sectionOneImage} />
        </Right>
        <Left>
          <Title>Neden Bizi Seçmelisiniz?</Title>
          <Header>BT yaşam döngüsü yönetimi tek bir yerde</Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam, nostrud
          </Description>
          <List>
            <ListItem> Şeffaf Tavsiye</ListItem>
            <ListItem> Birim Gruplama</ListItem>
            <ListItem> Uluslararası Teslimatlar</ListItem>
            <ListItem> Küresel BT Tedariği</ListItem>
            <ListItem> Yazılım Güncellemeleri</ListItem>
            <ListItem> Ülke çapında Hizmet Ağı</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionOne;
