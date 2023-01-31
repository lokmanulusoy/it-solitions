import styled from "styled-components";
import {
  Card,
  CardContent,
  CardTitle,
  Description,
  Button,
} from "../styles/styled.Card";
import TextBanner from "../textbanner/TextBanner";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.bgDefault};
`;

const InfoBoxes = () => {
  return (
    <div>
      <TextBanner title={"Ne Sağlıyoruz?"} subtitle={"Hizmetlerimiz"} />
      <Container>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Eğitim Kursları</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              iusto odio eius rem distinctio. Doloremque, quia voluptate. Eius
              quos ullam eum, commodi enim vitae aspernatur vero dignissimos
              necessitatibus ad accusamus?
            </Description>
            <Button href="#">Daha fazla oku</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Servis masası</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              iusto odio eius rem distinctio. Doloremque, quia voluptate. Eius
              quos ullam eum, commodi enim vitae aspernatur vero dignissimos
              necessitatibus ad accusamus?
            </Description>
            <Button href="#">Daha fazla oku</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Veri kurtarma</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              iusto odio eius rem distinctio. Doloremque, quia voluptate. Eius
              quos ullam eum, commodi enim vitae aspernatur vero dignissimos
              necessitatibus ad accusamus?
            </Description>
            <Button href="#">Daha fazla oku</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Proaktif Hizmetler</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              iusto odio eius rem distinctio. Doloremque, quia voluptate. Eius
              quos ullam eum, commodi enim vitae aspernatur vero dignissimos
              necessitatibus ad accusamus?
            </Description>
            <Button href="#">Daha fazla oku</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Kullanıcı Desteği</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              iusto odio eius rem distinctio. Doloremque, quia voluptate. Eius
              quos ullam eum, commodi enim vitae aspernatur vero dignissimos
              necessitatibus ad accusamus?
            </Description>
            <Button href="#">Daha fazla oku</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>7/24 Destek</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              iusto odio eius rem distinctio. Doloremque, quia voluptate. Eius
              quos ullam eum, commodi enim vitae aspernatur vero dignissimos
              necessitatibus ad accusamus?
            </Description>
            <Button href="#">Daha fazla oku</Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default InfoBoxes;
