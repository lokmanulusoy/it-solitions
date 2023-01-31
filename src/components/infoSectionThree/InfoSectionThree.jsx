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
import sectionThreeImage from "../../images/section3.png";

const InfoSectionThree = () => {
  return (
    <Container>
      <Wrapper direction={"row-reverse"}>
        <Right>
          <Image src={sectionThreeImage} />
        </Right>
        <Left>
          <Title>Neden Bize Güvenilir?</Title>
          <Header>
            Yazılım Varlık Yönetimi (SAM) / Yazılım Yaşam Döngüsü Yönetimi
          </Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Description>
          <List>
            <ListItem> Garanti</ListItem>
            <ListItem> Sürdürülebilirlik</ListItem>
            <ListItem> Lisans Yönetimi</ListItem>
            <ListItem> Setrifikalı Veri Silme</ListItem>
            <ListItem> Mağaza Sistemlerine Bağlantı</ListItem>
            <ListItem> Birim Gruplaması</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionThree;
