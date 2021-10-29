import React from 'react'
import {useState, useRef} from 'react'
import {Button, Overlay} from 'react-bootstrap';
import {BsInfoCircle} from 'react-icons/bs'
import './myCoins.css'

const CoinData = (props) => {

    const [show, setShow]=useState(false);
    const target=useRef(null)

    return (
        <div style={{
            padding:20
        }}>
            <div className='coinBox' style={{borderColor:'black',
                padding:20,
                textAlign:'center'
                }}>
                <div className='points-label'
                style={{
                    fontSize: 15,
                    textTransform: 'uppercase',
                    fontWeight: 800,
                    color: '#14cda8'
                }}>TOTAL AVAILABLE MYNTRA COINS</div>
                <div style={{
                    margin: '8px 0px',
                    fontSize: 36,
                    fontWeight: 800,
                    color: '#3E4152'
                }}>{props.user.coins}</div>
                <div style={{fontSize:13}}>
                    Your total Myntra Coins is worth a lot! 
                </div>
                <div style={{
                    width: 275,
                    margin: '10px auto 0px auto',
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: '#7e818c'
                }}>
                    You can use your Myntra Coins to win interesting games in the gamify section.
                    Invest 10 coins to play a game. If you win we reward you with two options.
                    Either convert the coins you won to Ether (cryptocurrency)!
                    Or Win exciting coupons and use them when you shop with us next.
                </div>
            </div>
            <div style={{
                borderBottom: '1px solid #EAEAEC',
                fontWeight: 800,
                textTransform: 'uppercase',
                padding: '15px',
                color: '#282C3F',
                cursor: 'pointer'
            }}>
                Transaction Logs
            </div>
        </div>
    )
}

export default CoinData
