import React, {Component, Fragment} from 'react';
import './Home.css';
import FlowerBox from '../../components/FlowerBox/FlowerBox.js'
import logo from '../../assets/images/logoTransparent.png'
import zerHahaveKfula from '../../assets/images/zerHahaveKfula.jpg'


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
            ]
        }
    }

    render() {
        const {flowers} = this.state
        return (
            <Fragment>
                <div className='firstContainer'>
                    <div className={'logoContainer'}>
                        <img src={logo} alt="Logo" className={'logoTransparent'}/>
                    </div>
                </div>
                <div className='contentContainer'>
                    {flowers.map(flower => {
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
                </div>

            </Fragment>
        )
    }
}

export default Home;
