import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  box-shadow: inset 0px 35px 71px -70px rgba(0, 0, 0, 0.54);

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const CategoryImg = styled.img``

export const ConteinerItems = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: var(--theme-gray-800, #424242);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  }
`

export const Image = styled.img`
  width: 200px;
  height: 190px;
  border-radius: 12px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  cursor: pointer;
  border: none;
  color: white;

  border-radius: 8px;
  background: #9758a6;
  box-shadow: 0px -11px 14px 0px rgba(151, 88, 166, 0.24);
  height: 50px;
  margin-top: 16px;

  color: var(--theme-white, #fff);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
`
