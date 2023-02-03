import styled from 'styled-components';

export const ProfileStyle = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 300px;
  height: 500px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 3px 3px 1px 0px rgba(34 34 34 / 11%);
`;

export const CardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const DescriptionStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const ImgStyle = styled.img`
  border-radius: 50%;
  border: 1px solid gray;
  width: 80%;
`;

export const NameStyle = styled.p`
  font-size: 25px;
  font-weight: 800;
  margin: 0;
`;

export const TagStyle = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 0;
  color: grey;
`;
export const LocationStyle = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 0;
  color: grey;
`;

export const StatsStyle = styled.ul`
  list-style: none;
  display: flex;
  background-color: lightblue;
  margin: 0;
  padding: 0;
  height: 20%;
`;
export const StatsList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 33%;
  border: 1px solid gray;
  gap: 10px;
`;

export const LabelStyle = styled.span`
  font-family: 'Helvetica Neue';
  font-size: 15px;
  font-weight: 200;
  color: grey;
`;

export const QuantityStyle = styled.span`
  font-family: 'Oxygen';
  font-weight: 900;
  font-size: 25px;
  color: red;
`;
