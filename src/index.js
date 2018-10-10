import React from 'react';
import ReactDOM from 'react-dom';
import Simplebar from 'simplebar';

import './index.css';
import 'simplebar/dist/simplebar.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan elit neque, id finibus dui dignissim vitae. Nulla luctus, purus sit amet aliquam posuere, orci enim consequat tellus, eu lobortis dui ex ut metus. Etiam sagittis ligula a maximus luctus. Sed sed magna nec tellus tincidunt ornare in eget ligula. Donec velit odio, posuere ac libero nec, ullamcorper sodales nisi. Integer nec nunc ex. Morbi laoreet nibh nisi. In sit amet dui et est tempor hendrerit. Phasellus maximus diam eros. Donec ornare magna ut suscipit porttitor. Etiam volutpat lacus justo, et volutpat purus sodales quis. Donec volutpat dictum aliquet. Curabitur eleifend ligula vitae tortor accumsan luctus. Praesent quis nisi id lorem vehicula imperdiet malesuada vitae felis. Pellentesque malesuada lorem vitae maximus aliquam.
        </p>
        <p>
          Pellentesque fermentum nisl dui, vitae feugiat libero facilisis at. Vivamus nec malesuada ante, id volutpat ligula. Nullam nisl odio, placerat vitae tincidunt eu, mollis at dui. Fusce sit amet massa quis risus volutpat condimentum. Aliquam et semper felis. Vestibulum ut posuere mauris. Morbi vitae tempor lacus, at ullamcorper sem. Vivamus eleifend pretium ex ac semper. In felis est, tempor eu nulla in, placerat mollis lorem. Nulla placerat dui pellentesque, blandit ipsum at, consequat ipsum. Praesent scelerisque, ligula congue ultrices convallis, ante est eleifend tellus, vitae vehicula est est quis massa.
        </p>
        <p>
          Mauris faucibus quis mauris vitae ornare. Mauris congue eget purus id faucibus. Quisque condimentum dolor purus, ut bibendum eros tincidunt eu. In hendrerit, urna vel faucibus maximus, eros enim consequat nibh, at egestas magna sapien eget mi. Morbi et ex sed ligula tincidunt eleifend ac ac turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut ornare augue, sed pulvinar ligula. Vivamus eget pellentesque justo. Duis dapibus leo sit amet auctor tincidunt. Curabitur et odio dictum, rutrum lorem vitae, pulvinar orci. Donec viverra, tellus sed luctus dignissim, diam leo tincidunt nunc, in venenatis nisi enim a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus accumsan egestas posuere. Sed hendrerit ut lacus ut ornare. Vestibulum convallis nunc leo, a condimentum odio posuere non. Etiam at lectus id purus scelerisque semper.
        </p>
        <p>
          Donec sagittis auctor feugiat. Duis posuere dapibus tristique. Pellentesque consectetur tristique purus eu pharetra. Fusce at odio leo. Vestibulum non tristique turpis, vitae ultricies elit. Nullam sit amet interdum mi, sit amet interdum est. Fusce quis nibh et nunc tincidunt elementum. Maecenas dapibus sapien vel pretium eleifend. Proin et nunc in urna rutrum pulvinar. Sed tincidunt orci ultricies sem lobortis, quis facilisis sapien semper. Aenean nunc felis, auctor vitae tincidunt in, porttitor in metus. Curabitur ante nisl, varius nec dolor sed, pharetra iaculis erat.
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);