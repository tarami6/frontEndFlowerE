import React, { Fragment } from 'react'
import './DeskHome2.css'
import { flowers } from "../../../services/Const/const";
import zerBayadLogo from "../../../desktop/assetsDesktop/imagesDesk/zerBayadLogo.png";
import annieSprattBG from "../../../desktop/assetsDesktop/imagesDesk/annieSprattBG.png";
import Phone from 'react-icons/lib/fa/phone';
import Instagram from 'react-icons/lib/fa/instagram';
import Facebook from 'react-icons/lib/fa/facebook';
import Linkedin from 'react-icons/lib/fa/linkedin';
import Twitter from 'react-icons/lib/fa/twitter';
class DeskHome2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flowers: flowers,
      flowerLoad: false
    }
  }

  render() {

    return (
      <div className={'deskHome'}>
        <div class='col-md-12 p-0'>
          <div class="col-md-6 p-0">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="item active">
                  <div>
                    <img src={annieSprattBG} alt="Los Angeles" class="desk2SliderImg" />
                  </div>
                  <div class="carousel-caption">
                    <div class='col-md-12 col-sm-12'>
                      <img src={zerBayadLogo} alt="Los Angeles" class="w-110px" />
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div>
                    <img src={annieSprattBG} alt="Los Angeles" class="desk2SliderImg" />
                  </div>
                  <div class="carousel-caption">
                    <div class='col-md-12 col-sm-12'>
                      <img src={zerBayadLogo} alt="Los Angeles" class="w-110px" />
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div>
                    <img src={annieSprattBG} alt="Los Angeles" class="desk2SliderImg" />
                  </div>
                  <div class="carousel-caption">
                    <div class='col-md-12 col-sm-12'>
                      <img src={zerBayadLogo} alt="Los Angeles" class="w-110px" />
                    </div>
                  </div>
                </div>
              </div>
              <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left desk2-slide-btn"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right desk2-slide-btn"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class='col-md-11 display-inline-box mt-50'>
              <div class=''>
                <p class='phone-text1'>+90-532-456-34-23</p>
                <p class='phone-text1'>+90-552-112-00-78</p>
              </div>
              <div class='phone-icon-div'>
                <Phone size={24} color={"#efc368"} />
              </div>
            </div>
            <div class='col-md-12 p-0-5vw'>
              <p class='desk2-title'>Ranunculus pink&white</p>
              <p class='desk2-title-text'>15 flowers, delicate, pink</p>
            </div>
            <div class='col-md-12 p-0-5vw mt-70'>
              <p class='desk2-title-sub'>Information</p>
              <p class='desk2-info'>Ranunculus is a genus of about 500 species of flowering plants
               in the family. Members of the genus include the buttercups,
                spearworts and water crowfoots. The petals are often highly
                lustrous, especially in yellow species, owing to a special
                coloration mechanism: the petal's upper surface is very
                smooth causing a mirror-like reflection.<span style={{ fontSize: 20, color: '#efc368' }}>...More</span>
              </p>
            </div>
            <div class='col-md-12 col-md-12 p-0-5vw mt-70 display-flex mb-70'>
              <p class='desk2-price'>$109.99</p>
              <button class={'desk2-order-now-btn'}>Order now</button>
            </div>
          </div>
        </div>
        <div class='col-md-12 col-sm-12 col-xs-12 desk-footer'>
          <div class='col-md-11 col-sm-9 col-xs-12'>
            <div class=''>
              <p class='desk-footer-text mb-0 pull-right'>(c) 2019. All rights reserved</p>
            </div>
            <div class=''>
              <p class='desk-footer-text mb-0 pull-right brdr-right'>Terms&Conditions</p>
            </div>
            <div class=''>
              <p class='desk-footer-text mb-0 pull-right brdr-right'>Privacy Policy</p>
            </div>
          </div>
          <div class='col-md-1 display-inline-box'>
            <div class='p-0-10'>
              <Instagram size={24} color={"#efc368"} />
            </div>
            <div class='p-0-10'>
              <Facebook size={20} color={"#efc368"} />
            </div>
            <div class='p-0-10'>
              <Twitter size={20} color={"#efc368"} />
            </div>
            <div class='p-0-10'>
              <Linkedin size={20} color={"#efc368"} />
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default DeskHome2
