import React from 'react';
import HornedBeast from './HornedBeasts'
import Data from './Data.json'


class Main extends React.Component {
  render() {
    return (


        <>
        <HornedBeast title='Horned 1' imageUrl='https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I' description='horned Beast #1' />
        <HornedBeast title='Horned 2' imageUrl='https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0' description='horned Beast  #2' />
        <HornedBeast title='Horned 3' imageUrl='https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc' description='horned Beast #3' />
        
    </>



    );

  }
}

export default Main;