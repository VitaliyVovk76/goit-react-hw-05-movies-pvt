import errorImg from "../../images/error.jpg";
import Container from "components/Container";
import s from "./NotFoundView.module.css";

const NotFoundView = () => {
  return (
    <Container>
      <div className={s.card}>
        <img src={errorImg} width="240" alt="sadcat" />
        <h2>Page not found </h2>;
      </div>
    </Container>
  );
};

export default NotFoundView;
