const MovieCard = (props) => {
  const { movie } = props;

  return (
    <div className="movieCard" >
      {movie.title} - {movie.year}
    </div>
  )
}

export default MovieCard;