import { useMemo, useState } from 'react'
import './App.css'

type GenreKey = 'fantasy' | 'sciFi' | 'thriller' | 'mystery' | 'miamiDade'

type GenreSpec = {
  displayName: string
  tagline: string
  description: string
  storyPrompt: string
}

const GENRES: Record<GenreKey, GenreSpec> = {
  fantasy: {
    displayName: 'Fantasy',
    tagline: 'Mist-shrouded kingdoms and arcane secrets.',
    description:
      'Immerse yourself in enchanted forests, ancient ruins, and spellbound skies as you craft a tale of magic and wonder.',
    storyPrompt:
      'Who holds the final spell that could save the realm, and what must your hero sacrifice to wield it?',
  },
  sciFi: {
    displayName: 'Sci-Fi',
    tagline: 'Starlit missions and daring discoveries.',
    description:
      'Chart a course through deep space, unearth alien technology, and test the limits of science and resolve.',
    storyPrompt:
      'A signal from an uncharted sector changes everything—what answers, or dangers, await your crew?',
  },
  thriller: {
    displayName: 'Thriller',
    tagline: 'High stakes, ticking clocks, restless nights.',
    description:
      'Step into a world of shadowed alleys, impossible choices, and secrets that refuse to stay buried.',
    storyPrompt:
      'A missing piece of evidence surfaces at the worst possible moment—who can your protagonist trust?',
  },
  mystery: {
    displayName: 'Mystery',
    tagline: 'Clues, misdirection, revelation.',
    description:
      'Gather your suspects, map the crime scene, and unweave the web of contradictions that hides the truth.',
    storyPrompt:
      'Each alibi crumbles under scrutiny, but one detail refuses to fit—what hidden pattern ties the case together?',
  },
  miamiDade: {
    displayName: 'Miami Dade College Course Pathway',
    tagline: 'Campus journeys and academic milestones.',
    description:
      'Explore vibrant student life, committed faculty, and the pivotal choices that shape a successful college pathway.',
    storyPrompt:
      'The semester’s biggest opportunity arrives alongside an unexpected challenge—how does your student stay on course?',
  },
}

type AppStep = 'choose' | 'story'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreKey | null>(null)
  const [step, setStep] = useState<AppStep>('choose')
  const [storyline, setStoryline] = useState('')

  const activeTheme = selectedGenre ?? 'default'

  const activeGenre = useMemo(
    () => (selectedGenre ? GENRES[selectedGenre] : null),
    [selectedGenre],
  )

  const handleSelectGenre = (genre: GenreKey) => {
    setSelectedGenre(genre)
    setStep('choose')
  }

  const handleContinue = () => {
    if (selectedGenre) {
      setStep('story')
    }
  }

  const handleReset = () => {
    setStep('choose')
  }

  return (
    <div className="app" data-theme={activeTheme}>
      <main className="surface">
        {step === 'choose' && (
          <section className="chooser">
            <header className="hero">
              <h1>Choose Your Story World</h1>
              <p>
                Select a genre to transform the scene. Preview the mood, then
                continue to start outlining your own storyline.
              </p>
            </header>
            <div className="genre-options">
              {(Object.entries(GENRES) as [GenreKey, GenreSpec][]).map(
                ([key, genre]) => (
                  <button
                    key={key}
                    type="button"
                    className={`genre-button${
                      selectedGenre === key ? ' active' : ''
                    }`}
                    onClick={() => handleSelectGenre(key)}
                    aria-pressed={selectedGenre === key}
                  >
                    <span className="genre-name">{genre.displayName}</span>
                    <span className="genre-tagline">{genre.tagline}</span>
                  </button>
                ),
              )}
            </div>
            {activeGenre && (
              <div className="genre-preview" role="status" aria-live="polite">
                <h2>{activeGenre.displayName} Atmosphere</h2>
                <p>{activeGenre.description}</p>
              </div>
            )}
            <div className="actions">
              <button
                type="button"
                className="primary"
                onClick={handleContinue}
                disabled={!selectedGenre}
              >
                Continue
              </button>
            </div>
          </section>
        )}

        {step === 'story' && activeGenre && (
          <section className="story-builder">
            <header>
              <p className="eyebrow">Storyline Workspace</p>
              <h1>{activeGenre.displayName}</h1>
              <p className="story-intro">{activeGenre.storyPrompt}</p>
            </header>
            <label htmlFor="storyline" className="textarea-label">
              Your storyline
            </label>
            <textarea
              id="storyline"
              value={storyline}
              onChange={(event) => setStoryline(event.target.value)}
              placeholder="Begin crafting your plot, scene, or character arc..."
            />
            <div className="story-actions">
              <button type="button" className="secondary" onClick={handleReset}>
                Choose a different genre
              </button>
              <span className="story-hint">
                {storyline.trim().length
                  ? `${storyline.trim().length} characters`
                  : 'Start typing to build your story.'}
              </span>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
