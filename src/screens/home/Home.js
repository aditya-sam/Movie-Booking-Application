import React from 'react';
import Header from '../../common/header/Header';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import moviesData from '../../common/moviesData';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

class Home extends React.Component {
    render() {
        const classes = this.props;
        return (
            <>
                <div><Header /></div>
                <div className="upcoming">
                    <span>Upcoming Movies</span>
                </div>
                <div >
                    <GridList cols={5} className={classes.gridListUpcomingMovies} style={{flexWrap: 'nowrap'}}>
                        {moviesData.map((tile) => (
                            <GridListTile key={tile.id} className="a">
                                <img
                                    src={tile.poster_url}
                                    alt={tile.title}
                                    className="movie-poster"
                                />
                                <GridListTileBar title={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <div className="flex-container">
                    <div className="left">
                        <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                            {moviesData.map((movie) => (
                                <GridListTile className="released-movie-grid-item"
                                    key={"grid" + movie.id}>
                                    <img
                                        src={movie.poster_url}
                                        className="movie-poster2"
                                        alt={movie.title}
                                    />
                                    <GridListTileBar
                                        title={movie.title}
                                        subtitle={
                                            <span>
                                                Release Date: {new Date(movie.release_date).toDateString()}
                                            </span>
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <div className="right">

                    </div>
                </div>
            </>
        );
    }
}

export default Home;