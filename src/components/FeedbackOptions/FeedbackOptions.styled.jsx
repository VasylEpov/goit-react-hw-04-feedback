import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Btn = styled.button`
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  display: block;
  width: 90px;
  font-weight: bold;
  margin: 20px auto;
  text-align: center;
  padding: 1px 5px;
  color: #022524;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
  -webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
  background: #83f3e4;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#83f3e4),
    to(#119b94)
  );
  background: -webkit-linear-gradient(#83f3e4, #119b94);
  background-image: -moz-linear-gradient(top, #f6f6f6, #119b94);
  background-image: -moz-gradient(top, #f6f6f6, #119b94);
  border: 1px solid #a1a1a1;

  &:hover,
  &:focus {
    background: #83f3e4;
    color: #000;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#83f3e4),
      to(#ececec)
    );
    background: -webkit-linear-gradient(#83f3e4, #ececec);
    background-image: -moz-linear-gradient(top, #83f3e4, #ececec);
    background-image: -moz-gradient(top, #83f3e4, #ececec);
  }
`;
