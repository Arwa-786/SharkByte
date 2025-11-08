import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/NextPage.css';

const NextPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const genre = location.state?.genre || 'your selected genre';

  return (
    <div className="next-page-container">
      <h1 className="next-page-title">Welcome to the Next Chapter</h1>
      <p className="next-page-description">
        You've chosen to continue with {genre}. Your journey continues here...
      </p>
      <button className="back-button" onClick={() => navigate('/')}>
        Start Over
      </button>
    </div>
  );
};

export default NextPage;

