import { useParams, useLocation, useNavigate } from 'react-router-dom';
import '../styles/WorldView.css';

const WorldView = () => {
  const { genre } = useParams<{ genre: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const customStoryline = location.state?.customStoryline;

  const getWorldContent = () => {
    switch (genre) {
      case 'fantasy':
        return {
          title: 'The Enchanted Forest',
          description: 'You stand at the edge of a mystical forest where ancient trees tower above. Fire wizards cast spells in the distance, their flames dancing between the shadows. Magic pulses through the air, and the forest whispers secrets of old. Will you venture deeper into this realm of wonder?',
          theme: 'fantasy'
        };
      case 'sci-fi':
        return {
          title: 'Sci-Fi World',
          description: 'Step into the future where advanced technology, space exploration, and artificial intelligence define existence. The stars are within reach.',
          theme: 'sci-fi'
        };
      case 'thriller':
        return {
          title: 'Thriller World',
          description: 'A world of suspense, danger, and high stakes. Every moment counts, and the tension never lets up. Trust no one.',
          theme: 'thriller'
        };
      case 'mystery':
        return {
          title: 'Mystery World',
          description: 'Enter a realm of secrets, clues, and enigmatic puzzles waiting to be solved. The truth is hidden, and only the observant will uncover it.',
          theme: 'mystery'
        };
      case 'miami-dade':
        return {
          title: 'Miami Dade College Course Pathway',
          description: 'Navigate your academic journey through Miami Dade College. Explore courses, plan your pathway, and achieve your educational goals.',
          theme: 'miami-dade'
        };
      case 'custom':
        return {
          title: 'Your Custom World',
          description: customStoryline || 'Your unique storyline awaits...',
          theme: 'custom'
        };
      default:
        return {
          title: 'Unknown World',
          description: 'This world does not exist.',
          theme: 'default'
        };
    }
  };

  const worldContent = getWorldContent();

  const handleContinue = () => {
    navigate('/next-page', { state: { genre: worldContent.title } });
  };

  return (
    <div className={`world-view-container ${worldContent.theme}`}>
      {worldContent.theme === 'fantasy' && (
        <>
          <div className="magic-particles"></div>
          <div className="wizard-fire wizard-fire-1"></div>
          <div className="wizard-fire wizard-fire-2"></div>
          <div className="wizard-fire wizard-fire-3"></div>
        </>
      )}
      <div className="world-content">
        <h1 className="world-title">{worldContent.title}</h1>
        <p className="world-description">{worldContent.description}</p>
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default WorldView;

