import React, { Component } from 'react';
import ClickCard from './components/Cards/Cards.js';
import Footer from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';
import cards from './cards.json';

import './index.css';


class App extends Component {
  state = {
      cards: cards,
      score: 0,
      topScore: 0,
      cardsClicked: [],
      footerText: ""
    }

    characterClicked = (id) => {
    const [pageBody] = document.getElementsByTagName('body');

    if (this.state.cardsClicked.includes(id)) {
      this.setState({score: 0, cardsClicked: []})

      pageBody.classList.add('shakeWrapper')
      this.setState({footerText: 'Already selected! Try Again!'})
      setTimeout(() => {
        pageBody.classList.remove('shakeWrapper');
      }, 500);
      setTimeout(() => {
        this.setState({footerText: ""})
      }, 1800)

    } else {
      this.setState({cardsClicked: [...this.state.cardsClicked, id]})
      this.setState({score: this.state.score + 1})
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1})

      } 
      if (this.state.score === 11) {
        this.setState({footerText: 'You Won! Play again?'})
        this.setState({score: 0, cardsClicked: [], cards: cards})
        setTimeout(() => {
          this.setState({footerText: ''})
        }, 1800)
      } 
    }
  }

  reArrangeCards = (array) => {
    let currentIndex = array.length;

    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({cards:cards});
  }

  showCards = (array) => {
    return this.state.cards.map(card => (
      <section className='col s3 m3 l3' key={card.id} id={card.id}>
        <ClickCard
          name={card.name} 
          image={card.image} 
          reArrangeCards={() => {this.reArrangeCards(this.state.cards)}}
          characterClicked={() => {this.characterClicked(card.id)}}/>
      </section>
      )
    )
  }


  render() {
    return (
      <div className="container-fluid">
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <br />
        <div className="container row cardWrapper">
          {this.showCards(this.state.cards)}
        </div>
        <Footer text={this.state.footerText}/>
      </div>
    );
  }
}

export default App;
