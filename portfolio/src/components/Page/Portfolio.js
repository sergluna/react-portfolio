import React from 'react';


function About() {
    return (<article class="work">
        <figure class="project-1">

            <h2>Using JavaScript to help with movie night</h2>
            <a href="https://sergluna.github.io/movie-selector/">Random Movie Selector</a>
            <p>In this project I wanted to make a random movie selector using JavaScript that will choose one movie at random from an array. It will then add the selected movie to a watched list.</p>

        </figure>
        <figure class="project-2">

            <h2>Validating user information with input forms and JavaScript</h2>
            <a href="https://sergluna.github.io/html-tables/">License Renewal Form</a>
            <p>In this project I wanted to make a webpage that would request user information, validate that it matches a defined fomrat with JavaScript and then display what was sent to the user.  </p>

        </figure>

        <figure class="project-3">
            <h2>Movie Night In</h2>
            <a href="file:///C:/Users/slget/bootcamp/project/Movie-Night-In/index.html">Movie-Night-In</a>
            <p>In this project, I work with two class mates to build a web application that helps you decide what movie to watch and gives you some information about the selected film.</p>
        </figure>

        <figure class="project-3">
            <h2>The Rolling Scones</h2>
            <a href="https://the-rolling-scones.herokuapp.com/">Movie-Night-In</a>
            <p>In this project, two of my collegues and myself work to gether to create a full stack application called the rolling scones. A food editorial where you can share and discuss your favorite foods.</p>
        </figure>
    </article>)
}

export default About;