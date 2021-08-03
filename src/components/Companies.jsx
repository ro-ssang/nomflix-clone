import React from 'react';
import styled from 'styled-components';

const CompaniesWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, auto));
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
  margin-bottom: 24px;
`;
const Title = styled.h3`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 500;
`;
const Company = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CompanyLogo = styled.span`
  display: flex;
  width: 92px;
  height: 92px;
  img {
    width: 100%;
  }
`;
const CompanyName = styled.h4`
  margin-top: 4px;
  line-height: 1.1;
  text-align: center;
`;
const CountiesWrapper = styled.ul``;
const Country = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export default ({ companies, countries }) => (
  <>
    <Title>Companies</Title>
    <CompaniesWrapper>
      {companies &&
        companies.length > 0 &&
        companies.map((company) => (
          <Company key={company.id}>
            <CompanyLogo>
              <img
                src={
                  company.logo_path
                    ? `https://image.tmdb.org/t/p/w92${company.logo_path}`
                    : require('assets/noPosterSmall.png').default
                }
                alt={company.name}
              />
            </CompanyLogo>
            <CompanyName>{company.name}</CompanyName>
          </Company>
        ))}
    </CompaniesWrapper>
    <Title>Countries</Title>
    <CountiesWrapper>
      {countries &&
        countries.length > 0 &&
        countries.map((country, index) => <Country key={index}>{country.name}</Country>)}
    </CountiesWrapper>
  </>
);
