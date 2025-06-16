# FilmDelicacy

An interactive and responsive React.js application that suggests movies, allows searching, filtering, sorting, liking, theme switching, and displays detailed movie info on click.

How to run the Project in Terminal
1. Clone the repository
git clone https://github.com/your-username/movie-suggester.git
cd movie-suggester

3. Install dependencies
npm i

4. Run the development server
npm run dev

5. Visit in Browser
Open your browser and go to http://localhost:5173

🌟 Features Breakdown

1. Search Movies
Users can search for movies using keywords (e.g., "Harry Potter", "Frozen").
Search bar with a 🎥 emoji enhances the visual interface.
Movies are fetched using the OMDB API.

2. Default Movie Suggestions
On load, the app fetches a list of default popular movies (e.g., Avengers, Batman, Pirates).
Displayed without needing any search input.

3. Like a Movie
Each movie card has a "Like" button.
Click to toggle "Liked 💖" or "Like" state, visually shown using color.

4. Detailed Movie Description
Clicking on a movie card opens a yellow description box (modal-like popup).
Includes movie title, year, genre, director, and plot.
Scrollable if the content is long.

5. Filter by Alphabet (A-Z)

A filter bar lets users filter movies starting with a specific alphabet (e.g., show only movies that start with "B").

6. Sort by Year
Users can sort movies by:
Old to New
New to Old
Medium (Random Order)

7. Light / Dark Theme Toggle
Switch between light and dark themes instantly using a toggle button.
The whole UI color scheme changes dynamically.

8. Responsive Design
Built with Bootstrap + custom CSS
Works well across all devices (desktop, tablet, mobile)




   

