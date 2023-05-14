import React, { useState, useEffect } from 'react';
import '../src/styles/index.css';

import facebook from '../src/images/icon-facebook.svg';
import insta from '../src/images/icon-instagram.svg';
import pinterest from '../src/images/icon-pinterest.svg';

const App = () => {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const [daysAnimate, setDaysAnimate] = useState(false);
  const [hoursAnimate, setHoursAnimate] = useState(false);
  const [minutesAnimate, setMinutesAnimate] = useState(false);
  const [secondsAnimate, setSecondsAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const endTime = new Date('2024-01-01').getTime();
      const remaining = endTime - currentTime;

      const newDays = Math.floor(remaining / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, '0');
      const newHours = Math.floor(
        (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, '0');
      const newMinutes = Math.floor(
        (remaining % (1000 * 60 * 60)) / (1000 * 60)
      )
        .toString()
        .padStart(2, '0');
      const newSeconds = Math.floor((remaining % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, '0');

      setDaysAnimate(newDays !== days);
      setHoursAnimate(newHours !== hours);
      setMinutesAnimate(newMinutes !== minutes);
      setSecondsAnimate(newSeconds !== seconds);

      setDays(newDays);
      setHours(newHours % 24);
      setMinutes(newMinutes % 60);
      setSeconds(newSeconds);

      if (remaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setSecondsAnimate(true);
    setMinutesAnimate(false)
    setHoursAnimate(false)
    setDaysAnimate(false)

    const timeout = setTimeout(() => {
      setSecondsAnimate(false);
      if (seconds === '00') {
        setMinutesAnimate(true);
      }
      if (minutes === '00') {
        setHoursAnimate(true)
      }
      if (hours === '00') {
        setDaysAnimate(true)
      }
    }, 400);



    return () => {
      clearTimeout(timeout);
    };
  }, [seconds]);


  return (
    <>
      <div className="countdown-container">
        <div className="text-wrapper">
          <h1>WE'RE LAUNCHING SOON</h1>
        </div>

        <div className="time-wrapper">
          <div className="digit-container">
            <div className="card">
              <div className={`digits-front ${daysAnimate ? 'animate' : ''}`}></div>
              <span>{days}</span>
              <div className="digits-back"></div>
            </div>
            <div className="digit-label">DAYS</div>
          </div>

          <div className="digit-container">
            <div className="card">
              <div className={`digits-front ${hoursAnimate ? 'animate' : ''}`}></div>
              <span>{hours}</span>
              <div className="digits-back"></div>
            </div>
            <div className="digit-label">HOURS</div>
          </div>

          <div className="digit-container">
            <div className="card">
              <div className={`digits-front ${minutesAnimate ? 'animate' : ''}`}></div>
              <span>{minutes}</span>
              <div className="digits-back"></div>
            </div>
            <div className="digit-label">MINUTES</div>
          </div>

          <div className="digit-container">
            <div className="card">
              <div className={`digits-front ${secondsAnimate ? 'animate' : ''}`}></div>
              <span>{seconds}</span>
              <div className="digits-back"></div>
            </div>
            <div className="digit-label">SECONDS</div>
          </div>
        </div>

        <div className="link-wrapper">
          <ul>
            <li><img src={facebook} alt="" aria-hidden='true'></img></li>
            <li><img src={pinterest} alt="" aria-hidden='true'></img></li>
            <li><img src={insta} alt="" aria-hidden='true'></img></li>
          </ul>
        </div>
      </div>

    </>
  );
};

export default App;
