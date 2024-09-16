import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Full-Stack Developer", "Front-End Developer", "Back-End Developer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
    
    return(
        <section className="banner">
            <Container>
                <Row className="align">
                    <Col xs={12} md={6} xl={7}> 
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hello! I'm a `} <span className="wrap">{text}</span></h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore impedit voluptatibus eligendi modi officia, hic corporis tempora ducimus repellat rerum porro amet quia ipsum veritatis, quibusdam nam, aliquam beatae similique! </p>
                    <button onClick={() => console.log('connect')} className="btn">Contact Me <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src="" alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Banner;
