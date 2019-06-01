import React, {Component, Fragment} from 'react';
import './Home.css';
import FlowerBox from '../../components/FlowerBox/FlowerBox.js'
import logo from '../../assets/images/logoTransparent.png'
import zerHahaveKfula from '../../assets/images/zerHahaveKfula.jpg'
import callButton from '../../assets/images/callButton.png'

import {animated, useSpring,config} from 'react-spring'

function FirstContainer() {
    const props = useSpring({marginTop: 0, from: {marginTop: 500 }})
    // return <animated.div style={props}>I will fade in</animated.div>
    return (
        <animated.div style={props} className='firstContainer'>
            <div className={'logoContainer'}>
                <img src={logo} alt="Logo" className={'logoTransparent'}/>
            </div>
        </animated.div>
    )
}

function ContentContainer(state) {
    console.log("state",state)
    const props = useSpring({marginTop: state.load ? 0 : 1000, from: {marginTop: 1000 }})
    // return <animated.div style={props}>I will fade in</animated.div>
    return (
        <animated.div style={props}  className='contentContainer'>

                {state.flowers.map(flower => {
                    return (
                        <FlowerBox
                            key={Math.random() * flower.price}
                            image={flower.image}
                            name={flower.name}
                            price={flower.price}
                            story={flower.story}
                        />
                    )
                })}
        </animated.div>
    )
}
class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            flowers: [
                {
                    name: 'זר אהבה קפולה',
                    price: 200,
                    image: zerHahaveKfula,
                    story: ' איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל  איאקוליס וולופטה דיאם. איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל'
                },
                {
                    name: 'זר אהבה קפולה',
                    price: 200,
                    image: zerHahaveKfula,
                    story: ' איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל  איאקוליס וולופטה דיאם. איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל'
                }
                ,
                {
                    name: 'זר אהבה קפולה',
                    price: 200,
                    image: zerHahaveKfula,
                    story: ' איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל  איאקוליס וולופטה דיאם. איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל'
                }
            ],
            flowerLoad: false
        }
        this.myRef = React.createRef()
    }


    componentDidMount() {
        this.handleScroll()
    }


    handleScroll = () => {
        const {index, selected} = this.props
        if (index === selected) {
            const that = this
            setTimeout(() => {
                that.myRef.current.scrollIntoView({ behavior: 'smooth' })
            }, 1000)
            setTimeout(() => {
                this.setState({flowerLoad:true})
            }, 1300)
        }
    }


    render() {
        console.log('this.state', this.state)
        const {flowers} = this.state
        return (
            <Fragment>
                {/*<div className='firstContainer'>*/}
                {/*<div className={'logoContainer'}>*/}
                {/*<img src={logo} alt="Logo" className={'logoTransparent'}/>*/}
                {/*<App/>*/}
                {/*</div>*/}
                {/*</div>*/}
                <FirstContainer/>
                <div ref={this.myRef}/>
                <ContentContainer
                    flowers={this.state.flowers}
                load ={this.state.flowerLoad}
                />
                <div
                    // className={'callButtonContainer'}
                    style={callButtonContainer}
                >
                    <img src={callButton} alt="Logo" className={'callButtonContainer'}/>
                </div>

            </Fragment>
        )
    }
}

export default Home;

const callButtonContainer = {
    width: 15,
height: 15,
marginLeft: 5,
position: 'fixed',
left: 0,
bottom: 2,
zIndex: 3,
}
