import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div>
       <div
        style={{
          padding: "1.45rem",
          margin: "5rem 0rem 0rem 0rem",
          backgroundColor: "#8d948e",
        }}
      >
        <p
          style={{
            fontSize: "3.4rem",
            textAlign: "center",
            fontFamily: "Georgia",
          }}
        >
          The Classics{" "}
        </p>
      </div>
      <h1 className="text-center mb-4 mt-1" style={{fontFamily: 'Georgia'}}>About</h1>
      <Container>
        <Row lg="2">
          <Col lg="3">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUhnuHWiDnK4kJ5m_TKG5G9Qz66mWisbcPUlTCFlr5UA&s"
              roundedCircle
            />
          </Col>
          <Col lg="9">
            <p style={{ marginLeft: "3rem" }}>
              Welcome to SHOP IN ! At Shop In,
              we're passionate about more than just selling products. We're
              committed to revolutionizing the way you shop, offering an
              unparalleled experience that blends convenience, quality, and
              innovation. Our journey began with a simple idea: to create a
              platform where shopping isn't just about acquiring goods, but
              about discovering a lifestyle. From fashion-forward trends to
              cutting-edge technology and everything in between, we curate a
              diverse collection of products that cater to your every need and
              aspiration. What sets us apart is our dedication to sustainability
              and ethical practices. We believe in making a positive impact on
              the world, which is why we partner with brands that prioritize
              eco-friendly materials, fair trade, and ethical production
              methods. With every purchase, you're not just getting a product;
              you're contributing to a better, more sustainable future. But it's
              not just about the products - it's about you. Our customer-centric
              approach ensures that your experience with us is seamless. Our
              team works tirelessly to provide exceptional service, from the
              moment you browse our website to the swift delivery of your order
              to your doorstep. Join us in this journey towards a more conscious
              way of shopping. Discover the joy of finding products that
              resonate with your values and lifestyle. Together, let's shape a
              world where shopping is not just a transaction, but a mindful
              choice.
              
              <h5 style={{marginBottom:'5rem',marginTop:'2rem',fontFamily: 'Georgia'}}> Thank you for being a part of the Shop In
              family. Happy Shopping! Warm Regards, The SHOP IN
              Team.</h5>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
