import React, { Component } from "react";
import "./FeelingProud.css";
import Button from "../../components/button/Button";
import ScriptTag from 'react-script-tag';
import Typed from 'react-typed'

class FeelingProud extends Component {

  render() {
    const theme = this.props.theme;

    return (
      <>
        <div className="container-fluid">


          <div className="row p-60-0 p-lg-30-0 p-md-15-0">

            <div className="col-lg-12">


              <div className="art-a art-banner profileBackground">

                <div className="art-banner-overlay">

                  <div className="art-banner-title">

                    <h1 className="mb-15">My Career Path!</h1>

                    <div className="art-lg-text art-code mb-25 cursor">
                      &lt;<i>code</i>&gt; I build&nbsp;
                      <Typed
                        strings={[
                          "web application.",
                          "mobile applications.",
                          "automation tools.",
                          "design mocups.",
                          "2D/3D games.",
                        ]}
                        typeSpeed={100}
                        backSpeed={30}
                        loop
                      />
                      &lt;/<i>code</i>&gt;
                    </div>

                    <div className="art-buttons-frame">

                      <Button
                        text="😎 Explore Now"
                        newTab={false}
                        href="."
                        theme={theme}
                        className="portfolio-repo-btn"
                      />

                      <a href="." className="art-link art-white-link art-w-chevron">Hire me</a>
                    </div>
                  </div>

                  {/* <img src={profilePic} className="art-banner-photo" alt="Ronila Sanjula" /> */}
                </div>

              </div>

            </div>

          </div>

        </div>
        <ScriptTag type="text/javascript" src="/path/to/resource.js" />
      </>
    );
  }
}

export default FeelingProud;
