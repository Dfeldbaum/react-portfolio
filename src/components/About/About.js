import React, { Component } from 'react';

class About extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props);

    return (
      <div className="about-section">

        <div className="item text-container">
        <h1 className="text-container__title">About</h1>
        <p className="text-container__copy">My passion is bridging the gap between design and programming. My approach to web design is creative, and holistic. I have a wide range of front-end development skills that include HTML5, CSS3/SASS/LESS, JavaScript, React, Redux, Vue, Angular and Flexbox layouts as well as back-end web development proficiency in Node.js/Express, Ruby on Rails, MongoDB and mySQL. Additionally, I have strong client-level experience working within CMS environments such as AEM, Sitecore and Wordpress. Outside of web development, I have digital marketing expertise in SEO, SEM (Google AdWords, Bing Ads) and Social Media Advertising.</p>
        </div>

        <div class="item img-container">
        <img src="/../img/about-dfeldbaum.jpg"/>
        </div>

      </div>
    );
  }
}

export default About;
