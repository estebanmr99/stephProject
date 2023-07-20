/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../../assets/img/header-img.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ['quieres ser mi novia?', 'sí?', 'no hay opción de no'];
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id={20}>
      <Container style={{ height: '100vh' }}>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className="tagline">Última razón</span>
                  <h1>
                    {`Hola, `}{' '}
                    <span
                      className="txt-rotate"
                      dataPeriod="3000"
                      data-rotate='[ "quieres ser mi novia?", "sí?", "no hay opción de no" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    No importa el tiempo que pase contigo, siempre voy a querer más tiempo contigo. Todas las razones
                    por las que te amo son razones por las cuales quiero que seas mi novia. Quiero seguirte conociendo y
                    teniendo a mi lado.
                  </p>
                  <Link
                    activeClass="active"
                    to={1}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1200}
                    ignoreCancelEvents={true}
                    style={{ color: 'black' }}
                  >
                    <button onClick={() => console.log('connect')}>
                      Volver al principio <ArrowRightCircle size={25} />
                    </button>
                  </Link>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
