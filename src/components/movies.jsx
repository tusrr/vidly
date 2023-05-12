import React, { Component } from 'react';
import { getMovies } from '../fakeMovieService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import Like from './common/like';


class Movies extends Component {
    state = { 
        movies: getMovies(),
        currentPage: 1,
        pageSize:3
     } 

     handleDelete = (movie) =>{

        const movies = this.state.movies.filter(m =>m._id !==movie._id);
        this.setState({movies}) //this.setState({movies: movies}) --if key and value property same...just write like back 
    };

    handleLike=(movie)=>{
        // console.log('Like clicked',movie);
        const movies =[...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked= !movies[index].liked;
        this.setState({movies});

    };

    handlePageChange=(page) =>{
    this.setState({currentPage:page});
}

    render() { 
        const {length: count} = this.state.movies;
        const {currentPage, pageSize, movies : allMovies} = this.state;


        if(count ===0)
        return <p>There are no movies in the database.</p>;
        // return table.table>thead>tr>th*4
        //hidden else here

        const movies = paginate(allMovies,currentPage,pageSize); 

        return (
            <React.Fragment>
        <p>Showing {count}  movies in the database</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Title of Movie</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie=>(
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                        <Like liked={movie.liked} onClick={()=>this.handleLike(movie)}/>
                    </td>
                    <td><button onClick={() => this.handleDelete(movie)} 
                    className="btn btn-danger">Delete</button></td>
                </tr>))}
            </tbody>
            
        </table>
        <Pagination 
        itemsCount = {count} 
        pageSize= {pageSize} 
        currentPage= {currentPage} 
        onPageChange= {this.handlePageChange}/>
        </React.Fragment> 
    )}
}

export default Movies;