import styled from 'styled-components';

export const FriendListItemStyle = styled.li`
  display: flex;
  border: 1px solid black;
  align-items: center;
  gap: 10px;
  padding: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const FriendStatusStyle = styled.span`
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${props => {
    return props.isActive ? 'green' : 'red';
  }};
  width: 20px;
  height: 20px;
  display: block;
`;

export const FriendAvatarStyle = styled.img`
  display: flex;
  margin: 0;
`;

export const FriendListNameStyle = styled.p`
  margin: 0;
  font-size: 30px;
`;
