import React    from 'react';
import ReactDOM from 'react-dom';

import { Avatar } from '../components';

import Playground from 'component-playground';

const avatarExample = require('raw!./examples/Avatar.example.txt');
const exampleScope  = {
  React:    React,
  ReactDOM: ReactDOM,
  Avatar:   Avatar
};

const AvatarApp = React.createClass({
  displayName: 'Rhinostyle Avatar Example',

  render() {
    return (
      <div>
        <h1 class="site-headline">Avatars</h1>

        <section class="site-section">
          <h3 class="site-subheadline">Avatar Types</h3>
          <div class="u-m-b-md">
            <h5 class="site-miniheadline">Patient Avatar</h5>
            <p class="site-copy">Patient avatars require the <code>avatar--patient</code> modifier.</p>
            <figure class="avatar avatar--patient">CA</figure>
            <figure class="avatar avatar--patient" style="background-image: url(//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg);"></figure>
            <figure class="avatar avatar--patient"><svg class="avatar__icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-user"></use></svg></figure>
          </div>

          <div class="u-m-b-md">
            <h5 class="site-miniheadline">Member Avatar</h5>
            <p class="site-copy">Member avatars require the <code>avatar--member</code> modifier.</p>
            <figure class="avatar avatar--member">CA</figure>
            <figure class="avatar avatar--member" style="background-image: url(//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg);"></figure>
            <figure class="avatar avatar--member"><svg class="avatar__icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-user"></use></svg></figure>
          </div>
        </section>

        <section class="site-section">
          <h3 class="site-subheadline">Avatar Sizes</h3>
          <div class="u-m-b-md">
            <h5 class="site-miniheadline">Large Avatar</h5>
            <p class="site-copy">Add the <code>avatar--lg</code> modifier to <code>avatar</code> for large size.</p>
            <figure class="avatar avatar--patient avatar--lg">CA</figure>
            <figure class="avatar avatar--patient avatar--lg" style="background-image: url(//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg);"></figure>
            <figure class="avatar avatar--patient avatar--lg"><svg class="avatar__icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-user"></use></svg></figure>
            <figure class="avatar avatar--member avatar--lg">CA</figure>
            <figure class="avatar avatar--member avatar--lg" style="background-image: url(//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg);"></figure>
          </div>

          <div>
            <h5 class="site-miniheadline">Small Avatar</h5>
            <p class="site-copy">Add the <code>avatar--sm</code> modifier to <code>avatar</code> for small size.</p>
            <figure class="avatar avatar--patient avatar--sm">CA</figure>
            <figure class="avatar avatar--patient avatar--sm" style="background-image: url(//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg);"></figure>
            <figure class="avatar avatar--patient avatar--sm"><svg class="avatar__icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-user"></use></svg></figure>
            <figure class="avatar avatar--member avatar--sm">CA</figure>
            <figure class="avatar avatar--member avatar--sm" style="background-image: url(//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg);"></figure>
          </div>
        </section>
      </div>
    );
  }
});

ReactDOM.render(<AvatarApp />, document.getElementById('js-app'));
