import React from 'react';
import { Container, Content, Item, Input, Card, Text, Button } from 'native-base';
import { axios } from '../util/Networking';
import { SvgUri } from 'react-native-svg';



const CountryInfo = (props) => {

    const capital = ` Capital: ${props.navigation.getParam('countryData', null).capital}`

    const population = ` Population: ${props.navigation.getParam('countryData', null).population}`

    const latlng = ` LatLng: ${props.navigation.getParam('countryData', null).latlng[0]}, ${props.navigation.getParam('countryData', null).latlng[1]}`


    const flag = `${props.navigation.getParam('countryData', null).flag}`

    const API_KEY = "40419e89d560367df7510d24fe797652"

    const wheatherQuery = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${props.navigation.getParam('countryData', null).capital}`



    function onSearch() {
        axios.get(wheatherQuery)
            .then((response) => {
                props.navigation.navigate('CapitalInfo', {
                    capitalInfo: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }




    return <Container>

        <Content >
            <Card >
                <Item>
                    <Input placeholder={capital} />
                </Item>

                <Item>
                    <Input placeholder={population} />
                </Item>

                <Item>
                    <Input placeholder={latlng} />
                </Item>


                <Card style={{ width:'100%', height:150}}>
                    <SvgUri
                        width='100%'
                        height='100%'
                        uri={flag}
                    />
                </Card>


            </Card>

            <Button onPress={onSearch} block success >
                <Text>Capital Weather</Text>
            </Button>
        </Content>
    </Container>

}

export default CountryInfo;