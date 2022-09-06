import React, { Component } from "react";
import "./FeelingProud.css";
import Button from "../../components/button/Button";

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

                    <div className="art-lg-text art-code mb-25">&lt;<i>code</i>&gt; I build <span className="txt-rotate" data-period="2000"
                      data-rotate='[ "web interfaces.", "ios and android applications.", "design mocups.", "automation tools." ]'></span>&lt;/<i>code</i>&gt;</div>


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
      </>
    );
  }
}

export default FeelingProud;
