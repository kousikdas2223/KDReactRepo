import { EXAMPLES } from '../data.js';  
import TabButton from './TabButton.jsx';
import { useState } from 'react';
import Section from './Section.jsx';

export default function Example(){
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
    return(
        <Section title="Examples" id="examples">
          <menu>
            <TabButton isSelected={topic==='components'} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={topic==='jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={topic==='props'} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={topic==='state'} onClick={() => handleClick('state')}>State</TabButton>
          </menu>
          <div id='tab-content'>
            {tabContent}
          </div>
        </Section>
    );
}