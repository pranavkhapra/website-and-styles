import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;
const Container = styled.div``;
const ColumnLeft = styled.div``;
const ColumnRight = styled.div``;
const Button = styled.div``;
function Hero() {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>Welcome to Space</h1>
          <p>Journey to the Unknown</p>
          <Button>Get Started</Button>
        </ColumnLeft>
        <ColumnRight>filler content</ColumnRight>
      </Container>
    </Section>
  );
}

export default Hero;
