import styled from 'styled-components';

export const SectionStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  background-color: yellow;
  border: 2px solid grey;
  flex-direction: column;
`;

export const TitleStyle = styled.h2`
  font-size: 30px;
  text-transform: uppercase;
  margin: 15px;
`;

export const StatListStyle = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const StatItemStyle = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid grey;
  width: 20%;
  color: blue;
`;

export const StatItemLabel = styled.span`
  font-size: 15px;
  font-weight: 300;
  font-family: 'Segoe UI';
`;

export const StatItemPercentage = styled.span`
  font-size: 25px;
  font-weight: 500;
  font-family: 'Oxygen';
`;
