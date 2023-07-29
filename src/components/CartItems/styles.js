import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    color: #9a9a9d;
    font-size: 17px;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: max-content;
  grid-gap: 10px 15px;
  padding: 10px;

  img {
    border-radius: 20px;
    width: 135px;
    margin-right: 30px;
  }

  p {
    font-size: 16px;
    color: #000;
  }

  .price {
    font-weight: bold;
  }

  .price-total {
    font-weight: bold;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    align-items: baseline;
    font-weight: bold;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
  }
`

export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`
