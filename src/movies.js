import React, { Component } from 'react';

class Movies extends Component {
    render() {
        return <ul>{this.props.list_of_movies.map((values, i) => {
            return <span key={i}>{values.Title} <img src={values.Poster} /></span>;
        })}</ul>;
    }
}

export default Movies;