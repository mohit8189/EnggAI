import React from 'react';
import { Container, Content, Item, Input, Card, CardItem, Text,Left,Thumbnail,Body} from 'native-base';



const CapitalInfo = (props) => {

   
    const temperature = ` Temperature:  ${props.navigation.getParam('capitalInfo',null).current.temperature}`
    const wind_speed = ` Wind Speed: ${props.navigation.getParam('capitalInfo',null).current.wind_speed}`
    const precip = ` Precip: ${props.navigation.getParam('capitalInfo',null).current.precip}`
    const weather_icons = `${props.navigation.getParam('capitalInfo',null).current.weather_icons}`




    return <Container>
        <Content>
            <Item>
                <Input placeholder={temperature} />
            </Item>

            <Card>

                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: weather_icons }} />
                        <Body>
                            <Text>{wind_speed}</Text>
                            <Text note>{precip}</Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>


        </Content>
    </Container>

}

export default CapitalInfo;