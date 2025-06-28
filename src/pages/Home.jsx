import React from 'react';
import headshot from '../assets/images/headshot.png'


function Home() {
    return (
        <main className="home-container">
            <div className='home-text'>
                <h2 className='name'>Gillian Flatt</h2>
                <h5 className='title'>Actor, Singer, Designer</h5>
                <p className='intro'>
                    Murmurs from the house, a last minute prop check, and...
                    <br></br>
                    <br></br>
                    My name is Gillian Flatt and I am an Indianapolis based actor, singer, and costume designer. Throughout the past four years I have 
                    been cultivating my love for storytelling and pushing myself to learn new tools in order to tell those stories. I hold immense value 
                    in trying to find new angles and aspects of theatre as we all lift each other up as artists. Outside of theatre I enjoy writing, 
                    drawing, and showing off pictures of my french bulldog, Kevin! Please feel free to take some time to peruse my past acting and 
                    costume design projects, and I hope to work with you soon ◡̈
                    <br></br>
                    <br></br>
                    ...Lights down, curtain up, and away we go!
                </p>
            </div>
            <div className='home-image'>
                <img className='headshot' src={headshot} alt="Headshot of Gillian"></img>
            </div>
        </main>
    )
}

export default Home;