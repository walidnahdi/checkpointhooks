

const SearchMovie = (nameSearch,setNameSearch, moviesList ) => {

      // function search
      const handleSearch = (event) => {
        const name = event.target.value;
        setNameSearch(name);
        const searchList = moviesList.filter((movie) => {
            return movie.name.toLowerCase().indexOf(movie.toLowerCase()) !== -1;
        });
        moviesList(searchList); 
      };
   

    return (
        <div>
        <input style={{border:'solid'   ,borderRadius: '6px', padding: '8px 15px', borderWidth: '0px', borderColor: 'black',marginBottom: '10px'}}
         type="text"
         name="search"
         placeholder="Search Movie"
         
         onChange={handleSearch}   
        />
      </div>
    );
    

};

export default SearchMovie;
   