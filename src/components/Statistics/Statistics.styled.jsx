import styled from 'styled-components';

export const List = styled.ul`
  background-color: rgb(201, 245, 235);
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  margin-bottom: 5px;
  font-size: 16px;
  & item:last-child {
    margin-bottom: 0px;
  }
`;
