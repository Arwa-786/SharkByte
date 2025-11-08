import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GenreSelection.css';

type Genre = 'fantasy' | 'sci-fi' | 'thriller' | 'mystery' | 'miami-dade' | 'custom';

const GenreSelection = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [customStoryline, setCustomStoryline] = useState('');
  const navigate = useNavigate();

  const handleGenreSelect = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  const handleCustomStoryline = (storyline: string) => {
    setCustomStoryline(storyline);
    if (storyline.trim()) {
      setSelectedGenre('custom');
    } else {
      setSelectedGenre(null);
    }
  };

  const handleContinue = () => {
    if (selectedGenre) {
      navigate(`/world/${selectedGenre}`, {
        state: { customStoryline: selectedGenre === 'custom' ? customStoryline : null }
      });
    }
  };

  return (
    <div className="genre-selection-container">
      <h1 className="genre-selection-title">SHARKBYTE</h1>
      <p className="genre-selection-subtitle">Choose Your Story World</p>
      
      <div className="genre-buttons-container">
        <button
          className={`genre-button ${selectedGenre === 'fantasy' ? 'selected' : ''}`}
          onClick={() => handleGenreSelect('fantasy')}
        >
          Fantasy
        </button>
        <button
          className={`genre-button ${selectedGenre === 'sci-fi' ? 'selected' : ''}`}
          onClick={() => handleGenreSelect('sci-fi')}
        >
          Sci-Fi
        </button>
        <button
          className={`genre-button ${selectedGenre === 'thriller' ? 'selected' : ''}`}
          onClick={() => handleGenreSelect('thriller')}
        >
          Thriller
        </button>
        <button
          className={`genre-button ${selectedGenre === 'mystery' ? 'selected' : ''}`}
          onClick={() => handleGenreSelect('mystery')}
        >
          Mystery
        </button>
        <button
          className={`genre-button ${selectedGenre === 'miami-dade' ? 'selected' : ''}`}
          onClick={() => handleGenreSelect('miami-dade')}
        >
          Miami Dade College Course Pathway
        </button>
      </div>

      <div className="custom-storyline-container">
        <label htmlFor="custom-storyline" className="custom-storyline-label">
          Or create your own storyline:
        </label>
        <textarea
          id="custom-storyline"
          className="custom-storyline-input"
          placeholder="Write your custom storyline here..."
          value={customStoryline}
          onChange={(e) => handleCustomStoryline(e.target.value)}
          rows={6}
        />
      </div>

      {selectedGenre && (
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      )}
    </div>
  );
};

export default GenreSelection;

