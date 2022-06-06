import styled from 'styled-components'

export const Panel = styled.div`
  margin: 20px 30px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: #030303;
`
export const GridWrapper = styled.div`
  display: grid;
  background: #F6F6F6;
  padding: 8px 35px;
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
  border: 1px solid #e3e3e3;
  grid-template-rows: 0.5fr repeat(11, 1fr) 0.5fr;
  grid-template-rows: repeat(8, 1fr);
`
