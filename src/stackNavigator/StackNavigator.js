import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import EnterCountry from '../components/EnterCountry'
import CountryInfo from '../components/CountryInfo'
import CapitalInfo from '../components/CapitalInfo'

const AppNavigator = createStackNavigator(
    {
        EnterCountry : EnterCountry,
        CountryInfo: CountryInfo,
        CapitalInfo: CapitalInfo
    },
    {
        initialRouteName: "EnterCountry"
    }
)


export const AppContainer = createAppContainer(AppNavigator)