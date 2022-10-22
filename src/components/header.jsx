export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text project-title'>
                <h1>
                <span id="one">Second </span> <br></br><span id="two">Self</span>
                </h1>
                <p id="three">The Second Self’s is an AI based model which is designed not only for
entertainment/recommendation purpose but also act as a mood lifter.</p> 
                <a
                  href=''
                  className='btn btn-custom btn-lg page-scroll '
                >
                  Start Chatting
                </a>
                <img src="https://pbs.twimg.com/media/E_5rETuVEAAlLsJ?format=jpg&name=medium" alt="mehul" className="chatbox"/>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}