import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
    <div class="container">
      <div class="header-background">
        <div class="header-container">
          <div class="header-content-left">
            <div class="text-name">Zh Rimel</div>
            <div class="text-career">Data Scientist</div>
          </div>
          <div class="header-content-right">
            <p>Email: <a href= "mailto: abc@gmail.com">abc@gmail.com</a></p>
            <p>Web: abc.github.io/abc</p>
            <p>Mobile: 01234567890</p>
          </div>
        </div>
      </div>
      <div class="separator"></div>
      <div class="content">
        <div class="text-content-catagory">Personal Profile</div>
        <div class="text-content-general">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
      <div class="content-separator"></div>
      <div class="content">
        <div class="text-content-catagory">Work Experience</div>
        <div class="text-content-general">
          <div class="text-content-title">
          Job Title at Company (August 2022 – December 2023)
          </div>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
          </div>
          <div class="text-content-title">
          Job Title 2 at Company 2 (August 2020 – December 2021)
          </div>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <div class="content-separator"></div>
      <div class="content">
        <div class="text-content-catagory">Key Skills</div>
        <div class="text-content-general">
          <div class="text-content-list-h">
            <div class="text-content-list-v">
              <div>A Key skill</div>
              <div>A Key skill</div>
              <div>A Key skill</div>
            </div>
            <div class="text-content-list-v">
              <div>A Key skill</div>
              <div>A Key skill</div>
              <div>A Key skill</div>
            </div>
            <div class="text-content-list-v">
              <div>A Key skill</div>
              <div>A Key skill</div>
              <div>A Key skill</div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-separator"></div>
      <div class="content">
        <div class="text-content-catagory">Education</div>
        <div class="text-content-general">
          <div class="text-content-title">
          New Jersey Institute of Technology
          </div>
          <div class="text-content-list-v">
            <div>BS in Computer Science</div>
            <div>2018 - 2022</div>
            <div>GPA: 3.9</div>
          </div>
          <div class="text-content-title">
          New Jersey Institute of Technology
          </div>
          <div class="text-content-list-v">
            <div>MS in Data Science</div>
            <div>2022 - 2023</div>
            <div>GPA: 4.0</div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default App;