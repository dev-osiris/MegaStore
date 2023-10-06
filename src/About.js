import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();


  return (
    <Wrapper>
      <div className="container">
        <div className="hero-section-data">
          <h1>The MegaStore group</h1>
          <p>
            At The Megastore Group, we're more than just an ecommerce platform - 
            we're a community of innovators, driven by a passion for excellence.
            Founded with the vision to revolutionize the online shopping experience,
            The Megastore Group comprises a dynamic team of professionals committed
            to delivering the best to our customers.
          </p>

          <hr />

          <h1>Ethics and Compliance</h1>
          <p>
            We take pride in conducting our business with the highest ethical standards.
            At Megastore, integrity, transparency, and social responsibility are at the core
            of our operations. We adhere to strict compliance measures, ensuring that your 
            trust in us is well-placed.
          </p>

          <hr />

          <h1>MegaStore culture</h1>
          <p>
            Our culture is defined by collaboration, diversity, and a relentless pursuit of customer
            satisfaction. We foster an inclusive environment that values creativity and innovation.
            The Megastore team is dedicated to making your shopping experience exceptional in every way.
          </p>

          <hr />

          <h1>Techonology at MegaStore</h1>
          <p>
            In a rapidly evolving digital landscape, we leverage cutting-edge technology to enhance your 
            shopping journey. From personalized recommendations to seamless checkout processes, we're 
            committed to staying at the forefront of technological advancements. At Megastore, we believe 
            in harnessing the power of tech to make your online shopping experience efficient and enjoyable.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

  .hero-section-data {
    p {
      margin: 2rem 0;
      background-color: ${({ theme }) => theme.colors.bg};
      padding: 4rem 4rem;
      border-radius: 1rem;
    }

    h1 {
      font-weight: bold;
      margin-top: 7rem;
      color: ${({ theme }) => theme.colors.btn};
    }

    .intro-data {
      margin-bottom: 0;
    }
  }`

export default About;
