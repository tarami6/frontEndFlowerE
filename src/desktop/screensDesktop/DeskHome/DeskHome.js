import React from 'react'
import './DeskHome.css'
import logo from '../../assetsDesktop/imagesDesk/DesktopLogo'
import FlowerBoxDesktop from '../../componentsDesktop/FlowerBoxDesktop/FlowerBoxDesktop.js'
import { flowersMobile } from "../../../services/Const/const";
import whatsUpIcon from "../../../mobile/assetsMobile/imagesMobile/whatsUpIcon.png";
import FaceBook from "../../../mobile/assetsMobile/imagesMobile/FaceBook.png";
import Instagram from "../../../mobile/assetsMobile/imagesMobile/Instagram.png";


function FirstContainer() {
  return (
    <div className={'firstDiv'}>
      <img src={logo} alt="" className={'logo'} />
    </div>
  )
}

const ContentContainer = (props) => {
  return (
    <div className={'productRow'}>
      {props.flowers.map(flower => {
        return (
          <FlowerBoxDesktop
            key={Math.random() * flower.price}
            image={flower.image}
            name={flower.name}
            price={flower.price}
            story={flower.story}
          />
        )
      })
      }
    </div>

  )
}

class DeskHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flowers: flowersMobile,
      flowerLoad: false
    }
    this.myRefDektop = React.createRef()
  }

  componentDidMount() {
    console.log('mobileHome didi mount')
    this.handleScroll()
  }


  handleScroll = () => {
    const { index, selected } = this.props
    if (index === selected) {
      const that = this
      setTimeout(() => {
        that.myRefDektop.current.scrollIntoView({ behavior: 'smooth' })
      }, 1500)
    }
  }

  render() {
    const { flowers } = this.state

    return (
      <div className={'deskHome'}>
        <FirstContainer />
        <div ref={this.myRefDektop} />
        <div className={'container'}>
          <a href="/DeskHome1">
            <ContentContainer
              flowers={flowers}
            />
          </a>
        </div>
        <div className={'footerDesktop'}>
          <p className={'footerStory'}>
            להזמנה חייג - 0542291102
                    </p>
          <div className={'footerSocialMenuDesktop'}>
            <div>
              <a href="https://www.facebook.com/">
                <img src={whatsUpIcon} alt="" className={'socialIconMenuDesktop'} />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/">
                <img src={FaceBook} alt="" className={'socialIconMenuDesktop'} />
              </a>
            </div>
            <div >
              <a href="https://www.facebook.com/">
                <img src={Instagram} alt="" className={'socialIconMenuDesktop'} />
              </a>
            </div>
          </div>
        </div>
        <div className={'poweredByDesktop'} >
          <a href="idt.co.il" className={'poweredByText'}>Powered By IDT </a>
        </div>

      </div>
    )
  }
}

export default DeskHome
