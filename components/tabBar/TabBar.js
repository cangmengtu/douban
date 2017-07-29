import { TabNavigator } from 'react-navigation';
import BookHome from '../books/BookHome';
import MovieList from '../movies/MovieList';

const TabBar = TabNavigator({
    图书: { screen: BookHome },
    电影: {
        screen: MovieList,
        navigationOptions: {
            header: null
        }
    }
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'red',
            /* labelStyle: {
                fontSize: 24
            } */
        }
    })

export default TabBar;