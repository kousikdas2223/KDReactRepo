import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
function App() {
  const [topic, setTopic] = useState(''); // Initialize state to track the selected tab
  
  function handleClick(event) {
    setTopic(event); // Update the state with the clicked topic
    console.log('Hello World ' + event);
  }

  let tabContent = <p>Please click a tab</p>; // Default content for the tab

  if (topic){
    tabContent = (
      <div>
        <h3>{EXAMPLES[topic].title}</h3>
        <p>{EXAMPLES[topic].description}</p>
        <pre>
          <code>{EXAMPLES[topic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts {...concept}/>
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={topic==='components'} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={topic==='jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={topic==='props'} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={topic==='state'} onClick={() => handleClick('state')}>State</TabButton>
          </menu>
          <div id='tab-content'>
            {tabContent}
          </div>
        </section>
        {topic}
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
