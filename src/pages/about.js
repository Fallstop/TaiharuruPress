
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import { Text } from '../components/Commons'
import Hero from '../components/Hero'

const MainTitle = styled.h1`
  line-height: 1.5;
  text-align: center;
  font-size: 3rem;
`

const SubTitle = styled.h2`
  padding-top: 40px;
  line-height: 1.2;
  border-top: 1px solid #ececec;
  margin-top: 44px;
`

const NotFoundPage = props => {

  return (
    <Layout location={props.location} noCover={true}>
      <SEO title="About Us" />
      <Hero title="About Us"/>
      <Wrapper>
      <SubTitle>Taiharuru Press is located in one of New Zealand's special places</SubTitle>
        <Text>
        With its natural fortifications and abundant food sources Whangarei Heads was an important area from Maori from earliest times and rich in history. The area was one of the earliest to be settled by Europeans.
<br/>
Following turbulent years of Maori occupation by a number tribes, the Whangarei Heads area was one of the earliest in New Zealand to be settled by Europeans. Captain Cook named many surrounding landmarks when exploring the area in 1769.
<br/>
Early settlers from Scotland who travelled to New Zealand via Nova Scotia began farming the area in 1853. The Taiharuru Farms area was farmed by the Robinson and Butler families from around 1864. These early settlers recognized the natural wealth of the area with Kauri Mountain on the rear boundary of Taiharuru Farms named after the extensive Kauri trees that grew in abundance and were the basis of an early timber industry. Tumuli, the family ancestral home of the Whangarei Heads, built a campground for them in 1893.
<br/>
The earliest settlement in North America for Maori was in the area of Tama, the capital, in the 19th century. This large land took on a large importance and made it home to several Maori settlements, one of them at the site of a large shipyard. One settlement at that time was from the Maori area which was well-preserved with numerous Maori names. From this settlement the Maori people were known to have settled in an area similar in

        </Text>

        
      </Wrapper>
    </Layout>
  )
}

export default NotFoundPage
