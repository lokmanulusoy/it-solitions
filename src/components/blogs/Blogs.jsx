import styled from "styled-components";
import {
  Button,
  Card,
  CardContent,
  CardImage,
  CardTitle,
  Description,
} from "../styles/styled.Card";
import cardImage1 from "../../images/card1.jpg";
import cardImage2 from "../../images/card2.jpg";
import cardImage3 from "../../images/card3.png";
import TextBanner from "../textbanner/TextBanner";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Blogs = () => {
  return (
    <>
      <TextBanner title={"Bloglarımız"} subtitle={"Son Haberler"} />
      <Container>
        <Card>
          <CardContent padding={"0.5%"}>
            <CardImage src={cardImage1} />
            <CardTitle>Başlık</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eveniet eaque repudiandae facere suscipit, dicta ullam
              pariatur deleniti voluptatum ipsa ut nobis quisquam sequi, cumque,
              explicabo animi veniam nihil sit.
            </Description>
            <Button>Daha Fazla...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"0.5%"}>
            <CardImage src={cardImage2} />
            <CardTitle>Başlık</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eveniet eaque repudiandae facere suscipit, dicta ullam
              pariatur deleniti voluptatum ipsa ut nobis quisquam sequi, cumque,
              explicabo animi veniam nihil sit.
            </Description>
            <Button>Daha Fazla...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"0.5%"}>
            <CardImage src={cardImage3} />
            <CardTitle>Başlık</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eveniet eaque repudiandae facere suscipit, dicta ullam
              pariatur deleniti voluptatum ipsa ut nobis quisquam sequi, cumque,
              explicabo animi veniam nihil sit.
            </Description>
            <Button>Daha Fazla...</Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Blogs;
