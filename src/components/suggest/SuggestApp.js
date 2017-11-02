import React from 'react';
import Suggest from './Suggest';
import { Panel } from 'react-bootstrap';
import './suggest.css';
import axios from 'axios';
import Config from '../../config';

class SuggestApp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      languages: [],
      cities: []
    };
  }

  async componentDidMount() {
    try {
      const languages = (await axios.get(`${Config.basename}/languages.json`)).data;
      const cities = (await axios.get(`${Config.basename}/cities.json`)).data;
      this.setState({ languages, cities });
    }
    catch(err) {
      alert(`ERROR: ${err}`);
      console.log('ERROR:', err);
    }
  }

  render() {
    const cityDetails = (city) => {
      return (
        <span> - {city.state} : {city.population}</span>
      );
    };
    return (
      <Panel header='Auto Suggest' className="example suggest">
        <Suggest data={this.state.languages} name="name" placeholder="Type a language name"/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id volutpat lacus laoreet non curabitur. Ante metus dictum at tempor. Mattis nunc sed blandit libero volutpat. Odio morbi quis commodo odio aenean sed. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Quisque sagittis purus sit amet. Nunc congue nisi vitae suscipit. Neque convallis a cras semper auctor neque vitae tempus. In est ante in nibh. Lacus luctus accumsan tortor posuere ac ut consequat semper. Sit amet aliquam id diam. Vitae aliquet nec ullamcorper sit. Egestas dui id ornare arcu odio ut sem nulla pharetra.
        </p>
        <Suggest data={this.state.cities} name="city" placeholder="Type a city name" details={cityDetails} />
        <p>
          Auctor eu augue ut lectus arcu bibendum at. Elit ut aliquam purus sit amet luctus venenatis lectus. Mauris vitae ultricies leo integer. Ullamcorper morbi tincidunt ornare massa eget egestas. Cursus risus at ultrices mi. Tincidunt ornare massa eget egestas purus viverra accumsan in. Magna fringilla urna porttitor rhoncus dolor. Pharetra sit amet aliquam id diam maecenas ultricies. Sit amet porttitor eget dolor morbi non arcu. Egestas purus viverra accumsan in nisl. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Posuere ac ut consequat semper. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Risus nec feugiat in fermentum posuere urna nec tincidunt. Semper viverra nam libero justo laoreet. Mi proin sed libero enim. Auctor augue mauris augue neque gravida in fermentum. Congue nisi vitae suscipit tellus mauris a.
        </p>
        <p>
          Ullamcorper dignissim cras tincidunt lobortis feugiat. Dui ut ornare lectus sit amet est placerat in egestas. Nunc non blandit massa enim nec. Ut etiam sit amet nisl purus in mollis nunc. Nec dui nunc mattis enim ut. Elementum eu facilisis sed odio. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Laoreet non curabitur gravida arcu ac tortor. Hac habitasse platea dictumst quisque. Eu nisl nunc mi ipsum faucibus vitae. Condimentum id venenatis a condimentum. Accumsan tortor posuere ac ut consequat semper viverra nam libero.
        </p>
      </Panel>
    );
  }
}

export default SuggestApp;
