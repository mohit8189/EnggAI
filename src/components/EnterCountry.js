import React from 'react';

import { Container, Content, Item, Input, Button, Text } from 'native-base';

import { axios } from '../util/Networking';

import Toast from 'react-native-simple-toast';



export default class EnterCountry extends React.Component {

    constructor(props) {
        super(props);
        this.state = { country: '', countryData: null };
    }




    onSubmit = () => {

        axios.get(`https://restcountries.eu/rest/v2/name/${this.state.country}`)
            .then((response) => {
                if (response.message == "Not Found") {
                    Toast.show('Not a valid country');
                } else {

                    response.data.map(item => {
                        if (item.name.toUpperCase() == this.state.country.toUpperCase()) {
                            this.state.countryData = item;
                            return true
                        } else {
                            this.state.countryData = item;
                        }
                    })


                    this.props.navigation.navigate('CountryInfo', {
                        countryData: this.state.countryData
                    })
                }
            })
            .catch((error) => {
                Toast.show('Not a valid country');
                console.log(error)
            })

    }


    render() {
        return (
            <Container>

                <Content>
                    <Item success>
                        <Input value={this.state.value}
                            onChangeText={country => this.setState({ country })}
                            placeholder='Enter country ' />
                    </Item>


                    {this.state.country == '' ? <Button block light>
                        <Text>Submit</Text>
                    </Button> : <Button onPress={this.onSubmit} block success >
                            <Text>Submit</Text>
                        </Button>}


                </Content>
            </Container>
        );
    }


}


