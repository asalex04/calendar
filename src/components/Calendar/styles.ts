import styled from "styled-components";

export const Main = styled.div`
  display: grid;
  padding: 4px;
  max-width: 740px;
  background-color: #C2C2C2;
`

export const Panel = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: #030303;
  background: #FFFFFF;
`
export const GridWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'div days'
    'hours grid'
    'today today';
  grid-template-columns: 1fr 8fr;
  grid-template-rows: 2fr 8fr 2fr;
  grid-template-rows: 2fr 8fr 1fr;
  background: #d3d9cd;
`

export const Days = styled.div`
  display: grid;
  grid-area: days;
`

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr) auto;
  justify-items: center;
  margin: 5px;
  font-size: 20px;
`

export const Month = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-items: center;
`

export const Sign = styled.div`
  font-size: 24px;
  color: #FF3131;
`

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(13, 1fr);
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 2px;
  grid-area: grid;
`
export const Hours = styled.div`
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-area: hours;
  justify-items: end;
  padding: 20px 10px 10px 0;
  background: #FFFFFF;
  color: #C2C2C2;
`
export const Today = styled.div`
  display: grid;
  grid-area: today;
  color: #FF3131;
  align-items: center;
  padding-left: 20px;
`
